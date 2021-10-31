import * as fixtures from "./fixtures";
export {
  act,
  screen,
  waitFor,
  render as rtlRender,
} from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

export * from "./render";
export { fixtures };
