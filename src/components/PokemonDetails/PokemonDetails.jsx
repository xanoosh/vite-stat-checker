import { useState, useEffect } from 'react';
import { getStatAndEvData, formatStatName } from '../../utils/functions';
import TypeBadge from '../TypeBadge/TypeBadge';
import PokemonStats from './PokemonStats';
import PokemonForm from './PokemonForm';
import AlertComponent from '../AlertComponent/AlertComponent';

export default function PokemonDetails({ response }) {
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
                <TypeBadge
                  key={typeObj.type.name}
                  typeName={typeObj.type.name}
                />
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
      <PokemonStats
        stats={stats}
        statModifiers={statModifiers}
        setStatModifiers={setStatModifiers}
        level={level}
        nature={nature}
      />
      <PokemonForm
        nature={nature}
        setNature={setNature}
        level={level}
        setLevel={setLevel}
        setStatModifiers={setStatModifiers}
      />
      <AlertComponent
        setLevel={setLevel}
        setNature={setNature}
        setStatModifiers={setStatModifiers}
      />
    </div>
  );
}
