import { render, screen } from '@testing-library/react';
import SelectComponent from './SelectComponent.jsx';
import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

const user = userEvent.setup();

window.HTMLElement.prototype.scrollIntoView = vi.fn();
window.HTMLElement.prototype.hasPointerCapture = vi.fn();
window.HTMLElement.prototype.releasePointerCapture = vi.fn();

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

  it('trigger button should have attribute "aria-expanded=true" when clicked', async () => {
    render(<SelectComponent items={['item']} value="item" />);
    const triggerButton = screen.getByRole('combobox');
    await user.click(triggerButton);
    expect(triggerButton).toHaveAttribute('aria-expanded', 'true');
  });

  it('should display list when trigger is clicked', async () => {
    render(
      <div>
        <SelectComponent items={['item']} value="item" />
      </div>
    );
    await user.click(screen.getByRole('combobox'));

    expect(screen.getByRole('listbox')).toBeInTheDocument();
  });

  it('should display options when trigger is clicked', async () => {
    render(
      <div>
        <SelectComponent items={['item']} value="item" />
      </div>
    );
    await user.click(screen.getByRole('combobox'));

    expect(screen.getByRole('option')).toBeInTheDocument();
  });

  it('should display options equal to provided items count', async () => {
    const mockItemsArray = ['test-item', 'test-item-2'];
    render(
      <div>
        <SelectComponent items={mockItemsArray} value="item" />
      </div>
    );
    await user.click(screen.getByRole('combobox'));

    expect(screen.getAllByRole('option').length).toBe(mockItemsArray.length);
  });
});
