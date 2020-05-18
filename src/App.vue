<template>
  <div :class="isDarkMode" id="app">
    <Header>
      <SwitchComponent v-model="checked"></SwitchComponent>
    </Header>
    <Filters></Filters>
    <CardCountriesList></CardCountriesList>
  </div>
</template>

<script>
  import './assets/scss/app.scss'
  import Header from "@/components/Header"
  import SwitchComponent from "@/components/Switch"
  import Filters from "@/components/Filters"
  import CardCountriesList from "@/components/CardCountriesList"

  export default {
    name: 'App',
    components: {
      CardCountriesList,
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
