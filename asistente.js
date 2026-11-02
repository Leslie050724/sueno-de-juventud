/*
  Asistente de la carta. Si la web y la función están en sitios distintos,
  cambia ASISTENTE_URL por la dirección completa de la función.
*/
const ASISTENTE_URL = '/.netlify/functions/asistente';

const textosAsistente = {
  es: { boton: 'Preguntar al asistente', titulo: 'Asistente del bar', hola: 'Hola. Pregúntame por la carta, los precios o el horario.', campo: 'Escribe tu pregunta', enviar: 'Enviar', cerrar: 'Cerrar', pensando: 'Pensando...', error: 'No he podido responder. Inténtalo de nuevo o llama al 828 98 07 47.', limite: 'Has enviado muchas preguntas. Espera un minuto.', aviso: 'Respuestas automáticas. Para alergias, pregunta siempre al personal.' },
  en: { boton: 'Ask the assistant', titulo: 'Bar assistant', hola: 'Hello. Ask me about the menu, prices or opening hours.', campo: 'Type your question', enviar: 'Send', cerrar: 'Close', pensando: 'Thinking...', error: "I couldn't answer. Try again or call 828 98 07 47.", limite: 'You have sent a lot of questions. Please wait a minute.', aviso: 'Automatic answers. For allergies, always ask the staff.' },
  de: { boton: 'Assistent fragen', titulo: 'Bar-Assistent', hola: 'Hallo. Fragen Sie mich nach Speisekarte, Preisen oder Öffnungszeiten.', campo: 'Ihre Frage', enviar: 'Senden', cerrar: 'Schließen', pensando: 'Einen Moment...', error: 'Das hat nicht geklappt. Versuchen Sie es erneut oder rufen Sie 828 98 07 47 an.', limite: 'Sie haben viele Fragen gesendet. Bitte warten Sie eine Minute.', aviso: 'Automatische Antworten. Bei Allergien fragen Sie immer das Personal.' },
  nl: { boton: 'Vraag het de assistent', titulo: 'Bar-assistent', hola: 'Hallo. Vraag me naar het menu, de prijzen of de openingstijden.', campo: 'Typ uw vraag', enviar: 'Versturen', cerrar: 'Sluiten', pensando: 'Even denken...', error: 'Dat lukte niet. Probeer het opnieuw of bel 828 98 07 47.', limite: 'U hebt veel vragen gestuurd. Wacht een minuut.', aviso: 'Automatische antwoorden. Vraag bij allergieën altijd het personeel.' },
  fr: { boton: "Demander à l'assistant", titulo: 'Assistant du bar', hola: 'Bonjour. Posez-moi vos questions sur la carte, les prix ou les horaires.', campo: 'Votre question', enviar: 'Envoyer', cerrar: 'Fermer', pensando: 'Un instant...', error: "Je n'ai pas pu répondre. Réessayez ou appelez le 828 98 07 47.", limite: 'Vous avez envoyé beaucoup de questions. Attendez une minute.', aviso: 'Réponses automatiques. En cas d\'allergie, demandez toujours au personnel.' },
  pt: { boton: 'Perguntar ao assistente', titulo: 'Assistente do bar', hola: 'Olá. Pergunte-me sobre a ementa, os preços ou o horário.', campo: 'Escreva a sua pergunta', enviar: 'Enviar', cerrar: 'Fechar', pensando: 'A pensar...', error: 'Não consegui responder. Tente novamente ou ligue para 828 98 07 47.', limite: 'Enviou muitas perguntas. Aguarde um minuto.', aviso: 'Respostas automáticas. Em caso de alergias, pergunte sempre ao pessoal.' }
};

(function iniciarAsistente() {
  const textos = () => textosAsistente[typeof idiomaActual === 'string' ? idiomaActual : 'es'] || textosAsistente.es;
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
    <p class="asistente-aviso"></p>
    <form class="asistente-formulario"><input maxlength="500" autocomplete="off"><button type="submit"></button></form>`;
  document.body.append(boton, panel);

  const chat = panel.querySelector('.asistente-chat');
  const formulario = panel.querySelector('form');
  const campo = formulario.querySelector('input');
  const enviar = formulario.querySelector('button');

  function burbuja(clase, texto) {
    const elemento = document.createElement('p');
    elemento.className = 'asistente-mensaje ' + clase;
    elemento.textContent = texto;
    chat.append(elemento);
    chat.scrollTop = chat.scrollHeight;
    return elemento;
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
    if (!conversacion.length) { chat.replaceChildren(); burbuja('bot', t.hola); }
  }

  function alternar(abrir) {
    panel.hidden = !abrir;
    boton.setAttribute('aria-expanded', String(abrir));
    if (abrir) { pintar(); campo.focus(); } else boton.focus();
  }

  boton.addEventListener('click', () => alternar(panel.hidden));
  panel.querySelector('.asistente-cerrar').addEventListener('click', () => alternar(false));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !panel.hidden) alternar(false); });

  formulario.addEventListener('submit', async e => {
    e.preventDefault();
    const pregunta = campo.value.trim();
    if (!pregunta || enviar.disabled) return;
    const t = textos();
    campo.value = '';
    enviar.disabled = true;
    burbuja('yo', pregunta);
    conversacion.push({ role: 'user', content: pregunta });
    const respuesta = burbuja('bot', t.pensando);
    try {
      const r = await fetch(ASISTENTE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idioma: typeof idiomaActual === 'string' ? idiomaActual : 'es', mensajes: conversacion.slice(-8) })
      });
      const datos = await r.json().catch(() => ({}));
      if (!r.ok || !datos.texto) throw new Error(r.status === 429 ? 'limite' : 'error');
      respuesta.textContent = datos.texto;
      conversacion.push({ role: 'assistant', content: datos.texto });
    } catch (error) {
      respuesta.textContent = error.message === 'limite' ? t.limite : t.error;
      conversacion.pop();
    } finally {
      enviar.disabled = false;
      chat.scrollTop = chat.scrollHeight;
    }
  });
})();
