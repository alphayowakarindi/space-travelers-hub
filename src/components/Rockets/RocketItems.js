/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import style from './RocketStyle.module.css';
import { ReserveData, cancelData } from '../../Redux/Rockets/Rocket';

function RocketItems(props) {
  const dispatch = useDispatch();

  return (
    <div>
      {
       // eslint-disable-next-line react/destructuring-assignment
       props.data.map((item) => (
         <div key={item.id} id={item.id} className={style.contents}>
           <div className={style.contentImg}>
             <img src={item.flickr_images[0]} alt="Rocket imgae" className={style.image} />
           </div>
           <div className={style.contentsDescription}>
             <h2>{item.rocket_name}</h2>
             <p>
               {item.id < 5 ? <span> </span> : <span className={style.reserved}>Reserved</span>}
               {' '}
               {item.description}
             </p>
             {item.id < 5 ? <button className={style.reservation} type="button" onClick={() => { dispatch(ReserveData(item.id)); }}>Reserve Rocket</button>
               : <button className={style.cancel} type="button" onClick={() => { dispatch(cancelData(item.id)); }}>cancel reservation</button>}
           </div>
         </div>
       ))
        }
    </div>
  );
}
export default RocketItems;
