// Copia la carta de script.js a un JSON para el asistente.
// Se ejecuta en cada publicación de Netlify, así los precios siempre coinciden con la web.
const fs = require('fs');
const codigo = fs.readFileSync('script.js', 'utf8');
const inicio = codigo.indexOf('const carta = {');
const fin = codigo.indexOf('\n};', inicio);
if (inicio < 0 || fin < 0) throw new Error('No encuentro la carta en script.js');
const carta = new Function('return ' + codigo.slice(inicio + 'const carta = '.length, fin + 2))();
const salida = Object.values(carta).map(c => ({ seccion: c.title, platos: c.items.map(([nombre, precio]) => ({ nombre, precio })) }));
fs.writeFileSync('netlify/functions/carta.json', JSON.stringify(salida));
console.log('Carta generada:', salida.reduce((n, s) => n + s.platos.length, 0), 'productos');
