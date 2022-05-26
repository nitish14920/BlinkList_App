import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

describe("SearchBar Tests", () => {
  afterEach(cleanup);
  it("to be in test", () => {
    render(
      <MemoryRouter>
        <SearchBar></SearchBar>
      </MemoryRouter>
    );
    const element = screen.getByTestId("searchBarTest");
    expect(element).toBeInTheDocument();
  });
});
