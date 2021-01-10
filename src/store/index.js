import {createStore} from "vuex";
import doctorsModule from "@/store/modules/doctors"

const store = createStore({
  modules: {
    doctors: doctorsModule
  }
})

export default store