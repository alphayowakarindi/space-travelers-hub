import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../Redux/missions/missions';
import Header from '../components/Header';
import MissionsTable from '../components/Missions/MissionsTable';

let initialRender = true;
function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (initialRender) {
      initialRender = false;
      dispatch(fetchMissions());
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="missions-table">
        <div className="missions-table">
          <table>
            <thead>
              <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            {missions.map((mission) => (
              <MissionsTable
                missionName={mission.mission_name}
                description={mission.description}
                id={mission.mission_id}
                reserved={mission.reserved}
                key={mission.mission_id}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
export default Missions;
