import { render } from '@testing-library/react';
import StatRow from './StatRow.jsx';
import { describe, it, expect } from 'vitest';

describe('StatRow Component', () => {
  it('should be visible', () => {
    const { container } = render(
      <StatRow
        data={{
          name: 'stat',
          base_stat: 1,
        }}
        level={1}
        iv={31}
        ev={0}
        nature="Neutral"
      />
    );
    expect(container.querySelector('.stat-row')).toBeInTheDocument();
  });
});
