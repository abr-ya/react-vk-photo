import axios from 'axios';

export const requestNetsFromApi = () => axios.get(`http://api.citybik.es/v2/networks`);
export const requestStationsFromApi = (id) => axios.get(`http://api.citybik.es/v2/networks/${id}`);
