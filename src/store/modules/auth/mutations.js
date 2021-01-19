export default {
    setUser(state, payload) {
        state.userId = payload.userId
        state.token = payload.token
        state.expirationDate = payload.expirationDate
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