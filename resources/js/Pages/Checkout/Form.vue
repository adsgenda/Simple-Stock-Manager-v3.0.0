<script setup>
import axios from 'axios';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '@inertiajs/vue3';

import Button from '@/Shared/Button.vue';
import Modal from '@/Jetstream/Modal.vue';
import FileInput from '@/Shared/FileInput.vue';
import TextInput from '@/Shared/TextInput.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import Attachments from '@/Shared/Attachments.vue';
import ImportExcel from '@/Shared/ImportExcel.vue';
import FormSection from '@/Jetstream/FormSection.vue';
import TextareaInput from '@/Shared/TextareaInput.vue';
import AutoComplete from '@/Shared/AutoCompleteApi.vue';
import ActionMessage from '@/Jetstream/ActionMessage.vue';

const search = ref('');
const input = ref(null);
const results = ref([]);
const customer = ref(null);
const read_xslx = ref(false);
const searching = ref(false);
const form = useForm({ date: null, reference: null, customer_id: null, attachments: null, items: [], note: null, _method: 'post' });

const props = defineProps(['edit', 'checkouts']);
if (props.edit) {
  customer.value = { value: props.edit.data.customer.id, label: props.edit.data.customer.name };
  form.date = props.edit.data.date;
  form.reference = props.edit.data.reference;
  form.customer_id = props.edit.data.customer_id;
  form.attachments = null;
  form.items = props.edit.data.items;
  form.note = props.edit.data.note;
}
const { t } = useI18n({});

watch(search, s => {
  searching.value = true;
  axios
    .post(route('search.items'), { search: s })
    .then(res => {
      results.value = res.data;
      if (results.value.length == 1) {
        selectItem(results.value[0]);
      }
    })
    .finally(() => (searching.value = false));

  //   let data = [s, s + s, s + s + s];
  //   results.value = data;
});

const selectItem = v => {
  let oi = form.items.find(i => i.item_id == v.value);
  if (oi) {
    oi.quantity += 1;
  } else {
    form.items.push({ item_id: v.value, name: v.label, code: v.code, unit: v.unit, quantity: 1 });
  }
  search.value = '';
  input.value.focus();
};

const setItems = items => {
  form.items = items;
  read_xslx.value = false;
};

const blurInput = () => {
  setTimeout(() => (search.value = ''), 100);
};

const removeOrderItem = v => {
  form.items = form.items.filter(i => i.item_id != v.item_id);
};

