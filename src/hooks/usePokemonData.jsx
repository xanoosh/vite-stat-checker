import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const getPokemonDataQuery = (id) => ({
  queryKey: ['pokemon-data', id],
  queryFn: () => getPokemonData(id),
  staleTime: 1000 * 60 * 5,
});

async function getPokemonData(id) {
  if (!id) return null;
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      method: 'GET',
    });
    if (response.status !== 200) {
      throw new Error('Failed to fetch pokemon data');
    }
    const pokemonData = await response.json();
    return pokemonData;
  } catch (error) {
    toast.error(error.message);
    return error;
  }
}

export function usePokemonData({ id }) {
  return useQuery(getPokemonDataQuery(id));
}
