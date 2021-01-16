import getters from "@/store/modules/doctors/getters";
import mutations from "@/store/modules/doctors/mutations";
import actions from "@/store/modules/doctors/actions";


export default {
  namespaced: true,
  state() {
    return {
      lastTimeUpdateDoctorsList: null,
      doctors: [
        /*
        {
          id: 'd1',
          firstName: 'Николай',
          lastName: 'Бахуринский',
          areas: ['opt1', 'opt2'],
          description: 'Ведущий эксперт в области нейромышечной стоматологии. Специализируется на комплексной реабилитации проблем полости рта, сложном протезировании и эстетической реконструкции, применяет авторскую методику реабилитации с помощью индивидуальных стоматологических капп. Стаж работы – более 20 лет',
          hourlyRate: 1300
        },
        {
          id: 'd2',
          firstName: 'Игорь',
          lastName: 'Лемберг',
          areas: ['opt2', 'opt3'],
          description: 'Игорь Александрович Лемберг – врач в третьем поколении. Специализируется на комплексной реабилитации проблем полости рта, сложном протезировании на зубах и импланах, эстетической реконструкциии улыбки. Стаж работы – более 20 лет.',
          hourlyRate: 2800
        }
        */
      ]
    }
  },
  getters,
  mutations,
  actions
}