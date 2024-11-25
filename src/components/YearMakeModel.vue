<template>
    <div class="dropdown-container">
      <h1>Vehicle Selector</h1>
      <div>
        <label for="year">Year:</label>
        <select id="year" v-model="selectedYear" @change="fetchMakes">
          <option value="" disabled>Select Year</option>
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
      </div>
  
      <div>
        <label for="make">Make:</label>
        <select id="make" v-model="selectedMake" :disabled="!makes.length" @change="fetchModels">
          <option value="" disabled>Select Make</option>
          <option v-for="make in makes" :key="make.id" :value="make.name">{{ make.name }}</option>
        </select>
      </div>
  
      <div>
        <label for="model">Model:</label>
        <select id="model" v-model="selectedModel" :disabled="!models.length">
          <option value="" disabled>Select Model</option>
          <option v-for="model in models" :key="model" :value="model">{{ model }}</option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
import apiService from '../services/apiService';

export default {
  name: 'YearMakeModel',
  data() {
    return {
      years: [], // Array of years
      makes: [], // Array of make objects { id, name }
      models: [], // Array of model names
      selectedYear: '',
      selectedMake: '',
      selectedModel: '',
    };
  },
  methods: {
    async fetchYears() {
      try {
        this.years = await apiService.getYears();
      } catch (error) {
        console.error('Error fetching years:', error);
      }
    },
    async fetchMakes() {
      if (!this.selectedYear) return;

      this.makes = [];
      this.models = [];
      try {
        this.makes = await apiService.getMakes(this.selectedYear);
      } catch (error) {
        console.error('Error fetching makes:', error);
      }
    },
    async fetchModels() {
      if (!this.selectedYear || !this.selectedMake) return;

      this.models = [];
      try {
        this.models = await apiService.getModels(this.selectedYear, this.selectedMake);
      } catch (error) {
        console.error('Error fetching models:', error);
      }
    },
  },
  mounted() {
    this.fetchYears();
  },
};
</script>

<style scoped>
.dropdown-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 400px;
  margin: auto;
  font-family: Arial, sans-serif;
}

select {
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
}
</style>
