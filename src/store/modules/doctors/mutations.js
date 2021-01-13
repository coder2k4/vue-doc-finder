export default {
  registerDoctor(state, payload) {
    state.doctors.push(payload)
  },

  setDoctors(state, payload) {
    state.doctors = payload
  }

}