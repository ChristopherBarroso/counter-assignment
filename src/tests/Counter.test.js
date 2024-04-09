// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import { fireEvent } from '@testing-library/react';

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const plusButton = screen.getByRole('button', {name: '+'});
  fireEvent.click(plusButton);
  const currCount = screen.getByTestId('count');
  expect(currCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const minusButton = screen.getByRole('button', {name: '-'});
  fireEvent.click(minusButton);
  const currCount = screen.getByTestId('count');
  expect(currCount).toHaveTextContent('-1');
});
