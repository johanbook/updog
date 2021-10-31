import { fixtures, render, screen, waitFor } from "test";

import App from "./App";

describe("<App />", () => {
  it("renders monitors", async () => {
    fetchMock.mockResponse(JSON.stringify([fixtures.MONITOR]));
    render(<App />);
    await waitFor(() => screen.getByText(/my-name/));
  });

  it("renders message if no monitors found", async () => {
    fetchMock.mockResponse(JSON.stringify([]));
    render(<App />);
    await waitFor(() => screen.getByText(/No monitors found/));
  });
});
