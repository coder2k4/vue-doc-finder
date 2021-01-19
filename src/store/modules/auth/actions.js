export default {

    /**
     *
     * @param context
     * @param { string } payload.email
     * @param { string } payload.password
     * @returns {Promise<void>}
     */
    async login(context, payload) {

        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNqResOznuTQqK7NmeU9P-tkFce8tjDcQ', {
            method: 'POST',
            body: JSON.stringify({
                ...payload,
                returnSecureToken: true
            })
        })
        const responseData = await response.json()

        if (!response.ok) {
            console.log(responseData)
            throw new Error('Ошибка входа. ' + responseData.error.message)
        }

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        });
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

        if (!response.ok) {
            //console.log(responseData)
            throw new Error('Не могу зарегестрировать нового пользователя! ' + responseData.error.message)
        }

        context.commit('setUser', {
            userId: responseData.userId,
            tokenExpiration: responseData.token,
            token: responseData.tokenExpiration,
        })
    },


    /**
     * Обнуляем авторизацию
     * @param context
     */
    logOut(context) {

        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null,
        })
    },
}