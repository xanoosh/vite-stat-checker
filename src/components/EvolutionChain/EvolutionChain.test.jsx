import { render } from '@testing-library/react';
import EvolutionChain from './EvolutionChain.jsx';
import { describe, it, expect, vi } from 'vitest';

const mockDataArray = [
  { name: 'bulbasaur', id: 1 },
  { name: 'ivysaur', id: 2 },
  { name: 'venusaur', id: 3 },
];

describe('EvolutionChain Component', () => {
  it('should be visible', () => {
    const { container } = render(
      <EvolutionChain data={mockDataArray} loading={false} />
    );
    expect(
      container.querySelector('.evolution-chain-container')
    ).toBeInTheDocument();
  });
  it('should display loader if loading property = true and data prop is not provided', () => {
    const { container } = render(<EvolutionChain data={null} loading={true} />);
    expect(
      container.querySelector('.evolution-chain-container')
    ).not.toBeInTheDocument();
  });
});
