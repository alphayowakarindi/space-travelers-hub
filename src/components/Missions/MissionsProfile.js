import { useSelector } from 'react-redux';
import style from '../Rockets/RocketStyle.module.css';

function MissionsProfile() {
  const missions = useSelector((state) => state.missions.filter((mission) => mission.reserved));
  const reservedMissions = missions.filter((mission) => mission.reserved);

  return (
    <div className={style.profile}>
      <h2>My Missions</h2>
      <table className={style.table}>
        <tbody className={style.tbody}>
          {reservedMissions.length > 0 ? (
            reservedMissions.map((mission) => (
              <tr className={style.tableRow} key={mission.mission_id}>
                <td className={style.tableItem}>{mission.mission_name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Mission Reserved</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
export default MissionsProfile;
