import { days } from "$lib/libs";

export const programDefaults = {
  exercise: '',
  day: 0,
  weight: 10,
  reps: 10,
  series: 4,
  rir: 0,
};

export const recordDefaults = {
  date: new Date().toJSON(),
  exercise: '',
  day: 0,
};

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