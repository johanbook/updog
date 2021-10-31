import * as task from "./task";

test("can add and remove task", () => {
  const id = task.create(() => 1, { args: undefined });
  expect(task.exists(id)).toBeTruthy();
  task.remove(id);
  expect(task.exists(id)).toBeFalsy();
});
