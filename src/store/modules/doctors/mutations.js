export default {
  registerDoctor(state, payload) {
    state.doctors.push(payload)
  },

  setDoctors(state, payload) {
    state.doctors = payload
  },

  setLastTimeUpdate(state) {
    state.lastTimeUpdateDoctorsList = new Date().getTime()
  },



}