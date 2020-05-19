import axios from 'axios'

const restCountries = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
  timeout: 10000,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})

export default {
  getAllCountries() {
    return restCountries.get('all')
  },
  getByRegion(payload) {
    return restCountries.get(`region/${payload}`)
  },
  getByName(payload) {
    return restCountries.get(`name/${payload}`)
  },
  getCountryBorders(payload) {
    return restCountries.get(`alpha?codes=${payload}`)
  }
}