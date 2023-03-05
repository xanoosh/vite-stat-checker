import PokeInfo from './PokeInfo';

function ResponseColumn({ response }) {
  return (
    <div className="response-column">
      {response ? (
        <PokeInfo response={response} />
      ) : (
        <p className="muted">No response yet.</p>
      )}
    </div>
  );
}

export default ResponseColumn;
