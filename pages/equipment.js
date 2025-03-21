import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getEquipment } from '../api/equipmentData';
import EquipmentCard from '../components/EquipmentCard';

function Equipment() {
  //  Set a state for books
  const [equipments, setEquipment] = useState([]);

  //  Get user ID using useAuth Hook
  const { user } = useAuth();

  //  create a function that makes the API call to get all the books
  const getAllEquipment = useCallback(() => {
    getEquipment(user.uid).then(setEquipment);
  }, [user.uid]);

  // make the call to the API to get all the books on component render
  useEffect(() => {
    getAllEquipment();
  }, [getAllEquipment]);

  return (
    <div className="my-4 text-center">
      <Link href="/equipment/new" passHref>
        <Button>Add Equipment</Button>
      </Link>
      <div className="flex-wrap d-flex">
        <EquipmentCard key={equipments.id} equipmentArray={equipments} />
      </div>
    </div>
  );
}

export default Equipment;
