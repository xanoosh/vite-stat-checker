import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PopoverComponent from './PopoverComponent.jsx';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const store = mockStore({
  pokemonData: {
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
  },
});

describe('PopoverComponent', () => {
  it('popover-trigger should be visible is name prop is passed', async () => {
    const { container } = render(
      <Provider store={store}>
        <PopoverComponent name="attack" />
      </Provider>
    );

    expect(container.querySelector('.popover-trigger')).toBeInTheDocument();
  });

  it('popover-content should be visible when trigger is clicked', async () => {
    const { container } = render(
      <Provider store={store}>
        <section>
          <PopoverComponent name="attack" />
        </section>
      </Provider>
    );
    fireEvent.click(container.querySelector('.popover-trigger'));
    await waitFor(() =>
      expect(
        container.querySelector('section .popover-content')
      ).toBeInTheDocument()
    );
  });
});
