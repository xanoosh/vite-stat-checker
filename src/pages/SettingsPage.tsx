import { useContext } from 'react';
import { AppContext } from '../App';
import * as Switch from '@radix-ui/react-switch';

export default function SettingsPage() {
  const { imageShiny, imageBack, setImageShiny, setImageBack } =
    useContext(AppContext);
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
        <Switch.Root className="SwitchRoot" id="image-shiny">
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label
          className="Label"
          htmlFor="airplane-mode"
          style={{ paddingRight: 15 }}
        >
          Airplane mode
        </label>
        <Switch.Root className="SwitchRoot" id="airplane-mode">
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
      </div>
    </section>
  );
}
