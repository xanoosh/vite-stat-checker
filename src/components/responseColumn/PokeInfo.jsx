import { useState, useEffect } from 'react';

function PokeInfo({ response }) {
  const [effortValuesData, setEffortValuesData] = useState([]);
  const [statsTable, setStatsTable] = useState(null);
  // const

  useEffect(() => {
    const effortValues = [];
    const tableContent = response.stats.map(
      ({ base_stat, effort, stat: { name } }, i) => {
        if (effort > 0) effortValues.push({ name, effort });
        return (
          <tr key={i}>
            <td>{name}</td>
            <td>{base_stat}</td>
          </tr>
        );
      }
    );
    setEffortValuesData(effortValues);
    setStatsTable(
      <table>
        <tbody>{tableContent}</tbody>
      </table>
    );
  }, [response]);

  return (
    <div className="poke-info">
      <h2>{response.name}</h2>
      <img src={response.sprites.front_default} alt={response.name} />
      <p>id: {response.id}</p>
      {statsTable}
      <h3>IVs:</h3>
      {effortValuesData.length ? (
        effortValuesData.map((el) => (
          <p key={el.name}>
            {el.name}: {el.effort}
          </p>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}

export default PokeInfo;
