import StatRow from '../StatRow/StatRow';
import { formatStatName } from '../../utils/functions';

export default function PokemonStats({
  stats,
  modifiedPokemonData,
  setModifiedPokemonData,
}) {
  return (
    stats?.length && (
      <>
        {stats.map((el) => (
          <StatRow
            key={el.base_stat + el.name}
            formattedName={formatStatName(el.name)}
            data={el}
            modifiedPokemonData={modifiedPokemonData}
            setModifiedPokemonData={setModifiedPokemonData}
          />
        ))}
      </>
    )
  );
}
