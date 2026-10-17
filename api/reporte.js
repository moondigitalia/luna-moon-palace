// Modo "Probar" (plantilla MOON): guarda y lee los reportes de prueba en Vercel Blob (una prueba = un archivo JSON).
// Guardar: POST /api/reporte (lo manda el chatbot desde CUALQUIER página, por eso acepta otros orígenes).
// Leer:    GET /api/reporte?k=CLAVE[&id=ID][&marca=donde]
import { put, list, get } from '@vercel/blob';
import { createHash } from 'node:crypto';

const HASH_CLAVE = '8fb66e9e1218ba0243ebef541651cca2bc71659188a91ead92e911519b740fd1'; // sha256 de la clave de lectura (la clave no vive en el código)
const MAX = 600 * 1024;
const conAcceso = async (fn) => { try { return await fn('private'); } catch (e) { if (/access/i.test(String(e && e.message))) return fn('public'); throw e; } };
const nombreToken = () => Object.keys(process.env).find((k) => k === 'BLOB_READ_WRITE_TOKEN') || Object.keys(process.env).find((k) => /READ_WRITE_TOKEN$/.test(k));
// cada proyecto con su propia llave (estándar MOON): si el proyecto tiene REPORTES_CLAVE en Vercel, solo vale esa
const clave = (req) => (process.env.REPORTES_CLAVE ? String(req.query.k || '') === process.env.REPORTES_CLAVE : createHash('sha256').update(String(req.query.k || '')).digest('hex') === HASH_CLAVE);

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  const nt = nombreToken();
  const cred = nt ? { token: process.env[nt] } : {};
  const oidc = req.headers['x-vercel-oidc-token'];
  if (!nt && oidc) cred.oidcToken = String(oidc);
  if (req.method === 'GET' && req.query.diag === '1') {
    if (!clave(req)) return res.status(401).json({ ok: false });
    return res.status(200).json({ ok: true, token: nt || null, oidc: !!oidc, variables: Object.keys(process.env).filter((x) => /BLOB|TOKEN|STORE/.test(x)), entorno: process.env.VERCEL_ENV || null });
  }
  if (!(nt || process.env.BLOB_STORE_ID)) return res.status(503).json({ ok: false, error: 'sin-base' });
  try {
    if (req.method === 'POST') {
      let cuerpo = req.body;
      if (Buffer.isBuffer(cuerpo)) cuerpo = cuerpo.toString('utf8');
      if (typeof cuerpo === 'string') { if (cuerpo.length > MAX) return res.status(413).end(); cuerpo = JSON.parse(cuerpo); }
      const id = String(cuerpo && cuerpo.id || ''), marca = String(cuerpo && cuerpo.marca || 'sin-marca');
      if (!/^[a-z0-9-]{6,48}$/.test(id) || !/^[a-z0-9-]{2,30}$/.test(marca)) return res.status(400).json({ ok: false, error: 'id' });
      const texto = JSON.stringify({ ...cuerpo, recibido: new Date().toISOString(), ip_pais: req.headers['x-vercel-ip-country'] || null });
      if (texto.length > MAX) return res.status(413).end();
      await conAcceso((access) => put(`pruebas/${marca}/${id}.json`, texto, { access, ...cred, contentType: 'application/json', addRandomSuffix: false, allowOverwrite: true }));
      return res.status(200).json({ ok: true });
    }
    if (req.method === 'GET') {
      if (!clave(req)) return res.status(401).json({ ok: false });
      const marca = String(req.query.marca || '');
      if (req.query.id) {
        const id = String(req.query.id).replace(/^.*\//, '');   // acepta el código corto (ab12-3), el id completo o marca/id
        const { blobs } = await list({ prefix: 'pruebas/' + (marca ? marca + '/' : ''), limit: 1000, ...cred });
        const b = blobs.find((x) => x.pathname.endsWith('/' + id + '.json') || x.pathname.endsWith('-' + id + '.json')); if (!b) return res.status(404).json({ ok: false });
        const ruta = b.pathname;
        const r = await conAcceso((access) => get(ruta, { access, ...cred, useCache: false }));
        if (!r || !r.stream) return res.status(404).json({ ok: false });
        res.setHeader('Content-Type', 'application/json'); return res.status(200).send(await new Response(r.stream).text());
      }
      const { blobs } = await list({ prefix: 'pruebas/' + (marca ? marca + '/' : ''), limit: 300, ...cred });
      blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
      return res.status(200).json({ ok: true, pruebas: blobs.map((b) => ({ id: b.pathname.replace(/^pruebas\/|\.json$/g, ''), fecha: b.uploadedAt, kb: Math.round(b.size / 1024) })) });
    }
    return res.status(405).end();
  } catch (e) {
    console.error('[reporte]', e);
    return res.status(500).json({ ok: false, error: String(e && e.message || e).slice(0, 200) });
  }
}
