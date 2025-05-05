import { useState, useEffect, useContext } from 'react';
import { getStatAndEvData, formatStatName } from '../../utils/functions';
import TypeBadge from '../TypeBadge/TypeBadge';
import PokemonStats from './PokemonStats';
import PokemonForm from './PokemonForm';
import AlertComponent from '../AlertComponent/AlertComponent';
import { CompareStatsPageContext } from '../../pages/CompareStatsPage';

export default function PokemonDetails({ response }) {
  const [effortValues, setEffortValues] = useState([]);
  const [stats, setStats] = useState(null);

  const { simplified } = useContext(CompareStatsPageContext) || {
    simplified: false,
  };

  // set stats
  useEffect(() => {
    const { effortValuesData, statsData } = getStatAndEvData(response);
    setEffortValues(effortValuesData);
    setStats(statsData);
  }, [response]);

  return (
    <div className={`poke-info ${simplified ? 'simplified' : ''}`}>
      <div className="title-section">
        <h2>
          <span>{response.name}</span>
          {simplified ? null : <span className="id">#{response.id}</span>}
        </h2>
      </div>
      {simplified ? null : (
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
      )}

      <PokemonStats stats={stats} />
      {simplified ? null : (
        <>
          <PokemonForm />
          <AlertComponent />
        </>
      )}
    </div>
  );
}
