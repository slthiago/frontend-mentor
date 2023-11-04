<script setup>
import { ref } from 'vue'
import { useStore } from '../../store/index.js'
import IconDollar from '../icons/IconDollar.vue'
import IconPerson from '../icons/IconPerson.vue'

const store = useStore()
const { calcTip } = store

const bill = ref(0)
const tipCustom = ref(0)

function calcTipValue(tip) {
  calcTip(tip, bill.value)
}

function toggleInput(el) {
  el.target.classList.toggle('input-active')
}
</script>

<template>
  <div class="form-app">
    <div class="form-app__bill">
      <span class="form-app__bill--title">Bill</span>
      <div class="form-app__bill--input">
        <input type="number" name="" v-model="bill" :placeholder="bill" />
        <IconDollar class="icon-dolar" />
      </div>
    </div>

    <div class="form-app__tip">
      <span class="form-app__tip--title">Select Tip %</span>
      <div class="form-app__tip--buttons">
        <button @click="calcTipValue(5)">5%</button>
        <button @click="calcTipValue(10)">10%</button>
        <button @click="calcTipValue(15)">15%</button>
        <button @click="calcTipValue(25)">25%</button>
        <button @click="calcTipValue(50)">50%</button>
        <input
          type="text"
          placeholder="Custom"
          v-model="tipCustom"
          @focus="toggleInput($event)"
          @blur="toggleInput($event)"
          @keyup.enter="calcTipValue(tipCustom)"
        />
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
