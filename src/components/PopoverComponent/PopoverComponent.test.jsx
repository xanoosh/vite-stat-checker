import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PopoverComponent from './PopoverComponent.jsx';
import { describe, it, expect } from 'vitest';

describe('PopoverComponent', () => {
  it('popover-trigger should be visible', () => {
    const { container } = render(<PopoverComponent />);
    expect(container.querySelector('.popover-trigger')).toBeInTheDocument();
  });

  // const setEvMock = vi.fn();
  // const setIvMock = vi.fn();
  // it('popover-content should be visible when trigger is clicked', async () => {
  //   const { container } = render(
  //     <PopoverComponent
  //       name="test-name"
  //       iv={31}
  //       ev={0}
  //       setEv={setEvMock}
  //       setIv={setIvMock}
  //     />
  //   );
  //   fireEvent.click(container.querySelector('.popover-trigger'));
  //   await waitFor(() =>
  //     expect(container.querySelector('.popover-content')).toBeInTheDocument()
  //   );
  // });
});
