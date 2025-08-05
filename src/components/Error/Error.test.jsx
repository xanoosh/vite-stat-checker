import Error from './Error.jsx';
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

describe('Error Component Dialog', () => {
  it('element with role "alertdialog" should be visible', () => {
    renderWithProviders(
      <MemoryRouter>
        <Error />
      </MemoryRouter>,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );

    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
  });

  it('element with role "alertdialog" should have class "error"', () => {
    renderWithProviders(
      <MemoryRouter>
        <Error />
      </MemoryRouter>,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );

    expect(screen.getByRole('alertdialog')).toHaveClass('error');
  });

  it('should display text: "An unexpected error has occured"', () => {
    renderWithProviders(
      <MemoryRouter>
        <Error />
      </MemoryRouter>,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );

    expect(
      screen.getByText('An unexpected error has occured')
    ).toBeInTheDocument();
  });
  it('text "An unexpected error has occured" should be displayed within element with class "alert-heading"', () => {
    renderWithProviders(
      <MemoryRouter>
        <Error />
      </MemoryRouter>,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );

    expect(screen.getByText('An unexpected error has occured')).toHaveClass(
      'alert-heading'
    );
  });
  it('should display text: "Click a button below to reset data & settings and fix this issue."', () => {
    renderWithProviders(
      <MemoryRouter>
        <Error />
      </MemoryRouter>,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );

    expect(
      screen.getByText(
        'Click a button below to reset data & settings and fix this issue.'
      )
    ).toBeInTheDocument();
  });
  it('should display button with a name "Reset"', () => {
    renderWithProviders(
      <MemoryRouter>
        <Error />
      </MemoryRouter>,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );

    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });
});
