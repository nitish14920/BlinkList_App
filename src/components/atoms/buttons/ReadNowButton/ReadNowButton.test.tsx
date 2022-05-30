import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ReadNowButton from "./ReadNowButton";

describe("ReadNow Button component tests", () => {
  afterEach(cleanup);
  it("ReadNow Button", () => {
    render(
      <MemoryRouter>
        <ReadNowButton
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
            id: 2,
            img: "2.png",
            reads: "2k reads",
            status: "finished",
            time: "13-minute read",
            type: "trending",
          }}
          text="Nitish"
        ></ReadNowButton>
      </MemoryRouter>
    );
    const element = screen.getByTestId("readNowButtonTest");
    expect(element).toBeInTheDocument();
  });
  it("ReadNow Button when data exist", () => {
    render(
      <MemoryRouter>
        <ReadNowButton
          text="Read Now"
          continueBooks={[
            {
              bookAuthor: "Erica Keswin",
              bookName: "Bring Your Human to Work",
              id: 2,
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
              bookName: "Bring Your Human t Work",
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
            bookName: "Bring Your Human to Wor",
            id: 3,
            img: "2.png",
            reads: "2k reads",
            status: "finished",
            time: "13-minute read",
            type: "trending",
          }}
        ></ReadNowButton>
      </MemoryRouter>
    );
    const element = screen.getByTestId("readNowButtonTest");
    expect(element).toBeInTheDocument();
  });
});
