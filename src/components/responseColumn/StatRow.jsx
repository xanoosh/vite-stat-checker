import { useEffect, useState } from 'react';
import { calculateStatFormula } from '../../utils/functions';
import StatRowPopover from './StatRowPopover';

function StatRow({ data, level, iv = 31, ev = 0 }) {
  const [statValue, setStatValue] = useState(
    calculateStatFormula(data.name, data.base_stat, level, iv, ev)
  );

  const [ivState, setIvState] = useState(iv);
  const [evState, setEvState] = useState(ev);

  useEffect(() => {
    console.log('change');
    const newStatValue = calculateStatFormula(
      data.name,
      data.base_stat,
      level,
      ivState,
      evState
    );
    setStatValue(newStatValue);
  }, [evState, ivState]);

  const handleChangeIv = (e) => {
    setIvState(Number(e.target.value));
  };
  const handleChangeEv = (e) => {
    setEvState(Number(e.target.value));
  };

  return (
    <div className="stat-row">
      <span>{data.name}</span>
      <span>{statValue}</span>
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
