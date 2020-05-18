<template>
  <article class="country">
    <div class="country-content">
      <img :src="country.flag" alt="Mexico" class="country-flag">
      <div class="country-details">
        <h1 class="country-details-name">{{ country.name }}</h1>
        <ul>
          <li>
            <span class="country-label">Population:</span>
            <span class="country-value">{{ country.population.toLocaleString() }}</span>
          </li>
          <li>
            <span class="country-label">Region:</span>
            <span class="country-value">{{country.region}}</span>
          </li>
          <li>
            <span class="country-label">Capital:</span>
            <span class="country-value">{{country.capital}}</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<script>
  import '../assets/scss/card-country.scss'

  export default {
    name: "CardCountry",
    props: {
      country: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>