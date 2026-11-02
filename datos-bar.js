/*
  DATOS DEL BAR
  Cambia aquí el horario, el teléfono, la dirección o los servicios.
  La web y el asistente leen estos datos, así que se actualizan los dos.
*/
const datosBar = {
  telefono: '828 98 07 47',
  whatsapp: '698 238 816',
  direccion: 'Av. de Canarias, 450',
  codigoPostal: '35110',
  ciudad: 'Vecindario',
  provincia: 'Las Palmas',

  // Pon la hora de abrir y de cerrar. Si un día cierra, escribe null.
  horario: {
    lunes: null,
    martes: { abre: '10:00', cierra: '23:00' },
    miercoles: { abre: '10:00', cierra: '23:00' },
    jueves: { abre: '10:00', cierra: '23:00' },
    viernes: { abre: '10:00', cierra: '23:00' },
    sabado: { abre: '10:00', cierra: '23:00' },
    domingo: { abre: '10:00', cierra: '23:00' }
  },

  // true = lo tiene. false = no lo tiene.
  servicios: { terraza: true, wifi: true, llevar: true }
};
