import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getEquipment = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/equipment.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE
const createEquipment = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/equipment.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE
const getSingleEquipment = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/equipment/${id}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE
const deleteSingleEquipment = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/equipment/${id}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

//  UPDATE
const updateEquipment = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/equipment/${payload.id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getEquipment,
  createEquipment,
  getSingleEquipment,
  deleteSingleEquipment,
  updateEquipment,
};
