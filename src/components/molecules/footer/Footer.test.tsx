import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

describe("Typography Tests", () => {
  afterEach(cleanup);
  it("to be in test", () => {
    render(
      <MemoryRouter>
        <Footer></Footer>
      </MemoryRouter>
    );
    const element = screen.getByTestId("footerTest");
    expect(element).toBeInTheDocument();
  });
});
