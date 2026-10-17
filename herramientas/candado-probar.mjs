// CANDADO "Probar" (plantilla MOON, 17-oct-2026). Corre DENTRO de la construcción de Vercel (buildCommand), antes de publicar.
// Si el proyecto no tiene su base de reportes funcionando, la construcción falla y Vercel deja la versión anterior en el link.
// Pasó con Luna: el proyecto nació sin base, el botón Probar no guardaba nada y Kid tuvo que contar las fallas a mano.
// Revisa con una escritura REAL (un solo archivo que se sobrescribe, fuera de la lista de pruebas):
//   1. que exista el acceso a la base de Vercel Blob: su llave (BLOB_READ_WRITE_TOKEN u otra *_READ_WRITE_TOKEN)
//      o la base conectada sin llave escrita (BLOB_STORE_ID + la credencial que Vercel da en cada construcción)
//   2. que se pueda escribir en ella de verdad
//   3. con --llave-propia (todo cliente con su propio proyecto): que tenga SU llave de lectura (REPORTES_CLAVE),
//      nunca la de la plantilla (estándar MOON: cada proyecto con sus propias llaves)
//   4. que la página no salga con datos "PENDIENTE:" sin llenar (los deja herramientas/nuevo-cliente.mjs)
// Uso (vercel.json): "buildCommand": "node herramientas/candado-probar.mjs <marca> [--llave-propia]"
// Fuera de Vercel (en la máquina) no hace nada: ahí no existen las llaves.
const marca = process.argv[2] || 'sin-marca';
const propia = process.argv.includes('--llave-propia');
if (!process.env.VERCEL) { console.log('candado-probar: fuera de Vercel, no aplica'); process.exit(0); }
const falla = (m) => { console.error(`✘ CANDADO PROBAR (${marca}): ${m}\n  No se publica: el link se queda con la versión anterior.`); process.exit(1); };
// nada sale con datos sin llenar: lo que dice "PENDIENTE:" en la ficha viene del formulario de alta del cliente
{ const { readdirSync, readFileSync, statSync } = await import('node:fs');
  const todos = (d) => { try { return readdirSync(d).flatMap((f) => { const r = d + '/' + f; return statSync(r).isDirectory() ? todos(r) : [r]; }); } catch (e) { return []; } };
  const conHueco = todos('publico').filter((f) => /\.(js|html)$/.test(f) && readFileSync(f, 'utf8').includes('PENDIENTE:'));
  if (conHueco.length) falla('la página trae datos "PENDIENTE:" sin llenar (' + conHueco.join(', ') + '). Se llenan con el formulario de alta del cliente.'); }
const nt = Object.keys(process.env).find((k) => k === 'BLOB_READ_WRITE_TOKEN') || Object.keys(process.env).find((k) => /READ_WRITE_TOKEN$/.test(k));
const oidc = !nt && process.env.BLOB_STORE_ID && process.env.VERCEL_OIDC_TOKEN;
if (!nt && !oidc) falla('el proyecto no tiene base de reportes (Vercel Blob). Crearla y conectarla al proyecto.');
const cred = nt ? { token: process.env[nt] } : { oidcToken: process.env.VERCEL_OIDC_TOKEN };
if (propia && !process.env.REPORTES_CLAVE) falla('falta SU llave de lectura de reportes (variable REPORTES_CLAVE en Vercel).');
let put;
try { ({ put } = await import('@vercel/blob')); } catch (e) { falla('falta la librería @vercel/blob en package.json.'); }
const texto = JSON.stringify({ candado: 'probar', marca, fecha: new Date().toISOString(), entorno: process.env.VERCEL_ENV || null });
const escribir = (access) => put(`candado/${marca}.json`, texto, { access, ...cred, contentType: 'application/json', addRandomSuffix: false, allowOverwrite: true });
try { try { await escribir('private'); } catch (e) { if (/access/i.test(String(e && e.message))) await escribir('public'); else throw e; } }
catch (e) { falla('la base de reportes no deja escribir: ' + String(e && e.message || e).slice(0, 160)); }
console.log(`✔ candado-probar (${marca}): la base de reportes escribe${propia ? ' y el proyecto tiene su propia llave' : ''}`);
