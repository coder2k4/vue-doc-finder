export default {

  //Получаем список врачей
  doctors(state) {
    return state.doctors
  },

  //Есть ли данные о врачах
  hasDoctors(state) {
    return state.doctors && state.doctors.length !== 0
  }


}