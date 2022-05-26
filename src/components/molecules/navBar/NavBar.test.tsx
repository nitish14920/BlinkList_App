import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("Typography Tests", () => {
  afterEach(cleanup);
  it("to be in test", () => {
    render(
      <MemoryRouter>
        <NavBar></NavBar>
      </MemoryRouter>
    );
    const element = screen.getByTestId("navBarTest");
    expect(element).toBeInTheDocument();
  });
});
