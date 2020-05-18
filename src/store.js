import Vue from 'vue'
import Vuex from 'vuex'
import Services from './services'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    countries: [],
    country: {
      empty: true
    }
  },
  actions: {
    async getCountriesByRegion({commit}, payload) {
      let {data} = await Services.getByRegion(payload)
      commit('SET_COUNTRIES', data)
    },
    async getCountriesByName({commit}, payload) {
      let {data} = await Services.getByName(payload)
      commit('SET_COUNTRIES', data)
    },
    setCountry({commit}, payload) {
      commit('SET_COUNTRY', payload)
    }
  },
  mutations: {
    SET_COUNTRIES(state, payload) {
      state.countries = payload
    },
    SET_COUNTRY(state, payload) {
      state.country = payload
    }
  }
})

export default store