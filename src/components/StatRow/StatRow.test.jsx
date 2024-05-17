import { render } from '@testing-library/react';
import StatRow from './StatRow.jsx';
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

const mockData = {
  name: 'special-attack',
  base_stat: 1,
};

describe('StatRow Component', () => {
  it('should be visible', () => {
    const { container } = render(
      <Provider store={store}>
        <StatRow name="spAttack" data={mockData} />
      </Provider>
    );
    expect(container.querySelector('.stat-row')).toBeInTheDocument();
  });
});
