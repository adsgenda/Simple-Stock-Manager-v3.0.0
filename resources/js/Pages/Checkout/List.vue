<script setup>
import { route } from 'ziggy-js';
import { useI18n } from 'vue-i18n';
import { router } from '@inertiajs/vue3';
import { ref, computed, onMounted } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';

import Details from './Details.vue';
import Button from '@/Shared/Button.vue';
import Modal from '@/Jetstream/Modal.vue';
import TextInput from '@/Shared/TextInput.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import Pagination from '@/Shared/Pagination.vue';
import RowActions from '@/Shared/RowActions.vue';
import SelectInput from '@/Shared/SelectInput.vue';
import SearchFilter from '@/Shared/SearchFilter.vue';
import DialogModal from '@/Jetstream/DialogModal.vue';
import DangerButton from '@/Jetstream/DangerButton.vue';
import SecondaryButton from '@/Jetstream/SecondaryButton.vue';

const { t } = useI18n({});

const show = ref(false);
const checkout = ref(null);
const bulkDelete = ref(false);
const props = defineProps(['checkouts']);
const form = useForm({ selection: [], force: false });
const search = useForm({ search: '', start_date: null, end_date: null, trashed: null });
const indeterminate = computed(() => form.selection.length > 0 && form.selection.length < props.checkouts.data.length);

onMounted(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  search.trashed = urlParams.has('trashed') ? urlParams.get('trashed') : null;
  search.end_date = urlParams.has('end_date') ? urlParams.get('end_date') : null;
  search.start_date = urlParams.has('start_date') ? urlParams.get('start_date') : null;
});

const print = () => {
  window.print();
};

const deleteRow = (id, force = false) => {
  router.delete(route('checkouts.destroy' + (force ? '.permanently' : ''), id));
};

const restoreRow = id => {
  router.put(route('checkouts.restore', id));
};

const closeModal = () => {
  bulkDelete.value = false;
};

const showCheckout = ch => {
  show.value = true;
  checkout.value = ch;
};

const hideCheckout = ch => {
  show.value = false;
  checkout.value = null;
};

const confirmDelete = force => {
  form.force = force || false;
  bulkDelete.value = true;
};

const deleteSelected = force => {
  form.delete(route('checkouts.destroy.many'), {
    onSuccess: () => {
      form.reset();
    },
    onFinish: () => {
      bulkDelete.value = false;
    },
  });
};

const searchNow = () => {
  search
    .transform(data => {
      let obj = {
        ...data,
        remember: data.remember ? 'on' : '',
      };
      return Object.entries(obj).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    })
    .get(route('checkouts.index'), { preserveState: true });
};

const resetSearch = () => {
  search.search = '';
  search.trashed = null;
  searchNow();
};
</script>

