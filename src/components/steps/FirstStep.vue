<script setup>
import {useFirstStep} from "@/stores/FirstStep.js";
import CustomInput from "@/components/ui/CustomInput.vue";

const firstStepStore = useFirstStep()
</script>

<template>
<div class="h-full flex flex-col gap-6 mt-[35px]">
  <CustomInput
    type="text"
    labelText="Name"
    placeholderText="e.g. Stephen King"
    :errorText="firstStepStore.error.name"
    v-model="firstStepStore.data.name"
  />
  <CustomInput
    type="email"
    labelText="Email Address"
    placeholderText="e.g. stephenking@lorem.com"
    :errorText="firstStepStore.error.email"
    v-model="firstStepStore.data.email"
  />
  <CustomInput
    type="number"
    labelText="Phone Number"
    placeholderText="e.g. +1 234 567 890"
    :errorText="firstStepStore.error.phone_number"
    v-model="firstStepStore.data.phone_number"
  />
</div>
</template>

