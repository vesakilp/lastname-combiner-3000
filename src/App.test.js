import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

test('korhonen + virtanen = Kortanen/Virhonen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  expect(screen.getByText("Kortanen")).toBeInTheDocument();
  expect(screen.getByText("Virhonen")).toBeInTheDocument();

});

test('mäkinen + nieminen = Mäminen/Niekinen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "mäkinen" } });
  expect(inputName1.value).toBe("mäkinen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "nieminen" } });
  expect(inputName2.value).toBe("nieminen");

  expect(screen.getByText("Mäminen")).toBeInTheDocument();
  expect(screen.getByText("Niekinen")).toBeInTheDocument();

});

test('kortanen + mäminen = Korminen/Mätanen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "kortanen" } });
  expect(inputName1.value).toBe("kortanen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "mäminen" } });
  expect(inputName2.value).toBe("mäminen");

  expect(screen.getByText("Korminen")).toBeInTheDocument();
  expect(screen.getByText("Mätanen")).toBeInTheDocument();

});

test('virhonen + niekinen = Virkinen/Niehonen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "virhonen" } });
  expect(inputName1.value).toBe("virhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "niekinen" } });
  expect(inputName2.value).toBe("niekinen");

  expect(screen.getByText("Virkinen")).toBeInTheDocument();
  expect(screen.getByText("Niehonen")).toBeInTheDocument();

});

test('kortanen + niekinen = Korkinen/Nietanen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "kortanen" } });
  expect(inputName1.value).toBe("kortanen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "niekinen" } });
  expect(inputName2.value).toBe("niekinen");

  expect(screen.getByText("Korkinen")).toBeInTheDocument();
  expect(screen.getByText("Nietanen")).toBeInTheDocument();

});

test('virhonen + mäminen = Virminen/Mähonen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "virhonen" } });
  expect(inputName1.value).toBe("virhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "mäminen" } });
  expect(inputName2.value).toBe("mäminen");

  expect(screen.getByText("Virminen")).toBeInTheDocument();
  expect(screen.getByText("Mähonen")).toBeInTheDocument();

});
