<script setup>
import { route } from 'ziggy-js';
import { useI18n } from 'vue-i18n';
import { router } from '@inertiajs/vue3';
import { ref, computed, onMounted } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';

import Button from '@/Shared/Button.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import Pagination from '@/Shared/Pagination.vue';
import RowActions from '@/Shared/RowActions.vue';
import SelectInput from '@/Shared/SelectInput.vue';
import SearchFilter from '@/Shared/SearchFilter.vue';
import DialogModal from '@/Jetstream/DialogModal.vue';
import DangerButton from '@/Jetstream/DangerButton.vue';
import SecondaryButton from '@/Jetstream/SecondaryButton.vue';

const { t } = useI18n({});

const bulkDelete = ref(false);
const props = defineProps(['categories']);
const form = useForm({ selection: [], force: false });
const search = useForm({ search: '', trashed: null });
const indeterminate = computed(() => form.selection.length > 0 && form.selection.length < props.categories.data.length);

onMounted(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  search.trashed = urlParams.has('trashed') ? urlParams.get('trashed') : null;
});

const deleteRow = (id, force = false) => {
  router.delete(route('categories.destroy' + (force ? '.permanently' : ''), id));
};

const restoreRow = id => {
  router.put(route('categories.restore', id));
};

const closeModal = () => {
  bulkDelete.value = false;
};

const confirmDelete = force => {
  form.force = force || false;
  bulkDelete.value = true;
};

const deleteSelected = force => {
  form.delete(route('categories.destroy.many'), {
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
    .get(route('categories.index'), { preserveState: true });
};

const resetSearch = () => {
  search.search = '';
  search.trashed = null;
  searchNow();
};
</script>

<template>
  <AppLayout :title="t('List Categories')">
    <div class="py-8">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-900 shadow sm:rounded-lg">
          <div class="sm:rounded-lg">
            <div class="p-6 sm:rounded-t-lg border-b border-gray-200 dark:border-gray-700 block md:flex md:items-center md:justify-between">
              <div>
                <div class="text-2xl">
                  {{ t('Categories') }}
                  <span class="text-base">
                    {{ { with: '(' + t('With Trashed') + ')', only: '(' + t('Only Trashed') + ')' }[search.trashed] }}
                  </span>
                </div>
                <div class="mt-1 text-gray-500 dark:text-gray-400">{{ t('Please review the result below') }}</div>
              </div>
              <!-- <div class="mt-4 md:mt-0 flex flex-col-reverse sm:flex-row items-center gap-4">
                <div class="relative border rounded-md">
                  <svg
                    class="pointer-events-none absolute top-3 left-2 h-4 w-4 text-gray-400"
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
                  <form @submit.prevent="searchNow">
                    <input
                      type="text"
                      v-model="search.search"
                      placeholder="Search..."
                      class="h-10 w-full border-0 bg-transparent pl-8 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                    />
                  </form>
                </div> -->

              <div class="mt-4 sm:mt-0 block sm:flex sm:items-center sm:gap-4">
                <Button :href="route('categories.create')">{{ t('Add New Category') }}</Button>
                <form @submit.prevent="searchNow">
                  <SearchFilter @reset="resetSearch()" v-model="search.search">
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
              <div v-if="props.categories && props.categories.data && props.categories.data.length">
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
                                  :checked="indeterminate || form.selection.length === props.categories.data.length"
                                  @change="form.selection = $event.target.checked ? props.categories.data.map(p => p.id) : []"
                                  class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"
                                />
                              </th>
                              <th scope="col" class="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {{ t('Code') }}
                              </th>
                              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {{ t('Name') }}
                              </th>
                              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span class="sr-only">{{ t('Actions') }}</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                            <tr
                              v-for="category in props.categories.data"
                              :key="category.id"
                              :class="[
                                form.selection.includes(category.id) && 'bg-gray-50 dark:bg-gray-800/50',
                                category.deleted_at && 'bg-red-100 dark:bg-red-900',
                              ]"
                            >
                              <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                                <div v-if="form.selection.includes(category.id)" class="absolute inset-y-0 left-0 w-0.5 bg-blue-600"></div>
                                <input
                                  type="checkbox"
                                  :value="category.id"
                                  v-model="form.selection"
                                  class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"
                                />
                              </td>
                              <td class="whitespace-nowrap py-4 pr-3 text-sm font-medium">{{ category.code }}</td>
                              <td class="whitespace-nowrap px-3 py-4 text-sm">{{ category.name }}</td>
                              <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 w-20">
                                <row-actions
                                  pm="categories"
                                  property="name"
                                  :row="category"
                                  :deleteFn="deleteRow"
                                  :restoreFn="restoreRow"
                                  :editStr="route('categories.edit', category.id)"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <pagination class="m-4" :meta="props.categories.meta" :links="props.categories.links" />
                </div>
              </div>
              <div v-else class="py-4 px-6">{{ t('There is no data to display.') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
