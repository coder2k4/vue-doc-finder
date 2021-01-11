<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>{{ rate }} р./в час</h4>
    <div>
    <v-badge v-for="area in areas" :key="area" type="frontend" :title="area"></v-badge>
    </div>
    <div class="actions">
      <v-button :to="doctorContactLink" link mode="outline">Связаться</v-button>
      <v-button :to="doctorDetailLink" link>Посмотреть профиль</v-button>
    </div>
  </li>
</template>

<script>
export default {
  name: "DoctorItem",
  props: ["id", "firstName", "lastName", "rate", "areas"],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    doctorContactLink() {
      return '/doctor/' + this.id + '/contact'
    },
    doctorDetailLink() {
      return '/doctor/' + this.id
    },
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>