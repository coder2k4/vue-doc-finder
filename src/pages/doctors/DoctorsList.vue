<template>
  <section>
    <doctor-filter @change-filter="setFilter"></doctor-filter>
  </section>
  <section>
    <v-card>
      <div class="controls">
        <v-button mode="outline">Обновить</v-button>
        <v-button to="/register" link>Зарегестрировать</v-button>
      </div>
      <ul v-if="hasDoctors">
        <doctor-item v-for="doctor in filteredDoctors"
                     :key="doctor.id"
                     :id="doctor.id"
                     :first-name="doctor.firstName"
                     :last-name="doctor.lastName"
                     :rate="doctor.hourlyRate"
                     :areas="doctor.areas"
        ></doctor-item>
      </ul>
      <h3 v-else>К сожалению нет ни одного доктора</h3>
    </v-card>
  </section>
</template>

<script>
import DoctorItem from "@/components/doctors/DoctorItem";
import DoctorFilter from "@/components/doctors/DoctorFilter";


export default {
  name: "DoctorsList",
  components: {DoctorFilter, DoctorItem},
  data() {
    return {
      activeFilters: {
        opt1: true,
        opt2: true,
        opt3: true,
      }
    }
  },
  computed: {
    filteredDoctors() {
      const doctors = this.$store.getters['doctors/doctors']
      return doctors.filter(doc => {
        if (doc.areas.includes('opt1') && this.activeFilters.opt1) {
          return true
        }
        if (doc.areas.includes('opt2') && this.activeFilters.opt2) {
          return true
        }
        if (doc.areas.includes('opt3') && this.activeFilters.opt3) {
          return true
        }
        return false
      })

    },
    hasDoctors() {
      return this.$store.getters['doctors/hasDoctors']
    }
  },
  methods: {
    setFilter(updatedFilters) {
      this.activeFilters = updatedFilters
    }
  },
  created() {
    this.$store.dispatch('doctors/fetchDoctors')
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>