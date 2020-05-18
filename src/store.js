import Vue from 'vue'
import Vuex from 'vuex'
import Services from './services'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    countries: []
  },
  actions: {
    async getCountriesByRegion({commit}, payload) {
      let {data} = await Services.getByRegion(payload)
      commit('SET_COUNTRIES', data)
    },
    async getCountriesByName({commit}, payload) {
      let {data} = await Services.getByName(payload)
      commit('SET_COUNTRIES', data)
    }
  },
  mutations: {
    SET_COUNTRIES(state, payload) {
      state.countries = payload
    }
  }
})

export default store