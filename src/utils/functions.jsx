const handleApiCall = (pokeId) => {
  let pokeData = {};
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then((response) => {
      if (!response.ok) console.error(response.error);
      return response.json();
    })
    .then((result) => {
      console.log('result', result);
      pokeData = result;
    });

  return pokeData;
};

export { handleApiCall };
