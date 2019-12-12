import * as axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getChallenge = key => {
  return axios
    .get(`${API_URL}/api/challenges/c/${key}`)
    .then(resp => resp.data);
};

export const updateChallenge = (key, body) => {
  return axios
    .put(`${API_URL}/api/challenges/c/${key}`, body)
    .then(resp => resp.data);
};

export const newChallenge = body => {
  return axios.post(`${API_URL}/api/challenges`, body).then(resp => resp.data);
};
