import { defineStore } from "pinia";

export const useFirstStep = defineStore('FirstStep', {
  state: () => ({
    data: {
      name: '',
      email: '',
      phone_number: null
    },
    error: {
      name: '',
      email: '',
      phone_number: ''
    }
  }),
  actions: {
    updateData(modifiedData) {
      this.data = modifiedData
    },
    updateError(errorData) {
      this.error = errorData
    }
  }
})
