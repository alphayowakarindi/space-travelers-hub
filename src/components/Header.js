import { Link } from "react-router-dom";
const Header = () => {
    return (
        <nav>
            <div>
                <img src="" alt="logo"/>
                <p>Space Traveler's Hub</p>
            </div> 
            <Link to="/">Rockets</Link>
            <Link to="/Missions">Missions</Link>
            <Link to="/Dragons">Dragons</Link>
            <Link to="/MyProfile">My profile</Link>
        </nav>
    )
}

export default Header;