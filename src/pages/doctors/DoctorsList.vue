<template>
  <section>
    FILTER
  </section>
  <section>

    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register Doctors</router-link>
    </div>
    <ul v-if="!hadDoctors">
      <li v-for="doctor in filteredDoctors" :key="doctor.id">{{ doctor.firstName }}</li>
    </ul>
    <h3 v-else>К сожалению нет ни одного доктора</h3>
  </section>
</template>

<script>
export default {
  name: "DoctorsList",
  computed: {
    filteredDoctors() {
      return this.$store.getters['doctors/doctors']
    },
    hadDoctors() {
      return this.$store.getters['doctors/hasDoctors']
    }
  }
}
</script>

<style scoped>

</style>