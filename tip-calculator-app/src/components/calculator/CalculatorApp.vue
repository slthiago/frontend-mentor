<script setup>
import DisplayApp from '../display/DisplayApp.vue'
import FormApp from '../form/FormApp.vue'
</script>

<template>
  <div class="calculator-app">
    <FormApp />
    <DisplayApp />
  </div>
</template>

<style scoped lang="scss">
@import './calculator-app.scss';
</style>
