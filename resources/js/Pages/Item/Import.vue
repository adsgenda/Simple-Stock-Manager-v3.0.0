<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '@inertiajs/vue3';

import Button from '@/Shared/Button.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import FormSection from '@/Jetstream/FormSection.vue';
import DropDownInput from '@/Shared/DropDownInput.vue';
import LoadingButton from '@/Shared/LoadingButton.vue';

const { t } = useI18n({});

const formRef = ref([]);
const selected = ref(null);
const form = useForm({ _method: 'POST', excel: null });

const updateFile = e => {
  selected.value = e.target.files[0].name;
};

const submit = () => {
  if (formRef.value.files) {
    form.excel = formRef.value.files[0];
  }

  // var data = new FormData();
  // data.append('excel', this.form.excel);
  // data.append('_method', this.form._method);
  // this.$router.post(route('items.import.save'), data);
  form.post(route('items.import.save'), { preserveScroll: true });
};
</script>

<template>
  <AppLayout :title="t('Import {x}', { x: t('Items') })">
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      <FormSection @submitted="submit">
        <template #title>{{ t('Import {x}', { x: t('Items') }) }}</template>
        <template #description>
          {{ t('Please upload the excel file to import records.') }}
          <div class="flex items-center gap-4 flex-wrap mt-4">
            <Button :href="route('items.index')">{{ t('List Items') }}</Button>
            <Button away :href="route('items.export')">{{ t('Export Items') }}</Button>
          </div>
        </template>

        <template #form>
          <div class="w-full col-span-full">
            <label for="file-upload" class="block font-medium">{{ t('Excel File') }}</label>
            <div
              :class="$page.props.errors.excel ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'"
              class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md"
            >
              <div class="space-y-1 text-center">
                <icons name="doc-text" size="mx-auto h-12 w-12 text-gray-400" />
                <div class="flex items-center justify-center py-2">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-300"
                  >
                    <span v-if="selected" class="font-semibold">{{ t('Change file') }}</span>
                    <span v-else class="font-semibold">{{ t('Select file') }}</span>
                    <input
                      type="file"
                      ref="formRef"
                      class="sr-only"
                      id="file-upload"
                      name="file-upload"
                      @change="updateFile"
                      accept=".xls,.xlsx,application/vnd.ms-excel"
                    />
                  </label>
                  <p class="pl-1">{{ t('or drag and drop') }}</p>
                </div>
                <div class="text-xs">
                  <div>
                    {{
                      t('Excel file should have name, code, symbology, category_code, quantity, unit, alert_quantity and photo columns.')
                    }}
                  </div>
                  <div>{{ t('The name, code, symbology and category_code are required.') }}</div>
                  <div>{{ t('Symbology can be one of CODE128, CODE39, EAN8, EAN13 or UPC.') }}</div>
                </div>
                <div v-if="selected" class="inline-block pt-4">
                  <div class="px-3 py-1 rounded-md border font-bold text-lg">{{ t('Selected File') }}: {{ selected }}</div>
                </div>
                <div v-if="$page.props.errors.excel" class="mt-4 pt-2 text-red-600 rounded-md">
                  {{ $page.props.errors.excel }}
                </div>
              </div>
            </div>
          </div>
        </template>

        <template #actions>
          <LoadingButton :loading="form.processing" :disabled="form.processing">{{ t('Import') }}</LoadingButton>
        </template>
      </FormSection>
    </div>
  </AppLayout>
</template>
