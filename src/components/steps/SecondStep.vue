<script setup>
import {ref, watch} from "vue";
import {useSecondStep} from "@/stores/SecondStep.js";
import CustomToggle from "@/components/ui/CustomToggle.vue";
import PlanComponent from "@/components/second-step/PlanComponent.vue";
import iconAdvanced from "@/assets/images/icon-advanced.svg"
import iconArcade from "@/assets/images/icon-arcade.svg"
import iconPro from "@/assets/images/icon-pro.svg"

const secondStepStore = useSecondStep()

const isYearly = ref(false)
watch(() => isYearly.value, (newVal) => {
  secondStepStore.billingType = newVal ? 2 : 1
})
</script>

<template>
<div class="h-full mt-[35px] tablet:mt-[22px]">
  <div
    class="grid items-center justify-between grid-cols-[1fr_1fr_1fr] gap-[18px] mb-8 tablet:grid-rows-3 tablet:grid-cols-1
    tablet:gap4 tablet:mb-6">
    <PlanComponent
      :planImage="iconArcade"
      planTitle="Arcade"
      :planInitialPrice="9"
      :class="{'!border-[#483EFF]': secondStepStore.selectedPlan === 1}"
      @setSelectedPlan="secondStepStore.selectedPlan = 1"
    />
    <PlanComponent
      :planImage="iconAdvanced"
      planTitle="Advanced"
      :planInitialPrice="12"
      :class="{'!border-[#483EFF]': secondStepStore.selectedPlan === 2}"
      @setSelectedPlan="secondStepStore.selectedPlan = 2"
    />
    <PlanComponent
      :planImage="iconPro"
      planTitle="Pro"
      :planInitialPrice="15"
      :class="{'!border-[#483EFF]': secondStepStore.selectedPlan === 3}"
      @setSelectedPlan="secondStepStore.selectedPlan = 3"
    />
  </div>
  <div class="w-full h-12 bg-[#F8F9FF] rounded-lg flex items-center justify-center gap-[18px]">
    <span
      :class="`${secondStepStore.billingType === 1 ? '!text-[#022959]' : ''} text-[#9699AA] text-sm font-ubuntu-medium`">
      Monthly</span>
    <CustomToggle v-model="isYearly"/>
    <span
      :class="`${secondStepStore.billingType === 2 ? '!text-[#022959]' : ''} text-[#9699AA] text-sm font-ubuntu-medium`">Yearly
    </span>
  </div>
</div>
</template>
