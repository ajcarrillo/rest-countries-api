<template>
  <div>
    <code>
      {{ this.country }}
    </code>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "DetailView",
    props: ['code'],
    data() {
      return {}
    },
    computed: {
      ...mapState({
        country: state => state.country
      })
    }
  }
</script>

<style scoped>

</style>