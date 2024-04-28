import PokeInfo from '../../PokeInfo/PokeInfo';

export default function ResponseColumn({ response }) {
  return (
    <div className="response-column">
      {response ? <PokeInfo response={response} /> : null}
    </div>
  );
}
