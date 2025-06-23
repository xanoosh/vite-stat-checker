import { createSlice } from '@reduxjs/toolkit';

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
          image: {
            back: false,
            shiny: false,
          },
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
        image: {
          back: false,
          shiny: false,
        },
      };
    },
    changePokemonStatModifiers: (state, action) => {
      state.value.statModifiers = action.payload;
    },
    changePokemonNature: (state, action) => {
      state.value.nature = action.payload;
    },
    changePokemonLevel: (state, action) => {
      state.value.level = action.payload;
    },
    changePokemonImageBack: (state, action) => {
      state.value.image.back = action.payload;
    },
    changePokemonImageShiny: (state, action) => {
      state.value.image.shiny = action.payload;
    },
  },
});

export const {
  resetPokemonData,
  changePokemonStatModifiers,
  changePokemonNature,
  changePokemonLevel,
  changePokemonImageBack,
  changePokemonImageShiny,
} = pokemonDataSlice.actions;

export default pokemonDataSlice.reducer;
