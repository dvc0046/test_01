import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://new.api.nexusautotransport.com/api/vehicles',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  async getYears() {
    const response = await apiClient.get('/years');
    return response.data.data; // Extracting 'data' array
  },
  async getMakes(year) {
    const response = await apiClient.get(`/makes?year=${year}`);
    return response.data.data; // Extracting 'data' array of objects
  },
  async getModels(year, make) {
    const response = await apiClient.get(`/models?year=${year}&make=${make}`);
    return response.data.data.map((item) => item.model); // Extracting 'data' and mapping to 'model'
  },
};
