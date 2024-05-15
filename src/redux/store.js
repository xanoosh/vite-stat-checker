import { configureStore } from '@reduxjs/toolkit';
import pokemonDataReducer from './pokemonDataSlice';

export default configureStore({
  reducer: {
    pokemonData: pokemonDataReducer,
  },
});
