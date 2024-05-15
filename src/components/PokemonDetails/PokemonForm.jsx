import { naturesList } from '../../data';
import NumberInput from '../NumberInput/NumberInput';
import SelectComponent from '../SelectComponent/SelectComponent';

import { useSelector, useDispatch } from 'react-redux';
import { changePokemonNature } from '../../redux/pokemonDataSlice';

export default function PokemonForm({ level, nature, setModifiedPokemonData }) {
  const pokemonData = useSelector((state) => state.pokemonData.value);
  const dispatch = useDispatch();

  const handleChangeValue = (valueType, value) => {
    setModifiedPokemonData((prev) => {
      const newPokemonData = { ...prev };
      newPokemonData[valueType] = value;
      return newPokemonData;
    });
  };
  const handleChangeLevel = (value) => handleChangeValue('level', value);
  const handleChangeNature = (value) => handleChangeValue('nature', value);
  // const handleChangeNature = (value) => dispatch(changePokemonNature(value));

  return (
    <div className="pokemon-form">
      <NumberInput
        fullWidth
        id="level"
        label="Level:"
        value={Number(level)}
        setValue={handleChangeLevel}
        labelPosition="top"
      />
      <SelectComponent
        fullWidth
        id="nature"
        label="Nature:"
        items={naturesList}
        value={nature}
        onValueChange={handleChangeNature}
      />
    </div>
  );
}
