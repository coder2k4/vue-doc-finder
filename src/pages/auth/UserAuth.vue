<template>
  <div>
    <v-modal :show="!!error" title="Непредвиденная ошибка авторизации" @close="errorClose">
      <p>{{ error }}</p>
    </v-modal>

    <v-modal fixed :show="isLoading" title="Аутентификация...">
      <v-spinner></v-spinner>
    </v-modal>

    <v-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email"/>
        </div>
        <div class="form-control">
          <label for="password">Пароль</label>
          <input type="password" id="password" v-model.trim="password"/>
        </div>

        <p v-if="!formIsValid">Пожалуйста введите корректный еmail и пароль</p>
        <v-button>{{ submitButtonCaption }}</v-button>
        <v-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</v-button>
      </form>
    </v-card>

  </div>
</template>

<script>
export default {
  name: "UserAuth",
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      error: null,
      isLoading: false
    }
  },
  computed: {

    /**
     * Меняем название кнопки submit
     */
    submitButtonCaption() {
      if (this.mode === 'login') {
        return 'Войти'
      } else {
        return 'Зарегестрироваться'
      }
    },
    /**
     * Смена названия кнопки - смены режимов
     * @returns {string}
     */
    switchModeButtonCaption() {
      if (this.mode === 'login') {
        return 'Перейти к регистрации'
      } else {
        return 'Авторизоваться'
      }
    }
  },
  methods: {


    /**
     * Очищаем ошибку при нажатии кнопки закрыть в модальном окне
     */
    errorClose() {
      this.error = null
    },

    /**
     * Обработка формы
     * @returns {Promise<void>}
     */
    async submitForm() {
      this.formIsValid = true;

      if (this.email === '' || !this.email.includes('@') || this.password.length < 6) {
        this.formIsValid = false
        return;
      }

      this.isLoading = true
      const payloadData = {
        email: this.email,
        password: this.password,
      }

      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('auth/login', payloadData)
        } else {
          await this.$store.dispatch('auth/singUp', payloadData);
        }
        // Получаем query параметр из строки, и производим переход по его значению
        const redirectUrl = this.$route.query.doc
        await this.$router.replace('/' + (redirectUrl ? redirectUrl : ''))
      } catch (e) {
        this.error = e.message
      }

      this.isLoading = false


    },

    /**
     * Мена режима регистрации/авторизации
     */
    switchAuthMode() {
      if (this.mode === 'login') {
        this.mode = 'signup'
      } else
        this.mode = 'login'
    }
  }

}
</script>

<style scoped>
form {
  margin: 1rem;
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
</style>