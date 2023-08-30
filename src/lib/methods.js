import { User } from "$lib/stores";

function serialize(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function registerRecord(data) {
  if (!data) return;

  const record = serialize(data);
  record.date = new Date().toJSON();

  User.update(userDay => {
    const { day } = record;
    userDay[day].records = [record, ...userDay[day].records]

    return userDay;
  });
}

export function createProgramByDay(data) {
  if (!data) return;

  const program = serialize(data);
  program.id = Date.now().toString();
  program.exercise = program.exercise.toUpperCase();

  User.update(userDay => {
    const { day } = program;
    userDay[day].programed = [...userDay[day].programed, program]

    return userDay;
  });

  program.state = "created";
  registerRecord(program);
}

export function updateProgramByData(data) {
  if (!data) return;

  const program = serialize(data);

  User.update(userDay => {
    const { day } = program;
    const { programed } = userDay[day];
    const programedUpdated = programed.map((p) => p.id === program.id ? program : p);
    userDay[day].programed = programedUpdated;

    return userDay;
  });

  program.state = "updated";
  registerRecord(program);
}

export function deleteProgramByData(data) {
  if (!data) return;

  const program = serialize(data);

  User.update(userDay => {
    const { day } = program;
    const { programed } = userDay[day];
    const programedCleaned = programed.filter((p) => p.id !== program.id);
    userDay[day].programed = programedCleaned;

    return userDay;
  });

  program.state = "deleted";
  registerRecord(program);
};