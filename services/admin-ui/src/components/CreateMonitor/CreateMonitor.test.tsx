import { render, screen, userEvent, waitFor } from "test";

import CreateMonitor from ".";

describe("<CreateMonitor />", () => {
  it("can create a monitor", async () => {
    fetchMock.mockResponse(JSON.stringify({}));
    render(<CreateMonitor />);
    const submit = screen.getByRole("button", { name: "Create" });
    userEvent.type(screen.getByPlaceholderText("Name"), "my-name");
    expect(submit).toBeDisabled();

    userEvent.type(screen.getByPlaceholderText("URL"), "my-url");
    expect(submit).toBeDisabled();

    userEvent.type(
      screen.getByPlaceholderText("URL"),
      "{selectall}{backspace}http://example.com"
    );
    expect(submit).toBeEnabled();
    userEvent.click(screen.getByRole("button", { name: "Create" }));
    await waitFor(() => screen.getByText(/Created monitor/));
  });
});
