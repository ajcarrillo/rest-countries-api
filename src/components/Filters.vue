<template>
  <section>
    <div class="wrapper">
      <div class="filter-content">
        <div class="name-filter">
          <div class="input-container">
            <i class="magnify"></i>
            <input class="search-country"
                   placeholder="Search for a country"
                   type="text"
                   v-model="countryName"
            >
          </div>
        </div>
        <div class="region-filter">
          <div class="">
            <span>Filter by region</span>
            <ul>
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import '../assets/scss/filtering.scss'

  export default {
    name: "Filters",
    data() {
      return {
        countryName: ''
      }
    }
  }
</script>

<style scoped>

</style>