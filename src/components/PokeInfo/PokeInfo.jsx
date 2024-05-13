import { useState, useEffect } from 'react';
import { getStatAndEvData, formatStatName } from '../../utils/functions';
import StatRow from '../StatRow/StatRow';
import { naturesList } from '../../data';
import SelectComponent from '../SelectComponent/SelectComponent';
import NumberInput from '../NumberInput/NumberInput';
import TypeBadge from '../TypeBadge/TypeBadge';
import Button from '../Button/Button';

export default function PokeInfo({ response }) {
  const [effortValues, setEffortValues] = useState([]);
  const [stats, setStats] = useState(null);
  const [nature, setNature] = useState(
    localStorage.getItem('nature') || 'Neutral'
  );
  const [level, setLevel] = useState(localStorage.getItem('level') || 5);
  const [statModifiers, setStatModifiers] = useState(
    localStorage.getItem('stat-modifiers')
      ? JSON.parse(localStorage.getItem('stat-modifiers'))
      : {
          hp: { ev: 0, iv: 31 },
          attack: { ev: 0, iv: 31 },
          defense: { ev: 0, iv: 31 },
          spAttack: { ev: 0, iv: 31 },
          spDefense: { ev: 0, iv: 31 },
          speed: { ev: 0, iv: 31 },
        }
  );

  // set local storage data on change
  useEffect(() => {
    localStorage.setItem('nature', nature);
  }, [nature]);
  useEffect(() => {
    localStorage.setItem('level', level);
  }, [level]);
  useEffect(() => {
    localStorage.setItem('stat-modifiers', JSON.stringify(statModifiers));
  }, [statModifiers]);
  // set stats
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
      {stats?.length &&
        stats.map((el) => (
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
        <div style={{ marginTop: '1rem' }}>
          <Button
            variant="main"
            text="Reset all"
            onClick={() => {
              setStatModifiers({
                hp: { ev: 0, iv: 31 },
                attack: { ev: 0, iv: 31 },
                defense: { ev: 0, iv: 31 },
                spAttack: { ev: 0, iv: 31 },
                spDefense: { ev: 0, iv: 31 },
                speed: { ev: 0, iv: 31 },
              });
              setNature('Neutral');
              setLevel(5);
            }}
          />
        </div>
      </div>
    </div>
  );
}
