<script setup>
import {computed} from "vue";

const props = defineProps({
  labelText: {
    type: String,
    default: ''
  },
  errorText: {
    type: String,
    default: ''
  },
  placeholderText: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
<div class="w-full h-fit">
  <div class="flex items-center justify-between mb-2 tablet:mb-[3px]">
    <label class="text-[#022959] tablet:text-xs">{{ labelText }}</label>
    <span class="font-ubuntu-bold text-[#EE374A] tablet:text-xs">{{ errorText }}</span>
  </div>
  <input
    class="w-full h-12 rounded-lg border border-solid border-[#D6D9E6] text-[#022959] pl-2.5 font-ubuntu-medium text-base
    focus:border-[#483EFF] placeholder:text-[#9699AA] tablet:h-10 tablet:rounded tablet:text-sm"
    :type="type"
    :placeholder="placeholderText"
    v-model="value">
</div>
</template>

