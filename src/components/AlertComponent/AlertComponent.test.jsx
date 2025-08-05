import AlertComponent from './AlertComponent.jsx';
import { screen } from '@testing-library/react';

import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../tests/test-utils.jsx';
import { MemoryRouter } from 'react-router-dom';

const initialPokemonData = {
  value: {
    statModifiers: {
      hp: { ev: 0, iv: 31 },
      attack: { ev: 0, iv: 31 },
      defense: { ev: 0, iv: 31 },
      spAttack: { ev: 0, iv: 31 },
      spDefense: { ev: 0, iv: 31 },
      speed: { ev: 0, iv: 31 },
    },
    nature: 'Neutral',
    level: 5,
  },
};

describe('AlertComponent', () => {
  it('should display button with a name "Reset"', () => {
    renderWithProviders(
      <MemoryRouter>
        <AlertComponent />
      </MemoryRouter>,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });

  it('element with role "alertdialog" should not be displayed when component is rendered', () => {
    renderWithProviders(
      <MemoryRouter>
        <AlertComponent />
      </MemoryRouter>,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );
    expect(() => screen.getByRole('alertdialog')).toThrowError();
  });
});
