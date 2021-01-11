<template>
  <section>
    <v-card>
      <h3>{{ fullName }}</h3>
      <h4>{{ rate }} р./в час</h4>
    </v-card>
  </section>
  <section>
    <v-card>
      <header>
        <h2>Заинтересовались? Свяжитесь сейчас!</h2>
        <v-button link :to="contactLink">Связаться</v-button>
      </header>
      <router-view></router-view>
    </v-card>
  </section>
  <section>
    <v-card>
      {{ description }}
      <div>
        <v-badge v-for="area in areas" :key="area" :title="area" :type="frontend"></v-badge>
      </div>
    </v-card>
  </section>
</template>

<script>
export default {
  name: "DoctorDetail",
  props: ['id'],
  data(){
    return {
      selectedDoctor: null
    }
  },
  computed: {
    fullName() {
      return this.selectedDoctor.lastName + ' ' + this.selectedDoctor.firstName
    },
    contactLink() {
      return this.$route.path + '/contact'
    },
    areas() {
      return this.selectedDoctor.areas
    },
    rate() {
      return this.selectedDoctor.hourlyRate
    },
    description() {
      return this.selectedDoctor.description
    }
  },
  created() {
    this.selectedDoctor = this.$store.getters['doctors/doctors'].find(doc => doc.id === this.id)
  }
}
</script>

<style scoped>

</style>