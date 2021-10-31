import { render } from "test";

import Bar from "./Bar";

describe("<Bar />", () => {
  it("handles undefined rendering context", () => {
    // @ts-ignore
    HTMLCanvasElement.prototype.getContext.mockReturnValueOnce(null);
    const { container } = render(<Bar data={[-1, 0, 200, 300, 400, 500]} />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
  });

  it("renders", () => {
    const { container } = render(<Bar data={[-1, 0, 200, 300, 400, 500]} />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
  });
});
