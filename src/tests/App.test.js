import { render, screen } from "@testing-library/react";
import App from "../components/App";

test('renders "Hola mundo"', () => {
  render(<App />);
  const divElement = screen.getByText("Hola mundo");
  expect(divElement).toBeInTheDocument();
});
