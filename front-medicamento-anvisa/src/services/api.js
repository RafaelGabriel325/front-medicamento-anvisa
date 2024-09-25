import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

export const getMedicamentos = async (filters = {}) => {
  try {
    let url = '/medicacoes/';
    const params = new URLSearchParams();

    if (filters.substancia) {
      params.append('substancia', filters.substancia);
    }
    if (filters.cnpj) {
      params.append('cnpj', filters.cnpj);
    }
    if (filters.laboratorio) {
      params.append('laboratorio', filters.laboratorio);
    }
    if (filters.page) {
      params.append('page', filters.page);
    }

    if (params.toString()) {
      url += '?' + params.toString();
    }

    const response = await api.get(url);

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar medicamentos:', error);
    throw error;
  }
};
