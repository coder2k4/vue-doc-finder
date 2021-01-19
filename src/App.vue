<template>
  <TheHeader></TheHeader>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  <TheFooter></TheFooter>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";

export default {
  name: "App",
  components: {TheFooter, TheHeader},
  computed: {
    needReloding() {
      return this.$store.getters['auth/needToRelog']
    }
  },
  watch: {
    needRelogin(curValue, oldValue) {
      if(curValue && curValue != oldValue)
        this.$router.replace('/doctors')
    }
  },
  created(){
    this.$store.dispatch('auth/autoLogin') // проверяем наличие данных в localstorage
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}


.route-enter-from
{
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all .3s ease-out;
}

.route-leave-active {
  transition: all .3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

</style>