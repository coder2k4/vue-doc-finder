<template>
  <form action="" @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstName">Имя:</label>
      <input type="text"
             id="firstName"
             placeholder="Имя"
             v-model.trim="firstName">
    </div>
    <div class="form-control">
      <label for="lastName">Фамилия:</label>
      <input type="text" id="lastName" placeholder="Фамилия" v-model.trim="lastName">
    </div>
    <div class="form-control">
      <label for="description">Описание:</label>
      <textarea id="description" rows="5" v-model.trim="description"></textarea>
    </div>
    <div class="form-control">
      <label for="hourlyRate">Цена:</label>
      <input type="text" id="hourlyRate" placeholder="Цена в час" v-model.number="hourlyRate">
    </div>

    <div class="form-control">
      <h3>Навыки</h3>
      <div>
        <input type="checkbox" id="opt1" value="opt1" v-model="areas">
        <label for="opt1">opt1</label>
      </div>
      <div>
        <input type="checkbox" id="opt2" value="opt2" v-model="areas">
        <label for="opt2">opt2</label>
      </div>
      <div>
        <input type="checkbox" id="opt3" value="opt3" v-model="areas">
        <label for="opt3">opt3</label>
      </div>
    </div>

    <v-button>Зарегестрировать</v-button>

  </form>
</template>

<script>
export default {
  name: "DoctorForm",
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      hourlyRate: 0,
      areas: []
    }
  },
  methods: {
    submitForm() {

      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        description: this.description,
        rate: this.hourlyRate,
        areas: this.areas,
      }

      console.log(formData)

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