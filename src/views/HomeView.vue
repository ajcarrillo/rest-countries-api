<template>
  <main>
    <Filters></Filters>
    <CardCountriesList></CardCountriesList>
  </main>
</template>

<script>
  import Filters from "@/components/Filters"
  import CardCountriesList from "@/components/CardCountriesList"

  export default {
    name: "HomeView",
    components: {
      Filters,
      CardCountriesList
    }
  }
</script>

<style scoped>

</style>