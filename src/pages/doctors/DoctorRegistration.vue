<template>
  <section>
    <v-card>
    <h2>Зарегестрировать врача.</h2>
    <doctor-form @form-data="saveFormData"></doctor-form>
    </v-card>
  </section>
</template>

<script>
import DoctorForm from "@/components/doctors/DoctorForm";
export default {
  name: "DoctorRegistration",
  components: {DoctorForm},
  methods: {
    saveFormData(formData) {
      this.$store.dispatch('doctors/registerDoctor', formData)
      this.$router.replace('/doctors')
    }
  }

}
</script>

<style scoped>

</style>