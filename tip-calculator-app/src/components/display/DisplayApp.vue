<script setup>
import { storeToRefs } from 'pinia'
import { useStore } from '../../store/index.js'

const store = useStore()

const { tipAmount } = storeToRefs(store)
</script>

<template>
  <div class="display-app">
    <div class="display-app__amount">
      <div class="display-app__amount--title-wrap">
        <h2 class="display-app__amount--title">Tip Amount</h2>
        <span class="display-app__amount--subtitle">/ person</span>
      </div>
      <h1 class="display-app__amount--amount-value">${{ tipAmount.toFixed(2) }}</h1>
    </div>

    <div class="display-app__total">
      <div class="display-app__total--title-wrap">
        <h2 class="display-app__total--title">Total</h2>
        <span class="display-app__total--subtitle">/ person</span>
      </div>
      <h1 class="display-app__total--total-value">$0.00</h1>
    </div>

    <button class="display-app__button-reset">Reset</button>
  </div>
</template>

<style scoped lang="scss">
@import './display-app.scss';
</style>
