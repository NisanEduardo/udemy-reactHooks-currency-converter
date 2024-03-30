import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders converter main component", () => {
  render(<App />);
  const mainComponentText = screen.getByText(/main component/i);
  expect(mainComponentText).toBeInTheDocument();
});
