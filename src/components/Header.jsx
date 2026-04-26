import { NavLink } from 'react-router';
import Icon from '@mdi/react';
import { mdiLightningBoltOutline } from '@mdi/js';

const Header = () => {
  return (
    <header className="header-container">
      <h1 className="logo">
        <div className="logo-container">
          <div className="logo-icon-container">
            <Icon className='logo-icon' path={mdiLightningBoltOutline} size={1.5} />
            {/* <Icon className='logo-icon' path={mdiLightningBoltOutline} size={1} />
            <Icon className='logo-icon' path={mdiLightningBoltOutline} size={1} /> */}
          </div>
          <a href="/">Wizard World Reference</a>
        </div>
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
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/spells">Spells</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
