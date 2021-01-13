import getters from "@/store/modules/requests/getters";
import mutations from "@/store/modules/requests/mutations";
import actions from "@/store/modules/requests/actions";

export default {
  namespaced: true,
  state() {
    return {
      requests: []
    }
  },
  getters,
  mutations,
  actions
}