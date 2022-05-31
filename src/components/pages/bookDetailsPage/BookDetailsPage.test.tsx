import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import BookDetailsPage from "./BookDetailsPage";
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      bookAuthor: "Erica Keswin",
      bookName: "Bring Your Human to Wor",
      id: 1,
      img: "2.png",
      reads: "2k reads",
      status: "finished",
      time: "13-minute read",
      type: "trending",
    },
  }),
}));
const MockEnt = () => {
  return (
    <BrowserRouter>
      <BookDetailsPage
        continueBooks={[
          {
            bookAuthor: "Erica Keswin",
            bookName: "Bring Your Human to Wor",
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
            id: 8,
            img: "7.png",
            bookName: "The Lonely Century",
            bookAuthor: "Noreena Hertz",
            time: "15-minute read",
            reads: "1.9k reads",
            status: "Reading",
            type: "featured",
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
