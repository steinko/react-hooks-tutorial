import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Display Hello World'))
  const linkElement = screen.getByText("Hello World");
  expect(linkElement).toBeInTheDocument();
});
