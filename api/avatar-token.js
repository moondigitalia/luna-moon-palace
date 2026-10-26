// AVATAR EN VIVO (plantilla MOON, 26-oct-2026): firma un boleto corto de Spatius para que el celular dibuje al avatar.
// La llave (SPATIUS_API_KEY) vive SOLO en Vercel, en el proyecto de cada cliente (regla Moon: cada quien sus llaves);
// al navegador solo le llega el boleto (vale 15 minutos) y el App ID, que no es secreto.
// Solo firma para su propia página (mismo dominio): así nadie más gasta los minutos del cliente.
const REGION = process.env.SPATIUS_REGION || 'us-west';
const MINUTOS = 15;

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'solo POST' });
  const llave = process.env.SPATIUS_API_KEY, app = process.env.SPATIUS_APP_ID;
  if (!llave || !app) return res.status(503).json({ error: 'falta la llave de Spatius de este proyecto' });
  const origen = String(req.headers.origin || ''), host = String(req.headers.host || '');
  if (origen && host && new URL(origen).host !== host) return res.status(403).json({ error: 'otro sitio' });
  try {
    const r = await fetch(`https://console.${REGION}.spatius.ai/v1/console/session-tokens`, {
      method: 'POST', headers: { 'X-Api-Key': llave, 'Content-Type': 'application/json' },
      body: JSON.stringify({ expireAt: Math.floor(Date.now() / 1000) + MINUTOS * 60, modelVersion: '' }),
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || !j.sessionToken) return res.status(502).json({ error: 'Spatius no dio el boleto', estado: r.status });
    return res.status(200).json({ token: j.sessionToken, appId: app });
  } catch (e) {
    return res.status(502).json({ error: 'sin conexión con Spatius' });
  }
}
