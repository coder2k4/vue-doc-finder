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
      // error
    }

    context.commit('registerDoctor', { ...data, id: userID})

  },


  async fetchDoctors(context) {

    const response = await fetch(`https://vue-doctors-default-rtdb.firebaseio.com/doctors.json`)
    const responseData = await response.json()

    if(!response.ok){
      // error
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
  }
}