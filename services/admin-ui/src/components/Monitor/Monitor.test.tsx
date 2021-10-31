import { fixtures, render, screen, userEvent, waitFor } from "test";

import Monitor from ".";

jest.mock("components/Bar", () => {
  return () => <p>bar</p>;
});

describe("<Monitor />", () => {
  it("renders", async () => {
    fetchMock.mockResponse(JSON.stringify([fixtures.LOG]));
    render(<Monitor monitor={fixtures.MONITOR} />);
    expect(screen.getByText(/my-name/)).toBeInTheDocument();

    await waitFor(() => screen.getByText(/bar/));
  });

  it("can delete monitor", async () => {
    fetchMock.mockResponse(JSON.stringify([fixtures.LOG]));
    render(<Monitor monitor={fixtures.MONITOR} />);
    userEvent.click(screen.getByRole("button", { name: "delete monitor" }));
    await waitFor(() => screen.getByText(/Deleted monitor/));
  });
});
