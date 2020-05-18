<template>
  <main>
    <div class="wrapper">
      <div class="details-content">
        <button @click="back" class="button" type="button">
          <i class="back"></i>
          <span>Back</span>
        </button>
        <img :alt="country.name" :src="country.flag" class="country-flag">
        <article class="country-info">
          <h1>{{ country.name }}</h1>
          <ul>
            <li>
              <span>Native name:</span>
              <span>{{country.nativeName}}</span>
            </li>
            <li>
              <span>Population:</span>
              <span>{{ country.population.toLocaleString() }}</span>
            </li>
            <li>
              <span>Region:</span>
              <span>{{country.region}}</span>
            </li>
            <li>
              <span>Sub Region:</span>
              <span>{{country.subregion}}</span>
            </li>
            <li>
              <span>Capital:</span>
              <span>{{ country.capital }}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Top Level Domain:</span>
              <span>{{ topLevelDomain }}</span>
            </li>
            <li>
              <span>Currencies:</span>
              <span>{{currencies}}</span>
            </li>
            <li>
              <span>Languages:</span>
              <span>{{ languages }}</span>
            </li>
          </ul>
          <h2>Border Countries</h2>
          <div class="borders-countries">
            <button :key="border" class="button" v-for="border in countryBordersNames">{{ border }}</button>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script>
  import '../assets/scss/details-view.scss'
  import {mapActions, mapState} from 'vuex'

  export default {
    name: "DetailView",
    props: ['code'],
    data() {
      return {}
    },
    mounted() {
      this['getCountryBorders'](this.borderCodes)
    },
    methods: {
      back() {
        this.$router.push({name: 'home'})
      },
      ...mapActions([
        'getCountryBorders'
      ])
    },
    computed: {
      borderCodes() {
        return this.country.borders.join(';')
      },
      topLevelDomain() {
        return this.country.topLevelDomain.join(', ')
      },
      currencies() {
        return this.country.currencies
          .map(function (el) {
            return el.name
          }).join(', ')
      },
      languages() {
        return this.country.languages
          .map(function (el) {
            return el.name
          }).join(', ')
      },
      borders() {
        return this.country.borders
      },
      countryBordersNames() {
        if (this.countryBorders.length === 0) return ''
        return this.countryBorders
          .map(function (el) {
            return el.name
          })
      },
      ...mapState({
        country: state => state.country,
        countryBorders: state => state.countryBorders
      })
    }
  }
</script>

<style scoped>

</style>