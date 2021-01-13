import {createStore} from "vuex";
import doctorsModule from "@/store/modules/doctors"
import requestsModule from "@/store/modules/requests"

const store = createStore({
  modules: {
    doctors: doctorsModule,
    requests: requestsModule,
  },
  state() {
    return {
      userId: 'd3'
    }
  },
  getters: {
    /**
     * Получаем ID текущего пользователя
     * @param state
     * @returns {string} ID пользователя
     */
    userId(state) {
      return state.userId
    }
  }
})

export default store