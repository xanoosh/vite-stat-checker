import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PopoverComponent from './PopoverComponent.jsx';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../tests/test-utils.jsx';

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

describe('PopoverComponent', () => {
  it('popover-trigger should not be visible is name prop is not passed', () => {
    const { container } = renderWithProviders(<PopoverComponent />, {
      preloadedState: {
        pokemonData: initialPokemonData,
      },
    });
    expect(container.querySelector('.popover-trigger')).not.toBeInTheDocument();
  });

  it('popover-trigger should be visible is name prop is passed', async () => {
    const { container } = renderWithProviders(
      <PopoverComponent name="attack" />,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );
    expect(container.querySelector('.popover-trigger')).toBeInTheDocument();
  });
  it('popover-content should be visible when trigger is clicked', async () => {
    const { container } = renderWithProviders(
      <PopoverComponent name="attack" />,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );
    fireEvent.click(container.querySelector('.popover-trigger'));
    await waitFor(() =>
      expect(document.querySelector('.popover-content')).toBeInTheDocument()
    );
  });
});
