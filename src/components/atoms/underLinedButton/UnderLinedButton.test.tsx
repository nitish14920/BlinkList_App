import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UnderLinedButton from "./UnderLinedButton";

describe("Typography Tests", () => {
  afterEach(cleanup);
  it("to be in test", () => {
    render(
      <MemoryRouter>
        <UnderLinedButton
          color="red"
          text1="UnderLinedButton"
        ></UnderLinedButton>
      </MemoryRouter>
    );
    const element = screen.getByTestId("underlinedButtonTest");
    expect(element).toBeInTheDocument();
  });
});
