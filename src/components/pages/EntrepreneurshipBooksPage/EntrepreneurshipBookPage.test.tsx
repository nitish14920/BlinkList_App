import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import EntrepreneurshipBooksPage from "./EntrepreneurshipBooksPage";

const MockEnt = () => {
  return (
    <BrowserRouter>
      <EntrepreneurshipBooksPage
        books={[
          {
            bookAuthor: "Erica Keswin",
            bookName: "Bring Your Human to Work",
            id: 1,
            img: "2.png",
            reads: "2k reads",
            status: "finished",
            time: "13-minute read",
            type: "trending",
          },
        ]}
      />
    </BrowserRouter>
  );
};

test("should render the EntreprenershipBooksPage component", () => {
  render(<MockEnt />);
});
