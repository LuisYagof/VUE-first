import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: "Luis Yago",
    userSurname: "Fernández",
    number: 0
  },
  mutations: {
    acumular(state, payload) {
      state.number = this.state.number + payload
      // payload es una convención: se le suele llamar así a el parámetro que recibe la mutation
    }
  },
  actions: {
    // ---> así se hace sin destructuring:
    // acumular(context) {
    //   context.commit("acumular")
    // },
    acumular({ commit }, num) {
      commit("acumular", num)
    }
  },
  modules: {
  }
})
