import { naturesList } from '../../data';
import NumberInput from '../NumberInput/NumberInput';
import SelectComponent from '../SelectComponent/SelectComponent';
import Button from '../Button/Button';

export default function PokemonForm({
  level,
  setLevel,
  nature,
  setNature,
  setStatModifiers,
}) {
  return (
    <div className="pokemon-form">
      <NumberInput
        id="level"
        label="Level:"
        value={Number(level)}
        setValue={setLevel}
        labelPosition="top"
      />
      <SelectComponent
        id="nature"
        label="Nature:"
        items={naturesList}
        value={nature}
        onValueChange={setNature}
      />
    </div>
  );
}
