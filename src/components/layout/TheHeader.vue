<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Найти врача</router-link>
      </h1>
      <ul>
        <li><router-link to="/doctors">Все врачи</router-link></li>
        <li v-if="!isAuth"><router-link to="/auth">Войти/Зарегестрироваться</router-link></li>
        <li v-else><router-link to="/requests">Запросы</router-link></li>
        <li v-if="isAuth"><v-button @click="logOut">Выйти</v-button></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    isAuth() {
      return this.$store.getters['auth/isAuthenticated']
    }
  },
  methods: {
    logOut () {
      //this.$store.commit('auth/logOut')
      this.$store.dispatch('auth/logOut')
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>