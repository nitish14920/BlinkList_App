import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import LogoutButton from "./Logout";
import { Auth0Provider } from "@auth0/auth0-react";

const MockEnt = () => {
  return <LogoutButton />;
};

test("should render the ContinueReadingPage component", () => {
  render(<MockEnt />);
});
