import { render, screen, fireEvent } from '@testing-library/react';
import NumberInput from './NumberInput.jsx';
import { describe, it, expect, vi } from 'vitest';

describe('NumberInput Component', () => {
  it('element class "number-input-container" should be visible', () => {
    const { container } = render(<NumberInput />);
    expect(
      container.querySelector('.number-input-container')
    ).toBeInTheDocument();
  });
  it('"number-input-container" should have class "label-top" if labelPosition prop = "top"', () => {
    const { container } = render(<NumberInput labelPosition="top" />);
    expect(container.querySelector('.number-input-container')).toHaveClass(
      'label-top'
    );
  });
  it('element class "number-input" should be visible', () => {
    const { container } = render(<NumberInput />);
    expect(container.querySelector('.number-input')).toBeInTheDocument();
  });
  it('"number-input" should have class "bg-light" if background prop is not passed', () => {
    const { container } = render(<NumberInput />);
    expect(container.querySelector('.number-input')).toHaveClass('bg-light');
  });
  it('"number-input" should have class "bg-dark" if background prop = "dark"', () => {
    const { container } = render(<NumberInput background="dark" />);
    expect(container.querySelector('.number-input')).toHaveClass('bg-dark');
  });

  it('should have input', () => {
    const { container } = render(<NumberInput />);
    expect(container.querySelector('input')).toBeInTheDocument();
  });
  it('input should should be type =  number', () => {
    const { container } = render(<NumberInput />);
    expect(container.querySelector('input')).toHaveAttribute('type', 'number');
  });
  it('input should have value equal to value prop', () => {
    const { container } = render(<NumberInput value={1} />);
    expect(container.querySelector('input').value).toBe('1');
  });
  it('input should have min attribute equal to min prop', () => {
    const { container } = render(<NumberInput min={1} />);
    expect(container.querySelector('input')).toHaveAttribute('min', '1');
  });
  it('input should have max attribute equal to max prop', () => {
    const { container } = render(<NumberInput max={3} />);
    expect(container.querySelector('input')).toHaveAttribute('max', '3');
  });
  it('input should have id equal to id prop', () => {
    const { container } = render(<NumberInput id="test-id" />);
    expect(container.querySelector('input')).toHaveAttribute('id', 'test-id');
  });
  it('component should have 2 buttons', () => {
    const { container } = render(<NumberInput />);
    expect(container.querySelectorAll('button').length).toBe(2);
  });
  it('component should have label if id&label props are passed', () => {
    render(<NumberInput id="test-id" label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  const setValueMock = vi.fn();
  it('should call passed setValue function on each button click & input change', () => {
    const { container } = render(
      <NumberInput value={0} setValue={setValueMock} />
    );
    fireEvent.click(container.querySelector('.increment-button'));
    fireEvent.click(container.querySelector('.decrement-button'));
    fireEvent.change(container.querySelector('input'), {
      target: { value: '1' },
    });
    expect(setValueMock).toHaveBeenCalledTimes(3);
  });
});
