import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe("Typography Tests", () => {
  afterEach(cleanup);
  it("to be in test", () => {
    render(
      <MemoryRouter>
        <NavBar
          explore={false}
          isAuthenticated={false}
          setExplore={() => {
            console.log("explore");
          }}
        ></NavBar>
      </MemoryRouter>
    );
    const element = screen.getByTestId("navBarTest");
    expect(element).toBeInTheDocument();
  });
  it("navBar 3", () => {
    render(
      <MemoryRouter>
        <NavBar
          explore={true}
          isAuthenticated={true}
          setExplore={() => {
            console.log("explore");
          }}
        ></NavBar>
      </MemoryRouter>
    );
    const element = screen.getByTestId("navBarTest");
    expect(element).toBeInTheDocument();
  });
  it(" be in test", () => {
    render(
      <MemoryRouter>
        <NavBar explore={false} isAuthenticated={true}></NavBar>
      </MemoryRouter>
    );
    const element = screen.getByTestId("navBarTest");
    expect(element).toBeInTheDocument();
  });
});
