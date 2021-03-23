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
    setCountriesByRegion({commit}, payload) {
      commit('SET_COUNTRIES_BY', payload)
    },
    setCountriesByName({commit}, payload) {
      commit('SET_COUNTRIES_BY', payload)
    },
    setCountry({commit}, payload) {
      commit('SET_COUNTRY', payload)
    },
    async fetchCountry({commit, getters, state}, payload) {
      try {
        console.log(payload)
        console.log(state)
        if (payload == state.country.alpha3Code) {
          return state.country
        }

        let country = getters.findCountryByCode(payload)

        if (country) {
          commit('SET_COUNTRY', country)
          return country
        } else {
          let {data} = await Services.getCountryByCode(payload)
          commit('SET_COUNTRY', data)
          return data
        }
      } catch (e) {
        console.log(e)
      }
    }
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
