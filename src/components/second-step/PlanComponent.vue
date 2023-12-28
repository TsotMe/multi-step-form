<script setup>
import {useSecondStep} from "@/stores/SecondStep.js";
import {computed} from "vue";

const props = defineProps({
  planImage: {
    type: String,
    default: ''
  },
  planTitle: {
    type: String,
    default: ''
  },
  planInitialPrice: {
    type: Number,
    default: null
  }
})

const emit = defineEmits(['setSelectedPlan'])

const secondStepStore = useSecondStep()


const planPrice = computed(() => {
  if (secondStepStore.billingType === 2) {
    return `$${props.planInitialPrice * 10}/yr`
  } else {
    return `$${props.planInitialPrice}/mo`
  }
})
</script>

<template>
<div
  class="rounded-lg pt-5 pb-4 px-4 flex flex-col gap-[39px] transition-all duration-200 border border-solid border-[#D6D9E6] hover:border-[#483EFF]"
  @click="emit('setSelectedPlan')">
  <img class="w-10 h-10"
       :src="planImage"
       alt="">
  <div class="flex flex-col gap-[7px]">
    <h3 class="text-base font-ubuntu-medium text-[#022959]">{{ planTitle }}</h3>
    <span class="text-sm text-[#9699AA]">{{ planPrice }}</span>
    <span v-if="secondStepStore.billingType === 2"
          class="text-xs text-[#022959]">2 months free</span>
  </div>
</div>
</template>

