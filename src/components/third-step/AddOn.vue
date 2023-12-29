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
  hover:border-[#483EFF] flex items-center justify-between px-6 cursor-pointer`"
  @click="emit('update:modelValue', !modelValue)"
>
  <div class="flex items-center gap-6">
    <div>
      <img v-show="modelValue" src="@/assets/images/checkbox-checked.svg" alt="">
      <img v-show="!modelValue" src="@/assets/images/checkbox-unchecked.svg" alt="">
    </div>
    <div class="flex flex-col gap-2">
      <h4 class="text-base text-[#022959] font-ubuntu-medium">{{ title }}</h4>
      <p class="text-sm text-[#9699AA]">{{ description }}</p>
    </div>
  </div>
  <span class="text-[#483EFF] text-sm">
    {{ calculatedPrice }}
  </span>
</div>
</template>
