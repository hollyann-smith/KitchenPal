import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getIngredients = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ingredients.json"`, {
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
const createIngredient = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ingredients.json`, {
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
const getSingleIngredient = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ingredients/${id}.json`, {
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
const deleteSingleIngredient = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ingredients/${id}.json`, {
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
const updateIngredient = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/ingredients/${payload.id}.json`, {
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
  getIngredients,
  createIngredient,
  getSingleIngredient,
  deleteSingleIngredient,
  updateIngredient,
};
