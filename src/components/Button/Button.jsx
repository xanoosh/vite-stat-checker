export default function Button({
  text,
  onClick,
  variant = 'main',
  disabled = false,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`button-component ${variant}`}
    >
      {text}
    </button>
  );
}
