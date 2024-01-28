<script setup>
import {computed} from "vue";

const props = defineProps({
  currentStep: {
    type: Number,
    default: null
  }
})

const emit = defineEmits(['prev', 'next'])

const nextButtonName = computed(() => {
  return props.currentStep === 4 ? 'Confirm' : 'Next Step'
})
</script>

<template>
<div :class="`${currentStep === 1 ? '!justify-end' : ''} flex items-center justify-between`">
  <button
    class="text-[#9699AA] font-ubuntu-medium" v-show="currentStep
    !== 1" @click="emit('prev')">
    Go Back
  </button>
  <button
    :class="`${currentStep === 4 ? '!bg-[#483EFF]' : 'bg-[#022959]'} text-white py-3 px-6 rounded-lg font-ubuntu-medium`"
    @click="emit('next', currentStep + 1)">
    {{ nextButtonName }}
  </button>
</div>
</template>

<style scoped>

</style>
