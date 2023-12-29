<script setup>
import {useFirstStep} from "@/stores/FirstStep.js";
import {computed} from "vue";
import FirstStep from "@/components/steps/FirstStep.vue";
import SecondStep from "@/components/steps/SecondStep.vue";
import ThirdStep from "@/components/steps/ThirdStep.vue";
import FourthStep from "@/components/steps/FourthStep.vue";

const props = defineProps({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  currentStep: {
    type: Number,
    default: null
  }
})

const emit = defineEmits(['update:currentStep'])

const firstStepStore = useFirstStep()

const nextButtonName = computed(() => {
  return props.currentStep === 4 ? 'Confirm' : 'Next Step'
})

const stepComponent = computed(() => {
  return props.currentStep === 1 ? FirstStep : props.currentStep === 2 ? SecondStep :
    props.currentStep === 3 ? ThirdStep : FourthStep
})

const handlePrevButtonCLick = () => {
  if (props.currentStep - 1 > 0) emit('update:currentStep', props.currentStep - 1)
}

const handleNextButtonCLick = (value) => {
  const {name, email, phone_number} = firstStepStore.data

  if (value === 2) {
    if (value < 6 && name && email && phone_number) {
      return emit('update:currentStep', value)
    }

    const errorData = {
      name: !name ? "This field is required" : '',
      email: !email ? "This field is required" : '',
      phone_number: !phone_number ? "This field is required" : '',
    }
    return firstStepStore.updateError(errorData)
  }

  if (value === 3) {
    return emit('update:currentStep', value)
  }

  if (value === 4) {
    return emit('update:currentStep', value)
  }

  if (value === 5) {
    return emit('update:currentStep', value)
  }
}
</script>

<template>
<div class="flex flex-col justify-between w-[450px] h-full pt-10 pb-4">
  <div
    :class="`${currentStep === 5 ?
    '[&>img]:block [&>img]:w-20 [&>img]:h-20 [&>img]:mb-8 [&>h2]:mb-[14px] [&>p]:text-center [&>p]:leading-[25px] h-full flex flex-col items-center justify-center mb-6'
     : ''}`">
    <img class="hidden"
         src="../assets/images/icon-thank-you.svg"
         alt="">
    <h2 class="font-ubuntu-bold text-[32px] text-[#00194F] mb-2.5">{{ title }}</h2>
    <p class="text-[#9699AA]">{{ description }}</p>
  </div>
  <keep-alive v-if="currentStep < 5">
    <Component :is="stepComponent" @goToSecondStep="emit('update:currentStep', 2)"/>
  </keep-alive>
  <div v-if="currentStep !== 5"
       :class="`${currentStep === 1 ? '!justify-end' : ''} flex items-center justify-between`">
    <button class="text-[#9699AA] font-ubuntu-medium"
            v-show="currentStep !== 1"
            @click="handlePrevButtonCLick">Go Back
    </button>
    <button
      :class="`${currentStep === 4 ? '!bg-[#483EFF]' : 'bg-[#022959]'} text-white py-3 px-6 rounded-lg font-ubuntu-medium`"
      @click="handleNextButtonCLick(currentStep + 1)">
      {{ nextButtonName }}
    </button>
  </div>
</div>
</template>

