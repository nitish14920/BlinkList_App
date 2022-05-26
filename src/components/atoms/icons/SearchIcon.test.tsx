import { cleanup, render, screen } from "@testing-library/react";
import SearchIcon from "./SearchIIcon";

describe("Anchor component tests", () => {
  afterEach(cleanup);
  it("Anchor component tests", () => {
    render(<SearchIcon></SearchIcon>);
    const element = screen.getByTestId("navBarSearchTest");
    expect(element).toBeInTheDocument();
  });
});
