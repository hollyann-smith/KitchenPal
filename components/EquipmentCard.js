import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function EquipmentCard({ equipmentObj }) {
  const equipment = equipmentObj;

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <div className="card">
        <ul>
          {equipment?.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

EquipmentCard.propTypes = {
  equipmentObj: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default EquipmentCard;
