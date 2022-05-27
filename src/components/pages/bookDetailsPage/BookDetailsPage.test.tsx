import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import BookDetailsPage from "./BookDetailsPage";

const MockEnt = () => {
  return (
    <BrowserRouter>
      <BookDetailsPage
        data={{
          bookAuthor: "Erica Keswin",
          bookName: "Bring Your Human to Work",
          id: 1,
          img: "2.png",
          reads: "2k reads",
          status: "finished",
          time: "13-minute read",
          type: "trending",
        }}
        continueBooks={[
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
        finishedBooks={[
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

test("should render the ContinueReadingPage component", () => {
  render(<MockEnt />);
});
