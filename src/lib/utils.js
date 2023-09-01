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

export const programDefaults = {
  exercise: '',
  day: 0,
  weight: 10,
  reps: 10,
  series: 4,
  fail: false
};

export const record_states = {
  created: "created",
  updated: "updated",
  deleted: "deleted",
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

export const exercisesList = [
  "PRESS DE BANCA",
  "PESO MUERTO"
]

