import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import SearchBar from "./SearchBar";

afterEach(cleanup);
test("Checking main serach Rendering", () => {
  render(
    <SearchBar
      setSearchedWord={() => console.log("hello from toolbar header ")}
    />
  );
  expect(screen.getByTestId("searchBarTest")).toBeInTheDocument();
});
test("Checking OnChange main search", () => {
  render(
    <SearchBar
      setSearchedWord={() => console.log("hello from toolbar header ")}
    />
  );
  fireEvent.change(screen.getByTestId("searchBarTest"));
});
