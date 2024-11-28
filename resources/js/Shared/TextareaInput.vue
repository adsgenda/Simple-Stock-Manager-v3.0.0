<template>
  <div class="col-span-6 sm:col-span-4">
    <Label :for="id" :value="label" />
    <textarea
      :id="id"
      ref="input"
      :type="type"
      @keydown="resize"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :class="error ? 'border-red-500' : 'border-gray-300'"
      class="mt-1 block w-full rounded-md shadow-sm border dark:border-gray-700 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 sm:text-sm dark:bg-gray-800 dark:focus:border-gray-600 dark:focus:ring-opacity-50"
    />
    <InputError v-if="error" :message="error" class="mt-1" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import Label from '@/Jetstream/Label.vue';
import Input from '@/Jetstream/Input.vue';
import InputError from '@/Jetstream/InputError.vue';

const input = ref(null);
defineEmits(['update:modelValue']);
defineProps({
  id: {
    type: String,
    default() {
      return uuidv4();
    },
  },
  type: {
    type: String,
    default: 'text',
  },
  modelValue: String,
  label: String,
  error: String,
});

onMounted(() => {
  resize();
});

const resize = () => {
  input.value.style.height = '58px';
  input.value.style.height = input.value.scrollHeight + 2 + 'px';
};

const focus = () => {
  input.value.focus();
};
const select = () => {
  input.value.select();
};
const setSelectionRange = (start, end) => {
  input.value.setSelectionRange(start, end);
};
</script>
