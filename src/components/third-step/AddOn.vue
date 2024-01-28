<script setup>
import {computed} from "vue";
import {useSecondStep} from "@/stores/SecondStep.js";

const props = defineProps({
  title: String,
  description: String,
  price: Number,
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])

const secondStepStore = useSecondStep()

const calculatedPrice = computed(() => {
  if (secondStepStore.billingType === 1) {
    return `+$${props.price}/mo`
  } else {
    return `+$${props.price * 10}/yr`
  }
})
</script>

<template>
<div
  :class="`${modelValue ?
   'border-[#483EFF]' : ''} w-full h-[81px] rounded-lg border border-solid border-[#D6D9E6] transition-all duration-200
  hover:border-[#483EFF] flex items-center justify-between px-6 cursor-pointer tablet:px-4 tablet:h-[62px]`"
  @click="emit('update:modelValue', !modelValue)"
>
  <div class="flex items-center gap-6 tablet:gap-4">
    <div>
      <img v-show="modelValue" src="@/assets/images/checkbox-checked.svg" alt="">
      <img v-show="!modelValue" src="@/assets/images/checkbox-unchecked.svg" alt="">
    </div>
    <div class="flex flex-col gap-2 tablet:gap-[3px]">
      <h4 class="text-base text-[#022959] font-ubuntu-medium tablet:text-sm tablet:leading-4">{{ title }}</h4>
      <p class="text-sm text-[#9699AA] tablet:text-xs tablet:leading-5">{{ description }}</p>
    </div>
  </div>
  <span class="text-[#483EFF] text-sm tablet:text-xs tablet:leading-5">
    {{ calculatedPrice }}
  </span>
</div>
</template>
