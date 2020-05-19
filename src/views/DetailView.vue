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
            <template v-if="!hasBorders">
              <p style="margin-top: 0">No borders</p>
            </template>
            <template v-else>
              <button :key="border" class="button" v-for="border in countryBordersNames">{{ border }}</button>
            </template>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<script>
  import '../assets/scss/details-view.scss'
  import {mapGetters, mapState} from 'vuex'

  export default {
    name: "DetailView",
    props: ['code'],
    data() {
      return {}
    },
    methods: {
      back() {
        this.$router.push({name: 'home'})
      },
    },
    computed: {
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
      bordersCodes() {
        return this.country.borders
      },
      borders() {
        let borders = []

        this.bordersCodes.forEach(code => {
          borders.push(this.findCountryByCode(code))
        })

        return borders
      },
      countryBordersNames() {
        if (this.bordersCodes.length === 0) return []
        return this.borders
          .map(function (el) {
            return el.name
          })
      },
      hasBorders() {
        return this.bordersCodes.length > 0
      },
      ...mapState({
        countries: state => state.countries,
        country: state => state.country,
        countryBorders: state => state.countryBorders
      }),
      ...mapGetters([
        'findCountryByCode'
      ])
    }
  }
</script>

<style scoped>

</style>