export default function Button({
  text,
  onClick,
  variant = 'main',
  disabled = false,
  fullWidth,
  isMega = false,
  isGmax = false,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`button-component ${variant} ${fullWidth ? 'full-width' : ''}`}
    >
      {text} {isMega ? <span>M</span> : null}
      {isGmax ? <span>G</span> : null}
    </button>
  );
}
