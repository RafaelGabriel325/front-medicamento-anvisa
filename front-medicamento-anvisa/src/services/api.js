import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

export const getMedicamentos = async (filters = {}) => {
  try {
    const response = await api.get('/medicacoes', { params: filters });
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar medicamentos:', error);
    throw error;
  }
};

