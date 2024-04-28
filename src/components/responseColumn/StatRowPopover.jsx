import * as Popover from '@radix-ui/react-popover';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import NumberInput from '../NumberInput/NumberInput';

function StatRowPopover({ name, iv, setIv, ev, setEv }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="IconButton" aria-label="Update dimensions">
          <MixerHorizontalIcon />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <p className="Text" style={{ marginBottom: 10 }}>
              Edit {name}
            </p>
            <fieldset className="Fieldset">
              <NumberInput
                id="ivs"
                label="Individual Values:"
                value={iv}
                setValue={setIv}
                min={0}
                max={31}
                background="dark"
              />
            </fieldset>
            <fieldset className="Fieldset">
              <NumberInput
                id="evs"
                label="Effort Values:"
                value={ev}
                setValue={setEv}
                min={0}
                max={252}
                background="dark"
              />
            </fieldset>
          </div>
          <Popover.Close className="PopoverClose" aria-label="Close">
            <Cross2Icon />
          </Popover.Close>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default StatRowPopover;
