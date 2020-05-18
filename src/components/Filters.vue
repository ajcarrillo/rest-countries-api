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
          <div class="filter-by-region">
            <div @click="open = !open" class="list-title">
              <span>{{showSelected}}</span>
              <i :class="{'rotate180': open}" class="caret"></i>
            </div>
            <ul :class="openList" class="items">
              <li :key="region"
                  @click="regionSelected = region; open = false"
                  v-for="region in regions">{{ region }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapActions} from 'vuex'
  import '../assets/scss/filtering.scss'

  export default {
    name: "Filters",
    data() {
      return {
        countryName: '',
        open: false,
        regions: [
          'Africa',
          'Americas',
          'Asia',
          'Europe',
          'Oceania',
        ],
        regionSelected: null
      }
    },
    methods: {
      ...mapActions([
        'getCountriesByRegion',
        'getCountriesByName'
      ])
    },
    computed: {
      openList() {
        return {
          'is-invisible': !this.open,
          'is-visible': this.open
        }
      },
      showSelected() {
        return this.regionSelected ? this.regionSelected : 'Filter By Region'
      },
    },
    watch: {
      regionSelected(val) {
        this['getCountriesByRegion'](val)
      },
      countryName(val) {
        if (val && val.length >= 3) this['getCountriesByName'](val)
      }
    }
  }
</script>

<style scoped>

</style>