import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getEvolutionArray } from '../utils/functions';

const getPokemonEvolutionChainQuery = (url) => ({
  queryKey: ['pokemon-evolution-chain', url],
  queryFn: () => getPokemonEvolutionChain(url),
  enabled: !!url,
  staleTime: 1000 * 60 * 5,
});

async function getPokemonEvolutionChain(url) {
  if (!url) return null;
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    if (response.status !== 200) {
      toast.error('Failed to fetch pokemon evolution chain data');
      throw new Error('Failed to fetch pokemon evolution chain data');
    }
    const pokemonEvolutionChainData = await response.json();
    return getEvolutionArray(pokemonEvolutionChainData);
  } catch (error) {
    toast.error(error.message);
    return error;
  }
}

export function usePokemonEvolutionChain({ url }) {
  return useQuery(getPokemonEvolutionChainQuery(url));
}
