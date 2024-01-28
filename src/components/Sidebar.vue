<script setup>
defineProps({
  currentStep: {
    type: Number,
    required: true
  }
})

const steps = [
  {id: 1, title: "YOUR INFO"},
  {id: 2, title: "SELECT PLAN"},
  {id: 3, title: "ADD-ONS"},
  {id: 4, title: "SUMMARY"}
]
</script>
<template>
<div
  class="h-full bg-no-repeat object-cover rounded-xl py-10 px-8 bg-[url('../assets/images/bg-sidebar-desktop.svg')]
  tablet:bg-[url('../assets/images/bg-sidebar-mobile.svg')] tablet:bg-cover tablet:flex tablet:gap-4
  tablet:justify-center tablet:h-[172px] tablet:rounded-none tablet:p-0">
  <div v-for="step in steps"
       :key="step.id"
       class="flex items-center gap-4 mb-8 last:mb-0 tablet:mb-0 tablet:mt-[33px] tablet:h-fit">
    <div
      :class="`${step.id === currentStep || step.id === 4 && currentStep === 5 ?
      'bg-[#BEE2FD] !border-[#BEE2FD] !text-[#022959]' :
      ''} w-8 h-8 rounded-full border border-solid border-white flex items-center justify-center text-white font-ubuntu-bold`">
      {{ step.id }}
    </div>
    <div class="flex flex-col justify-between tablet:hidden">
      <span class="text-[#ABBCFF] text-xs">{{ 'STEP ' + step.id }}</span>
      <p class="text-sm font-ubuntu-bold text-white tracking-[1px]">{{ step.title }}</p>
    </div>
  </div>
</div>
</template>
