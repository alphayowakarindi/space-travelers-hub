import PropTypes from 'prop-types';

function MissionsTable({ missionName, description }) {
  return (
    <tbody>
      <tr>
        <td>{missionName}</td>
        <td>{description}</td>
        <td className="member-status">
          <span>NOT A MEMBER</span>
        </td>
        <td>
          <button type="button">Join Mission</button>
        </td>
      </tr>
    </tbody>
  );
}

export default MissionsTable;

MissionsTable.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
