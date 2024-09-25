<template>
  <div>
    <h1>Lista de Medicamentos</h1>
    <div>
      <input type="text" v-model="filter.substancia" placeholder="Filtrar por substância" />
      <input type="text" v-model="filter.cnpj" placeholder="Filtrar por CNPJ" />
      <input type="text" v-model="filter.laboratorio" placeholder="Filtrar por laboratório" />
      <input type="number" v-model="currentPage" placeholder="Página" min="1" />
      <button @click="fetchMedicamentos">Filtrar</button>
    </div>
    <div v-if="loading">Carregando...</div>
    <div v-else-if="error">Erro: {{ error }}</div>
    <ul v-else>
      <li v-for="medicamento in medicamentos" :key="medicamento.id">
        {{ medicamento.substancia }} - {{ medicamento.cnpj }} - {{ medicamento.laboratorio }}
      </li>
    </ul>
    <div v-if="count !== null">Total de medicamentos: {{ count }}</div>
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
      count: 0,
      currentPage: 1,
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
        const response = await getMedicamentos({ ...this.filter, page: this.currentPage });

        this.medicamentos = response.results;
        this.count = response.count;

      } catch (error) {
        this.error = 'Não foi possível carregar os medicamentos.';
        console.error(error);
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
<style scoped>
</style>
