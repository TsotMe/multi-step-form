import { defineStore } from "pinia";

export const useThirdStep = defineStore('ThirdStep', {
  state: () => ({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
  }),
  actions: {
  }
})
