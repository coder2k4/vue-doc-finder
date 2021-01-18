import {createStore} from "vuex";
import doctorsModule from "@/store/modules/doctors"
import requestsModule from "@/store/modules/requests"
import authModule from "./modules/auth"


const store = createStore({
  modules: {
    doctors: doctorsModule,
    requests: requestsModule,
    auth: authModule
  },

})

export default store