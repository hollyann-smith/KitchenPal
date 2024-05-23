import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getRecipes = () => new Promise((resolve, reject) => {
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
const createRecipe = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/recipe.json`, {
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
const getSingleRecipe = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/recipes/${id}.json`, {
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
const deleteSingleRecipe = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/recipes/${id}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getRecipes, createRecipe, getSingleRecipe, deleteSingleRecipe,
};

