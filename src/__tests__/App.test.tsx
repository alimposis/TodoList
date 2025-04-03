import { render, screen } from '@testing-library/react';
import App from '@/App';
import '@testing-library/jest-dom';

describe('App', () => {
  it('Список задач', () => {
    render(<App />);
    const titleElement = screen.getByText(/Список задач/i);
    expect(titleElement).toBeInTheDocument();
  });
});