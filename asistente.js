/*
  Asistente de la carta. Funciona entero en el navegador: no usa IA, claves ni servidor.
  Lee los platos y precios de "carta" (script.js) y el horario y los contactos de datos-bar.js.
*/
const TELEFONO_BAR = datosBar.telefono;
const WHATSAPP_BAR = datosBar.whatsapp;
const DIRECCION_BAR = `${datosBar.direccion}, ${datosBar.codigoPostal} ${datosBar.ciudad}`;

const textosAsistente = {
  es: { boton:'Preguntar al asistente', titulo:'Asistente del bar', hola:'Hola. Pregúntame por un plato, los precios o el horario.', campo:'Escribe tu pregunta', enviar:'Enviar', cerrar:'Cerrar', aviso:'Respuestas automáticas. Para alergias, pregunta siempre al personal.',
    sugerencias:['¿Cuánto cuesta el plato cubano?','¿Qué pizzas tenéis?','¿Abrís hoy?','¿Dónde estáis?'],
    alergia:`No puedo confirmar alérgenos ni ingredientes. Pregunta al personal o llama al ${TELEFONO_BAR} antes de pedir.`, nose:`No tengo ese dato. Pregunta al personal, llama al ${TELEFONO_BAR} o escribe por WhatsApp al ${WHATSAPP_BAR}.`,
    abierto:'Sí, ahora estamos abiertos hasta las {h}.', cerrado:'Ahora estamos cerrados.', hoyCerrado:'Hoy cerramos.', direccion:`Estamos en ${DIRECCION_BAR}.`, telefono:`Puedes llamar al ${TELEFONO_BAR} o escribir por WhatsApp al ${WHATSAPP_BAR}.`, servicios:'Tenemos: ', nombresServicios:['terraza', 'wifi gratis', 'comida para llevar'], recomienda:'Nuestra especialidad es el plato cubano: arroz con frijoles, acompañamientos y carne.', hola2:'Hola. ¿En qué te ayudo?', gracias:'De nada. ¡Que aproveche!', mas:'y {n} más en la carta', racion:'Ración', desde:'Desde' },
  en: { boton:'Ask the assistant', titulo:'Bar assistant', hola:'Hello. Ask me about a dish, prices or opening hours.', campo:'Type your question', enviar:'Send', cerrar:'Close', aviso:'Automatic answers. For allergies, always ask the staff.',
    sugerencias:['How much is the Cuban platter?','What pizzas do you have?','Are you open today?','Where are you?'],
    alergia:`I can't confirm allergens or ingredients. Please ask the staff or call ${TELEFONO_BAR} before ordering.`, nose:`I don't have that information. Ask the staff, call ${TELEFONO_BAR} or message us on WhatsApp at ${WHATSAPP_BAR}.`,
    abierto:'Yes, we are open now until {h}.', cerrado:'We are closed right now.', hoyCerrado:'We are closed today.', direccion:`We are at ${DIRECCION_BAR}.`, telefono:`Call ${TELEFONO_BAR} or message us on WhatsApp at ${WHATSAPP_BAR}.`, servicios:'We have: ', nombresServicios:['terrace', 'free wifi', 'takeaway'], recomienda:'Our speciality is the Cuban platter: rice with beans, sides and meat.', hola2:'Hello. How can I help?', gracias:"You're welcome. Enjoy!", mas:'and {n} more on the menu', racion:'Full', desde:'From' },
  de: { boton:'Assistent fragen', titulo:'Bar-Assistent', hola:'Hallo. Fragen Sie mich nach Gerichten, Preisen oder Öffnungszeiten.', campo:'Ihre Frage', enviar:'Senden', cerrar:'Schließen', aviso:'Automatische Antworten. Bei Allergien fragen Sie immer das Personal.',
    sugerencias:['Was kostet der kubanische Teller?','Welche Pizzas gibt es?','Haben Sie heute geöffnet?','Wo sind Sie?'],
    alergia:`Allergene und Zutaten kann ich nicht bestätigen. Bitte fragen Sie vor der Bestellung das Personal oder rufen Sie ${TELEFONO_BAR} an.`, nose:`Diese Information habe ich nicht. Fragen Sie das Personal, rufen Sie ${TELEFONO_BAR} an oder schreiben Sie per WhatsApp an ${WHATSAPP_BAR}.`,
    abierto:'Ja, wir haben jetzt bis {h} geöffnet.', cerrado:'Wir haben gerade geschlossen.', hoyCerrado:'Heute ist geschlossen.', direccion:`Sie finden uns in der ${DIRECCION_BAR}.`, telefono:`Rufen Sie ${TELEFONO_BAR} an oder schreiben Sie per WhatsApp an ${WHATSAPP_BAR}.`, servicios:'Wir haben: ', nombresServicios:['Terrasse', 'kostenloses WLAN', 'Essen zum Mitnehmen'], recomienda:'Unsere Spezialität ist der kubanische Teller: Reis mit Bohnen, Beilagen und Fleisch.', hola2:'Hallo. Wie kann ich helfen?', gracias:'Gern geschehen. Guten Appetit!', mas:'und {n} weitere auf der Karte', racion:'Portion', desde:'Ab' },
  nl: { boton:'Vraag het de assistent', titulo:'Bar-assistent', hola:'Hallo. Vraag me naar een gerecht, de prijzen of de openingstijden.', campo:'Typ uw vraag', enviar:'Versturen', cerrar:'Sluiten', aviso:'Automatische antwoorden. Vraag bij allergieën altijd het personeel.',
    sugerencias:['Wat kost de Cubaanse schotel?',"Welke pizza's hebben jullie?",'Zijn jullie vandaag open?','Waar zijn jullie?'],
    alergia:`Ik kan allergenen en ingrediënten niet bevestigen. Vraag het personeel of bel ${TELEFONO_BAR} voordat u bestelt.`, nose:`Die informatie heb ik niet. Vraag het personeel, bel ${TELEFONO_BAR} of stuur een WhatsApp naar ${WHATSAPP_BAR}.`,
    abierto:'Ja, we zijn nu open tot {h}.', cerrado:'We zijn nu gesloten.', hoyCerrado:'Vandaag zijn we gesloten.', direccion:`U vindt ons op ${DIRECCION_BAR}.`, telefono:`Bel ${TELEFONO_BAR} of stuur een WhatsApp naar ${WHATSAPP_BAR}.`, servicios:'We hebben: ', nombresServicios:['terras', 'gratis wifi', 'afhaalmaaltijden'], recomienda:'Onze specialiteit is de Cubaanse schotel: rijst met bonen, bijgerechten en vlees.', hola2:'Hallo. Waarmee kan ik helpen?', gracias:'Graag gedaan. Eet smakelijk!', mas:'en nog {n} op de kaart', racion:'Portie', desde:'Vanaf' },
  fr: { boton:"Demander à l'assistant", titulo:'Assistant du bar', hola:'Bonjour. Posez-moi vos questions sur un plat, les prix ou les horaires.', campo:'Votre question', enviar:'Envoyer', cerrar:'Fermer', aviso:"Réponses automatiques. En cas d'allergie, demandez toujours au personnel.",
    sugerencias:["Combien coûte l'assiette cubaine ?",'Quelles pizzas avez-vous ?',"Êtes-vous ouverts aujourd'hui ?",'Où êtes-vous ?'],
    alergia:`Je ne peux pas confirmer les allergènes ni les ingrédients. Demandez au personnel ou appelez le ${TELEFONO_BAR} avant de commander.`, nose:`Je n'ai pas cette information. Demandez au personnel, appelez le ${TELEFONO_BAR} ou écrivez sur WhatsApp au ${WHATSAPP_BAR}.`,
    abierto:"Oui, nous sommes ouverts jusqu'à {h}.", cerrado:'Nous sommes fermés pour le moment.', hoyCerrado:"Nous sommes fermés aujourd'hui.", direccion:`Nous sommes ${DIRECCION_BAR}.`, telefono:`Appelez le ${TELEFONO_BAR} ou écrivez sur WhatsApp au ${WHATSAPP_BAR}.`, servicios:'Nous avons : ', nombresServicios:['terrasse', 'wifi gratuit', 'vente à emporter'], recomienda:'Notre spécialité est le plat cubain : riz aux haricots, accompagnements et viande.', hola2:'Bonjour. Comment puis-je vous aider ?', gracias:'Avec plaisir. Bon appétit !', mas:'et {n} autres sur la carte', racion:'Portion', desde:'Dès' },
  pt: { boton:'Perguntar ao assistente', titulo:'Assistente do bar', hola:'Olá. Pergunte-me sobre um prato, os preços ou o horário.', campo:'Escreva a sua pergunta', enviar:'Enviar', cerrar:'Fechar', aviso:'Respostas automáticas. Em caso de alergias, pergunte sempre ao pessoal.',
    sugerencias:['Quanto custa o prato cubano?','Que pizzas têm?','Abrem hoje?','Onde ficam?'],
    alergia:`Não posso confirmar alergénios nem ingredientes. Pergunte ao pessoal ou ligue para ${TELEFONO_BAR} antes de pedir.`, nose:`Não tenho essa informação. Pergunte ao pessoal, ligue para ${TELEFONO_BAR} ou escreva por WhatsApp para ${WHATSAPP_BAR}.`,
    abierto:'Sim, estamos abertos até às {h}.', cerrado:'Agora estamos fechados.', hoyCerrado:'Hoje estamos fechados.', direccion:`Estamos na ${DIRECCION_BAR}.`, telefono:`Ligue para ${TELEFONO_BAR} ou escreva por WhatsApp para ${WHATSAPP_BAR}.`, servicios:'Temos: ', nombresServicios:['esplanada', 'wifi gratuito', 'comida para levar'], recomienda:'A nossa especialidade é o prato cubano: arroz com feijão, acompanhamentos e carne.', hola2:'Olá. Como posso ajudar?', gracias:'De nada. Bom apetite!', mas:'e mais {n} na ementa', racion:'Dose', desde:'Desde' }
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

  const minutos = hora => { const [h, m] = hora.split(':').map(Number); return h * 60 + m; };
  const textoHorarioAsistente = () => textoHorario(idioma()).replace(/<br>/g, '\n');

  function estadoAhora(t) {
    const partes = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Atlantic/Canary', weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(new Date()).map(x => [x.type, x.value]));
    const indice = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].indexOf(partes.weekday);
    const dia = datosBar.horario[DIAS_BAR[indice]];
    if (!dia) return `${t.hoyCerrado}\n${textoHorarioAsistente()}`;
    const ahora = (Number(partes.hour) % 24) * 60 + Number(partes.minute);
    const cierre = minutos(dia.cierra) <= minutos(dia.abre) ? minutos(dia.cierra) + 1440 : minutos(dia.cierra);
    return ahora >= minutos(dia.abre) && ahora < cierre ? t.abierto.replace('{h}', dia.cierra) : `${t.cerrado}\n${textoHorarioAsistente()}`;
  }

  function textoServicios(t) {
    const activos = [datosBar.servicios.terraza, datosBar.servicios.wifi, datosBar.servicios.llevar];
    const lista = t.nombresServicios.filter((_, i) => activos[i]);
    return lista.length ? t.servicios + lista.join(', ') + '.' : t.nose;
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
    if (/horari|\babr[eiaí]|abiert|cierr|cerrai|\bhours?\b|\bopen|closed|offnungszeit|geoffnet|geschlossen|openingstijd|gesloten|horaire|ouvert|ferme|fecha|\baber/.test(q)) return textoHorarioAsistente();
    if (/donde|direccion|ubicacion|llegar|\bwhere\b|address|location|\bwo\b|adresse|\bwaar\b|adres|\bou\b|\bonde\b|morada|localiza/.test(q)) return t.direccion;
    if (/telefono|llamar|whatsapp|\bphone\b|\bcall\b|contact|telefon|anrufen|bellen|telephone|appeler|ligar/.test(q)) return t.telefono;
    if (/terraz|terrace|terrasse|terras|esplanada|wifi|wlan|llevar|takeaway|take away|mitnehmen|afhal|emporter|levar/.test(q)) return textoServicios(t);
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
