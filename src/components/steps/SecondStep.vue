<script setup>
import {ref, watch} from "vue";
import {useSecondStep} from "@/stores/SecondStep.js";
import CustomToggle from "@/components/ui/CustomToggle.vue";
import PlanComponent from "@/components/second-step/PlanComponent.vue";
import iconAdvanced from "@/assets/images/icon-advanced.svg"
import iconArcade from "@/assets/images/icon-arcade.svg"
import iconPro from "@/assets/images/icon-pro.svg"

const secondStepStore = useSecondStep()

const selectedPlan = ref(1)
const isYearly = ref(false)

watch(() => isYearly.value, (newVal) => {
  secondStepStore.billingType = newVal ? 2 : 1
})
</script>

<template>
<div class="h-full mt-[35px]">
  <div class="grid items-center justify-between grid-cols-[1fr_1fr_1fr] gap-[18px] mb-8">
    <PlanComponent
      :planImage="iconArcade"
      planTitle="Arcade"
      :planInitialPrice="9"
      :class="{'border-[#483EFF]': selectedPlan === 1}"
      @setSelectedPlan="selectedPlan = 1"
    />
    <PlanComponent
      :planImage="iconAdvanced"
      planTitle="Advanced"
      :planInitialPrice="12"
      :class="{'border-[#483EFF]': selectedPlan === 2}"
      @setSelectedPlan="selectedPlan = 2"
    />
    <PlanComponent
      :planImage="iconPro"
      planTitle="Pro"
      :planInitialPrice="15"
      :class="{'border-[#483EFF]': selectedPlan === 3}"
      @setSelectedPlan="selectedPlan = 3"
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
