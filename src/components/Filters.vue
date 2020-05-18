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
  import Services from '../services'
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
    methods: {},
    computed: {
      openList() {
        return {
          'is-invisible': !this.open,
          'is-visible': this.open
        }
      },
      showSelected() {
        return this.regionSelected ? this.regionSelected : 'Filter By Region'
      }
    },
    watch: {
      async regionSelected(val) {
        let {data} = await Services.getByRegion(val)
        console.log(data)
      }
    }
  }
</script>

<style scoped>

</style>