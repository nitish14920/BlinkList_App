import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Explore from "./Explore";

describe("Typography Tests", () => {
  afterEach(cleanup);
  it("to be in test", () => {
    render(
      <MemoryRouter>
        <Explore display="flex"></Explore>
      </MemoryRouter>
    );
    const element = screen.getByTestId("exploreTest");
    expect(element).toBeInTheDocument();
  });
});
