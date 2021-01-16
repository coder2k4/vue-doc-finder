export default {

  //Получаем список врачей
  doctors(state) {
    return state.doctors
  },

  //Есть ли данные о врачах
  hasDoctors(state) {
    return state.doctors && state.doctors.length !== 0
  },

  //Проверяем, была ли последняя загрузка 1 минуты назад?
  shouldUpdate(state) {
    if(!state.lastTimeUpdateDoctorsList) {
      return true
    }
    return (state.lastTimeUpdateDoctorsList - new Date().getTime()) / 1000 > 60;
  }

}