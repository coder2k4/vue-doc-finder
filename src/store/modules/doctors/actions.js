export default {
  registerDoctor(context, formData) {

    const data = {

      id: context.rootGetters.userId,
      firstName: formData.firstName,
      lastName: formData.lastName,
      description: formData.description,
      hourlyRate: formData.rate,
      areas: formData.areas

    }

    context.commit('registerDoctor', data)

  }
}