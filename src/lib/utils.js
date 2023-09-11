export const currentDay = new Date().getDay();

export const days = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

export function formatDate(date) {
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  const valid = new Date(date);
  return new Intl.DateTimeFormat("es-ES", options).format(valid);
}

export function parseWeight(value) {
  return value === 0 ? "Libre" : `${value} ${exercise_lib.weight.unit}`;
}

export function parseRir(value) {
  return value === -1 ? 'Fallo' : `${value} ${exercise_lib.rir.unit}`;
}

export const programDefaults = {
  exercise: '',
  day: 0,
  weight: 10,
  reps: 10,
  series: 4,
  rir: 0,
  fail: false
};

export const record_states = {
  created: "created",
  updated: "updated",
  deleted: "deleted",
}

export const state_labels = {
  created: "CREADO",
  name: "RENOMBRADO",
  updated: "PLUS",
  fail: "FALLO",
  deleted: "ELIMINADO"
}

export const userDefaults = [
  {
    day: days[0],
    programed: [],
    records: []
  },
  {
    day: days[1],
    programed: [],
    records: []
  },
  {
    day: days[2],
    programed: [],
    records: []
  },
  {
    day: days[3],
    programed: [],
    records: []
  },
  {
    day: days[4],
    programed: [],
    records: []
  },
  {
    day: days[5],
    programed: [],
    records: []
  },
  {
    day: days[6],
    programed: [],
    records: []
  },
];

export const exercise_lib = {
  reps: { min: 1, step: 1, unit: 'reps' },
  series: { min: 1, step: 1, unit: 'series' },
  weight: { min: 0, step: 5, unit: 'kg' },
  rir: { min: -1, step: 1, unit: 'rir' }
}

export const exercisesList = [
  "PESO MUERTO",
  "FEMORAL TUMBADO",
  "YUGO",
  "PRESS DE BANCA",
  "JALON AL PECHO",
  "PRESS MAQUINA",
  "GIRONDA",
  "EXTENSIONES CUADRICEPS",
  "PRENSA",
  "SENTADILLA LIBRE"
]

