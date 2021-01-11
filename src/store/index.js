import {createStore} from "vuex";
import doctorsModule from "@/store/modules/doctors"

const store = createStore({
  modules: {
    doctors: doctorsModule
  },
  state() {
    return {
      userId: 'd3'
    }
  },
  getters: {
    userId(state) {
      return state.userId
    }
  }
})

export default store