export default {
    userId(state) {
        return state.userId
    },
    token(state) {
        return state.token
    },
    isAuthenticated(state) {
        return !!state.token
    },

    needToRelog(state) {
        const timeNow = new Date().getTime()

        if(state.expirationDate - timeNow  < 0)
            return true;
        return false
    }

}