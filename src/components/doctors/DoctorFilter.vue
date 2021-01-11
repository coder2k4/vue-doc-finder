<template>
  <v-card>
    <h2>Фильтр</h2>
    <span class="filter-option">
      <input type="checkbox"
             id="opt1"
             @change="setFilter"
             checked>
      <label for="opt1">Фильтр 1</label>
    </span>
    <span class="filter-option">
      <input type="checkbox"
             @change="setFilter"
             id="opt2"
             checked>
      <label for="opt2">Фильтр 2</label>
    </span>
    <span class="filter-option">
      <input type="checkbox"
             @change="setFilter"
             id="opt3"
             checked>
      <label for="opt3">Фильтр 3</label>
    </span>
  </v-card>
</template>

<script>
export default {
  name: "DoctorFilter",
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        opt1: true,
        opt2: true,
        opt3: true
      }
    }
  },
  methods: {
    setFilter(event) {
      const filterId = event.target.id
      const filterChecked = event.target.checked
      const updatedFilters = {
        ...this.filters,
        [filterId]: filterChecked
      }
      this.filters = updatedFilters
      this.$emit('change-filter', updatedFilters)
    }
  }
}
</script>

<style scoped>

</style>