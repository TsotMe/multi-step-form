<script setup>
import Sidebar from "@/components/Sidebar.vue";
import StepsWrapper from "@/components/StepsWrapper.vue";
import {computed, ref} from "vue";

const currentStep = ref(1)

const stepsListing = [
  {title: "Personal info", description: "Please provide your name, email address, and phone number."},
  {title: "Select your plan", description: "You have the option of monthly or yearly billing."},
  {title: "Pick add-ons", description: "Add-ons help enhance your gaming experience."},
  {title: "Finishing up", description: "Double-check everything looks OK before confirming."},
  {
    title: "Thank you!",
    description: "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
  }
]

const stepData = computed(() => {
  return stepsListing[currentStep.value - 1]
})
</script>

<template>
<div class="w-full h-dvh bg-[#EFF5FF] flex items-center justify-center">
  <main
    class="bg-white p-4 w-[940px] h-[600px] rounded-[15px] grid grid-cols-[274px_1fr] shadow-[0_25px_40px_-20px_rgba(0,0,0,0.10)]">
    <Sidebar :currentStep="currentStep"/>
    <div class="flex items-center justify-center">
      <StepsWrapper :title="stepData.title"
                    :description="stepData.description"
                    v-model:currentStep="currentStep"/>
    </div>
  </main>
</div>
</template>

