<template>
  <form action="" @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="firstName">Имя:</label>
      <input type="text"
             id="firstName"
             placeholder="Имя"
             v-model.trim="firstName.val"
             @focus="clearValidity('firstName')">
      <small v-if="!firstName.isValid">Поле не должно быть пустым</small>
    </div>
    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastName">Фамилия:</label>
      <input type="text" id="lastName" placeholder="Фамилия" v-model.trim="lastName.val" @focus="clearValidity('lastName')">
      <small v-if="!lastName.isValid">Поле не должно быть пустым</small>
    </div>
    <div class="form-control" :class="{invalid: !description.isValid}">
      <label for="description">Описание:</label>
      <textarea id="description" rows="5" v-model.trim="description.val" @focus="clearValidity('description')"></textarea>
      <small v-if="!description.isValid">Поле не должно быть пустым</small>
    </div>
    <div class="form-control" :class="{invalid: !hourlyRate.isValid}">
      <label for="hourlyRate">Цена:</label>
      <input type="text" id="hourlyRate" placeholder="Цена в час" v-model.number="hourlyRate.val" @focus="clearValidity('hourlyRate')">
      <small v-if="!hourlyRate.isValid">Укажите правильную цену</small>
    </div>

    <div class="form-control" :class="{invalid: !areas.isValid}">
      <h3>Навыки</h3>
      <div>
        <input type="checkbox" id="opt1" value="opt1" v-model="areas.val" @focus="clearValidity('areas')">
        <label for="opt1">opt1</label>
      </div>
      <div>
        <input type="checkbox" id="opt2" value="opt2" v-model="areas.val" @focus="clearValidity('areas')">
        <label for="opt2">opt2</label>
      </div>
      <div>
        <input type="checkbox" id="opt3" value="opt3" v-model="areas.val" @focus="clearValidity('areas')">
        <label for="opt3">opt3</label>
      </div>

      <small v-if="!areas.isValid">Выберите навык</small>
    </div>
    <small v-if="!formIsValid">Пожалуйста, заполните форму правильно!</small>
    <v-button>Зарегестрировать</v-button>

  </form>
</template>

<script>
export default {
  name: "DoctorForm",
  emits: ['form-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      hourlyRate: {
        val: 0,
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      formIsValid: true
    }
  },
  methods: {
    clearValidity(inputName) {
      this[inputName].isValid = true
    },

    validateForm() {
      this.formIsValid = true;
      if (this.firstName.val === '') {
        this.firstName.isValid = false
        this.formIsValid = false
      }

      if (this.lastName.val === '') {
        this.lastName.isValid = false
        this.formIsValid = false
      }

      if (this.description.val === '') {
        this.description.isValid = false
        this.formIsValid = false
      }

      if (this.hourlyRate.val < 0 || !this.hourlyRate.val) {
        this.hourlyRate.isValid = false
        this.formIsValid = false
      }

      if (this.areas.val.length === 0) {
        this.areas.isValid = false
        this.formIsValid = false
      }
    },

    submitForm() {

      // Валидируем форму
      this.validateForm()

      if (!this.formIsValid)
        return

      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        description: this.description.val,
        rate: this.hourlyRate.val,
        areas: this.areas.val,
      }

      this.$emit('form-data', formData)

    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>