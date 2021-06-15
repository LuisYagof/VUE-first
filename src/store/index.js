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
    }
  },
  actions: {
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
