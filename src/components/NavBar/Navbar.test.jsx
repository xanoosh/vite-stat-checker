import { render } from '@testing-library/react';
import NavBar from './NavBar.jsx';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

const mockNavigationArray = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

describe('Navbar Component', () => {
  it('should be visible', () => {
    const { container } = render(
      <MemoryRouter>
        <NavBar navigationArray={mockNavigationArray} />
      </MemoryRouter>
    );
    expect(container.querySelector('.nav-menu')).toBeInTheDocument();
  });
  it('should display navlink "should display elements with a count equal to passed array length', () => {
    const { container } = render(
      <MemoryRouter>
        <NavBar navigationArray={mockNavigationArray} />
      </MemoryRouter>
    );
    expect(container.querySelectorAll('.nav-link').length).toBe(
      mockNavigationArray.length
    );
  });
});