<template>
  <AppLayout :title="t('List Checkouts')">
    <div class="contents">
      <div class="py-8">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="bg-white dark:bg-gray-900 shadow sm:rounded-lg">
            <div class="sm:rounded-lg">
              <div
                class="p-6 sm:rounded-t-lg border-b border-gray-200 dark:border-gray-700 block md:flex md:items-center md:justify-between"
              >
                <div>
                  <div class="text-2xl">
                    {{ t('Checkouts') }}
                    <span class="text-base">
                      {{ search.start_date ? '(from: ' + $date(search.start_date) + ')' : '' }}
                      {{ search.end_date ? '(to: ' + $date(search.end_date) + ')' : '' }}
                      {{ { with: '(' + t('With Trashed') + ')', only: '(' + t('Only Trashed') + ')' }[search.trashed] }}
                    </span>
                  </div>
                  <div class="mt-1 text-gray-500 dark:text-gray-400">{{ t('Please review the result below') }}</div>
                </div>
                <div class="mt-4 sm:mt-0 block sm:flex sm:items-center sm:gap-4">
                  <Button :href="route('checkouts.create')">{{ t('Add New Checkout') }}</Button>
                  <form @submit.prevent="searchNow">
                    <SearchFilter @reset="resetSearch()" v-model="search.search">
                      <label class="block">{{ t('Start Date') }}:</label>
                      <TextInput type="date" v-model="search.start_date" @change="searchNow()" class="mt-1 w-full mb-4" />

                      <label class="block">{{ t('End Date') }}:</label>
                      <TextInput type="date" v-model="search.end_date" @change="searchNow()" class="mt-1 w-full mb-4" />

                      <label class="block">{{ t('Trashed') }}:</label>
                      <SelectInput v-model="search.trashed" @change="searchNow()" class="mt-1 w-full">
                        <option :value="null">{{ t('Not Trashed') }}</option>
                        <option value="with">{{ t('With Trashed') }}</option>
                        <option value="only">{{ t('Only Trashed') }}</option>
                      </SelectInput>
                    </SearchFilter>
                  </form>
                </div>
              </div>

              <div class="bg-gray-50 dark:bg-black/50 border-b dark:border-gray-700 sm:rounded-b-lg">
                <div v-if="props.checkouts && props.checkouts.data && props.checkouts.data.length">
                  <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div class="relative overflow-hidden ring-1 ring-black ring-opacity-5">
                          <div
                            v-if="form.selection && form.selection.length"
                            class="absolute top-0 left-12 flex h-12 items-center space-x-3 sm:left-16"
                          >
                            <button
                              type="button"
                              @click="confirmDelete()"
                              class="inline-flex items-center rounded border text-white border-red-500 bg-red-500 px-2.5 py-1.5 text-xs font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              {{ t('Move to Trash') }}
                            </button>
                            <button
                              type="button"
                              @click="confirmDelete(true)"
                              class="inline-flex items-center rounded border text-white border-red-500 bg-red-500 px-2.5 py-1.5 text-xs font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              {{ t('Delete Permanently') }}
                            </button>

                            <DialogModal :show="bulkDelete" @close="closeModal" maxWidth="sm">
                              <template #title> {{ t('Delete bulk records') }} </template>
                              <template #content>
                                <p>{{ t('Please confirm that you would like to delete the records?') }}</p>
                                <p v-if="form.force" class="mt-2 text-red-500">{{ t('This action will delete the data permanently.') }}</p>
                              </template>
                              <template #footer>
                                <SecondaryButton @click="closeModal"> {{ t('Cancel') }} </SecondaryButton>
                                <DangerButton @click="deleteSelected()"> {{ t('Yes, delete') }} </DangerButton>
                              </template>
                            </DialogModal>
                          </div>

                          <table class="min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700">
                            <thead class="bg-gray-50 dark:bg-black/50">
                              <tr>
                                <th scope="col" class="relative w-12 px-6 sm:w-16 sm:px-8">
                                  <input
                                    type="checkbox"
                                    :indeterminate="indeterminate"
                                    :checked="indeterminate || form.selection.length === props.checkouts.data.length"
                                    @change="form.selection = $event.target.checked ? props.checkouts.data.map(p => p.id) : []"
                                    class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"
                                  />
                                </th>
                                <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                  {{ t('Date') }}
                                </th>
                                <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                  {{ t('Reference') }}
                                </th>
                                <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                  {{ t('Customer') }}
                                </th>
                                <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                  {{ t('Items') }}
                                </th>
                                <th
                                  scope="col"
                                  class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 w-12"
                                ></th>
                                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                  <span class="sr-only">{{ t('Actions') }}</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                              <tr
                                :key="checkout.id"
                                v-for="checkout in props.checkouts.data"
                                :class="[
                                  form.selection.includes(checkout.id) && 'bg-gray-50 dark:bg-gray-800/50',
                                  checkout.deleted_at && 'bg-red-100 dark:bg-red-900',
                                ]"
                              >
                                <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                                  <div
                                    v-if="form.selection.includes(checkout.id)"
                                    class="absolute inset-y-0 left-0 w-0.5 bg-blue-600"
                                  ></div>
                                  <input
                                    type="checkbox"
                                    :value="checkout.id"
                                    v-model="form.selection"
                                    class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"
                                  />
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 cursor-pointer text-sm font-medium" @click="showCheckout(checkout)">
                                  {{ $date(checkout.date) }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 cursor-pointer text-sm" @click="showCheckout(checkout)">
                                  {{ checkout.reference }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 cursor-pointer text-sm" @click="showCheckout(checkout)">
                                  {{ checkout.customer?.name }}
                                </td>
                                <td
                                  class="whitespace-nowrap px-3 py-4 cursor-pointer text-sm text-right w-20"
                                  @click="showCheckout(checkout)"
                                >
                                  {{ checkout.items.length }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm w-12">
                                  <div class="flex items-center justify-end gap-3 -my-1">
                                    <template v-if="checkout.attachment">
                                      <a
                                        :href="checkout.attachment"
                                        target="_blank"
                                        class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke-width="1.5"
                                          stroke="currentColor"
                                          class="w-5 h-5"
                                        >
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                          />
                                        </svg>
                                      </a>
                                    </template>
                                    <button
                                      type="button"
                                      @click="showCheckout(checkout)"
                                      class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
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
                                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                        />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                      </svg>
                                    </button>
                                  </div>
                                </td>
                                <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 w-20">
                                  <row-actions
                                    pm="checkouts"
                                    :row="checkout"
                                    property="reference"
                                    :deleteFn="deleteRow"
                                    :restoreFn="restoreRow"
                                    :editStr="route('checkouts.edit', checkout.id)"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <pagination class="m-4" :meta="props.checkouts.meta" :links="props.checkouts.links" />
                  </div>
                </div>
                <div v-else class="py-4 px-6">{{ t('There is no data to display.') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal :show="show" max-width="4xl" :closeable="true" @close="hideCheckout">
      <div class="px-6 pt-3 pb-6 print:px-0 bg-gray-100 dark:bg-gray-800">
        <div v-if="show && checkout" class="flex items-center justify-between print:hidden">
          <div class="text-lg">
            {{ t('Checkout Details') }} <span class="hidden sm:inline">({{ checkout.reference }})</span>
          </div>
          <div class="-mr-2 flex items- gap-2">
            <button
              @click="print()"
              class="flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              <icons name="printer" class="h-5 w-5" />
            </button>
            <Link
              v-if="$can('update-checkouts')"
              :href="route('checkouts.edit', checkout.id)"
              class="flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              <icons name="edit" class="h-5 w-5" />
            </Link>
            <button
              @click="hideCheckout()"
              class="flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            >
              <icons name="cross" class="h-5 w-5" />
            </button>
          </div>
        </div>

        <div class="">
          <Details v-if="checkout" :checkout="checkout" />
        </div>
      </div>
    </Modal>
  </AppLayout>
</template>
