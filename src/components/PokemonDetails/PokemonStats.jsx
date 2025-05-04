import StatRow from '../StatRow/StatRow';
import { formatStatName } from '../../utils/functions';

export default function PokemonStats({ stats, simplifiedView }) {
  return (
    stats?.length && (
      <>
        {stats.map((el) => (
          <StatRow
            key={el.base_stat + el.name}
            formattedName={formatStatName(el.name)}
            data={el}
            simplifiedView={simplifiedView}
          />
        ))}
      </>
    )
  );
}
