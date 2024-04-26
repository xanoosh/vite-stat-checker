import { PlusIcon, MinusIcon } from '@radix-ui/react-icons';

export default function NumberInput({ value, setValue, min = 1, max = 100 }) {
  console.log('numberinput');
  console.log('val:', typeof value);

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
    <div className="number-input-container">
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
        required
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
  );
}
