/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import { useSelector } from 'react-redux';
import style from './RocketStyle.module.css';

function MyProfileRockets() {
  const RocketReserved = useSelector((state) => state.RocketReducers);
  let countRockets = 0;
  return (
    <div className={style.profile}>
      <h2>My Rockets</h2>
      <table className={style.table}>
        <tbody className={style.tbody}>
          {RocketReserved.map((item) => {
            if (item.id > 5) {
              countRockets += 1;
              return (
                <tr key={item.id} className={style.tableRow}>
                  <td className={style.tableItem}>{item.rocket_name}</td>
                </tr>
              );
            }
            return null;
          })}
          {countRockets === 0 ? (
            <tr>
              <td>No Rocket Reserved</td>
            </tr>
          )
            : null }
        </tbody>
      </table>
    </div>
  );
}
export default MyProfileRockets;
