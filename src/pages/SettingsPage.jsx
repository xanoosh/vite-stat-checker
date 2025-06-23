import * as Switch from '@radix-ui/react-switch';
import { useSelector, useDispatch } from 'react-redux';
import {
  changePokemonImageBack,
  changePokemonImageShiny,
} from '../redux/pokemonDataSlice';

export default function SettingsPage() {
  const pokemonDataState = useSelector((state) => state.pokemonData.value);
  const dispatch = useDispatch();
  const handleChangeImageBack = (value) =>
    dispatch(changePokemonImageBack(value));
  const handleChangeImageShiny = (value) =>
    dispatch(changePokemonImageShiny(value));

  return (
    <section className="search-pokemon-container">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label
          className="Label"
          htmlFor="image-shiny"
          style={{ paddingRight: 15 }}
        >
          Pokemon thumbnail shiny
        </label>
        <Switch.Root
          className="SwitchRoot"
          id="image-shiny"
          checked={pokemonDataState.image.shiny}
          onCheckedChange={(e) => handleChangeImageShiny(e)}
        >
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label
          className="Label"
          htmlFor="thumbnail-back"
          style={{ paddingRight: 15 }}
        >
          Pokemon thumbnail back
        </label>
        <Switch.Root
          className="SwitchRoot"
          id="thumbnail-back"
          checked={pokemonDataState.image.back}
          onCheckedChange={(e) => handleChangeImageBack(e)}
        >
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
      </div>
    </section>
  );
}
