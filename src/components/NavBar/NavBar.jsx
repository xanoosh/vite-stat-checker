import { NavLink } from 'react-router-dom';
import imgpath from '../../assets/logo.png';

export default function NavBar({ navigationArray }) {
  return navigationArray.length ? (
    <nav className="nav-menu">
      {navigationArray.map((element, i) => (
        <NavLink
          key={i}
          to={element.path}
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <img src={imgpath} alt="Logo" className="nav-logo" />
          <span>{element.name}</span>
        </NavLink>
      ))}
    </nav>
  ) : null;
}
