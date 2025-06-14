import { render } from '@testing-library/react';
import SearchInput from './SearchInput.jsx';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

describe('SearchInput Component', () => {
  const mockSetValue = vi.fn();

  it('should be visible', () => {
    const { container } = render(<SearchInput />);
    expect(container.querySelector('input')).toBeInTheDocument();
  });
  it('should be text input', () => {
    const { container } = render(<SearchInput />);
    expect(container.querySelector('input')).toHaveAttribute('type', 'text');
  });
  it('should have class "search-input"', () => {
    const { container } = render(<SearchInput />);
    expect(container.querySelector('input')).toHaveClass('search-input');
  });
  it('should not have value on mount', () => {
    const { container } = render(<SearchInput />);
    expect(container.querySelector('input')).toHaveValue('');
  });
  it('should have value equal to typed text', async () => {
    const { container } = render(<SearchInput setValue={mockSetValue} />);

    await user.type(container.querySelector('input'), 'test-value');
    expect(container.querySelector('input')).toHaveValue('test-value');
  });
  it('should have placeholder equal to "Search by name" if no placeholder prop is passed', () => {
    const { container } = render(<SearchInput />);
    expect(container.querySelector('input')).toHaveAttribute(
      'placeholder',
      'Search by name'
    );
  });
  it('should have placeholder equal to placeholder prop', () => {
    const { container } = render(
      <SearchInput placeholder="test-placeholder" />
    );
    expect(container.querySelector('input')).toHaveAttribute(
      'placeholder',
      'test-placeholder'
    );
  });

  it('setValue fn should be called when user is typing', async () => {
    const { container } = render(<SearchInput setValue={mockSetValue} />);
    const input = container.querySelector('input');

    await user.type(input, 'x');
    expect(mockSetValue).toHaveBeenCalled();
  });
});
