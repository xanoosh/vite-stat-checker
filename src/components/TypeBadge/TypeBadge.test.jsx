import { render, screen } from '@testing-library/react';
import TypeBadge from './TypeBadge.jsx';
import { describe, it, expect, vi } from 'vitest';

describe('TypeBadge Component', () => {
  it('component with class "type-badge" should be visible', () => {
    const { container } = render(<TypeBadge typeName="test-type" />);
    expect(container.querySelector('.type-badge')).toBeInTheDocument();
  });
  it('component with class "type-badge" should not be visible if typeName prop is not defined ', () => {
    const { container } = render(<TypeBadge />);
    expect(container.querySelector('.type-badge')).not.toBeInTheDocument();
  });
  it('component should display text from typeName prop', () => {
    render(<TypeBadge typeName="test-type" />);
    expect(screen.getByText('test-type')).toBeInTheDocument();
  });
});
