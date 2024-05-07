import { useEffect, useState } from 'react';
import { calculateStatFormula } from '../../utils/functions';
import StatRowPopover from '../PopoverComponent/PopoverComponent';
import { getNatureModifier, formatStatName } from '../../utils/functions';

function StatRow({ data, level, nature, iv = 31, ev = 0 }) {
  const [statValue, setStatValue] = useState(
    calculateStatFormula(data.name, data.base_stat, level, iv, ev, nature)
  );

  const [ivState, setIvState] = useState(iv);
  const [evState, setEvState] = useState(ev);

  useEffect(() => {
    const newStatValue = calculateStatFormula(
      data.name,
      data.base_stat,
      level,
      ivState,
      evState,
      nature
    );
    setStatValue(newStatValue);
  }, [evState, ivState, level, nature]);

  const statClassName = (() => {
    const modifier = getNatureModifier(data.name, nature);
    if (modifier > 1) return 'increased';
    if (modifier < 1) return 'decreased';
    return 'neutral';
  })();

  return (
    <div className="stat-row">
      <div className="span-container">
        <span>{formatStatName(data.name)}</span>
        <span className={statClassName}>{statValue}</span>
      </div>
      <StatRowPopover
        name={formatStatName(data.name)}
        iv={ivState}
        setIv={setIvState}
        ev={evState}
        setEv={setEvState}
      />
    </div>
  );
}

export default StatRow;
