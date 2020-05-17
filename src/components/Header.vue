<template>
  <header>
    <div class="wrapper">
      <div class="header-content">
        <h1>Where in the world?</h1>
        <div class="darkmode">
          <input class="checkbox" id="checkbox" type="checkbox">
          <label class="switch" for="checkbox">
            <i class="moon"></i>
            <span>Dark Mode</span>
          </label>
        </div>
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