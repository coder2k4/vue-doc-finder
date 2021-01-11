<template>
<section>
  <v-card>
  <h2>Зарегестрировать врача.</h2>
  <doctor-form></doctor-form>
  </v-card>
</section>
</template>

<script>
import DoctorForm from "@/components/doctors/DoctorForm";
export default {
  name: "DoctorRegistration",
  components: {DoctorForm}
}
</script>

<style scoped>

</style>