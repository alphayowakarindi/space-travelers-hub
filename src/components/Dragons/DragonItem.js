/* eslint-disable react/prop-types */
import './DragonItem.css';

const DragonItem = (props) => {
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
          <span className="reserved ">reserve</span>
          {' '}
          ipsum dolor sit amet consectetur adipisicing
          elit. Magni error eaque illo dolorum maiores nisi qui ullam! Tempore
          fuga omnis deserunt minus quidem architecto, natus necessitatibus,
          suscipit dolorum nam error?
        </p>
        <button type="button" className="resrvation">
          reservatrion
        </button>
      </div>
    </li>
  );
};

export default DragonItem;
