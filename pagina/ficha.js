// =====================================================================
// FICHA DE PÁGINA — Luna · Moon Palace Cancún (demo MOON Digital, 13-oct-2026).
// Se arma con la plantilla de páginas (moondigitalia/plantilla-chatbot-moon), experiencia "luz":
//   node build.mjs /ruta/luna-moon-palace/pagina /ruta/luna-moon-palace/publico
// Todo lo de aquí sale del sitio oficial (cliente/conocimiento.md). Las tarjetas van en COLOR SÓLIDO (regla de Kid:
// en demos no se generan imágenes); cuando lleguen las fotos oficiales, solo se agrega `foto` a cada tarjeta.
// =====================================================================
export default {
  id: 'luna-moon-palace',
  experiencia: 'luz',
  agente: 'agent_3201m4rt7hdneet9c2kyxr1ez74n',
  asistente: 'Luna',
  marca: { nombre: 'Moon Palace Cancún', palabra: 'Moon Palace' },
  zonaHoraria: 'America/Cancun',
  horasDia: [7, 18],                     // de 7 de la mañana a 6 de la tarde, cielo de día; después, noche con estrellas
  idiomaPrincipal: 'es',
  silencioColgar: 40,
  avatar: { tipo: 'capas', base: 'img/avatar/base.webp' },   // pieza enchufable (demo barato del modo avatar; la versión final es Spatius + LiveKit): base + boca1..boca3 + parpadeo
  colores: {
    fondo: '#f2f4f7', boton: '#e6e9ee', icono: '#3a4658', tintaDia: '#0f2a5a',
    // medidos punto por punto de la referencia de Kid (17-oct-2026): cian puro → azul rey → marino casi negro
    dia: ['#88dffd', '#3ba8ec', '#1d6fd6', '#112a8a'],
    orilla: '#8f86e6',                                           // el toque lila de la orilla de abajo
    noche: ['#5f86d8', '#2a4fb0', '#16267a', '#0d1650'],        // la misma almohada, de noche
    orbe: ['#8ff0ff', '#00c2ee', '#0a63d8'],                    // resplandor cian de la referencia
    avatarVacio: '#c7d6ee',
    llamar: 'linear-gradient(160deg,#4a8cff 0%,#1f4fd0 100%)', colgar: 'linear-gradient(160deg,#ff9a62 0%,#ef4b4b 100%)',
  },

  // Tarjetas eco: suben cuando Luna nombra el lugar. `nombres` = otras formas en que se dice.
  tarjetas: [
    { id: 'trattoria', titulo: 'La Trattoria', nombres: ['trattoria'], tono: '#1f3a6e',
      datos: { es: ['Cena', 'Risotto de trufa', 'Chef Christian Ihuit', 'Reserva en la app'], en: ['Dinner', 'Truffle risotto', 'Chef Christian Ihuit', 'Book in the app'] },
      linea: { es: 'Italiana auténtica, de las más exclusivas del resort.', en: 'Authentic Italian, one of the resort’s most exclusive.' },
      pregunta: { es: 'Cuéntame más de La Trattoria', en: 'Tell me more about La Trattoria' } },
    { id: 'caporales', titulo: 'Los Caporales', nombres: ['caporales'], tono: '#9a4a2e',
      datos: { es: ['Antojitos y moles', 'Poc Chuc', 'Mezcalitas'], en: ['Antojitos and moles', 'Poc Chuc', 'Mezcalitas'] },
      linea: { es: 'Cocina mexicana auténtica, con mezcal y tequila.', en: 'Authentic Mexican cuisine, with mezcal and tequila.' },
      pregunta: { es: 'Cuéntame más de Los Caporales', en: 'Tell me more about Los Caporales' } },
    { id: 'momo', titulo: 'Momo', nombres: ['momo', 'teppanyaki'], tono: '#3b2b4f',
      datos: { es: ['Sushi y dim sum', 'Wagyu A4', 'Teppanyaki'], en: ['Sushi and dim sum', 'A4 Wagyu', 'Teppanyaki'] },
      linea: { es: 'Panasiático para compartir, con experiencia Teppanyaki.', en: 'Pan-Asian to share, with a Teppanyaki experience.' },
      pregunta: { es: 'Cuéntame más de Momo', en: 'Tell me more about Momo' } },
    { id: 'pier8', titulo: 'Pier 8', nombres: ['pier 8', 'pier eight'], tono: '#0f5a6b',
      datos: { es: ['Aguachile', 'Pulpo a la parrilla', 'Langosta viva: 2.80 pesos el gramo'], en: ['Aguachile', 'Grilled octopus', 'Live lobster: 2.80 pesos per gram'] },
      linea: { es: 'Mariscos gourmet, elegante y con vista.', en: 'Gourmet seafood, elegant and with a view.' },
      pregunta: { es: 'Cuéntame más de Pier 8', en: 'Tell me more about Pier 8' } },
    { id: 'asadero', titulo: 'Palapa Asadero', nombres: ['asadero', 'porterhouse'], tono: '#7a4b23',
      datos: { es: ['Porterhouse 31 oz: 2,420 pesos', 'Picanha', 'Frente al mar'], en: ['31 oz Porterhouse: 2,420 pesos', 'Picanha', 'Beachfront'] },
      linea: { es: 'Parrilla junto a la playa: cortes y botanas.', en: 'Beachside grill: steaks and bites.' },
      pregunta: { es: 'Cuéntame más de Palapa Asadero', en: 'Tell me more about Palapa Asadero' } },
    { id: 'agra', titulo: 'Agra', nombres: ['agra'], tono: '#8a3b1f',
      datos: { es: ['Tandoor', 'Biryani', 'Muchas opciones vegetarianas', 'Chef Juan Aparicio'], en: ['Tandoor', 'Biryani', 'Many vegetarian options', 'Chef Juan Aparicio'] },
      linea: { es: 'Cocina de la India, del tandoor a los curries.', en: 'Indian cuisine, from the tandoor to curries.' },
      pregunta: { es: 'Cuéntame más de Agra', en: 'Tell me more about Agra' } },
    { id: 'spa', titulo: 'O Spa', nombres: ['o spa', 'spa', 'masaje', 'massage'], tono: '#2f5e55',
      datos: { es: ['Masaje de 80 minutos', 'Hidroterapia', 'Reserva con el concierge'], en: ['80-minute massage', 'Hydrotherapy', 'Book with the concierge'] },
      linea: { es: 'Masajes, faciales e hidroterapia.', en: 'Massages, facials and hydrotherapy.' },
      pregunta: { es: 'Cuéntame más del spa', en: 'Tell me more about the spa' } },
    { id: 'albercas', titulo: { es: 'Albercas y playa', en: 'Pools & beach' }, nombres: ['alberca', 'albercas', 'pool', 'pools', 'playa'], tono: '#1b6f8a',
      datos: { es: ['7 am a 7 pm', '28 a 30 °C en invierno', 'Albercas para niños'], en: ['7 am to 7 pm', '28–30 °C in winter', 'Kids pools'] },
      linea: { es: 'De 7 de la mañana a 7 de la noche, climatizadas en invierno.', en: 'From 7 am to 7 pm, heated in winter.' },
      pregunta: { es: '¿Qué más hay en las albercas?', en: 'What else is there at the pools?' } },
    { id: 'playroom', titulo: 'The Playroom', nombres: ['playroom', 'club de ninos', 'kids club'], tono: '#6b4fa0',
      datos: { es: ['Desde 4 años', 'Mini cine', 'Draw Alive', 'Minigolf en The Dreamery'], en: ['From age 4', 'Mini cinema', 'Draw Alive', 'Mini golf at The Dreamery'] },
      linea: { es: 'Club de niños desde los 4 años, con mini cine.', en: 'Kids club from age 4, with a mini cinema.' },
      pregunta: { es: '¿Qué hay para niños?', en: 'What is there for kids?' } },
    { id: 'golf', titulo: { es: 'Golf Jack Nicklaus', en: 'Jack Nicklaus Golf' }, nombres: ['golf', 'nicklaus'], tono: '#2e5b34',
      datos: { es: ['27 hoyos', 'Golf Academy', 'Paquete Stay & Play'], en: ['27 holes', 'Golf Academy', 'Stay & Play package'] },
      linea: { es: 'Campo Signature de 27 hoyos y academia.', en: '27-hole Signature course and academy.' },
      pregunta: { es: 'Cuéntame del golf', en: 'Tell me about golf' } },
    { id: 'skybar', titulo: 'Sky Bar', nombres: ['sky bar', 'noir'], tono: '#26244a',
      datos: { es: ['Sky Bar', 'Noir', 'The Pub', 'Solo adultos'], en: ['Sky Bar', 'Noir', 'The Pub', 'Adults only'] },
      linea: { es: 'Coctelería premium, solo adultos.', en: 'Premium cocktails, adults only.' },
      pregunta: { es: '¿Qué bares hay?', en: 'What bars are there?' } },
    { id: 'cocobongo', titulo: 'Coco Bongo', nombres: ['coco bongo', 'cocobongo'], tono: '#5a1f4d',
      datos: { es: ['Desde 70 dólares', 'Mayores de 18', '9 pm a 3 am', 'Taxi desde recepción'], en: ['From 70 dollars', '18 and over', '9 pm to 3 am', 'Taxi from reception'] },
      linea: { es: 'El show nocturno de la Zona Hotelera. Mayores de 18.', en: 'The Hotel Zone’s night show. 18 and over.' },
      pregunta: { es: '¿Cuánto cuesta Coco Bongo?', en: 'How much is Coco Bongo?' } },
    { id: 'historia', titulo: { es: 'Desde 1984', en: 'Since 1984' }, nombres: ['1984', 'jose chapur', 'chapur', 'beach palace'], tono: '#102137',
      datos: { es: ['1984: Beach Palace', '1996: Moon Palace', '100% familiar', 'Más de 14,000 colaboradores'], en: ['1984: Beach Palace', '1996: Moon Palace', '100% family-owned', '14,000+ team members'] },
      linea: { es: 'Una familia, un sueño en Cancún y una luna que nació en 1996.', en: 'A family, a dream in Cancun, and a moon born in 1996.' },
      pregunta: { es: 'Cuéntame la historia de Moon Palace', en: 'Tell me the story of Moon Palace' } },
    { id: 'salud', titulo: { es: 'Salud', en: 'Health' }, nombres: ['galenia', 'hospiten', 'amerimed', 'hospital'], tono: '#2b4f73',
      datos: { es: ['Médico 24 h en el resort', 'Galenia 998 891 5200', 'Emergencias: 911'], en: ['24h doctor on site', 'Galenia 998 891 5200', 'Emergency: 911'] },
      linea: { es: 'Médico 24 horas en el resort y hospitales con urgencias en Cancún.', en: '24-hour doctor on site and ER hospitals in Cancun.' } },
  ],
  textos: {
    es: {
      bienvenida: 'Bienvenido a Moon Palace Cancún. Soy Luna, su concierge. ¿En qué puedo servirle?',
      bienvenidaNombre: (n) => `Qué gusto verle de nuevo, ${n}. ¿En qué puedo servirle?`,
      hola: 'Bienvenido a Moon Palace Cancún. Soy Luna, su concierge virtual con inteligencia artificial. ¿En qué puedo servirle hoy?',
      holaVoz: 'Bienvenido a Moon Palace Cancún. Soy Luna, su concierge. ¿Con quién tengo el gusto?',
      holaNombre: (n) => `${n}, qué gusto escucharle. ¿En qué puedo servirle?`,
      sugerencias: ['Una cena romántica', '¿Qué hay para niños?', 'Cuéntame su historia'],
      conectando: 'Conectando…', avatar: 'Hablar con el avatar', verLuz: 'Ver la luz',
      escribe: 'Escriba su pregunta', enviar: 'Enviar', llamar: 'Llamar a Luna', colgar: 'Terminar llamada', idioma: 'Cambiar idioma',
      micApagar: 'Silenciar micrófono', micPrender: 'Activar micrófono', cerrar: 'Cerrar', masDe: 'Saber más', probar: 'Probar', probarListo: 'Reporte enviado',
      error: 'Se perdió la señal un momento. ¿Me lo repite, por favor?', micNo: 'Para hablar con Luna se necesita el micrófono. Mientras, aquí puede escribirle.',
    },
    en: {
      bienvenida: 'Welcome to Moon Palace Cancún. I’m Luna, your concierge. How may I help you?',
      bienvenidaNombre: (n) => `Lovely to see you again, ${n}. How may I help you?`,
      hola: 'Welcome to Moon Palace Cancún. I’m Luna, your AI virtual concierge. How may I help you today?',
      holaVoz: 'Welcome to Moon Palace Cancún. I’m Luna, your concierge. Who do I have the pleasure of speaking with?',
      holaNombre: (n) => `${n}, lovely to hear from you. How may I help?`,
      sugerencias: ['A romantic dinner', 'What is there for kids?', 'Tell me your story'],
      conectando: 'Connecting…', avatar: 'Talk to the avatar', verLuz: 'Show the light',
      escribe: 'Type your question', enviar: 'Send', llamar: 'Call Luna', colgar: 'End call', idioma: 'Change language',
      micApagar: 'Mute microphone', micPrender: 'Unmute microphone', cerrar: 'Close', masDe: 'Learn more', probar: 'Test', probarListo: 'Report sent',
      error: 'The signal dropped for a moment. Could you say that again, please?', micNo: 'Luna needs your microphone to talk. Meanwhile, you can type here.',
    },
  },
};
