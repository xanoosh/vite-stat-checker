import StatRow from '../StatRow/StatRow';
import { formatStatName } from '../../utils/functions';

export default function PokemonStats({
  stats,
  statModifiers,
  setStatModifiers,
  level,
  nature,
}) {
  return (
    stats?.length && (
      <>
        {stats.map((el) => (
          <StatRow
            key={el.base_stat + el.name}
            formattedName={formatStatName(el.name)}
            data={el}
            level={level}
            nature={nature}
            statModifiers={statModifiers}
            setStatModifiers={setStatModifiers}
          />
        ))}
      </>
    )
  );
}
