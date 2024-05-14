import PokemonDetails from '../../PokemonDetails/PokemonDetails';

export default function ResponseColumn({ response }) {
  return (
    <div className="response-column">
      {response ? <PokemonDetails response={response} /> : null}
    </div>
  );
}
