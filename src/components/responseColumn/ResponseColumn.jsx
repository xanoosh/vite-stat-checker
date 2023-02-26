function ResponseColumn({ response }) {
  return (
    <div className="card">
      {response ? (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      ) : (
        <p className="gray">No response yet.</p>
      )}
    </div>
  );
}

export default ResponseColumn;
