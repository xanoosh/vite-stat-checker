import { render, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput.jsx';
import { describe, it, expect, vi } from 'vitest';

describe('SearchInput Component', () => {
  const mockFunction = vi.fn();

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
  it('should have value equal to typed text', () => {
    const { container } = render(<SearchInput />);
    fireEvent.change(container.querySelector('input'), {
      target: { value: 'test-value' },
    });
    expect(container.querySelector('input')).toHaveValue('test-value');
  });
  it('should have placeholder equal to "type name here" if no placeholder prop is passed', () => {
    const { container } = render(<SearchInput />);
    expect(container.querySelector('input')).toHaveAttribute(
      'placeholder',
      'type name here'
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
  it('handleSearch fn should not be called on input mount', () => {
    render(<SearchInput handleSearch={mockFunction} />);
    expect(mockFunction).not.toHaveBeenCalled();
  });
  it('handleSearch fn should be called on on each input change event', () => {
    const { container } = render(<SearchInput handleSearch={mockFunction} />);
    const input = container.querySelector('input');
    fireEvent.change(input, {
      target: { value: 'x' },
    });
    fireEvent.change(input, {
      target: { value: 'xy' },
    });
    fireEvent.change(input, {
      target: { value: 'xyz' },
    });
    expect(mockFunction).toHaveBeenCalledTimes(3);
  });
});
