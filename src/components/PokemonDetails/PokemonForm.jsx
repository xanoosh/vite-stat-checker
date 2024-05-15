import { naturesList } from '../../data';
import NumberInput from '../NumberInput/NumberInput';
import SelectComponent from '../SelectComponent/SelectComponent';

export default function PokemonForm({ level, nature, setModifiedPokemonData }) {
  const handleChangeValue = (valueType, value) => {
    setModifiedPokemonData((prev) => {
      const newPokemonData = { ...prev };
      newPokemonData[valueType] = value;
      return newPokemonData;
    });
  };
  const handleChangeLevel = (value) => handleChangeValue('level', value);
  const handleChangeNature = (value) => handleChangeValue('nature', value);

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
