import { Link } from 'react-router-dom';
import planeticon from '../images/planet.png';

const Header = () => (
  <nav className="header">
    <div className="logo-container">
      <img src={planeticon} className="logo" alt="logo" />
      <p>Space Travelers Hub</p>
    </div>
    <div className="links">
      <Link to="/">Rockets</Link>
      <Link to="/Missions">Missions</Link>
      <Link to="/Dragons">Dragons</Link>
      <Link to="/MyProfile">My profile</Link>
    </div>
  </nav>
);

export default Header;
