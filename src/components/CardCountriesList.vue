<template>
  <main>
    <div class="wrapper">
      <CardCountry :country="country" :key="country.alpha2Code" v-for="country in countries"></CardCountry>
    </div>
  </main>
</template>

<script>
  import {mapState} from 'vuex'
  import CardCountry from "@/components/CardCountry"

  export default {
    name: "CardCountriesList",
    components: {CardCountry},
    computed: {
      ...mapState({
        countries: state => state.countries
      })
    }
  }
</script>

<style scoped>

</style>