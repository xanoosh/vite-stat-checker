import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import NumberInput from '../NumberInput/NumberInput';
import Button from '../Button/Button';

import { useSelector, useDispatch } from 'react-redux';
import { changePokemonStatModifiers } from '../../redux/pokemonDataSlice';

export default function PopoverComponent({ name }) {
  const pokemonDataState = useSelector((state) => state.pokemonData.value);
  const dispatch = useDispatch();
  const { iv, ev } = pokemonDataState.statModifiers[name];
  const handleChangeStat = (valueType, value) => {
    const newStatModifiers = structuredClone(pokemonDataState.statModifiers);
    newStatModifiers[name][valueType] = value;
    dispatch(changePokemonStatModifiers(newStatModifiers));
  };
  const handleChangeEv = (value) => handleChangeStat('ev', value);
  const handleChangeIv = (value) => handleChangeStat('iv', value);
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="popover-trigger" aria-label="Update dimensions">
          <MixerHorizontalIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="popover-content" sideOffset={3}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="popover-heading">
              <h2 className="Text">{name}</h2>
              <Popover.Close className="popover-close" aria-label="Close">
                <Cross2Icon />
              </Popover.Close>
            </div>
            <NumberInput
              id="evs"
              label="Effort Values:"
              value={Number(ev)}
              setValue={handleChangeEv}
              min={0}
              max={252}
              background="dark"
            />
            <div className="popover-buttons">
              <Button
                variant="main"
                disabled={Number(ev) === 0}
                text={`min Ev's`}
                onClick={() => handleChangeEv(0)}
              />
              <Button
                variant="main"
                disabled={Number(ev) === 252}
                text={`max Ev's`}
                onClick={() => handleChangeEv(252)}
              />
            </div>
            <NumberInput
              id="ivs"
              label="Individual Values:"
              value={Number(iv)}
              setValue={handleChangeIv}
              min={0}
              max={31}
              background="dark"
            />
            <div className="popover-buttons">
              <Button
                variant="main"
                disabled={Number(iv) === 0}
                text={`min Iv's`}
                onClick={() => handleChangeIv(0)}
              />
              <Button
                variant="main"
                disabled={Number(iv) === 31}
                text={`max Iv's`}
                onClick={() => handleChangeIv(31)}
              />
            </div>
          </div>
          <Popover.Arrow className="popover-arrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
