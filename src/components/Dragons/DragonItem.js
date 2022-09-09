/* eslint-disable react/prop-types */
import './DragonItem.css';
import { useDispatch } from 'react-redux';
import { reserveDragon, cancelDragon } from '../../Redux/Dragons/dragon';

const DragonItem = (props) => {
  const dispatch = useDispatch();
  const { dragon } = props;

  return (
    <li className="item-container">
      <div className="image-div">
        <img src={dragon.images} alt="dragon" className="image-dragon" />
      </div>
      <div className="description-container">
        <h2>{dragon.name}</h2>
        <p>{dragon.type}</p>
        <p>
          {dragon.reserved ? <span className="reserved ">reserve</span> : ''}
          {' '}
          ipsum dolor sit amet consectetur adipisicing elit. Magni error eaque
          illo dolorum maiores nisi qui ullam! Tempore fuga omnis deserunt minus
          quidem architecto, natus necessitatibus, suscipit dolorum nam error?
        </p>
        {dragon.reserved ? (
          <button
            type="button"
            className="cancel-resrvation"
            onClick={() => dispatch(cancelDragon(dragon.id))}
          >
            Cancel Dragon
          </button>
        ) : (
          <button
            type="button"
            className="resrvation"
            onClick={() => dispatch(reserveDragon(dragon.id))}
          >
            Join Dragon
          </button>
        )}
      </div>
    </li>
  );
};

export default DragonItem;
