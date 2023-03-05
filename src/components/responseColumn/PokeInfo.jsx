import { useState, useEffect } from 'react';
import { getStatAndEvData } from '../../utils/functions';
import StatRow from './StatRow';
import { naturesList } from '../../data';

function PokeInfo({ response }) {
  const [effortValues, setEffortValues] = useState([]);
  const [stats, setStats] = useState(null);
  const [level, setLevel] = useState(localStorage.getItem('level') || 5);
  const [nature, setNature] = useState('Neutral');

  useEffect(() => {
    const { effortValuesData, statsData } = getStatAndEvData(response);
    setEffortValues(effortValuesData);
    setStats(statsData);
  }, [response]);

  return (
    <div className="poke-info">
      <h2>{response.name}</h2>
      <img src={response.sprites.front_default} alt={response.name} />
      <p>id: {response.id}</p>
      <h3>Stats:</h3>
      {stats?.length &&
        stats.map((el) => (
          <StatRow
            key={el.base_stat + el.name}
            data={el}
            level={level}
            nature={nature}
          />
        ))}
      <p>level:</p>
      <input
        type="number"
        value={level}
        onChange={(e) => {
          setLevel(e.target.value);
          localStorage.setItem('level', e.target.value);
        }}
      />
      <p>nature</p>
      <select
        name="nature"
        id="a"
        value={nature}
        onChange={(e) => setNature(e.target.value)}
      >
        {naturesList.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
      <p>IVs:</p>
      {effortValues.length &&
        effortValues.map((el) => (
          <p key={el.name}>
            {el.name}: {el.effort}
          </p>
        ))}
    </div>
  );
}

export default PokeInfo;
