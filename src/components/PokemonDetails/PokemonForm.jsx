import { naturesList } from '../../data';
import NumberInput from '../NumberInput/NumberInput';
import SelectComponent from '../SelectComponent/SelectComponent';

import { useSelector, useDispatch } from 'react-redux';
import {
  changePokemonNature,
  changePokemonLevel,
} from '../../redux/pokemonDataSlice';

export default function PokemonForm() {
  const pokemonDataState = useSelector((state) => state.pokemonData.value);
  const dispatch = useDispatch();

  const handleChangeNature = (value) => dispatch(changePokemonNature(value));
  const handleChangeLevel = (value) => dispatch(changePokemonLevel(value));
  return (
    <div className="pokemon-form">
      <NumberInput
        fullWidth
        id="level"
        label="Level:"
        value={Number(pokemonDataState.level)}
        setValue={handleChangeLevel}
        labelPosition="top"
      />
      <SelectComponent
        fullWidth
        id="nature"
        label="Nature:"
        items={naturesList}
        value={pokemonDataState.nature}
        onValueChange={handleChangeNature}
      />
    </div>
  );
}
