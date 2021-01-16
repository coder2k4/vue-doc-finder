export default {
  async registerDoctor(context, formData) {

    const userID = context.rootGetters.userId

    const data = {
      //id: context.rootGetters.userId,
      firstName: formData.firstName,
      lastName: formData.lastName,
      description: formData.description,
      hourlyRate: formData.rate,
      areas: formData.areas
    }

    const response = await fetch(`https://vue-doctors-default-rtdb.firebaseio.com/doctors/${userID}.json`, {
      method: 'PUT',
      body: JSON.stringify(data)
    })

    //const responseData = await response.json()

    if(!response.ok){
      // error Пробрасываем ошибку в компонент, если не удалось загрузить данные на сервер
      throw new Error(response.message || "Fetch register doctor error!")
    }

    context.commit('registerDoctor', { ...data, id: userID})

  },


  async fetchDoctors(context, payload) {

    // Нужно ли нам обновляться данные и запрашивать с сервера
    if(!payload.forceRefresh && !context.getters.shouldUpdate)
      return

    const response = await fetch(`https://vue-doctors-default-rtdb.firebaseio.com/doctors.jso`)
    const responseData = await response.json()

    if(!response.ok){
      // error
      throw new Error(response.message || "Fetch doctors list error!")
    }

    const doctors = []

    for(const key in responseData) {
      const doc = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].rate,
        areas: responseData[key].areas
      }
      doctors.push(doc)
    }

    context.commit('setDoctors', doctors)
    context.commit('setLastTimeUpdate')
  }
}