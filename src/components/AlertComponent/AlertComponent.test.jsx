import AlertComponent from './AlertComponent.jsx';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../tests/test-utils.jsx';
import { MemoryRouter } from 'react-router-dom';

const changedPokemonData = {
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
    level: 6,
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
          pokemonData: changedPokemonData,
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
          pokemonData: changedPokemonData,
        },
      }
    );
    expect(() => screen.getByRole('alertdialog')).toThrowError();
  });

  it('trigger button should not be disabled', () => {
    renderWithProviders(
      <MemoryRouter>
        <AlertComponent />
      </MemoryRouter>,
      {
        preloadedState: {
          pokemonData: changedPokemonData,
        },
      }
    );

    expect(screen.getByRole('button', { name: 'Reset' })).not.toBeDisabled();
  });

  it('element with role "alertdialog" should be displayed when Reset button is clicked', async () => {
    renderWithProviders(
      <MemoryRouter>
        <AlertComponent />
      </MemoryRouter>,
      {
        preloadedState: {
          pokemonData: changedPokemonData,
        },
      }
    );
    await userEvent.click(screen.getByRole('button', { name: 'Reset' }));
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
  });
});
