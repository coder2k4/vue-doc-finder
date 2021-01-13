<template>
  <form @submit.prevent="formSubmit" ref="form">
    <div>
      <label for="email">E-mail</label>
      <input type="email" id="email" v-model.trim="email">
    </div>
    <div>
      <label for="message">Сообщение</label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
    </div>
    <div class="actions">
      <small v-if="!formIsValid" class="errors">Заполните все поля верно</small>
      <v-button>Отправить</v-button>
    </div>

  </form>
</template>

<script>
export default {
  name: "ContactDoctor",
  props: ['id'],
  data() {
    return {
      email: '',
      message: '',
      formIsValid: true,
    }
  },
  methods: {
    formSubmit() {


      this.formIsValid = !(this.email === '' || !this.email.includes('@') || this.message === '');

      if (!this.formIsValid)
        return

      console.log('ok')
      // take data and do action
      this.$store.dispatch('requests/addRequest', {
        doctorId: this.$route.params.id,
        email: this.email,
        message: this.message,
      })

      this.$router.replace('/')
    }
  }

}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>