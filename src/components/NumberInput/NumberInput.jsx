import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';
import * as Label from '@radix-ui/react-label';

export default function NumberInput({
  value,
  setValue,
  label,
  id,
  min = 1,
  max = 100,
  labelPosition,
  background = 'light',
}) {
  const handleClick = (variant) => {
    if (variant === 'decrement' && value === min) {
      return;
    }
    if (variant === 'increment' && value === max) {
      return;
    }
    setValue((prev) =>
      variant === 'decrement' ? Number(prev) - 1 : Number(prev) + 1
    );
  };

  return (
    <div
      className={`number-input-container ${
        labelPosition === 'top' ? 'label-top' : null
      }`}
    >
      {label && id ? (
        <Label.Root className="label" htmlFor={id}>
          <p>{label}</p>
        </Label.Root>
      ) : null}

      <div
        className={`number-input ${
          background === 'dark' ? 'bg-dark' : 'bg-light'
        }`}
      >
        <button
          type="button"
          className="decrement-button"
          tabIndex={-1}
          onClick={() => handleClick('decrement')}
        >
          <MinusIcon className="button-icon" />
        </button>
        <input
          type="number"
          min={`${min}`}
          max={`${max}`}
          id={id}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          type="button"
          className="increment-button"
          tabIndex={-1}
          onClick={() => handleClick('increment')}
        >
          <PlusIcon className="button-icon" />
        </button>
      </div>
    </div>
  );
}
