import { User } from "$lib/stores";

export function createProgramByDay({ day, data }) {
  if (!day || !data) return;

  data.id = Date.now().toString();
  data.exercise = data.exercise.toUpperCase();

  User.update(userDay => {
    userDay[day].programed = [...userDay[day].programed, data]
    return userDay;
  });
}

export function updateProgramByData({ data }) {
  if (!data) return;

  User.update(userDay => {
    const { day } = data;
    const { programed } = userDay[day];
    const programedUpdated = programed.map((p) => p.id === data.id ? data : p);
    userDay[day].programed = programedUpdated;

    return userDay;
  });
}

export function deleteProgramByData({ data }) {
  if (!data) return;

  User.update(userDay => {
    const { day } = data;
    const { programed } = userDay[day];
    const programedCleaned = programed.filter((p) => p.id !== data.id);
    userDay[day].programed = programedCleaned;

    return userDay;
  });
};