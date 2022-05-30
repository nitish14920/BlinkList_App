import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import LogoutButton from "./Logout";

const MockEnt = () => {
  return <LogoutButton className="logoutButton" />;
};

test("should render the  component", () => {
  render(<MockEnt />);
});
