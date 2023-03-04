const handleApiCall = (pokeId, setPokeData) => {
  if (localStorage.getItem(pokeId)) {
    setPokeData(JSON.parse(localStorage.getItem(pokeId)));
  } else {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((response) => {
        if (!response.ok) console.error(response.error);
        return response.json();
      })
      .then((result) => {
        setPokeData(result);
        localStorage.setItem(pokeId, JSON.stringify(result));
      });
  }
};

const calculateStatFormula = (
  statName,
  base,
  level,
  iv = 31,
  ev = 0,
  nature = 1
) => {
  const isHp = statName === 'hp';
  const semiResult = Math.floor(
    ((2 * base + iv + Math.floor(ev / 4)) * level) / 100
  );
  return isHp ? semiResult + Number(level) + 10 : (semiResult + 5) * nature;
};

export { handleApiCall, calculateStatFormula };
