export default {

  addRequest(context, payload) {

    const newRequest = {
      id: (new Date().getTime()).toString(36),
      doctorId: payload.doctorId,
      email: payload.email,
      message: payload.message
    }

    context.commit('addRequest', newRequest)


  }
}