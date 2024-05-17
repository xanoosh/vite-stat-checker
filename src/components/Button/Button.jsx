export default function Button({
  text,
  onClick,
  variant = 'main',
  disabled = false,
  fullWidth,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`button-component ${variant} ${fullWidth ? 'full-width' : ''}`}
    >
      {text}
    </button>
  );
}
