const handleApiCall = (pokeId, setPokeData) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then((response) => {
      if (!response.ok) console.error(response.error);
      return response.json();
    })
    .then((result) => {
      setPokeData(result);
    });
};

export { handleApiCall };
