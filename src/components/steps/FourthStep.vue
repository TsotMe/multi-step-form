<script setup>
import {computed} from "vue";
import {useSecondStep} from "@/stores/SecondStep.js";
import {useThirdStep} from "@/stores/ThirdStep.js";

const emit = defineEmits(['goToSecondStep'])

const secondStepStore = useSecondStep()
const thirdStepStore = useThirdStep()

const planName = computed(() => {
  if (secondStepStore.selectedPlan === 1) {
    return `Arcade (${secondStepStore.billingType === 1 ? 'Monthly' : 'Yearly'})`
  } else if (secondStepStore.selectedPlan === 2) {
    return `Advanced (${secondStepStore.billingType === 1 ? 'Monthly' : 'Yearly'})`
  }
  return `Pro (${secondStepStore.billingType === 1 ? 'Monthly' : 'Yearly'})`
})

const planPrice = computed(() => {
  if (secondStepStore.selectedPlan === 1) {
    return `$${secondStepStore.billingType === 1 ? 9 : 90}/${secondStepStore.billingType === 1 ? 'mo' : 'yr'}`
  } else if (secondStepStore.selectedPlan === 2) {
    return `$${secondStepStore.billingType === 1 ? 12 : 120}/${secondStepStore.billingType === 1 ? 'mo' : 'yr'}`
  }
  return `$${secondStepStore.billingType === 1 ? 15 : 150}/${secondStepStore.billingType === 1 ? 'mo' : 'yr'}`
})

const onlineService = computed(() => {
  if (thirdStepStore.onlineService) {
    return {
      isSelected: true,
      price: secondStepStore.billingType === 1 ? '+$1/mo' : '+$10/yr'
    }
  }
  return {isSelected: false}
})

const largerStorage = computed(() => {
  if (thirdStepStore.largerStorage) {
    return {
      isSelected: true,
      price: secondStepStore.billingType === 1 ? '+$2/mo' : '+$20/yr'
    }
  }
  return {isSelected: false}
})

const customizableProfile = computed(() => {
  if (thirdStepStore.customizableProfile) {
    return {
      isSelected: true,
      price: secondStepStore.billingType === 1 ? '+$2/mo' : '+$20/yr'
    }
  }
  return {isSelected: false}
})

const hideDivider = computed(() => {
  return !onlineService.value.isSelected && !largerStorage.value.isSelected && !customizableProfile.value.isSelected
})

const totalTitle = computed(() => {
  return `Total (per ${secondStepStore.billingType === 1 ? 'month' : 'year'})`
})

const totalPrice = computed(() => {
  let tempTotalCost = 0
  if (secondStepStore.billingType === 1) {
    if (secondStepStore.selectedPlan === 1) {
      tempTotalCost += 9
    } else if (secondStepStore.selectedPlan === 2) {
      tempTotalCost += 12
    } else {
      tempTotalCost += 15
    }

    if (onlineService.value.isSelected) {
      tempTotalCost += 1
    }

    if (largerStorage.value.isSelected) {
      tempTotalCost += 2
    }

    if (customizableProfile.value.isSelected) {
      tempTotalCost += 2
    }

    return `+$${tempTotalCost}/mo`
  } else {
    if (secondStepStore.selectedPlan === 1) {
      tempTotalCost += 90
    } else if (secondStepStore.selectedPlan === 2) {
      tempTotalCost += 120
    } else {
      tempTotalCost += 150
    }

    if (onlineService.value.isSelected) {
      tempTotalCost += 10
    }

    if (largerStorage.value.isSelected) {
      tempTotalCost += 20
    }

    if (customizableProfile.value.isSelected) {
      tempTotalCost += 20
    }

    return `+$${tempTotalCost}/yr`
  }
})
</script>

<template>
<div class="h-full mt-[35px] flex flex-col gap-6 tablet:mt-[22px]">
  <div class="bg-[#F8F9FF] rounded-lg pt-4 pb-6 px-6 tablet:p-4">

    <div :class="`${!hideDivider ? 'mb-6 tablet:mb-[12px]' : ''} flex items-center justify-between`">
      <div class="flex flex-col gap-[7px] tablet:gap-[3px]">
        <h3 class="text-base text-[#022959] tablet:text-sm tablet:leading-4">{{ planName }}</h3>
        <button
          class="w-fit h-fit text-[#9699AA] transition-all duration-200 underline hover:text-[#483EFF] tablet:text-sm tablet:leading-5"
                @click="emit('goToSecondStep')">
          Change
        </button>
      </div>
      <span class="text-base text-[#022959] font-ubuntu-bold tablet:text-sm tablet:leading-5">{{ planPrice }}</span>
    </div>

    <div v-if="!hideDivider" class="h-[1px] bg-[#9699AA] opacity-[0.2043] mb-4 tablet:mb-[12px]"/>

    <div v-if="onlineService.isSelected"
         :class="`${largerStorage.isSelected ? 'mb-4' : ''} flex items-center justify-between`">
      <h4 class="text-[#9699AA] tablet:text-sm tablet:leading-5">Online service</h4>
      <span class="text-[#022959] tablet:text-sm tablet:leading-5">{{ onlineService.price }}</span>
    </div>

    <div v-if="largerStorage.isSelected"
         :class="`${customizableProfile.isSelected ? 'mb-4' : ''
    } flex items-center justify-between`">
      <h4 class="text-[#9699AA] tablet:text-sm tablet:leading-5">Larger storage</h4>
      <span class="text-[#022959] tablet:text-sm tablet:leading-5">{{ largerStorage.price }}</span>
    </div>

    <div v-if="customizableProfile.isSelected"
         class="flex items-center justify-between">
      <h4 class="text-[#9699AA] tablet:text-sm tablet:leading-5">Customizable profile</h4>
      <span class="text-[#022959] tablet:text-sm tablet:leading-5">{{ customizableProfile.price }}</span>
    </div>
  </div>

  <div class="flex items-center justify-between px-6 tablet:px-4">
    <h3 class="text-[#9699AA] tablet:text-sm tablet:leading-5">{{ totalTitle }}</h3>
    <span class="text-[#483EFF] text-xl font-ubuntu-bold tablet:text-base tablet:leading-5">{{ totalPrice }}</span>
  </div>
</div>
</template>
