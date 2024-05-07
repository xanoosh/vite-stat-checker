import { useState, useEffect } from 'react';
import { getStatAndEvData, formatStatName } from '../../utils/functions';
import StatRow from '../StatRow/StatRow';
import { naturesList } from '../../data';
import SelectComponent from '../SelectComponent/SelectComponent';
import NumberInput from '../NumberInput/NumberInput';
import TypeBadge from '../TypeBadge/TypeBadge';

export default function PokeInfo({ response }) {
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
      <div className="title-section">
        <h2>
          <span>{response.name}</span>
          <span className="id">#{response.id}</span>
        </h2>
      </div>
      <div className="basic-info">
        <div className="sprite">
          <img src={response.sprites.front_default} alt={response.name} />
        </div>
        <div className="types">
          {response.types.length
            ? response.types.map((typeObj) => (
                <TypeBadge typeName={typeObj.type.name} />
              ))
            : null}
        </div>
        <div className="ev-yield">
          <h2>EV yield</h2>
          {effortValues.length ? (
            <ul>
              {effortValues.map((el) => (
                <li key={el.name}>
                  {formatStatName(el.name)}: <span>{el.effort}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
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
      <div className="input-container">
        <NumberInput
          id="level"
          label="Level:"
          value={Number(level)}
          setValue={setLevel}
          labelPosition="top"
        />
        <SelectComponent
          id="nature"
          label="Nature:"
          items={naturesList}
          value={nature}
          onValueChange={setNature}
        />
      </div>
    </div>
  );
}
