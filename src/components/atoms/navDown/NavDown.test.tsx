import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavDown from "./NavDown";

describe("Logo Tests", () => {
  afterEach(cleanup);
  it("to be in test", () => {
    render(
      <MemoryRouter>
        <NavDown></NavDown>
      </MemoryRouter>
    );
    const element = screen.getByTestId("navDownTest");
    expect(element).toBeInTheDocument();
  });
});
