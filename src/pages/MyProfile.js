import Header from '../components/Header';
import MyProfileRockets from '../components/Rockets/MyProfileRockets';
import DragonsProfile from '../components/Dragons/DragonsProfile';
import MissionsProfile from '../components/Missions/MissionsProfile';

function MyProfile() {
  return (
    <div>
      <Header />
      <div className="profile-container">
        {' '}
        <div className="profile-container">
          <MyProfileRockets />
          <MissionsProfile />
          <DragonsProfile />
        </div>
      </div>
    </div>
  );
}
export default MyProfile;
