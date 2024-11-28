<script setup>
import { useI18n } from 'vue-i18n';
import { useForm } from '@inertiajs/vue3';

import Button from '@/Shared/Button.vue';
import TextInput from '@/Shared/TextInput.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import FormSection from '@/Jetstream/FormSection.vue';
import ActionMessage from '@/Jetstream/ActionMessage.vue';

const form = useForm({ name: null, email: null, phone: null, company: null, cf1: null, cf2: null });

const props = defineProps(['edit']);
if (props.edit) {
  form.name = props.edit.data.name;
  form.email = props.edit.data.email;
  form.phone = props.edit.data.phone;
  form.company = props.edit.data.company;
  form.cf1 = props.edit.data.cf1;
  form.cf2 = props.edit.data.cf2;
}
const { t } = useI18n({});

function submit() {
  let method = props.edit ? 'put' : 'post';
  let url = props.edit ? route('suppliers.update', props.edit.data.id) : route('suppliers.store');
  form[method](url, {
    preserveScroll: true,
    onSuccess: () => {
      props.edit ? '' : form.reset();
    },
    onError: () => {
      if (form.errors.name) {
        document.getElementById('name').focus();
      }
      if (form.errors.company) {
        document.getElementById('company').focus();
      }
      if (form.errors.email) {
        document.getElementById('email').focus();
      }
      if (form.errors.phone) {
        document.getElementById('phone').focus();
      }
    },
  });
}
</script>

<template>
  <AppLayout :title="props.edit ? t('Edit Supplier') : t('Add New Supplier')">
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      <FormSection @submitted="submit" autocomplete="off">
        <template #title>{{ props.edit ? t('Edit Supplier') : t('Add New Supplier') }}</template>
        <template #description>
          {{ t('Please fill the form below to {x} item.', { x: props.edit ? t('update') : t('add') }) }}
          <div>
            <Button :href="route('suppliers.index')" class="mt-4">{{ t('List Suppliers') }}</Button>
          </div>
        </template>

        <template #form>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.name" id="name" :error="form.errors.name" :label="t('Name')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.company" id="company" :error="form.errors.company" :label="t('Company')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.email" id="email" :error="form.errors.email" :label="t('Email')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.phone" id="phone" :error="form.errors.phone" :label="t('Phone')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.cf1" id="cf1" :error="form.errors.cf1" :label="t($settings?.supplier_cf1 || 'Custom Field 1')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.cf2" id="cf2" :error="form.errors.cf2" :label="t($settings?.supplier_cf2 || 'Custom Field 2')" />
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
