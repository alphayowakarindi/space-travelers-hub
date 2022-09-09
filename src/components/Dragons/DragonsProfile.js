import React from 'react';
import { useSelector } from 'react-redux';
import style from '../Rockets/RocketStyle.module.css';

const DragonsProfile = () => {
  const dragons = useSelector((state) => state.dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved);
  return (
    <div>
      <div className={style.profile}>
        <h2>My Dragons</h2>
        <table className={style.table}>
          <tbody className={style.tbody}>
            {reservedDragons.length > 0 ? (
              reservedDragons.map((dragon) => (
                <tr key={dragon.id} className={style.tableRow}>
                  <td className={style.tableItem}>{dragon.name}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No Dragon Reserved</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DragonsProfile;
