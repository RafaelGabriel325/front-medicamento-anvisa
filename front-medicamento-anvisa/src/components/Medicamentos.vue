<template>
  <div>
    <h1>Lista de Medicamentos</h1>
    <div>
      <input type="text" v-model="filter.substancia" placeholder="Filtrar por substância" />
      <input type="text" v-model="filter.cnpj" placeholder="Filtrar por CNPJ" />
      <input type="text" v-model="filter.laboratorio" placeholder="Filtrar por laboratório" />
      <button @click="fetchMedicamentos">Filtrar</button>
    </div>
    <div v-if="loading">Carregando...</div>
    <div v-else-if="error">Erro: {{ error }}</div>
    <ul v-else>
      <li v-for="medicamento in medicamentos" :key="medicamento.id">
        {{ medicamento.nome }} - {{ medicamento.dosagem }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getMedicamentos } from '../services/api.js';

export default {
  data() {
    return {
      medicamentos: [],
      loading: true,
      error: null,
      filter: {
        substancia: '',
        cnpj: '',
        laboratorio: '',
      },
    };
  },
  methods: {
    async fetchMedicamentos() {
      this.loading = true;
      this.error = null;
      try {
        const response = await getMedicamentos(this.filter); // Adicione lógica para passar filtros
        this.medicamentos = response;
      } catch (error) {
        this.error = 'Não foi possível carregar os medicamentos.';
      } finally {
        this.loading = false;
      }
    },
  },
  async created() {
    await this.fetchMedicamentos();
  },
};
</script>
