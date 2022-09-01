import { render, screen } from "@testing-library/react";
import App from "./App";
import { CookiesProvider } from "react-cookie";

test("renders learn react link", () => {
  render(
    <CookiesProvider>
      <App />
    </CookiesProvider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
