<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '@inertiajs/vue3';

import Button from '@/Shared/Button.vue';
import TextInput from '@/Shared/TextInput.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import FormSection from '@/Jetstream/FormSection.vue';
import ActionMessage from '@/Jetstream/ActionMessage.vue';

const form = useForm({ code: null, name: null });

const props = defineProps(['edit']);
if (props.edit) {
  form.code = props.edit.data.code;
  form.name = props.edit.data.name;
}
const { t } = useI18n({});

onMounted(() => {
  document.getElementById('code').focus();
});

function submit() {
  let method = props.edit ? 'put' : 'post';
  let url = props.edit ? route('categories.update', props.edit.data.id) : route('categories.store');
  form[method](url, {
    preserveScroll: true,
    onSuccess: () => {
      props.edit ? '' : form.reset();
    },
    onError: () => {
      if (form.errors.name) {
        document.getElementById('name').focus();
      }
      if (form.errors.code) {
        document.getElementById('code').focus();
      }
    },
  });
}
</script>

<template>
  <AppLayout :title="props.edit ? t('Edit Category') : t('Add New Category')">
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      <FormSection @submitted="submit" autocomplete="off">
        <template #title>{{ props.edit ? t('Edit Category') : t('Add New Category') }}</template>
        <template #description>
          {{ t('Please fill the form below to {x} item.', { x: props.edit ? t('update') : t('add') }) }}
          <div>
            <Button :href="route('categories.index')" class="mt-4">{{ t('List Categories') }}</Button>
          </div>
        </template>

        <template #form>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.code" id="code" :error="form.errors.code" :label="t('Code')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.name" id="name" :error="form.errors.name" :label="t('Name')" />
          </div>
        </template>

        <template #actions>
          <ActionMessage :on="form.recentlySuccessful" class="mr-3"> Saved. </ActionMessage>
          <Button type="submit" :loading="form.processing"> Save </Button>
        </template>
      </FormSection>
    </div>
  </AppLayout>
</template>
