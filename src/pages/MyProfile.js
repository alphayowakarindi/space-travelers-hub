import Header from '../components/Header';
import MyProfileRockets from '../components/Rockets/MyProfileRockets';
import DragonsProfile from '../components/Dragons/DragonsProfile';

function MyProfile() {
  return (
    <div>
      <Header />
      <div className="profile-container">
        {' '}
        <MyProfileRockets />
        <DragonsProfile />
      </div>
    </div>
  );
}
export default MyProfile;
