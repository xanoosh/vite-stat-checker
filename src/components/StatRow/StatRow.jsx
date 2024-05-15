import StatRowPopover from '../PopoverComponent/PopoverComponent';
import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons';
import { calculateStatFormula, getNatureModifier } from '../../utils/functions';

function StatRow({
  formattedName,
  data,
  modifiedPokemonData,
  setModifiedPokemonData,
}) {
  const { statModifiers, nature, level } = modifiedPokemonData;
  const { ev, iv } = statModifiers[formattedName];

  const statValue = calculateStatFormula(
    data.name,
    data.base_stat,
    level,
    iv,
    ev,
    nature
  );

  const statClassName = (() => {
    const modifier = getNatureModifier(data.name, nature);
    if (modifier > 1) return 'increased';
    if (modifier < 1) return 'decreased';
    return 'neutral';
  })();

  return (
    <div className="stat-row">
      <div className="stat-container">
        <span className="stat-name">{formattedName}</span>
        <div className="stat-badges">
          {Number(iv) === 31 ? null : (
            <div className="stat-badge down">
              IV <ArrowDownIcon />
            </div>
          )}
          {Number(ev) === 0 ? null : (
            <div className="stat-badge up">
              EV <ArrowUpIcon />
            </div>
          )}
        </div>
        <span className={statClassName}>{statValue}</span>
      </div>
      <StatRowPopover
        name={formattedName}
        iv={iv}
        ev={ev}
        setModifiedPokemonData={setModifiedPokemonData}
      />
    </div>
  );
}

export default StatRow;
