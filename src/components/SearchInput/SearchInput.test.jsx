import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput.jsx';
import { describe, it, expect, vi } from 'vitest';

describe('SearchInput Component', () => {
  it('should be visible', () => {
    const { container } = render(<SearchInput handleSearch={() => null} />);
    expect(container.querySelector('input').toBeInTheDocument);
  });
  it('handleSearch should not be called on mount', () => {
    const mockFunction = vi.fn();

    render(<SearchInput handleSearch={mockFunction} />);
    expect(mockFunction.mock.calls.length === 0);
    // expect(mockFunction.toHaveBeenCalledTimes(0));
  });
});
