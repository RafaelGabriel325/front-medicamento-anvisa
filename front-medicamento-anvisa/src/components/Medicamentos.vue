<template xmlns="http://www.w3.org/1999/html">
  <div>
    <h1>Lista de Medicamentos</h1>
    <div>
        Filtrar por substância:
        <input type="text" v-model="filter.substancia" placeholder="Filtrar por substância"/>
      <br>
        Filtrar por CNPJ:
        <input type="text" v-model="filter.cnpj" placeholder="Filtrar por CNPJ"/>
      <br>
        Filtrar por laboratório:
        <input type="text" v-model="filter.laboratorio" placeholder="Filtrar por laboratório"/>
      <br>
        Página:
        <input type="number" v-model="currentPage" placeholder="Página" min="1"/>
      <br>
      <button @click="fetchMedicamentos">Filtrar</button>
    </div>

    <div v-if="loading">Carregando...</div>
    <div v-else-if="error">Erro: {{ error }}</div>
    <table v-else>
      <thead>
      <tr>
        <th>ID</th>
        <th>Substância</th>
        <th>CNPJ</th>
        <th>Laboratório</th>
        <th>Código GGREM</th>
        <th>Registro</th>
        <th>EAN 1</th>
        <th>EAN 2</th>
        <th>Produto</th>
        <th>Apresentação</th>
        <th>Classe Terapêutica</th>
        <th>Tipo Produto</th>
        <th>Regime Preço</th>
        <th>PF Sem Impostos</th>
        <th>PF 0</th>
        <th>PF 12</th>
        <th>PF 12 Alc</th>
        <th>PF 17</th>
        <th>PF 17 Alc</th>
        <th>PF 17.5</th>
        <th>PF 17.5 Alc</th>
        <th>PF 18</th>
        <th>PF 18 Alc</th>
        <th>PF 19</th>
        <th>PF 19 Alc</th>
        <th>PF 19.5</th>
        <th>PF 19.5 Alc</th>
        <th>PF 20</th>
        <th>PF 20 Alc</th>
        <th>PF 20.5</th>
        <th>PF 21</th>
        <th>PF 21 Alc</th>
        <th>PF 22</th>
        <th>PF 22 Alc</th>
        <th>PMC Sem Imposto</th>
        <th>PMC 0</th>
        <th>PMC 12</th>
        <th>PMC 12 Alc</th>
        <th>PMC 17</th>
        <th>PMC 17 Alc</th>
        <th>PMC 17.5</th>
        <th>PMC 17.5 Alc</th>
        <th>PMC 18</th>
        <th>PMC 18 Alc</th>
        <th>PMC 19</th>
        <th>PMC 19 Alc</th>
        <th>PMC 19.5</th>
        <th>PMC 19.5 Alc</th>
        <th>PMC 20</th>
        <th>PMC 20 Alc</th>
        <th>PMC 20.5</th>
        <th>PMC 21</th>
        <th>PMC 21 Alc</th>
        <th>PMC 22</th>
        <th>PMC 22 Alc</th>
        <th>Restrição Hospitalar</th>
        <th>CAP</th>
        <th>Confaz 87</th>
        <th>ICMS 0</th>
        <th>Análise Recursal</th>
        <th>Lista Concessão Crédito</th>
        <th>Comercialização 2022</th>
        <th>Tarja</th>
        <th>Destinação Comercial</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="medicamento in medicamentos" :key="medicamento.id">
        <td>{{ medicamento.id }}</td>
        <td>{{ medicamento.substancia }}</td>
        <td>{{ medicamento.cnpj }}</td>
        <td>{{ medicamento.laboratorio }}</td>
        <td>{{ medicamento.codigo_ggrem }}</td>
        <td>{{ medicamento.registro }}</td>
        <td>{{ medicamento.ean_1 }}</td>
        <td>{{ medicamento.ean_2 }}</td>
        <td>{{ medicamento.produto }}</td>
        <td>{{ medicamento.apresentacao }}</td>
        <td>{{ medicamento.classe_terapeutica }}</td>
        <td>{{ medicamento.tipo_produto }}</td>
        <td>{{ medicamento.regime_preco }}</td>
        <td>{{ medicamento.pf_sem_impostos }}</td>
        <td>{{ medicamento.pf_0 }}</td>
        <td>{{ medicamento.pf_12 }}</td>
        <td>{{ medicamento.pf_12_alc }}</td>
        <td>{{ medicamento.pf_17 }}</td>
        <td>{{ medicamento.pf_17_alc }}</td>
        <td>{{ medicamento.pf_17_5 }}</td>
        <td>{{ medicamento.pf_17_5_alc }}</td>
        <td>{{ medicamento.pf_18 }}</td>
        <td>{{ medicamento.pf_18_alc }}</td>
        <td>{{ medicamento.pf_19 }}</td>
        <td>{{ medicamento.pf_19_alc }}</td>
        <td>{{ medicamento.pf_19_5 }}</td>
        <td>{{ medicamento.pf_19_5_alc }}</td>
        <td>{{ medicamento.pf_20 }}</td>
        <td>{{ medicamento.pf_20_alc }}</td>
        <td>{{ medicamento.pf_20_5 }}</td>
        <td>{{ medicamento.pf_21 }}</td>
        <td>{{ medicamento.pf_21_alc }}</td>
        <td>{{ medicamento.pf_22 }}</td>
        <td>{{ medicamento.pf_22_alc }}</td>
        <td>{{ medicamento.pmc_sem_imposto }}</td>
        <td>{{ medicamento.pmc_0 }}</td>
        <td>{{ medicamento.pmc_12 }}</td>
        <td>{{ medicamento.pmc_12_alc }}</td>
        <td>{{ medicamento.pmc_17 }}</td>
        <td>{{ medicamento.pmc_17_alc }}</td>
        <td>{{ medicamento.pmc_17_5 }}</td>
        <td>{{ medicamento.pmc_17_5_alc }}</td>
        <td>{{ medicamento.pmc_18 }}</td>
        <td>{{ medicamento.pmc_18_alc }}</td>
        <td>{{ medicamento.pmc_19 }}</td>
        <td>{{ medicamento.pmc_19_alc }}</td>
        <td>{{ medicamento.pmc_19_5 }}</td>
        <td>{{ medicamento.pmc_19_5_alc }}</td>
        <td>{{ medicamento.pmc_20 }}</td>
        <td>{{ medicamento.pmc_20_alc }}</td>
        <td>{{ medicamento.pmc_20_5 }}</td>
        <td>{{ medicamento.pmc_21 }}</td>
        <td>{{ medicamento.pmc_21_alc }}</td>
        <td>{{ medicamento.pmc_22 }}</td>
        <td>{{ medicamento.pmc_22_alc }}</td>
        <td>{{ medicamento.restricao_hospitalar }}</td>
        <td>{{ medicamento.cap }}</td>
        <td>{{ medicamento.confaz_87 }}</td>
        <td>{{ medicamento.icms_0 }}</td>
        <td>{{ medicamento.analise_recursal }}</td>
        <td>{{ medicamento.lista_concessao_credito }}</td>
        <td>{{ medicamento.comercializacao_2022 }}</td>
        <td>{{ medicamento.tarja }}</td>
        <td>{{ medicamento.destinacao_comercial }}</td>
      </tr>
      </tbody>
    </table>
    <div v-if="count !== null">Total de medicamentos: {{ count }}</div>
  </div>
</template>

<script>
import {getMedicamentos} from '../services/api.js';

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
        const response = await getMedicamentos({...this.filter, page: this.currentPage});

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
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
}
</style>
