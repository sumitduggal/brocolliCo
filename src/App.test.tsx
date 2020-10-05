import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders 'Request an Invite' text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Request an Invite/i);
  expect(linkElement).toBeInTheDocument();
});
