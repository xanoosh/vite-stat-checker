import megaimgpath from '../../assets/mega.webp';
import gmaximgpath from '../../assets/gmax.webp';

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
      {text}{' '}
      {isMega ? (
        <img src={megaimgpath} alt="Mega-logo" className="nav-logo" />
      ) : null}
      {isGmax ? (
        <img src={gmaximgpath} alt="Gmax-logo" className="nav-logo" />
      ) : null}
    </button>
  );
}
