<template>
  <div :class="isDarkMode" id="app">
    <Header>
      <SwitchComponent v-model="checked"></SwitchComponent>
    </Header>
    <Filters></Filters>
    <main>
      <div class="wrapper">
        <article class="country">
          <img alt="Mexico" class="country-flag" src="https://restcountries.eu/data/mex.svg">
          <div class="country-details">
            <h1 class="country-details-name">México</h1>
            <ul>
              <li>
                <span>Population:</span>
                <span>122273473</span>
              </li>
              <li>
                <span>Region:</span>
                <span>Americas</span>
              </li>
              <li>
                <span>Capital:</span>
                <span>Mexico City</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </main>
  </div>
</template>

<script>
  import './assets/scss/app.scss'
  import Header from "@/components/Header"
  import SwitchComponent from "@/components/Switch"
  import Filters from "@/components/Filters"

  export default {
    name: 'App',
    components: {
      Filters,
      SwitchComponent,
      Header
    },
    data() {
      return {
        checked: false,
      }
    },
    created() {
      let mq = window.matchMedia('(prefers-color-scheme: dark)')

      this.checked = mq.matches

      mq.addListener(() => {
        this.changeDarkMode(mq.matches)
      })
    },
    methods: {
      changeDarkMode(val) {
        this.checked = val
      }
    },
    computed: {
      isDarkMode() {
        return {
          'is-dark-mode': this.checked,
          'is-light-mode': !this.checked
        }
      },
    },
  }
</script>

<style lang="scss">

</style>
