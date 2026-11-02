/*
  Asistente de la carta. Funciona entero en el navegador: no usa IA, claves ni servidor.
  Lee los platos y precios de "carta" (script.js), así que cambiar un precio allí lo cambia aquí.
*/
const TELEFONO_BAR = '828 98 07 47';
const WHATSAPP_BAR = '698 238 816';

const textosAsistente = {
  es: { boton:'Preguntar al asistente', titulo:'Asistente del bar', hola:'Hola. Pregúntame por un plato, los precios o el horario.', campo:'Escribe tu pregunta', enviar:'Enviar', cerrar:'Cerrar', aviso:'Respuestas automáticas. Para alergias, pregunta siempre al personal.',
    sugerencias:['¿Cuánto cuesta el plato cubano?','¿Qué pizzas tenéis?','¿Abrís hoy?','¿Dónde estáis?'],
    alergia:`No puedo confirmar alérgenos ni ingredientes. Pregunta al personal o llama al ${TELEFONO_BAR} antes de pedir.`, nose:`No tengo ese dato. Pregunta al personal, llama al ${TELEFONO_BAR} o escribe por WhatsApp al ${WHATSAPP_BAR}.`,
    horario:'Abrimos de martes a domingo, de 10:00 a 23:00. Los lunes cerramos.', abierto:'Sí, ahora estamos abiertos hasta las 23:00.', cerrado:'Ahora estamos cerrados.', hoyCerrado:'Hoy lunes cerramos.', direccion:'Estamos en Av. de Canarias, 450, 35110 Vecindario.', telefono:`Puedes llamar al ${TELEFONO_BAR} o escribir por WhatsApp al ${WHATSAPP_BAR}.`, servicios:'Sí, tenemos terraza, wifi gratis y comida para llevar.', recomienda:'Nuestra especialidad es el plato cubano: arroz con frijoles, acompañamientos y carne.', hola2:'Hola. ¿En qué te ayudo?', gracias:'De nada. ¡Que aproveche!', mas:'y {n} más en la carta', racion:'Ración', desde:'Desde' },
  en: { boton:'Ask the assistant', titulo:'Bar assistant', hola:'Hello. Ask me about a dish, prices or opening hours.', campo:'Type your question', enviar:'Send', cerrar:'Close', aviso:'Automatic answers. For allergies, always ask the staff.',
    sugerencias:['How much is the Cuban platter?','What pizzas do you have?','Are you open today?','Where are you?'],
    alergia:`I can't confirm allergens or ingredients. Please ask the staff or call ${TELEFONO_BAR} before ordering.`, nose:`I don't have that information. Ask the staff, call ${TELEFONO_BAR} or message us on WhatsApp at ${WHATSAPP_BAR}.`,
    horario:'We open Tuesday to Sunday, 10:00 to 23:00. We are closed on Mondays.', abierto:'Yes, we are open now until 23:00.', cerrado:'We are closed right now.', hoyCerrado:'We are closed today, Monday.', direccion:'We are at Av. de Canarias, 450, 35110 Vecindario.', telefono:`Call ${TELEFONO_BAR} or message us on WhatsApp at ${WHATSAPP_BAR}.`, servicios:'Yes, we have a terrace, free wifi and takeaway.', recomienda:'Our speciality is the Cuban platter: rice with beans, sides and meat.', hola2:'Hello. How can I help?', gracias:"You're welcome. Enjoy!", mas:'and {n} more on the menu', racion:'Full', desde:'From' },
  de: { boton:'Assistent fragen', titulo:'Bar-Assistent', hola:'Hallo. Fragen Sie mich nach Gerichten, Preisen oder Öffnungszeiten.', campo:'Ihre Frage', enviar:'Senden', cerrar:'Schließen', aviso:'Automatische Antworten. Bei Allergien fragen Sie immer das Personal.',
    sugerencias:['Was kostet der kubanische Teller?','Welche Pizzas gibt es?','Haben Sie heute geöffnet?','Wo sind Sie?'],
    alergia:`Allergene und Zutaten kann ich nicht bestätigen. Bitte fragen Sie vor der Bestellung das Personal oder rufen Sie ${TELEFONO_BAR} an.`, nose:`Diese Information habe ich nicht. Fragen Sie das Personal, rufen Sie ${TELEFONO_BAR} an oder schreiben Sie per WhatsApp an ${WHATSAPP_BAR}.`,
    horario:'Geöffnet Dienstag bis Sonntag, 10:00 bis 23:00. Montags geschlossen.', abierto:'Ja, wir haben jetzt bis 23:00 geöffnet.', cerrado:'Wir haben gerade geschlossen.', hoyCerrado:'Heute, am Montag, ist geschlossen.', direccion:'Sie finden uns in der Av. de Canarias, 450, 35110 Vecindario.', telefono:`Rufen Sie ${TELEFONO_BAR} an oder schreiben Sie per WhatsApp an ${WHATSAPP_BAR}.`, servicios:'Ja, wir haben eine Terrasse, kostenloses WLAN und Essen zum Mitnehmen.', recomienda:'Unsere Spezialität ist der kubanische Teller: Reis mit Bohnen, Beilagen und Fleisch.', hola2:'Hallo. Wie kann ich helfen?', gracias:'Gern geschehen. Guten Appetit!', mas:'und {n} weitere auf der Karte', racion:'Portion', desde:'Ab' },
  nl: { boton:'Vraag het de assistent', titulo:'Bar-assistent', hola:'Hallo. Vraag me naar een gerecht, de prijzen of de openingstijden.', campo:'Typ uw vraag', enviar:'Versturen', cerrar:'Sluiten', aviso:'Automatische antwoorden. Vraag bij allergieën altijd het personeel.',
    sugerencias:['Wat kost de Cubaanse schotel?',"Welke pizza's hebben jullie?",'Zijn jullie vandaag open?','Waar zijn jullie?'],
    alergia:`Ik kan allergenen en ingrediënten niet bevestigen. Vraag het personeel of bel ${TELEFONO_BAR} voordat u bestelt.`, nose:`Die informatie heb ik niet. Vraag het personeel, bel ${TELEFONO_BAR} of stuur een WhatsApp naar ${WHATSAPP_BAR}.`,
    horario:'Open van dinsdag tot zondag, 10:00 tot 23:00. Maandag gesloten.', abierto:'Ja, we zijn nu open tot 23:00.', cerrado:'We zijn nu gesloten.', hoyCerrado:'Vandaag, maandag, zijn we gesloten.', direccion:'U vindt ons op Av. de Canarias, 450, 35110 Vecindario.', telefono:`Bel ${TELEFONO_BAR} of stuur een WhatsApp naar ${WHATSAPP_BAR}.`, servicios:'Ja, we hebben een terras, gratis wifi en afhaalmaaltijden.', recomienda:'Onze specialiteit is de Cubaanse schotel: rijst met bonen, bijgerechten en vlees.', hola2:'Hallo. Waarmee kan ik helpen?', gracias:'Graag gedaan. Eet smakelijk!', mas:'en nog {n} op de kaart', racion:'Portie', desde:'Vanaf' },
  fr: { boton:"Demander à l'assistant", titulo:'Assistant du bar', hola:'Bonjour. Posez-moi vos questions sur un plat, les prix ou les horaires.', campo:'Votre question', enviar:'Envoyer', cerrar:'Fermer', aviso:"Réponses automatiques. En cas d'allergie, demandez toujours au personnel.",
    sugerencias:["Combien coûte l'assiette cubaine ?",'Quelles pizzas avez-vous ?',"Êtes-vous ouverts aujourd'hui ?",'Où êtes-vous ?'],
    alergia:`Je ne peux pas confirmer les allergènes ni les ingrédients. Demandez au personnel ou appelez le ${TELEFONO_BAR} avant de commander.`, nose:`Je n'ai pas cette information. Demandez au personnel, appelez le ${TELEFONO_BAR} ou écrivez sur WhatsApp au ${WHATSAPP_BAR}.`,
    horario:'Ouvert du mardi au dimanche, de 10:00 à 23:00. Fermé le lundi.', abierto:"Oui, nous sommes ouverts jusqu'à 23:00.", cerrado:'Nous sommes fermés pour le moment.', hoyCerrado:"Nous sommes fermés aujourd'hui, lundi.", direccion:'Nous sommes Av. de Canarias, 450, 35110 Vecindario.', telefono:`Appelez le ${TELEFONO_BAR} ou écrivez sur WhatsApp au ${WHATSAPP_BAR}.`, servicios:'Oui, nous avons une terrasse, le wifi gratuit et la vente à emporter.', recomienda:'Notre spécialité est le plat cubain : riz aux haricots, accompagnements et viande.', hola2:'Bonjour. Comment puis-je vous aider ?', gracias:'Avec plaisir. Bon appétit !', mas:'et {n} autres sur la carte', racion:'Portion', desde:'Dès' },
  pt: { boton:'Perguntar ao assistente', titulo:'Assistente do bar', hola:'Olá. Pergunte-me sobre um prato, os preços ou o horário.', campo:'Escreva a sua pergunta', enviar:'Enviar', cerrar:'Fechar', aviso:'Respostas automáticas. Em caso de alergias, pergunte sempre ao pessoal.',
    sugerencias:['Quanto custa o prato cubano?','Que pizzas têm?','Abrem hoje?','Onde ficam?'],
    alergia:`Não posso confirmar alergénios nem ingredientes. Pergunte ao pessoal ou ligue para ${TELEFONO_BAR} antes de pedir.`, nose:`Não tenho essa informação. Pergunte ao pessoal, ligue para ${TELEFONO_BAR} ou escreva por WhatsApp para ${WHATSAPP_BAR}.`,
    horario:'Abrimos de terça a domingo, das 10:00 às 23:00. Fechamos à segunda-feira.', abierto:'Sim, estamos abertos até às 23:00.', cerrado:'Agora estamos fechados.', hoyCerrado:'Hoje, segunda-feira, estamos fechados.', direccion:'Estamos na Av. de Canarias, 450, 35110 Vecindario.', telefono:`Ligue para ${TELEFONO_BAR} ou escreva por WhatsApp para ${WHATSAPP_BAR}.`, servicios:'Sim, temos esplanada, wifi gratuito e comida para levar.', recomienda:'A nossa especialidade é o prato cubano: arroz com feijão, acompanhamentos e carne.', hola2:'Olá. Como posso ajudar?', gracias:'De nada. Bom apetite!', mas:'e mais {n} na ementa', racion:'Dose', desde:'Desde' }
};

