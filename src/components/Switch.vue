<template>
  <div class="dark-mode">
    <input :checked="value"
           @change="updateValue($event)"
           class="checkbox"
           id="checkbox"
           type="checkbox"
    >
    <label class="switch" for="checkbox">
      <i class="moon"></i>
      <span>Dark Mode</span>
    </label>
  </div>
</template>

<script>
  import '../assets/scss/switch.scss'

  export default {
    name: "SwitchComponent",
    props: ["value"],
    methods: {
      updateValue($event) {
        this.$emit('input', $event.target.checked)
      }
    }
  }
</script>

<style scoped>

</style>