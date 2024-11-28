<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '@inertiajs/vue3';

import Button from '@/Shared/Button.vue';
import FileInput from '@/Shared/FileInput.vue';
import TextInput from '@/Shared/TextInput.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import SelectInput from '@/Shared/SelectInput.vue';
import FormSection from '@/Jetstream/FormSection.vue';
import AutoComplete from '@/Shared/AutoCompleteApi.vue';
import ActionMessage from '@/Jetstream/ActionMessage.vue';

let photo = ref(null);
const form = useForm({
  name: null,
  code: null,
  symbology: null,
  category_id: null,
  quantity: null,
  unit: null,
  alert_quantity: null,
  photo: null,
  _method: 'post',
});
const props = defineProps(['categories', 'edit']);
if (props.edit) {
  form.name = props.edit.data.name;
  form.code = props.edit.data.code;
  form.symbology = props.edit.data.symbology;
  form.category_id = props.edit.data.category_id;
  form.quantity = props.edit.data.quantity;
  form.unit = props.edit.data.unit;
  form.alert_quantity = props.edit.data.alert_quantity;
}
const { t } = useI18n({});

function submit() {
  form._method = props.edit ? 'put' : 'post';
  let url = props.edit ? route('items.update', props.edit.data.id) : route('items.store');
  form.post(url, {
    preserveScroll: true,
    onSuccess: () => {
      props.edit ? '' : form.reset();
    },
    onError: () => {
      if (form.errors.quantity) {
        document.getElementById('quantity').focus();
      }
      if (form.errors.code) {
        document.getElementById('code').focus();
      }
      if (form.errors.name) {
        document.getElementById('name').focus();
      }
    },
  });
}
</script>

<template>
  <AppLayout :title="props.edit ? t('Edit Item') : t('Add New Item')">
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      <FormSection @submitted="submit" autocomplete="off">
        <template #title>{{ props.edit ? t('Edit Item') : t('Add New Item') }}</template>
        <template #description>
          {{ t('Please fill the form below to {x} item.', { x: props.edit ? t('update') : t('add') }) }}
          <div>
            <Button :href="route('items.index')" class="mt-4">{{ t('List Items') }}</Button>
          </div>
        </template>

        <template #form>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.name" id="name" :error="form.errors.name" :label="t('Name')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.code" id="code" :error="form.errors.code" :label="t('Code')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <AutoComplete
              id="symbology"
              :searchable="false"
              v-model="form.symbology"
              :label="t('Symbology')"
              :error="form.errors.symbology"
              :suggestions="['CODE128', 'CODE39', 'EAN8', 'EAN13', 'UPC']"
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <AutoComplete
              id="category_id"
              :searchable="true"
              :label="t('Category')"
              :suggestions="categories"
              v-model="form.category_id"
              :error="form.errors.category_id"
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.quantity" id="quantity" :error="form.errors.quantity" :label="t('Quantity')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.unit" id="unit" :error="form.errors.unit" :label="t('Unit')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.alert_quantity" id="alert_quantity" :error="form.errors.alert_quantity" :label="t('Alert Quantity')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <FileInput v-model="form.photo" id="photo" :error="form.errors.photo" :label="t('Photo')" />
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
