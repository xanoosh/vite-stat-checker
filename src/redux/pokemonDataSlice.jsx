import { createSlice, current } from '@reduxjs/toolkit';

export const pokemonDataSlice = createSlice({
  name: 'pokemonData',
  initialState: {
    value: localStorage.getItem('modified-pokemon-data')
      ? JSON.parse(localStorage.getItem('modified-pokemon-data'))
      : {
          statModifiers: {
            hp: { ev: 0, iv: 31 },
            attack: { ev: 0, iv: 31 },
            defense: { ev: 0, iv: 31 },
            spAttack: { ev: 0, iv: 31 },
            spDefense: { ev: 0, iv: 31 },
            speed: { ev: 0, iv: 31 },
          },
          nature: 'Neutral',
          level: 5,
        },
  },
  reducers: {
    resetPokemonData: (state) => {
      state.value = {
        statModifiers: {
          hp: { ev: 0, iv: 31 },
          attack: { ev: 0, iv: 31 },
          defense: { ev: 0, iv: 31 },
          spAttack: { ev: 0, iv: 31 },
          spDefense: { ev: 0, iv: 31 },
          speed: { ev: 0, iv: 31 },
        },
        nature: 'Neutral',
        level: 5,
      };
      localStorage.setItem(
        'modified-pokemon-data',
        JSON.stringify(state.value)
      );
    },
    changePokemonStatModifiers: (state, action) => {
      state.value.statModifiers = action.payload;
      localStorage.setItem(
        'modified-pokemon-data',
        JSON.stringify(state.value)
      );
    },
    changePokemonNature: (state, action) => {
      state.value.nature = action.payload;
      localStorage.setItem(
        'modified-pokemon-data',
        JSON.stringify(state.value)
      );
    },
    changePokemonLevel: (state, action) => {
      state.value.level = action.payload;
      localStorage.setItem(
        'modified-pokemon-data',
        JSON.stringify(state.value)
      );
    },
  },
});

export const {
  resetPokemonData,
  changePokemonStatModifiers,
  changePokemonNature,
  changePokemonLevel,
} = pokemonDataSlice.actions;

export default pokemonDataSlice.reducer;
