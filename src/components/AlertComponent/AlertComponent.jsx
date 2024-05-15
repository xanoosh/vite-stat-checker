import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Button from '../Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { resetPokemonData } from '../../redux/pokemonDataSlice';

export default function AlertComponent() {
  const pokemonDataState = useSelector((state) => state.pokemonData.value);
  const dispatch = useDispatch();
  const isEqualToDefaultPokemonData = (pokemonData) => {
    const { level, nature, statModifiers } = pokemonData;
    let statIsDefault = true;
    const levelIsDefault = level === 5;
    const natureIsDefault = nature === 'Neutral';
    Object.keys(statModifiers).forEach((el) => {
      if (statIsDefault) {
        statIsDefault =
          statModifiers[el].ev === 0 && statModifiers[el].iv === 31;
      }
    });
    return levelIsDefault && natureIsDefault && statIsDefault;
  };

  const valueIsDefault = isEqualToDefaultPokemonData(pokemonDataState);

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          disabled={valueIsDefault}
          className={`alert-trigger button-component danger full-width ${
            valueIsDefault ? 'disabled' : ''
          }`}
        >
          Reset
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="alert-overlay" />
        <AlertDialog.Content className="alert-content">
          <AlertDialog.Title className="alert-heading">
            Are you sure?
          </AlertDialog.Title>
          <AlertDialog.Description>
            This action cannot be undone. This will erase all stat, nature and
            level data from local storage of your browser.
          </AlertDialog.Description>
          <div className="alert-buttons">
            <AlertDialog.Cancel asChild>
              <button className="button-component success">Cancel</button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                variant="danger"
                text="Proceed"
                onClick={() => dispatch(resetPokemonData())}
              />
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
