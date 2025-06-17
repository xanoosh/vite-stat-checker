import { useState, useEffect, useContext } from 'react';
import {
  getStatAndEvData,
  formatStatName,
  formatPokemonName,
  isGmax,
  isMega,
} from '../../utils/functions';
import megaimgpath from '../../assets/mega.webp';
import gmaximgpath from '../../assets/gmax.webp';
import TypeBadge from '../TypeBadge/TypeBadge';
import PokemonStats from './PokemonStats';
import PokemonForm from './PokemonForm';
import AlertComponent from '../AlertComponent/AlertComponent';
import { CompareStatsPageContext } from '../../pages/CompareStatsPage';
import EvolutionChain from '../EvolutionChain/EvolutionChain';
import { usePokemonSpecies } from '../../hooks/usePokemonSpecies';
import { usePokemonEvolutionChain } from '../../hooks/usePokemonEvolutionChain';

export default function PokemonDetails({ response, position = null }) {
  const [effortValues, setEffortValues] = useState([]);
  const [stats, setStats] = useState(null);

  const { simplified } = useContext(CompareStatsPageContext) || {
    simplified: false,
  };

  //fetch evolution chain
  const { data: pokemonSpeciesEvolutionUrl } = usePokemonSpecies({
    url: response?.species?.url,
  });
  const { data: pokemonEvolutionData, isLoading: pokemonEvolutionLoading } =
    usePokemonEvolutionChain({
      url: pokemonSpeciesEvolutionUrl,
    });
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
          <span>
            {formatPokemonName(response.name)}{' '}
            {isMega(response.name) ? (
              <img src={megaimgpath} alt="Mega-logo" className="nav-logo" />
            ) : null}
            {isGmax(response.name) ? (
              <img src={gmaximgpath} alt="Gmax-logo" className="nav-logo" />
            ) : null}
          </span>
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
      {simplified ? null : (
        <EvolutionChain
          data={pokemonEvolutionData}
          loading={pokemonEvolutionLoading}
        />
      )}
      <PokemonStats stats={stats} position={position} />
      {simplified ? null : (
        <>
          <PokemonForm />
          <AlertComponent />
        </>
      )}
    </div>
  );
}
