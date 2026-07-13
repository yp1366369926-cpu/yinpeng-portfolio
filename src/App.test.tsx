import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('portfolio shell', () => {
  it('renders the portfolio identity and primary navigation', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /hi, i'm yin peng/i })).toBeInTheDocument();
    const projectLink = screen.getAllByRole('link', { name: /^projects$/i }).find((link) => link.getAttribute('href') === '#projects');
    expect(projectLink).toBeDefined();
  });
});
