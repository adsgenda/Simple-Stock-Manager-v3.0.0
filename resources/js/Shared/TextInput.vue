<template>
  <div class="col-span-6 sm:col-span-4">
    <Label :for="id" :value="label" />
    <Input
      :id="id"
      ref="input"
      :type="type"
      :value="modelValue"
      class="mt-1 block w-full"
      :class="{ 'border-red-500': error }"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <InputError v-if="error" :message="error" class="mt-1" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
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

const focus = () => {
  input.focus();
};
const select = () => {
  input.select();
};
const setSelectionRange = (start, end) => {
  input.setSelectionRange(start, end);
};
</script>
