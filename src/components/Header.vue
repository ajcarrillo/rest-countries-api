<template>
  <header>
    <div class="wrapper">
      <div class="header-content">
        <h1>Where in the world?</h1>
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script>
  import '../assets/scss/header.scss'

  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>