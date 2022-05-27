import { cleanup, render, screen } from "@testing-library/react";
import Anchor from "./Anchor";

describe("Anchor component tests", () => {
  afterEach(cleanup);
  it("Anchor component tests", () => {
    render(<Anchor></Anchor>);
    const element = screen.getByTestId("anchorTest");
    expect(element).toBeInTheDocument();
  });

  it("Should Have text", () => {
    render(<Anchor>My Library</Anchor>);
    const element = screen.getByText(/My Library/i);
    expect(element).toBeInTheDocument();
  });
});
