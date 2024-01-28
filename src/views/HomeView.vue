<script setup>
import Sidebar from "@/components/Sidebar.vue";
import StepsWrapper from "@/components/StepsWrapper.vue";
import {computed, ref} from "vue";
import ActionBar from "@/components/ActionBar.vue";
import {useFirstStep} from "@/stores/FirstStep.js";

const firstStepStore = useFirstStep()
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

const handlePrevButtonCLick = () => {
  if (currentStep.value - 1 > 0) currentStep.value -= 1
}

const handleNextButtonCLick = (value) => {
  const {name, email, phone_number} = firstStepStore.data

  if (value === 2) {
    if (value < 6 && name && email && phone_number) {
      return currentStep.value = value
    }

    const errorData = {
      name: !name ? "This field is required" : '',
      email: !email ? "This field is required" : '',
      phone_number: !phone_number ? "This field is required" : '',
    }
    return firstStepStore.updateError(errorData)
  }

  if (value > 2) {
    return currentStep.value = value
  }
}
</script>

<template>
<div class="w-full h-dvh bg-[#EFF5FF] flex items-center justify-center">
  <main
    class="bg-white p-4 w-[940px] h-[600px] rounded-[15px] grid grid-cols-[274px_1fr] shadow-[0_25px_40px_-20px_rgba(0,0,0,0.10)]
    tablet:relative tablet:w-full tablet:h-full tablet:bg-transparent tablet:grid-cols-1 tablet:p-0 tablet:grid-rows-[172px_1fr]">
    <Sidebar :currentStep="currentStep"/>
    <div class="flex items-center justify-center tablet:block">
      <StepsWrapper :title="stepData.title"
                    :description="stepData.description"
                    v-model:currentStep="currentStep"/>
    </div>
    <div v-if="currentStep !== 5" class="hidden bg-white p-4 w-full fixed bottom-0 tablet:block">
      <ActionBar class="max-w-[343px] my-0 mx-auto" :currentStep="currentStep"
                 @prev="handlePrevButtonCLick"
                 @next="handleNextButtonCLick"/>
    </div>
  </main>

  <!-- Tablet & Mobile Layout -->
<!--  <main class="relative hidden w-full h-full tablet:block">-->
<!--    <Sidebar :currentStep="currentStep"/>-->
<!--    <StepsWrapper :title="stepData.title"-->
<!--                  :description="stepData.description"-->
<!--                  v-model:currentStep="currentStep"/>-->
<!--    <div v-if="currentStep !== 5" class="bg-white p-4 w-full fixed bottom-0">-->
<!--      <ActionBar class="max-w-[343px] my-0 mx-auto" :currentStep="currentStep"-->
<!--                 @prev="handlePrevButtonCLick"-->
<!--                 @next="handleNextButtonCLick"/>-->
<!--    </div>-->
<!--  </main>-->
</div>
</template>

