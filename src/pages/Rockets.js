import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '../components/Header';
import { FetchAPi, initialeState } from '../Redux/Rockets/Rocket';
import RocketUi from '../components/Rockets/RocketUI';

function Rockets() {
  const RocketState = useSelector((state) => state.RocketReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialeState.length === 0) {
      dispatch(FetchAPi());
    }
  }, [dispatch]);

  return (
    <div>
      <Header />
      <RocketUi data={RocketState} />
    </div>
  );
}
export default Rockets;
