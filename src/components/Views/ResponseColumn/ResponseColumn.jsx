import { useEffect } from 'react';
import PokemonDetails from '../../PokemonDetails/PokemonDetails';
import { scrollIntoResult } from '../../../utils/functions';

export default function ResponseColumn({ response }) {
  useEffect(() => {
    if (response) {
      scrollIntoResult();
    }
  }, [response]);
  return (
    <div className="response-column">
      {response ? <PokemonDetails response={response} /> : null}
    </div>
  );
}
