import { render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';
import { describe, it, expect } from 'vitest';

describe('SearchInput Component', () => {
  it('Should be visible', () => {
    render(<SearchInput handleSearch={() => null} />);
    expect(screen.getAllByRole('text').toBeInTheDocument());
  });
});
