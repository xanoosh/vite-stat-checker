import { render } from '@testing-library/react';
import Loader from './Loader.jsx';
import { describe, it, expect, vi } from 'vitest';

describe('Loader Component', () => {
  it('should be visible if loading prop is true', () => {
    const { container } = render(<Loader loading={true} />);
    expect(container.querySelector('.loader')).toBeInTheDocument();
  });
  it('should not be visible if loading prop is false', () => {
    const { container } = render(<Loader loading={false} />);
    expect(container.querySelector('.loader')).not.toBeInTheDocument();
  });
  it('should not be visible if loading prop is not passed (undefined)', () => {
    const { container } = render(<Loader />);
    expect(container.querySelector('.loader')).not.toBeInTheDocument();
  });
  it('should have svg', () => {
    const { container } = render(<Loader loading={true} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
