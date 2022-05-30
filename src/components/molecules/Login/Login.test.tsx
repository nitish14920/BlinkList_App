import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import LoginButton from "./Login";

const MockEnt = () => {
  return <LoginButton />;
};

test("should render the ContinueReadingPage component", () => {
  render(<MockEnt />);
});
