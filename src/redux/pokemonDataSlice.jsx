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
        },
  },
  reducers: {
    changePokemonData: (state, action) => {
      console.log('reduxxxy');
      console.log(state.value);
      console.log(action.payload);
      localStorage.setItem(
        'modified-pokemon-data',
        JSON.stringify(action.payload)
      );
      state.value === action.payload;
    },
    changePokemonNature: (state, action) => {
      console.log('reduxxxy -nature');
      console.log(state.value);
      console.log(action.payload);
      //   localStorage.setItem(
      //     'modified-pokemon-data',
      //     JSON.stringify(state.value)
      //   );
      state.value.nature === action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changePokemonData, changePokemonNature } =
  pokemonDataSlice.actions;

export default pokemonDataSlice.reducer;
