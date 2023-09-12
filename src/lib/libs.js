export const days = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];

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

export const exercise_lib = {
  reps: { min: 1, step: 1, unit: 'reps', max: 50 },
  series: { min: 1, step: 1, unit: 'series', max: 20 },
  weight: { min: 0, step: 5, unit: 'kg', max: 500 },
  rir: { min: -1, step: 1, unit: 'rir', max: 4 }
}