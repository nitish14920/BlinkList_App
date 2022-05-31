import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import BookDetails from "./BookDetails";
import { BrowserRouter } from "react-router-dom";

const MockEnt = () => {
  return (
    <BrowserRouter>
      <BookDetails
        data={{
          state: {
            bookAuthor: "Erica Keswin",
            bookName: "Bring Your Human to Work",
            id: 1,
            img: "2.png",
            reads: "2k reads",
            status: "finished",
            time: "13-minute read",
            type: "trending",
          },
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
            id: 10,
            img: "9.png",
            bookName: "Dropshipping",
            bookAuthor: "James Moore",
            time: "12-minute read",
            reads: "12k reads",
            status: "Reading",
            type: "featured",
          },
        ]}
      />
    </BrowserRouter>
  );
};

test("should render the BookDetails component", () => {
  render(<MockEnt />);
});
