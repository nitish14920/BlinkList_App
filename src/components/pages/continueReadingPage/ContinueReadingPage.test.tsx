import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import ContinueReadingPage from "./ContinueReadingPage";

const MockEnt = () => {
  return (
    <BrowserRouter>
      <ContinueReadingPage
        continueReading={[
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
        finishedReading={[
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
        explore={false}
        isAuthenticated={true}
      />
    </BrowserRouter>
  );
};

test("should render the ContinueReadingPage component", () => {
  render(<MockEnt />);
});
