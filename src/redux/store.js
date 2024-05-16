import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from '@reduxjs/toolkit';
import pokemonDataReducer, {
  resetPokemonData,
  changePokemonStatModifiers,
  changePokemonNature,
  changePokemonLevel,
} from './pokemonDataSlice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(
    resetPokemonData,
    changePokemonStatModifiers,
    changePokemonNature,
    changePokemonLevel
  ),
  effect: async (action, currentState) => {
    localStorage.setItem(
      'modified-pokemon-data',
      JSON.stringify(currentState.getState().pokemonData.value)
    );
  },
});

export default configureStore({
  reducer: {
    pokemonData: pokemonDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
