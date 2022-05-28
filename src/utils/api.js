import axios from "axios";

const urlBase = "http://localhost:4500";

export const createNewUser =(user)=> {
  return axios.post(`${urlBase}/register`, user, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
export const authenticateUser =(user)=> {
  return axios.post(`${urlBase}/auth`, user, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

export const getAuthProducts = (authToken)=> {
  return axios.get(`${urlBase}/user-products`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })
}

export const getProducts = ()=> {
  return axios.get(`${urlBase}/products`);
}

export const addUserProducts = (product, authToken)=> {
  return axios.post(`${urlBase}/user-products`, product, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  })
}