(function iniciarAsistente() {
  const IDIOMAS = ['es', 'en', 'de', 'nl', 'fr', 'pt'];
  const idioma = () => textosAsistente[idiomaActual] ? idiomaActual : 'es';
  const textos = () => textosAsistente[idioma()];
  const limpiar = t => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const raiz = p => p.length > 3 ? p.replace(/(es|s)$/, '') : p;
  const palabras = t => limpiar(t).split(' ').filter(Boolean);

  // Palabras que no ayudan a identificar un plato.
  const VACIAS = new Set(palabras(`que cual cuales cuanto cuanta cuesta cuestan vale valen precio precios tiene tienen teneis tenes hay dame quiero una uno unos unas las los del por para con sin como esta este esto
    how much what which price prices cost costs does have you the for and with are
    was kostet kosten welche gibt haben sie ihr der die das ein eine fur und mit preis
    wat kost welke hebben jullie een van voor met prijs
    combien coute coutent quel quelle quels quelles avez vous prix une des les pour avec
    quanto custa custam quais tem qual preco precos uma com`));

  const NOMBRE_CATEGORIA = {
    Entrantes:'entrante starter', 'Platos combinados':'combinado', Hamburguesas:'hamburguesa burger hamburger hamburguer', Sandwich:'sandwich sandes sanduiche',
    Bocadillos:'bocadillo bocata roll', Pizzas:'pizza', Postres:'postre dessert sobremesa helado', 'Bebidas frías':'bebida refresco drink getrank drank boisson soda',
    Cafés:'cafe coffee kaffee koffie', Cervezas:'cerveza beer bier biere cerveja', Copas:'copa ron whisky ginebra vodka gin rum licor'
  };

  // Índice con cada producto en los seis idiomas, para entender la pregunta aunque venga en otro idioma.
  const productos = [], categorias = [];
  Object.keys(carta).forEach(categoria => {
    const claves = new Set(palabras(NOMBRE_CATEGORIA[categoria] || '').map(raiz));
    IDIOMAS.forEach(l => (etiquetasMetaMenu[l]?.[categoria] || []).forEach(n => palabras(n).filter(p => p.length > 3).forEach(p => claves.add(raiz(p)))));
    const lista = carta[categoria].items.map(([nombre, precio], i) => {
      const nombres = IDIOMAS.map(l => l === 'es' ? nombre : traduccionesElementosMenu[l]?.[categoria]?.[i] || traducirTextoMenu(nombre, l));
      const frases = nombres.map(n => limpiar(n.split(' — ')[0]));
      const producto = { categoria, indice: i, nombres, frases, precio, raices: new Set(nombres.flatMap(n => palabras(n)).map(raiz)) };
      productos.push(producto);
      return producto;
    });
    categorias.push({ categoria, claves, lista });
  });

  function precioVisible(precio) {
    const t = textos();
    return precio.replace('Ración', t.racion).replace('Desde', t.desde);
  }
  const lineaProducto = p => `${p.nombres[IDIOMAS.indexOf(idioma())].split(' — ')[0]}: ${precioVisible(p.precio)}`;
  function listar(lista, maximo = 8) {
    const lineas = lista.slice(0, maximo).map(lineaProducto);
    if (lista.length > maximo) lineas.push(textos().mas.replace('{n}', lista.length - maximo));
    return lineas.join('\n');
  }

  function estadoAhora(t) {
    const partes = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Atlantic/Canary', weekday: 'short', hour: 'numeric', hour12: false }).formatToParts(new Date()).map(x => [x.type, x.value]));
    const hora = Number(partes.hour) % 24;
    if (partes.weekday === 'Mon') return `${t.hoyCerrado} ${t.horario}`;
    return hora >= 10 && hora < 23 ? t.abierto : `${t.cerrado} ${t.horario}`;
  }

  function responder(pregunta) {
    const t = textos();
    const q = limpiar(pregunta);
    if (/alerg|allerg|gluten|lactos|laktos|celiac|zoliak|intoler|cacahu|peanut|erdnuss|arachide|amendoim|\bnuez\b|nueces|nozes|noten|\bnuts?\b|nusse|marisco|shellfish|meeresfr|crustac|huevo|\beggs?\b|\beier?\b|\boeufs?\b|vegan|vegetarian|vegetarisch|vegetarier|halal|kosher/.test(q)) return t.alergia;

    const exactos = productos.filter(p => p.frases.some(f => f.length > 3 && (' ' + q + ' ').includes(' ' + f + ' ')));
    const masLargo = Math.max(0, ...exactos.map(p => Math.max(...p.frases.map(f => q.includes(f) ? f.length : 0))));
    const mejores = exactos.filter(p => p.frases.some(f => q.includes(f) && f.length === masLargo));
    if (mejores.length && masLargo >= 8) return listar(mejores);

    if (/\b(hoy|ahora|today|now|heute|jetzt|vandaag|nu|aujourd hui|maintenant|hoje|agora)\b/.test(q) && /abr|abiert|open|geoffnet|ouvert|cierr|cerr|closed/.test(q)) return estadoAhora(t);
    if (/horari|\babr[eiaí]|abiert|cierr|cerrai|\bhours?\b|\bopen|closed|offnungszeit|geoffnet|geschlossen|openingstijd|gesloten|horaire|ouvert|ferme|fecha|\baber/.test(q)) return t.horario;
    if (/donde|direccion|ubicacion|llegar|\bwhere\b|address|location|\bwo\b|adresse|\bwaar\b|adres|\bou\b|\bonde\b|morada|localiza/.test(q)) return t.direccion;
    if (/telefono|llamar|whatsapp|\bphone\b|\bcall\b|contact|telefon|anrufen|bellen|telephone|appeler|ligar/.test(q)) return t.telefono;
    if (/terraz|terrace|terrasse|terras|esplanada|wifi|wlan|llevar|takeaway|take away|mitnehmen|afhal|emporter|levar/.test(q)) return t.servicios;
    if (/recom|especial|speciali|empfehl|empfiehl|raad|aanbevel|conseill|sugier|suggest/.test(q)) {
      const cubano = productos.find(p => p.nombres[0] === 'Plato cubano');
      return `${t.recomienda}\n${lineaProducto(cubano)}`;
    }

    const usadas = palabras(pregunta).filter(p => p.length > 2 && !VACIAS.has(p)).map(raiz);
    const categoria = categorias.find(c => usadas.some(p => c.claves.has(p)));
    const puntuados = productos.map(p => [p, usadas.filter(u => p.raices.has(u)).length]).filter(([, n]) => n > 0);
    const maximo = Math.max(0, ...puntuados.map(([, n]) => n));
    if (categoria) {
      const concretas = usadas.filter(u => !categoria.claves.has(u));
      const dentro = categoria.lista.filter(p => concretas.some(u => p.raices.has(u)));
      if (dentro.length) return listar(dentro, 6);
      if (maximo < 2) return listar(categoria.lista);
    }
    if (maximo) return listar(puntuados.filter(([, n]) => n === maximo).map(([p]) => p), 6);

    if (/gracias|thank|danke|dank|merci|obrigad/.test(q)) return t.gracias;
    if (/^(hola|hello|hi|hallo|hoi|bonjour|salut|ola|buenas)\b/.test(q)) return t.hola2;
    return t.nose;
  }

  const conversacion = [];
  const boton = document.createElement('button');
  boton.type = 'button';
  boton.className = 'asistente-boton';
  boton.setAttribute('aria-expanded', 'false');
  boton.textContent = '🍽️';

  const panel = document.createElement('section');
  panel.className = 'asistente-panel';
  panel.hidden = true;
  panel.innerHTML = `
    <header class="asistente-cabecera"><strong></strong><button type="button" class="asistente-cerrar">×</button></header>
    <div class="asistente-chat" aria-live="polite"></div>
    <div class="asistente-sugerencias"></div>
    <p class="asistente-aviso"></p>
    <form class="asistente-formulario"><input maxlength="200" autocomplete="off"><button type="submit"></button></form>`;
  document.body.append(boton, panel);

  const chat = panel.querySelector('.asistente-chat');
  const sugerencias = panel.querySelector('.asistente-sugerencias');
  const formulario = panel.querySelector('form');
  const campo = formulario.querySelector('input');
  const enviar = formulario.querySelector('button');

  function burbuja(clase, texto) {
    const elemento = document.createElement('p');
    elemento.className = 'asistente-mensaje ' + clase;
    elemento.textContent = texto;
    chat.append(elemento);
    chat.scrollTop = chat.scrollHeight;
  }

  function preguntar(pregunta) {
    const texto = pregunta.trim();
    if (!texto) return;
    const respuesta = responder(texto);
    conversacion.push(texto);
    burbuja('yo', texto);
    burbuja('bot', respuesta);
    campo.value = '';
  }

  function pintar() {
    const t = textos();
    boton.setAttribute('aria-label', t.boton);
    boton.title = t.boton;
    panel.setAttribute('aria-label', t.titulo);
    panel.querySelector('strong').textContent = t.titulo;
    panel.querySelector('.asistente-cerrar').setAttribute('aria-label', t.cerrar);
    panel.querySelector('.asistente-aviso').textContent = t.aviso;
    campo.placeholder = t.campo;
    campo.setAttribute('aria-label', t.campo);
    enviar.textContent = t.enviar;
    sugerencias.replaceChildren(...t.sugerencias.map(texto => {
      const opcion = document.createElement('button');
      opcion.type = 'button';
      opcion.textContent = texto;
      opcion.addEventListener('click', () => preguntar(texto));
      return opcion;
    }));
    if (!conversacion.length) { chat.replaceChildren(); burbuja('bot', t.hola); }
  }

  function alternar(abrir) {
    panel.hidden = !abrir;
    boton.setAttribute('aria-expanded', String(abrir));
    if (abrir) { pintar(); campo.focus(); } else boton.focus();
  }

  pintar();
  boton.addEventListener('click', () => alternar(panel.hidden));
  panel.querySelector('.asistente-cerrar').addEventListener('click', () => alternar(false));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) alternar(false); });
  formulario.addEventListener('submit', e => { e.preventDefault(); preguntar(campo.value); });
})();
