/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import style from './RocketStyle.module.css';
import RocketItems from './RocketItems';

export default function RocketUi(props) {
  return (
    <div className={style.container}>
      <RocketItems data={props.data} />
    </div>
  );
}
