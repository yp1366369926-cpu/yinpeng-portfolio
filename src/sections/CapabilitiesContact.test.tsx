import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('capabilities and contact', () => {
  it('renders the capability list and final contact destination', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /capabilities/i })).toBeInTheDocument();
    expect(screen.getByText(/design leadership/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /have a project in mind/i })).toBeInTheDocument();
    const contactCta = screen.getAllByRole('link', { name: /let's talk/i }).find((link) => link.getAttribute('href') === '#contact');
    expect(contactCta).toBeDefined();
  });
});
