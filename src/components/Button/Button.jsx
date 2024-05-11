export default function Button({ text, onClick, variant, disabled = false }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`button-component ${
        variant === 'bordered' ? 'bordered' : ''
      } ${variant === 'main' ? 'main' : ''} ${disabled ? 'disabled' : ''}`}
    >
      {text}
    </button>
  );
}
