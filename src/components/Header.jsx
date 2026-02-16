import { NavLink } from 'react-router';

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="logo">
        <a href="/">HomeSteady</a>
      </h1>
      <nav>
        <ul className="nav-links-container">
          <li className="nav-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/spells">Spells</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/characters">Characters</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
