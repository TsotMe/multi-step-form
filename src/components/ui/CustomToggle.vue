<script setup>
defineProps({
  modelValue: Boolean
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
<div class="w-[38px] h-5 rounded-[18px] relative bg-[#022959] cursor-pointer"
     @click="emit('update:modelValue', !modelValue)">
  <div
    :class="`${modelValue ? 'left-[22px]' : ''} w-[12px] h-[12px] rounded-full bg-white absolute top-1 left-1 transition-[left] duration-300`"/>
</div>
</template>
