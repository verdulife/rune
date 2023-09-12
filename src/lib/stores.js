import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { userDefaults, recordDefaults } from '$lib/defaults';

/* const mock_data = [
  {
    "day": "domingo",
    "programed": [],
    "records": []
  },
  {
    "day": "lunes",
    "programed": [
      {
        "exercise": "PESO MUERTO",
        "day": 1,
        "weight": 25,
        "reps": 10,
        "series": 4,
        "id": "1693329988327"
      },
      {
        "exercise": "FEMORAL TUMBADO",
        "day": 1,
        "weight": 40,
        "reps": 15,
        "series": 4,
        "id": "1693330008815"
      },
      {
        "exercise": "YUGO",
        "day": 1,
        "weight": 10,
        "reps": 20,
        "series": 4,
        "id": "1693330027875"
      }
    ],
    "records": []
  },
  {
    "day": "martes",
    "programed": [
      {
        "exercise": "PRESS DE BANCA",
        "day": 2,
        "weight": 10,
        "reps": 10,
        "series": 4,
        "id": "1693327600135"
      },
      {
        "exercise": "JALON AL PECHO",
        "day": 2,
        "weight": 45,
        "reps": 12,
        "series": 4,
        "id": "1693329910021"
      },
      {
        "exercise": "PRESS MAQUINA",
        "day": 2,
        "weight": 40,
        "reps": 15,
        "series": 4,
        "id": "1693329934768"
      },
      {
        "exercise": "GIRONDA",
        "day": 2,
        "weight": 20,
        "reps": 10,
        "series": 4,
        "id": "1693329948491"
      }
    ],
    "records": []
  },
  {
    "day": "miércoles",
    "programed": [],
    "records": []
  },
  {
    "day": "jueves",
    "programed": [],
    "records": []
  },
  {
    "day": "viernes",
    "programed": [],
    "records": []
  },
  {
    "day": "sábado",
    "programed": [],
    "records": []
  }
]; */

export const User = writable((browser && JSON.parse(localStorage.getItem("User"))) || userDefaults);
User.subscribe((value) => browser && (localStorage.User = JSON.stringify(value)));

/* export const Records = writable((browser && JSON.parse(localStorage.getItem("Records"))) || recordDefaults);
Records.subscribe((value) => browser && (localStorage.Records = JSON.stringify(value))); */