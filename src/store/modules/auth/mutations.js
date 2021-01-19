export default {
    setUser(state, payload) {
        state.userId = payload.userId
        state.token = payload.token
        state.tokenExpiration = payload.tokenExpiration
    },

    // logOut(state) {
    //
    //     console.log('logout')
    //
    //     state.userId = null
    //     state.token = null
    //     state.tokenExpiration = null
    // }
}