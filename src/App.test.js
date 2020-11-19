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
  expect(getByText("kortanen")).toBeInTheDocument()

});

test('mäkinen + nieminen = mäminen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("kortanen")).toBeInTheDocument()

});

test('kortanen + mäminen = korminen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("kortanen")).toBeInTheDocument()

});

test('kortanen + mäminen = mätanen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("kortanen")).toBeInTheDocument()

});

test('korhonen + virtanen = virhonen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("kortanen")).toBeInTheDocument()

});

test('mäkinen + nieminen = niekinen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("kortanen")).toBeInTheDocument()

});

test('virhonen + niekinen = virkinen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("kortanen")).toBeInTheDocument()

});

test('virhonen + niekinen = niehonen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("kortanen")).toBeInTheDocument()

});

test('kortanen + niekinen = korkinen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("kortanen")).toBeInTheDocument()

});

test('kortanen + niekinen = nietanen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("kortanen")).toBeInTheDocument()

});

test('virhonen + mäminen = virminen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("kortanen")).toBeInTheDocument()

});

test('virhonen + mäminen = mähonen', () => {
  const { getByTestId } = render(<App />);
  const inputName1 = screen.getByTestId("name1");
  fireEvent.change(inputName1, { target: { value: "korhonen" } });
  expect(inputName1.value).toBe("korhonen");

  const inputName2 = screen.getByTestId("name2");
  fireEvent.change(inputName2, { target: { value: "virtanen" } });
  expect(inputName2.value).toBe("virtanen");

  const { getByText } = within(getByTestId("combination"));
  expect(getByText("kortanen")).toBeInTheDocument()

});
