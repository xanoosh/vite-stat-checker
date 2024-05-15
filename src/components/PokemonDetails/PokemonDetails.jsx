import { useState, useEffect } from 'react';
import { getStatAndEvData, formatStatName } from '../../utils/functions';
import TypeBadge from '../TypeBadge/TypeBadge';
import PokemonStats from './PokemonStats';
import PokemonForm from './PokemonForm';
import AlertComponent from '../AlertComponent/AlertComponent';

export default function PokemonDetails({ response }) {
  const [effortValues, setEffortValues] = useState([]);
  const [stats, setStats] = useState(null);

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
      <PokemonStats stats={stats} />
      <PokemonForm />
      <AlertComponent />
    </div>
  );
}
