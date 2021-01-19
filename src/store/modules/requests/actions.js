export default {

  async addRequest(context, payload) {

    const newRequest = {
      email: payload.email,
      message: payload.message
    }

    const response = await fetch(`https://vue-doctors-default-rtdb.firebaseio.com/requests/${payload.doctorId}.json`, {
      method: 'POST',
      body: JSON.stringify(newRequest)
    });


    if (!response.ok) {
      // error
      throw new Error(response.message || 'Ошибка при отправке запроса')
    }

    // Получаем ID вновь созданного запроса
    const responseData = await response.json()

    context.commit('addRequest', {...newRequest, id: responseData.name, doctorId: payload.doctorId,})

  },

  async fetchRequests(context) {
    const doctorId = context.rootGetters['auth/userId']
    const token = context.rootGetters['auth/token']
    const response = await fetch(`https://vue-doctors-default-rtdb.firebaseio.com/requests/${doctorId}.json?auth=${token}`);
    const responseData = await response.json()

    console.log(responseData)

    if (!response.ok) {
      // error
      throw new Error('Ошибка при загрузке данных о запросах. ' + responseData.error)
    }



    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        doctorId,
        email: responseData[key].email,
        message: responseData[key].message
      }
      requests.push(request)
    }

    console.log(requests)

    context.commit('setRequest', requests)

  }

}