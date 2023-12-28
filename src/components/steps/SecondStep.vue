<script setup>
import {ref} from "vue";
import CustomToggle from "@/components/ui/CustomToggle.vue";

const isYearly = ref(false)
</script>

<template>
<div class="second-step">
  <CustomToggle v-model="isYearly"/>
</div>
</template>
