<template>
  <div class="wrapper">
    <div class="grid">
      <template v-if="loading">
        <p>Loading countries...</p>
      </template>
      <template v-else>
        <CardCountry :country="country" :key="country.alpha2Code"
                     v-for="country in draftCountries"></CardCountry>
      </template>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import CardCountry from "@/components/CardCountry"

  export default {
    name: "CardCountriesList",
    components: {CardCountry},
    data() {
      return {
        loading: false,
        draftCountries: []
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        try {
          this.loading = true
          await this['getAllCountries']()
          this.draftCountries = this.countries
        } catch (e) {
          console.log(e)
        } finally {
          this.loading = false
        }
      },
      ...mapActions([
        'getAllCountries',
      ])
    },
    computed: {
      ...mapState({
        countries: state => state.countries,
        countriesBy: state => state.countriesBy
      })
    },
    watch: {
      countriesBy: {
        handler: function (val) {
          this.draftCountries = val
        }
      }
    }
  }
</script>

<style scoped>

</style>