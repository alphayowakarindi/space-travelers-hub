import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveMission, leaveMission } from '../../Redux/missions/missions';

function MissionsTable({
  missionName, description, id, reserved,
}) {
  const dispatch = useDispatch();

  return (
    <tbody>
      <tr>
        <td>{missionName}</td>
        <td>{description}</td>
        <td className="member-status">
          {reserved ? (
            <span className="active">Active Member</span>
          ) : (
            <span className="non-member">NOT A MEMBER</span>
          )}
        </td>
        <td>
          {reserved ? (
            <button
              className="leave-btn"
              type="button"
              onClick={() => dispatch(leaveMission(id))}
            >
              Leave Mission
            </button>
          ) : (
            <button
              className="join-btn"
              type="button"
              onClick={() => dispatch(reserveMission(id))}
            >
              Join Mission
            </button>
          )}
        </td>
      </tr>
    </tbody>
  );
}

export default MissionsTable;

MissionsTable.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
