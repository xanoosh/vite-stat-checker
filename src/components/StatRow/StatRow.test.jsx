import StatRow from './StatRow.jsx';
import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../tests/test-utils.jsx';
import { CompareStatsPageContext } from '../../pages/CompareStatsPage.jsx';

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

const mockData = {
  name: 'special-attack',
  base_stat: 1,
};

describe('StatRow Component', () => {
  it('should be visible', () => {
    const { container } = renderWithProviders(
      <StatRow formattedName="spAttack" data={mockData} />,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );
    expect(container.querySelector('.stat-row')).toBeInTheDocument();
  });
  it('should not have class simplified-view if context simplified value = false', () => {
    const { container } = renderWithProviders(
      <CompareStatsPageContext.Provider value={{ simplified: false }}>
        <StatRow formattedName="spAttack" data={mockData} />
      </CompareStatsPageContext.Provider>,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );
    expect(
      container.querySelector('.stat-row .stat-container')
    ).not.toHaveClass('simplified');
  });
  it('should have class simplified-view if context simplified value = true', () => {
    const { container } = renderWithProviders(
      <CompareStatsPageContext.Provider value={{ simplified: true }}>
        <StatRow formattedName="spAttack" data={mockData} />
      </CompareStatsPageContext.Provider>,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );
    expect(container.querySelector('.stat-row .stat-container')).toHaveClass(
      'simplified-view'
    );
  });
  it('should display an icon if context simplified val = true AND prop isHigher = false', () => {
    const { container } = renderWithProviders(
      <CompareStatsPageContext.Provider value={{ simplified: true }}>
        <StatRow formattedName="spAttack" data={mockData} isHigher={false} />
      </CompareStatsPageContext.Provider>,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );
    expect(
      container.querySelector('.stat-badge.higher')
    ).not.toBeInTheDocument();
  });
  it('should display an icon if context simplified val AND prop isHigher = true', () => {
    const { container } = renderWithProviders(
      <CompareStatsPageContext.Provider value={{ simplified: true }}>
        <StatRow formattedName="spAttack" data={mockData} isHigher={true} />
      </CompareStatsPageContext.Provider>,
      {
        preloadedState: {
          pokemonData: initialPokemonData,
        },
      }
    );
    expect(container.querySelector('.stat-badge.higher')).toBeInTheDocument();
  });
});
