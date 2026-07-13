import { describe, expect, it } from 'vitest';
import { portfolio } from './portfolio';

describe('portfolio content', () => {
  it('uses the confirmed identity and excludes deleted resume content', () => {
    expect(portfolio.identity.displayName).toBe('YIN PENG');
    expect(JSON.stringify(portfolio)).not.toMatch(/外包|outsourc|近百万|near-million/i);
  });

  it('contains the three resume experience entries in chronological order', () => {
    expect(portfolio.experience).toHaveLength(3);
    expect(portfolio.experience.map((item) => item.period)).toEqual([
      '2019.07 — 2021.08',
      '2021.08 — 2023.04',
      '2023.07 — 2025.05',
    ]);
  });
});
