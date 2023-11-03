<script setup>
import IconDollar from '../icons/IconDollar.vue'
import IconPerson from '../icons/IconPerson.vue'
</script>

<template>
  <div class="form-app">
    <div class="form-app__bill">
      <span class="form-app__bill--title">Bill</span>
      <div class="form-app__bill--input">
        <input type="" name="" id="" placeholder="0" />
        <IconDollar class="icon-dolar" />
      </div>
    </div>

    <div class="form-app__tip">
      <span class="form-app__tip--title">Select Tip %</span>
      <div class="form-app__tip--buttons">
        <button>5%</button>
        <button>10%</button>
        <button>15%</button>
        <button>25%</button>
        <button>50%</button>
        <input type="text" placeholder="Custom" />
      </div>
    </div>

    <div class="form-app__peoples">
      <span class="form-app__peoples--title">Number of People</span>
      <div class="form-app__peoples--input">
        <input type="text" placeholder="0" />
        <IconPerson class="icon-person" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './form-app.scss';
</style>
