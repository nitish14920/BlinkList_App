import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import LogoutButton from "./Logout";

const MockEnt = () => {
  return <LogoutButton />;
};

test("should render the  component", () => {
  render(<MockEnt />);
});
