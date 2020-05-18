import axios from 'axios'

const restCountries = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/',
  timeout: 1000,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})

export default {
  getByRegion(payload) {
    return restCountries.get(`region/${payload}`)
  },
  getByName(payload) {
    return restCountries.get(`name/${payload}`)
  }
}