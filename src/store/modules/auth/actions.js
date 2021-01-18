export default {

    login() {
    },


    /**
     * Регистрация нового пользователя
     * @param context
     * @param { string } payload.email
     * @param { string } payload.password
     * @returns {Promise<void>}
     */
    async singUp(context, payload) {

        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNqResOznuTQqK7NmeU9P-tkFce8tjDcQ', {

                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                })
            }
        )

        const responseData = await response.json()

        if(!response.ok) {
            console.log(responseData)
            throw new Error(responseData.message || 'Не могу зарегестрировать нового пользователя!')
        }

        console.log(responseData)

        context.commit('setUser', {
            userId : responseData.userId,
            tokenExpiration : responseData.token,
            token : responseData.tokenExpiration,
        })
    }
}