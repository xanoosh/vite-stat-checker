import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const getPokemonListQuery = (number) => ({
  queryKey: ['pokemon-list'],
  queryFn: () => getPokemonList(number),
  staleTime: 1000 * 60 * 5,
});

async function getPokemonList(number) {
  if (!number) return null;
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${number}`
    );

    if (response.status !== 200) {
      toast.error('Failed to fetch pokemon list');
      throw new Error('Failed to fetch pokemon list');
    }
    const data = await response.json();

    const pokemonList = data.results.map((pokemon) => {
      const urlParts = pokemon.url.split('/');
      const id = parseInt(urlParts[urlParts.length - 2]);

      return {
        id,
        name: pokemon.name,
      };
    });
    return pokemonList;
  } catch (error) {
    toast.error(error.message);
    return error;
  }
}

export function usePokemonList({ number }) {
  return useQuery(getPokemonListQuery(number));
}
