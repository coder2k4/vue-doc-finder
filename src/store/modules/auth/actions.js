export default {

    /**
     *
     * @param context
     * @param { string } payload.email
     * @param { string } payload.password
     * @returns {Promise<void>}
     */
    async login(context, payload) {
        return context.dispatch('auth', {...payload, mode: 'login'})
    },


    /**
     * Регистрация нового пользователя
     * @param context
     * @param { string } payload.email
     * @param { string } payload.password
     * @returns {Promise<void>}
     */
    async singUp(context, payload) {
        return context.dispatch('auth', {...payload, mode: 'signup'})
    },

    /**
     * Общая логика аутентификации
     * @param context
     * @param payload.email {string} почта пользователя (его логин)
     * @param payload.password {string} пароль пользователя
     * @param payload.mode {string} login | signup - распознаем что хотим делать
     * @returns {Promise<void>}
     */
    async auth(context, payload) {
        const mode = payload.mode
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:'
        const key = 'AIzaSyCNqResOznuTQqK7NmeU9P-tkFce8tjDcQ'

        if (mode === 'signup')
            url = url + 'signUp?key=' + key
        if (mode === 'login')
            url = url + 'signInWithPassword?key=' + key

        const response = await fetch(url, {

                method: 'POST',
                body: JSON.stringify({
                    email: payload.email,
                    password: payload.password,
                    returnSecureToken: true,
                })
            }
        )

        const responseData = await response.json()

        //console.log(responseData)

        if (!response.ok) {
            if (mode === 'signup')
                throw new Error('Не могу зарегестрировать нового пользователя! ' + responseData.error.message)
            if (mode === 'login')
                throw new Error('Ошибка входа. ' + responseData.error.message)
        }

        const expiresTime = +responseData.expiresIn * 1000
        const expirationDate = new Date().getTime() + expiresTime


        localStorage.setItem('userId', responseData.localId)
        localStorage.setItem('token', responseData.idToken)
        localStorage.setItem('expirationDate', expirationDate)

        context.commit('setUser', {
            userId: responseData.localId,
            token: responseData.idToken,
            expirationDate,
        })

    },

    /**
     * Пробуем автоматически залогиниться, если есть данные в локалсторе
     * @param context
     */
    autoLogin(context) {
        const userId = localStorage.getItem('userId')
        const token = localStorage.getItem('token')
        const expirationDate = localStorage.getItem('expirationDate')

        if (!userId && !token && !expirationDate)
            return

        context.commit('setUser', {
            userId,
            token,
            expirationDate
        })
    },


    /**
     * Обнуляем авторизацию
     * @param context
     */
    logOut(context) {

        localStorage.removeItem('userId')
        localStorage.removeItem('token')
        localStorage.removeItem('expirationDate')

        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null,
        })
    },
}