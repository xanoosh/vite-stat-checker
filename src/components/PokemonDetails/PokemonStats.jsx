import StatRow from '../StatRow/StatRow';
import { formatStatName } from '../../utils/functions';
import { useContext } from 'react';
import { CompareStatsPageContext } from '../../pages/CompareStatsPage';

export default function PokemonStats({ stats, position = null }) {
  const { equationArray } = useContext(CompareStatsPageContext) || {
    simplified: false,
  };
  return (
    stats?.length && (
      <>
        {stats.map((el, i) => (
          <StatRow
            key={i}
            formattedName={formatStatName(el.name)}
            data={el}
            isHigher={equationArray[i] === position}
          />
        ))}
      </>
    )
  );
}
