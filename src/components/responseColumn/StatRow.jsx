import { useEffect, useState } from 'react';
import { calculateStatFormula } from '../../utils/functions';
import StatRowPopover from './StatRowPopover';

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

  const handleChangeIv = (e) => {
    setIvState(Number(e.target.value));
  };
  const handleChangeEv = (e) => {
    setEvState(Number(e.target.value));
  };

  return (
    <div className="stat-row">
      <div className="span-container">
        <span>{data.name}</span>
        <span>{statValue}</span>
      </div>
      <StatRowPopover
        name={data.name}
        iv={ivState}
        handleChangeIv={handleChangeIv}
        ev={evState}
        handleChangeEv={handleChangeEv}
      />
    </div>
  );
}

export default StatRow;
