export default function Button({ text, onClick, variant }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button ${variant === 'bordered' ? 'bordered' : null} ${
        variant === 'main' ? 'main' : null
      }`}
    >
      {text}
    </button>
  );
}
