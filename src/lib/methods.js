import { User } from "$lib/stores";
import { record_states } from "./utils";

function serialize(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export function registerRecord(data) {
  if (!data) return;


  const record = serialize(data);
  record.date = new Date().toJSON();
  record.fail = record.fail || false;

  User.update(userDay => {
    const { day } = record;
    let { records } = userDay[day];

    records = [record, ...records];

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
    userDay[day].programed = [...userDay[day].programed, program];

    return userDay;
  });

  program.state = record_states.created;
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

  program.state = record_states.updated;
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

  registerRecord(program);
};