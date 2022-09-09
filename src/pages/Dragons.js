import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DragonItem from '../components/Dragons/DragonItem';
import { fetchDragon } from '../Redux/Dragons/dragon';
import Header from '../components/Header';

let initialRender = true;

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (initialRender) {
      dispatch(fetchDragon());
      initialRender = false;
    }
  }, []);

  return (
    <div>
      <Header />
      <ul className="dragon-list">
        {dragons.map((dragon) => (
          <DragonItem key={dragon.id} dragon={dragon} />
        ))}
      </ul>
    </div>
  );
};

export default Dragons;
