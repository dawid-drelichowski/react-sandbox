import { render, screen, act } from '@testing-library/react';
import App from './App.tsx';

describe('App Component', () => {
  it('renders Vite and React logos', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  it('displays the initial count', () => {
    render(<App />);
    const countButton = screen.getByRole('button', { name: /count is 0/i });
    
    expect(countButton).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<App />);
    const countButton = screen.getByRole('button', { name: /count is 0/i });
    
    act(() => countButton.click());
    
    expect(countButton).toHaveTextContent('count is 1');
  });

  it('contains a link to Vite documentation', () => {
    render(<App />);
    const viteLink = screen.getByRole('link', { name: 'Vite logo' });
    
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev');
  });

  it('contains a link to React documentation', () => {
    render(<App />);
    const reactLink = screen.getByRole('link', { name: 'React logo' });
    
    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
  });
});
