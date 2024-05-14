import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button.jsx';
import { describe, it, expect, vi } from 'vitest';

describe('Button Component', () => {
  it('component should be visible', () => {
    const { container } = render(<Button />);
    expect(container.querySelector('button')).toBeInTheDocument();
  });
  it('component should display text equal to text prop', () => {
    render(<Button text="test-button" />);
    expect(screen.getByText('test-button')).toBeInTheDocument();
  });
  it('component should have className="main" if variant prop is not defined', () => {
    const { container } = render(<Button />);
    expect(container.querySelector('button')).toHaveClass('main');
  });
  it('component should have className="main" if variant prop = main', () => {
    const { container } = render(<Button variant="main" />);
    expect(container.querySelector('button')).toHaveClass('main');
  });
  it('component should have className="bordered" if variant prop = bordered', () => {
    const { container } = render(<Button variant="bordered" />);
    expect(container.querySelector('button')).toHaveClass('bordered');
  });
  it('component should have className="danger" if variant prop = danger', () => {
    const { container } = render(<Button variant="danger" />);
    expect(container.querySelector('button')).toHaveClass('danger');
  });
  const onClickMock = vi.fn();
  it('should call passed onClick function on each button click', () => {
    const { container } = render(<Button onClick={onClickMock} />);
    fireEvent.click(container.querySelector('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
