import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function EquipmentCard({ equipmentArray }) {
  const equipment = equipmentArray;

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <div className="card">
        <ul>
          {equipment?.map((item) => (
            <li key={item.id + item.name}>{item.name}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

EquipmentCard.propTypes = {
  equipmentArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default EquipmentCard;
