import StatRowPopover from '../PopoverComponent/PopoverComponent';
import { ArrowDownIcon, ArrowUpIcon } from '@radix-ui/react-icons';
import { calculateStatFormula, getNatureModifier } from '../../utils/functions';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function StatRow({ formattedName, data }) {
  const pokemonDataState = useSelector((state) => state.pokemonData.value);
  const {
    level,
    nature,
    statModifiers: {
      [formattedName]: { ev, iv },
    },
  } = pokemonDataState;

  const [statValue, setStatValue] = useState(
    calculateStatFormula(data.name, data.base_stat, level, iv, ev, nature)
  );

  useEffect(() => {
    const newStatValue = calculateStatFormula(
      data.name,
      data.base_stat,
      level,
      iv,
      ev,
      nature
    );
    setStatValue(newStatValue);
  }, [pokemonDataState]);

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
      <StatRowPopover name={formattedName} />
    </div>
  );
}

export default StatRow;
