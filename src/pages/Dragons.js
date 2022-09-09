import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DragonItem from '../components/Dragons/DragonItem';
import { fetchDragon } from '../Redux/Dragons/dragon';

const Dragons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDragon());
  }, []);
  return (
    <div>
      <DragonItem />
    </div>
  );
};

export default Dragons;
