import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

test('korhonen + virtanen = kortanen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("Kortanen")).toBeInTheDocument()

});

test('mäkinen + nieminen = mäminen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "mäkinen" } });
  expect(inputName1.value).toBe("mäkinen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "nieminen" } });
  expect(inputName2.value).toBe("nieminen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("Mäminen")).toBeInTheDocument()

});

test('kortanen + mäminen = korminen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "kortanen" } });
  expect(inputName1.value).toBe("kortanen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "mäminen" } });
  expect(inputName2.value).toBe("mäminen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("Korminen")).toBeInTheDocument()

});

test('mäminen + kortanen = mätänen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "mäminen" } });
  expect(inputName1.value).toBe("mäminen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "kortanen" } });
  expect(inputName2.value).toBe("kortanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("Mätänen")).toBeInTheDocument()

});

test('virtanen + korhonen = virhonen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "virtanen" } });
  expect(inputName1.value).toBe("virtanen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "korhonen" } });
  expect(inputName2.value).toBe("korhonen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("Virhonen")).toBeInTheDocument()

});

test('nieminen + mäkinen = niekinen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "nieminen" } });
  expect(inputName1.value).toBe("nieminen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "mäkinen" } });
  expect(inputName2.value).toBe("mäkinen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("Niekinen")).toBeInTheDocument()

});

test('virhonen + niekinen = virkinen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "virhonen" } });
  expect(inputName1.value).toBe("virhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "niekinen" } });
  expect(inputName2.value).toBe("niekinen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("Virkinen")).toBeInTheDocument()

});

test('niekinen + virhonen = niehonen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "niekinen" } });
  expect(inputName1.value).toBe("niekinen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virhonen" } });
  expect(inputName2.value).toBe("virhonen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("Niehonen")).toBeInTheDocument()

});

test('kortanen + niekinen = korkinen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "kortanen" } });
  expect(inputName1.value).toBe("kortanen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "niekinen" } });
  expect(inputName2.value).toBe("niekinen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("Korkinen")).toBeInTheDocument()

});

test('niekinen + kortanen = nietanen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "niekinen" } });
  expect(inputName1.value).toBe("niekinen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "kortanen" } });
  expect(inputName2.value).toBe("kortanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("Nietanen")).toBeInTheDocument()

});

test('virhonen + mäminen = virminen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "virhonen" } });
  expect(inputName1.value).toBe("virhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "mäminen" } });
  expect(inputName2.value).toBe("mäminen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("Virminen")).toBeInTheDocument()

});

test('mäminen + virhonen = mähönen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "mäminen" } });
  expect(inputName1.value).toBe("mäminen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virhonen" } });
  expect(inputName2.value).toBe("virhonen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("Mähönen")).toBeInTheDocument()

});
