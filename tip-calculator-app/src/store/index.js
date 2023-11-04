import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  //states
  const tipAmount = ref(0)

  const totalPerson = ref(0)

  //actions
  const calcTip = (tip, bill) => {
    tipAmount.value = (tip * bill) / 100
  }

  const calcTotalPerson = (persons) => {
    totalPerson.value = tipAmount.value / persons
  }

  return {
    tipAmount,
    totalPerson,
    calcTip,
    calcTotalPerson
  }
})
