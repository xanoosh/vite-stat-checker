import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SelectComponent from './SelectComponent.jsx';
import { describe, it, expect, vi } from 'vitest';

describe('SelectComponent', () => {
  it('should be visible if items array is passed', () => {
    const { container } = render(<SelectComponent items={['item']} />);
    expect(container.querySelector('.select-container')).toBeInTheDocument();
  });
  it('should not be visible if items array is not passed', () => {
    const { container } = render(<SelectComponent />);
    expect(
      container.querySelector('.select-container')
    ).not.toBeInTheDocument();
  });
  it('should not be visible if items array is empty', () => {
    const { container } = render(<SelectComponent items={[]} />);
    expect(
      container.querySelector('.select-container')
    ).not.toBeInTheDocument();
  });
  it('trigger button should display text equal to value prop', () => {
    render(<SelectComponent items={['item']} value={'item'} />);
    expect(screen.getByText('item')).toBeInTheDocument();
  });
  it('trigger button should have id equal to id prop is passed', () => {
    const { container } = render(
      <SelectComponent items={['item']} id="test-id" />
    );
    expect(container.querySelector('button.select-trigger')).toHaveAttribute(
      'id',
      'test-id'
    );
  });
  it('should display label if label&id prop is passed', () => {
    render(
      <SelectComponent items={['item']} id="test-id" label="test-label" />
    );
    expect(screen.getByLabelText('test-label')).toBeInTheDocument();
  });
  it('trigger button should have attribute "aria-expanded=false"', () => {
    render(<SelectComponent items={['item']} value="item" />);
    const triggerButton = screen.getByRole('combobox');
    expect(triggerButton).toHaveAttribute('aria-expanded', 'false');
  });
  //   it('trigger button should have attribute "aria-expanded=true" when clicked', async () => {
  //     render(<SelectComponent items={['item']} value="item" />);
  //     const triggerButton = screen.getByRole('combobox');

  //     await waitFor(() => fireEvent.click(triggerButton));
  //     await waitFor(() =>
  //       expect(triggerButton).toHaveAttribute('aria-expanded', 'true')
  //     );
  //   });

  //   const onValueChangeMock = vi.fn();
  //   it('should call passed setValue function on each button click & input change', () => {
  //     const { container } = render(
  //       <SelectComponent
  //         items={['item']}
  //         value="item"
  //         onValueChange={onValueChangeMock}
  //       />
  //     );
  //     fireEvent.click(container.querySelector('button.select-trigger'));
  //     expect(setValueMock).toHaveBeenCalledTimes(1);
  //   });
});
