import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ExploreBooksOnEntrepreneurship from "./ExploreBooksOnEntrepreneurship";

describe("Typography Tests", () => {
  afterEach(cleanup);
  it("to be in test", () => {
    render(
      <MemoryRouter>
        <ExploreBooksOnEntrepreneurship></ExploreBooksOnEntrepreneurship>
      </MemoryRouter>
    );
    const element = screen.getByTestId("exploreBooksOnEntrepreneurshipTest");
    expect(element).toBeInTheDocument();
  });
});
