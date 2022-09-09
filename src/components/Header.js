import { NavLink } from 'react-router-dom';
import planeticon from '../images/planet.png';

const Header = () => (
  <nav className="header">
    <div className="logo-container">
      <img src={planeticon} className="logo" alt="logo" />
      <p>Space Travelers Hub</p>
    </div>
    <div className="links">
      <NavLink to="/">Rockets</NavLink>
      <NavLink to="/Missions">Missions</NavLink>
      <NavLink to="/Dragons">Dragons</NavLink>
      <NavLink to="/MyProfile">My profile</NavLink>
    </div>
  </nav>
);

export default Header;
