import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('project gallery', () => {
  it('renders all project cards with accessible actions', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /selected projects/i })).toBeInTheDocument();
    expect(screen.getAllByTestId('project-card')).toHaveLength(3);
    expect(screen.getAllByRole('link', { name: /view project/i })).toHaveLength(3);
  });
});
