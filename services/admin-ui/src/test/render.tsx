import * as React from "react";

import {
  RenderOptions,
  RenderResult,
  render as rtlRender,
} from "@testing-library/react";

import GlobalProviders from "GlobalProviders";

/** RTL render with default wrappers */
export const render = (
  ui: React.ReactElement,
  options?: RenderOptions
): RenderResult =>
  rtlRender(ui, {
    wrapper: ({ children }) => <GlobalProviders>{children}</GlobalProviders>,
    ...options,
  });
