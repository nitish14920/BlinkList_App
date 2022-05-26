import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { TypographyComponent } from "./TypographyComponent";

describe("Typography Tests", () => {
  afterEach(cleanup);
  it("to be in test", () => {
    render(
      <MemoryRouter>
        <TypographyComponent variant="h1">
          TypographyContent
        </TypographyComponent>
      </MemoryRouter>
    );
    const element = screen.getByText("TypographyContent");
    expect(element).toBeInTheDocument();
  });
});
