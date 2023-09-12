import { exercise_lib } from "$lib/libs";

export const currentDay = new Date().getDay();

export function formatDate(date) {
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric"
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



