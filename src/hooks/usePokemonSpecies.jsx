import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const getPokemonSpeciesQuery = (url) => ({
  queryKey: ['pokemon-species', url],
  queryFn: () => getPokemonSpecies(url),
  staleTime: 1000 * 60 * 5,
});

async function getPokemonSpecies(url) {
  if (!url) return null;
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    if (response.status !== 200) {
      toast.error('Failed to fetch pokemon species data');
      throw new Error('Failed to fetch pokemon species data');
    }
    const pokemonSpeciesData = await response.json();
    //get evolution chain url
    console.log(
      'evolution chain url',
      pokemonSpeciesData?.evolution_chain?.url
    );

    return pokemonSpeciesData?.evolution_chain?.url;
  } catch (error) {
    toast.error(error.message);
    return error;
  }
}

export function usePokemonSpecies({ url }) {
  return useQuery(getPokemonSpeciesQuery(url));
}
