import { cleanup, render, screen } from "@testing-library/react";
import Anchor from "./Anchor";

describe("Anchor component tests", () => {
  afterEach(cleanup);
  it("Anchor component tests", () => {
    render(<Anchor>Nitish</Anchor>);
    const element = screen.getByTestId("anchorTest");
    expect(element).toBeInTheDocument();
  });
});
