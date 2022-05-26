import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Logo from "./Logo";

describe("Logo Tests", () => {
  afterEach(cleanup);
  it("to be in test", () => {
    render(
      <MemoryRouter>
        <Logo image="e60c1b 1.png"></Logo>
      </MemoryRouter>
    );
    const element = screen.getByTestId("logoTest");
    expect(element).toBeInTheDocument();
  });
});
