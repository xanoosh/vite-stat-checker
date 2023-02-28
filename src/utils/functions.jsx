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

export { handleApiCall };
