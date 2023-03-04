import { useState, useEffect } from 'react';
import { calculateStatFormula } from '../../utils/functions';

function PokeInfo({ response }) {
  const [effortValuesData, setEffortValuesData] = useState([]);
  const [statsTable, setStatsTable] = useState(null);
  const [level, setLevel] = useState(localStorage.getItem('level') || 5);
  useEffect(() => {
    const effortValues = [];
    const tableContent = response.stats.map(
      ({ base_stat, effort, stat: { name } }, i) => {
        if (effort > 0) effortValues.push({ name, effort });
        console.log(level);
        const perfectStat = calculateStatFormula(name, base_stat, level);
        return (
          <tr key={i}>
            <td>{name}</td>
            <td>{perfectStat}</td>
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
  }, [response, level]);

  return (
    <div className="poke-info">
      <h2>{response.name}</h2>
      <img src={response.sprites.front_default} alt={response.name} />
      <p>id: {response.id}</p>
      {statsTable}
      <input
        type="number"
        value={level}
        onChange={(e) => {
          setLevel(e.target.value);
          localStorage.setItem('level', e.target.value);
        }}
      />
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
