import * as AlertDialog from '@radix-ui/react-alert-dialog';
import Button from '../Button/Button';

export default function AlertComponent({
  setStatModifiers,
  setNature,
  setLevel,
  triggerDisabled,
}) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          disabled={triggerDisabled}
          className={`alert-trigger button-component danger full-width ${
            triggerDisabled ? 'disabled' : ''
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
                onClick={() => {
                  setStatModifiers({
                    hp: { ev: 0, iv: 31 },
                    attack: { ev: 0, iv: 31 },
                    defense: { ev: 0, iv: 31 },
                    spAttack: { ev: 0, iv: 31 },
                    spDefense: { ev: 0, iv: 31 },
                    speed: { ev: 0, iv: 31 },
                  });
                  setNature('Neutral');
                  setLevel(5);
                }}
              />
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
