import Loader from '../Loader/Loader';
import { useContext } from 'react';
import { AppContext } from '../../App';
import { formatPokemonName } from '../../utils/functions.jsx';

export default function EvolutionChain({ data, loading }) {
  return (
    <>
      <Loader loading={loading} />
      {data ? <EvolutionChainList evolutionChainArray={data} /> : null}
    </>
  );
}

function EvolutionChainList({ evolutionChainArray }) {
  if (evolutionChainArray.length <= 1) return null;
  const { searchId, setSearchId } = useContext(AppContext) || {
    searchId: null,
    setSearchId: () => {},
  };

  return (
    <div className="evolution-chain-container">
      {evolutionChainArray.map(({ name, id }, i) => (
        <>
          <button
            key={id}
            disabled={id === searchId}
            className={`evolution-chain-element ${
              id === searchId ? 'active' : ''
            }`}
            onClick={() => setSearchId(id)}
          >
            {formatPokemonName(name)}
          </button>
          {i === evolutionChainArray.length - 1 ? null : (
            <div className="separator"> </div>
          )}
        </>
      ))}
    </div>
  );
}
