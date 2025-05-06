import StatRowPopover from '../PopoverComponent/PopoverComponent';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  StarFilledIcon,
} from '@radix-ui/react-icons';
import { calculateStatFormula, getNatureModifier } from '../../utils/functions';
import { useSelector } from 'react-redux';
import { useEffect, useState, useContext } from 'react';
import { CompareStatsPageContext } from '../../pages/CompareStatsPage';

function StatRow({ formattedName, data, isHigher = false }) {
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

  const { simplified } = useContext(CompareStatsPageContext) || {
    simplified: false,
  };

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
      <div className={`stat-container ${simplified ? 'simplified-view' : ''}`}>
        <span className="stat-name">{formattedName}</span>
        <div className="stat-badges">
          {Number(iv) === 31 || simplified ? null : (
            <div className="stat-badge down">
              IV <ArrowDownIcon />
            </div>
          )}
          {Number(ev) === 0 || simplified ? null : (
            <div className="stat-badge up">
              EV <ArrowUpIcon />
            </div>
          )}
          {isHigher && simplified ? (
            <div className="stat-badge higher">
              <StarFilledIcon />
            </div>
          ) : null}
        </div>
        <span className={statClassName}>{statValue}</span>
      </div>
      {simplified ? null : <StatRowPopover name={formattedName} />}
    </div>
  );
}

export default StatRow;
