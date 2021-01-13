<template>
  <section>
    АААУУУ
    <v-card>
      <header>
        <h2>Все запросы</h2>
      </header>

      <ul v-if="hasRequests">
        <request-item v-for="req in receivedRequest" :key="req.id" :email="req.email" :message="req.message"></request-item>
      </ul>

      <h3 v-else>Запросов пока нет</h3>
    </v-card>
  </section>
</template>

<script>
import RequestItem from "@/components/requests/RequestItem";

export default {
  name: "RequestsReceived",
  components: {RequestItem},
  computed: {
    receivedRequest() {
      return this.$store.getters['requests/allRequests']
    },

    hasRequests() {
      return this.$store.getters['requests/hasRequests']
    }
  }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>