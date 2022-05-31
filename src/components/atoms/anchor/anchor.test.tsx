import { cleanup, render, screen } from "@testing-library/react";
import Anchor from "./Anchor";

describe("Anchor component tests", () => {
  afterEach(cleanup);
  it("Anchor component tests", () => {
    render(
      <Anchor explore={true} setExplore={() => {}}>
        nitish
      </Anchor>
    );
    const element = screen.getByTestId("anchorTest");
    expect(element).toBeInTheDocument();
    element.click();
  });

  it("Should Have text", () => {
    render(
      <Anchor explore={false} setExplore={() => {}}>
        My Library
      </Anchor>
    );
    const element = screen.getByText(/My Library/i);
    expect(element).toBeInTheDocument();
    element.click();
  });
});
