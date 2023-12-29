import { defineStore } from "pinia";

export const useSecondStep = defineStore('SecondStep', {
  state: () => ({
    billingType: 1,
    selectedPlan: 1
  }),
  actions: {
  }
})
