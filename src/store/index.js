import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "",
    point: 0
  },
  mutations: {
    setName(state, value) {
      state.name = value
    },
    setPoint(state, value) {
      state.point = value
    }

  },
  actions: {
    addName(context, payload) {
      context.commit('setName', this.state.name = payload)
    },
    addPoint(context, payload) {
      context.commit('setPoint', this.state.point = payload)
    }
  },
  modules: {
  }
})
