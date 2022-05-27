import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FinishedReadingButton from "./FinishedReadingButton";

describe("FinishedReading Button component tests", () => {
  afterEach(cleanup);
  it("FinishedReading Button", () => {
    render(
      <MemoryRouter>
        <FinishedReadingButton
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
          text="Nitish"
        ></FinishedReadingButton>
      </MemoryRouter>
    );
    const element = screen.getByTestId("finishedReadingButtonTest");
    expect(element).toBeInTheDocument();
  });
});
