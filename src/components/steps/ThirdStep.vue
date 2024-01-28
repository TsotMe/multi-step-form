<script setup>
import AddOn from "@/components/third-step/AddOn.vue";
import {useThirdStep} from "@/stores/ThirdStep.js";

const thirdStepStore = useThirdStep()
</script>

<template>
<div class="h-full flex flex-col gap-4 mt-[35px] tablet:mt-[22px] tablet:gap-[12px]">
  <AddOn title="Online service" description="Access to multiplayer games" :price="1" v-model="thirdStepStore.onlineService"/>
  <AddOn title="Larger storage" description="Extra 1TB of cloud save" :price="2" v-model="thirdStepStore.largerStorage"/>
  <AddOn title="Customizable profile" description="Custom theme on your profile" :price="2"
         v-model="thirdStepStore.customizableProfile"/>
</div>
</template>
