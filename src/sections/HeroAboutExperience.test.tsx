import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('primary portfolio sections', () => {
  it('renders about, experience, education, awards, and contact details', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /about me/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByText(/首都师范大学科德学院/)).toBeInTheDocument();
    expect(screen.getByText(/花瓣认证签约 UI 设计师/)).toBeInTheDocument();
    const emailLinks = screen.getAllByRole('link', { name: /17600043819@163.com/i });
    expect(emailLinks.length).toBeGreaterThan(0);
    expect(emailLinks.every((link) => link.getAttribute('href') === 'mailto:17600043819@163.com')).toBe(true);
  });
});
