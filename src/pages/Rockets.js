import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from '../components/Header';
import { FetchAPi } from '../Redux/Rockets/Rocket';
import RocketUi from '../components/RocketUI';

function Rockets() {
  const RocketState = useSelector((state) => state.RocketReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchAPi());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <RocketUi data={RocketState} />
    </div>
  );
}
export default Rockets;
