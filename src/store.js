import Vue from 'vue'
import Vuex from 'vuex'
import Services from './services'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    countries: [],
    countriesBy: [],
    country: {
      empty: true
    },
    countryBorders: []
  },
  actions: {
    async getAllCountries({commit}) {
      let {data} = await Services.getAllCountries()
      commit('SET_COUNTRIES', data)
      commit('SET_COUNTRIES_BY', [])
    },
    async setCountriesByRegion({commit}, payload) {
      commit('SET_COUNTRIES_BY', payload)
    },
    async setCountriesByName({commit}, payload) {
      commit('SET_COUNTRIES_BY', payload)
    },
    setCountry({commit}, payload) {
      commit('SET_COUNTRY', payload)
    },
  },
  getters: {
    getCountriesByName: state => name => {
      return state.countries.filter(country => {
        return country.name.toLowerCase() === name.toLowerCase()
      })
    },
    getCountriesByRegion: state => region => {
      return state.countries.filter(country => {
        return country.region === region
      })
    },
    findCountryByCode: state => code => {
      return state.countries.find(country => {
        return country.alpha3Code === code
      })
    }
  },
  mutations: {
    SET_COUNTRIES(state, payload) {
      state.countries = payload
    },
    SET_COUNTRIES_BY(state, payload) {
      state.countriesBy = payload
    },
    SET_COUNTRY(state, payload) {
      state.country = payload
    },
    SET_COUNTRY_BORDERS(state, payload) {
      state.countryBorders = payload
    }
  }
})

export default store