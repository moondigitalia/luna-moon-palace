// CANDADO "PLANTILLA AL DÍA" (plantilla MOON, 27-oct-2026). Para los clientes con su propio repositorio, que suben su
// página ya armada (publico/) porque la plantilla es privada y Vercel no la puede bajar.
// Pasó (análisis de Luna, 27-oct-2026): la página se arma a mano en la máquina; si la plantilla cambió y nadie volvió a
// armar, o se armó con una copia vieja o con cambios sin subir, el cliente publica algo que ningún juez revisó.
// Antes de subir (gancho pre-push del cliente) revisa:
//   1. que la plantilla local esté IGUAL a la publicada (origin/main) y sin cambios sin subir: lo publicado ya pasó los jueces;
//   2. que publico/ sea EXACTAMENTE lo que sale de armar la ficha con esa plantilla (se arma de nuevo y se compara).
// Uso (desde el repo del cliente): node herramientas/candado-plantilla.mjs [carpeta-ficha=pagina] [salida=publico]
import { execSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync, mkdtempSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
const FICHA = resolve(process.argv[2] || 'pagina'), SALIDA = resolve(process.argv[3] || 'publico');
const TPL = resolve(process.env.PLANTILLA || '../plantilla-chatbot-moon');
const falla = (m) => { console.error('✘ CANDADO PLANTILLA: ' + m + '\n  No se sube: la página publicada se queda como estaba.'); process.exit(1); };
if (!existsSync(join(TPL, 'build.mjs'))) falla(`no encuentro la plantilla en ${TPL} (variable PLANTILLA para otra ruta)`);
const git = (c) => execSync('git ' + c, { cwd: TPL, stdio: ['ignore', 'pipe', 'pipe'] }).toString().trim();
try { git('fetch -q origin main'); } catch (e) { falla('no pude revisar la plantilla publicada (sin conexión a GitHub)'); }
if (git('rev-parse HEAD') !== git('rev-parse origin/main')) falla('la plantilla local no es la publicada: en la plantilla, git pull --rebase (y sube lo tuyo si es tuyo)');
if (git('status --porcelain -- motor build.mjs package.json package-lock.json herramientas')) falla('la plantilla tiene cambios sin subir: súbelos (pasan por sus jueces) o quítalos');
const tmp = mkdtempSync(join(tmpdir(), 'armado-'));
try {
  execSync(`node build.mjs "${FICHA}" "${tmp}"`, { cwd: TPL, stdio: ['ignore', 'ignore', 'pipe'] });
  const lista = (d, b = d) => readdirSync(d).flatMap((f) => { const r = join(d, f); return statSync(r).isDirectory() ? lista(r, b) : [r.slice(b.length + 1)]; }).filter((f) => f !== 'build-log.txt').sort();
  const a = lista(tmp), b = existsSync(SALIDA) ? lista(SALIDA) : [];
  const faltan = a.filter((f) => !b.includes(f)), sobran = b.filter((f) => !a.includes(f));
  const distintos = a.filter((f) => b.includes(f) && !readFileSync(join(tmp, f)).equals(readFileSync(join(SALIDA, f))));
  if (faltan.length || sobran.length || distintos.length)
    falla(`publico/ no es lo que sale de la plantilla publicada (${[...distintos, ...faltan, ...sobran].slice(0, 4).join(', ')}). ` +
      `Ármala de nuevo: node ${TPL}/build.mjs "${FICHA}" "${SALIDA}" y vuelve a subir`);
} finally { rmSync(tmp, { recursive: true, force: true }); }
console.log('✔ candado-plantilla: la página está armada con la plantilla publicada ' + git('rev-parse --short HEAD'));