function submit() {
  form._method = props.edit ? 'put' : 'post';
  //   form.customer_id = customer.value?.value || customer.value;
  let url = props.edit ? route('checkouts.update', props.edit.data.id) : route('checkouts.store');
  form.transform(data => {
    // data._method = method;
    data.customer_id = customer.value?.value || customer.value;
    return data;
  });
  form.post(url, {
    preserveScroll: true,
    onSuccess: () => {
      props.edit ? '' : form.reset();
    },
    onError: e => {
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
  <AppLayout :title="props.edit ? t('Edit Checkout') : t('Add New Checkout')">
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      <FormSection @submitted="submit" autocomplete="off">
        <template #title>{{ props.edit ? t('Edit Checkout') : t('Add New Checkout') }}</template>
        <template #description>
          {{ t('Please fill the form below to {x} item.', { x: props.edit ? t('update') : t('add') }) }}
          <div>
            <Button :href="route('checkouts.index')" class="mt-4">{{ t('List Checkouts') }}</Button>
          </div>
        </template>

        <template #form>
          <div class="col-span-6 sm:col-span-3">
            <TextInput type="date" v-model="form.date" id="date" :error="form.errors.date" :label="t('Date')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.reference" id="reference" :error="form.errors.reference" :label="t('Reference')" />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <AutoComplete
              :json="true"
              id="customer_id"
              v-model="customer"
              :searchable="true"
              :label="t('Customer')"
              :selected="customer?.value"
              :error="form.errors.customer_id"
              :suggestions="route('search.customers')"
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <FileInput multiple v-model="form.attachments" id="attachments" :error="form.errors.attachments" :label="t('Attachment')" />
          </div>

          <div class="col-span-full">
            <div
              class="mt-3 sm:mt-1 border border-gray-300 dark:border-gray-700 divide-y divide-gray-300 rounded-md transition-all dark:bg-gray-800"
            >
              <div class="relative">
                <svg
                  class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  ref="input"
                  v-model="search"
                  @blur="blurInput()"
                  class="h-12 w-full rounded-md border border-transparent px-11 placeholder-gray-400 focus:border-blue-300 dark:focus:border-gray-600 dark:focus:ring-blue-200 dark:focus:ring-opacity-50 focus:ring-2 focus:ring-blue-100 dark:bg-gray-800"
                  :placeholder="t('Scan Barcode OR Search...')"
                />
                <button
                  type="button"
                  @click="read_xslx = true"
                  class="inline-flex items-center absolute top-1 right-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 py-2 px-3 rounded-md"
                >
                  <span class="hidden sm:inline-block mr-2">{{ t('Import') }}</span>
                  <icons name="xlsx" size="h-6 w-6" />
                </button>
              </div>
              <ul v-if="search && results && results.length" class="max-h-80 scroll-py-2 overflow-y-auto p-2">
                <li :key="i" v-for="(r, i) in results">
                  <button
                    type="button"
                    @click="selectItem(r)"
                    class="block text-left w-full select-none rounded-md px-3 py-2 hover:bg-blue-500 hover:text-white"
                  >
                    <span class="ml-3 flex-auto truncate">{{ r.label }}</span>
                  </button>
                </li>
              </ul>
            </div>

            <div v-if="form.items && form.items.length" class="my-6 flex flex-col">
              <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <table class="min-w-full border-b border-gray-300 dark:border-gray-700 divide-y divide-gray-300 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-bold sm:pl-6 md:pl-0">{{ t('Item') }}</th>
                        <th scope="col" class="py-3.5 px-3 text-left text-sm font-bold">{{ t('Quantity') }}</th>
                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0">
                          <span class="sr-only">{{ t('Remove') }}</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr v-for="(i, r) of form.items" :key="r">
                        <td class="align-middle whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6 md:pl-0">
                          {{ i.name }} ({{ i.code }})
                          <div v-if="form.errors['items.' + r + '.quantity']" class="text-red-500 mt-1">
                            {{ form.errors['items.' + r + '.quantity'] }}
                          </div>
                        </td>
                        <td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500 w-20 sm:w-40">
                          <TextInput
                            v-model="i.quantity"
                            class="max-w-[80px] sm:max-w-[150px] -mt-4 -mb-3 text-gray-700 dark:text-gray-300"
                          />
                        </td>
                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0 w-12">
                          <div class="flex items-center justify-center">
                            <button
                              type="button"
                              @click="removeOrderItem(i)"
                              class="text-red-500 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-100 dark:hover:bg-red-900 p-2 rounded-md -my-2"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div v-else class="border dark:border-gray-700 text-gray-700 dark:text-gray-300 p-4 my-4 rounded-md">
              {{ t('Please scan barcode or search to add item') }}
              <div class="text-red-500 text-sm mt-1" v-if="form?.errors?.items">{{ form.errors.items }}</div>
            </div>

            <div class="col-span-full">
              <Attachments :attachments="edit ? edit.data?.attachments : []" />
            </div>
            <div class="col-span-full">
              <TextareaInput v-model="form.note" id="note" :error="form.errors.note" :label="t('Note')" />
            </div>
          </div>
        </template>

        <template #actions>
          <ActionMessage :on="form.recentlySuccessful" class="mr-3"> Saved. </ActionMessage>
          <Button type="submit" :loading="form.processing"> Save </Button>
        </template>
      </FormSection>
    </div>

    <Modal :show="read_xslx" max-width="xl" :closeable="false" @close="() => (read_xslx = false)">
      <div class="px-6 pt-3 pb-6 print:px-0 bg-gray-100 dark:bg-gray-800">
        <div class="flex items-center justify-between print:hidden">
          <div class="text-lg font-bold">
            {{ t('Items from Excel') }}
          </div>
          <div class="-mr-2 flex items- gap-2">
            <button
              @click="read_xslx = false"
              class="flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              <icons name="cross" class="h-5 w-5" />
            </button>
          </div>
        </div>

        <div class="">
          <ImportExcel @done="setItems" />
        </div>
      </div>
    </Modal>
  </AppLayout>
</template>
