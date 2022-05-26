import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FinishedReading from "./FinishedReading";

describe("Typography Tests", () => {
  afterEach(cleanup);
  it("to be in test", () => {
    render(
      <MemoryRouter>
        <FinishedReading
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
        ></FinishedReading>
      </MemoryRouter>
    );
    const element = screen.getByTestId("finishedReadingTest");
    expect(element).toBeInTheDocument();
  });
});
