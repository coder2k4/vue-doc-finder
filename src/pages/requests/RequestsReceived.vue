<template>
  <section>
    <v-spinner v-if="isLoading"></v-spinner>
    <v-modal v-else-if="error" :show="!!error" title="Ошибка загрузки" @close="clearError">{{ error }}</v-modal>
    <v-card v-else>
      <header>
        <h2>Все запросы</h2>
      </header>

      <ul v-if="hasRequests">
        <request-item v-for="req in receivedRequest" :key="req.id" :email="req.email"
                      :message="req.message"></request-item>
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
  data() {
    return {
      isLoading: false,
      error: ''
    }
  },
  computed: {
    receivedRequest() {
      return this.$store.getters['requests/allRequests']
    },

    hasRequests() {
      return this.$store.getters['requests/hasRequests']
    }
  },
  methods: {
    async loadRequests() {
      this.isLoading = true
      try {
        await this.$store.dispatch('requests/fetchRequests')
      } catch (e) {
        this.error = e.message
      }
      this.isLoading = false
    },
    clearError() {
      this.error = ''
    }
  },
  created() {
    this.loadRequests()
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