import {
  configureStore,
  createListenerMiddleware,
  isAnyOf,
  combineReducers,
} from '@reduxjs/toolkit';
import pokemonDataReducer, {
  resetPokemonData,
  changePokemonStatModifiers,
  changePokemonNature,
  changePokemonLevel,
  changePokemonImageBack,
  changePokemonImageShiny,
} from './pokemonDataSlice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(
    resetPokemonData,
    changePokemonStatModifiers,
    changePokemonNature,
    changePokemonLevel,
    changePokemonImageBack,
    changePokemonImageShiny
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

//testing

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  pokemonData: pokemonDataReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};
