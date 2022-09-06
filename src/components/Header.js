import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header">
      <div className="logo-container">
        <img
          src={require("../images/planet.png")}
          className="logo"
          alt="logo"
        />
        <p>Space Traveler's Hub</p>
      </div>
      <div className="links">
        <Link to="/">Rockets</Link>
        <Link to="/Missions">Missions</Link>
        <Link to="/Dragons">Dragons</Link>
        <Link to="/MyProfile">My profile</Link>
      </div>
    </nav>
  );
};

export default Header;
