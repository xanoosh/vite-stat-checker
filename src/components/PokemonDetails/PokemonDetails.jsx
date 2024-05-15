import { useState, useEffect } from 'react';
import { getStatAndEvData, formatStatName } from '../../utils/functions';
import TypeBadge from '../TypeBadge/TypeBadge';
import PokemonStats from './PokemonStats';
import PokemonForm from './PokemonForm';
import AlertComponent from '../AlertComponent/AlertComponent';

export default function PokemonDetails({ response }) {
  const defaultPokemonData = {
    statModifiers: {
      hp: { ev: 0, iv: 31 },
      attack: { ev: 0, iv: 31 },
      defense: { ev: 0, iv: 31 },
      spAttack: { ev: 0, iv: 31 },
      spDefense: { ev: 0, iv: 31 },
      speed: { ev: 0, iv: 31 },
    },
    nature: 'Neutral',
    level: 5,
  };

  const [effortValues, setEffortValues] = useState([]);
  const [stats, setStats] = useState(null);

  const [modifiedPokemonData, setModifiedPokemonData] = useState(
    localStorage.getItem('modified-pokemon-data')
      ? JSON.parse(localStorage.getItem('modified-pokemon-data'))
      : defaultPokemonData
  );

  // set local storage data on change
  useEffect(() => {
    localStorage.setItem(
      'modified-pokemon-data',
      JSON.stringify(modifiedPokemonData)
    );
  }, [modifiedPokemonData]);

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
        modifiedPokemonData={modifiedPokemonData}
        setModifiedPokemonData={setModifiedPokemonData}
      />
      <PokemonForm
        nature={modifiedPokemonData.nature}
        level={modifiedPokemonData.level}
        setModifiedPokemonData={setModifiedPokemonData}
      />
      <AlertComponent
        modifiedPokemonData={modifiedPokemonData}
        setModifiedPokemonData={setModifiedPokemonData}
        defaultPokemonData={defaultPokemonData}
      />
    </div>
  );
}
