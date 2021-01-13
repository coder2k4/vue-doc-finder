export default {

  allRequests(state, _1, _2, rootGetters) {
    const docId = rootGetters.userId
    return state.requests.filter(req => req.doctorId === docId)
  },

  hasRequests(state,getters) {
    return getters.allRequests && getters.allRequests.length > 0
  }

}