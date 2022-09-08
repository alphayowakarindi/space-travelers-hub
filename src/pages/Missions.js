import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchMissions } from '../Redux/missions/missions';
import Header from '../components/Header';

let initialRender = true;

function Missions() {
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
    </div>
  );
}
export default Missions;
