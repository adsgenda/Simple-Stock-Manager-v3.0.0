<script setup>
import { route } from 'ziggy-js';
import { useI18n } from 'vue-i18n';
import { router } from '@inertiajs/vue3';
import { ref, computed, onMounted } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';

import Button from '@/Shared/Button.vue';
import Boolean from '@/Shared/Boolean.vue';
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
const props = defineProps(['users', 'roles']);
const form = useForm({ selection: [], force: false });
const search = useForm({ search: '', trashed: null, role: null });
const indeterminate = computed(() => form.selection.length > 0 && form.selection.length < props.users.data.length);

onMounted(() => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  search.role = urlParams.has('role') ? urlParams.get('role') : null;
  search.trashed = urlParams.has('trashed') ? urlParams.get('trashed') : null;
});

const deleteRow = (id, force = false) => {
  router.delete(route('users.destroy' + (force ? '.permanently' : ''), id));
};

const restoreRow = id => {
  router.put(route('users.restore', id));
};

const closeModal = () => {
  bulkDelete.value = false;
};

const confirmDelete = force => {
  form.force = force || false;
  bulkDelete.value = true;
};

const deleteSelected = force => {
  form.delete(route('users.destroy.many'), {
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
    .get(route('users.index'), { preserveState: true });
};

const resetSearch = () => {
  search.search = '';
  search.trashed = null;
  searchNow();
};
</script>

<template>
  <AppLayout :title="t('List Users')">
    <div class="py-8">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-900 shadow sm:rounded-lg">
          <div class="sm:rounded-lg">
            <div class="p-6 sm:rounded-t-lg border-b border-gray-200 dark:border-gray-700 block md:flex md:items-center md:justify-between">
              <div>
                <div class="text-2xl">
                  {{ t('Users') }}
                  <span class="text-base">
                    {{ search.role ? '(' + search.role + ')' : '' }}
                    {{ { with: '(' + t('With Trashed') + ')', only: '(' + t('Only Trashed') + ')' }[search.trashed] }}
                  </span>
                </div>
                <div class="mt-1 text-gray-500 dark:text-gray-400">{{ t('Please review the result below') }}</div>
              </div>
              <div class="mt-4 sm:mt-0 block sm:flex sm:items-center sm:gap-4">
                <Button :href="route('users.create')">{{ t('Add New User') }}</Button>
                <form @submit.prevent="searchNow">
                  <SearchFilter @reset="resetSearch()" v-model="search.search">
                    <label class="block">{{ t('Role') }}:</label>
                    <SelectInput v-model="search.role" @change="searchNow()" class="mt-1 w-full">
                      <option :value="null">{{ t('All') }}</option>
                      <template v-for="role in roles" :key="role">
                        <option :value="role.name">{{ t(role.name) }}</option>
                      </template>
                    </SelectInput>

                    <label class="block mt-4">{{ t('Trashed') }}:</label>
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
              <div v-if="props.users && props.users.data && props.users.data.length">
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
                                  :checked="indeterminate || form.selection.length === props.users.data.length"
                                  @change="form.selection = $event.target.checked ? props.users.data.map(p => p.id) : []"
                                  class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"
                                />
                              </th>
                              <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {{ t('Name') }}
                              </th>
                              <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {{ t('Email') }}
                              </th>
                              <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {{ t('Roles') }}
                              </th>
                              <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {{ t('View All') }}
                              </th>
                              <th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">
                                {{ t('Edit All') }}
                              </th>
                              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                <span class="sr-only">{{ t('Actions') }}</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                            <tr
                              :key="user.id"
                              v-for="user in props.users.data"
                              :class="[
                                form.selection.includes(user.id) && 'bg-gray-50 dark:bg-gray-800/50',
                                user.deleted_at && 'bg-red-100 dark:bg-red-900',
                              ]"
                            >
                              <td class="relative w-12 px-6 sm:w-16 sm:px-8">
                                <div v-if="form.selection.includes(user.id)" class="absolute inset-y-0 left-0 w-0.5 bg-blue-600"></div>
                                <input
                                  type="checkbox"
                                  :value="user.id"
                                  v-model="form.selection"
                                  class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"
                                />
                              </td>
                              <td class="whitespace-nowrap py-4 px-3 text-sm font-medium">
                                <div class="focus:outline-none flex items-center focus:text-indigo-500">
                                  <img v-if="user.photo" class="block w-5 h-5 rounded-full mr-2 -my-2" :src="user.photo" />
                                  {{ user.name }}
                                  <icons v-if="user.two_factor_enabled" name="otp" class="shrink-0 text-blue-600 ml-2" />
                                </div>
                              </td>
                              <td class="whitespace-nowrap px-3 py-4 text-sm">{{ user.email }}</td>
                              <td class="whitespace-nowrap px-3 py-4 text-sm">
                                {{ user.roles ? user.roles.map(r => t($capitalize(r.name))).join(', ') : '' }}
                              </td>
                              <td class="whitespace-nowrap px-3 py-4 text-sm text-center">
                                <Boolean :value="user.view_all" />
                              </td>
                              <td class="whitespace-nowrap px-3 py-4 text-sm text-center">
                                <Boolean :value="user.edit_all" />
                              </td>
                              <td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 w-20">
                                <row-actions
                                  pm="users"
                                  :row="user"
                                  property="name"
                                  :deleteFn="deleteRow"
                                  :restoreFn="restoreRow"
                                  :editStr="route('users.edit', user.id)"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <pagination class="m-4" :meta="props.users.meta" :links="props.users.links" />
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
<!--
<template>
  <admin-layout :title="t('Users')">
    <div class="px-4 md:px-0">
      <tec-section-title class="-mx-4 md:mx-0 mb-6">
        <template #title>{{ t('Users') }}</template>
        <template #description>{{ t('Please review the data in the table below') }}</template>
      </tec-section-title>

      <div class="mb-6 flex justify-between items-center print:hidden">
        <search-filter v-model="form.search" class="w-full max-w-md mr-4" @reset="reset">
          <label class="block">{{ t('Role') }}:</label>
          <select-input v-model="form.role" class="mt-1 w-full form-select">
            <option :value="null">{{ t('All') }}</option>
            <template v-for="role in roles" :key="role">
              <option :value="role.name">{{ t(role.name) }}</option>
            </template>
          </select-input>
          <label class="mt-4 block">{{ t('Trashed') }}:</label>
          <select-input v-model="form.trashed" class="mt-1 w-full form-select">
            <option :value="null">{{ t('Not Trashed') }}</option>
            <option value="with">{{ t('With Trashed') }}</option>
            <option value="only">{{ t('Only Trashed') }}</option>
          </select-input>
        </search-filter>
        <tec-button :href="route('users.create')">
          <span>
            <icons name="plus" class="w-5 h-5 lg:mr-2" />
          </span>
          <span class="hidden lg:inline">{{ t('create_x', { x: t('User') }) }}</span>
        </tec-button>
      </div>
      <div class="bg-white -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto">
        <table class="w-full whitespace-nowrap">
          <tr class="text-left font-bold">
            <th class="px-6 pt-6 pb-4">{{ t('Name') }}</th>
            <th class="px-6 pt-6 pb-4">{{ t('Email') }}</th>
            <th class="px-6 pt-6 pb-4" colspan="2">{{ t('Role') }}</th>
          </tr>
          <tr
            :key="user.id"
            v-for="user in users.data"
            @click="goto(route('users.edit', user.id))"
            class="hover:bg-gray-100 focus-within:bg-gray-100"
            :class="{ 'cursor-pointer': $can('update-users') }"
          >
            <td class="border-t">
              <div class="focus:outline-none px-6 py-4 flex items-center focus:text-indigo-500">
                <img v-if="user.photo" class="block w-5 h-5 rounded-full mr-2 -my-2" :src="user.photo" />
                {{ user.name }}
                <icons v-if="user.two_factor_enabled" name="otp" class="shrink-0 text-blue-600 ml-2" />
                <icons v-if="user.deleted_at" name="trash" class="shrink-0 text-red-500 ml-2" />
              </div>
            </td>
            <td class="border-t">
              <div class="focus:outline-none px-6 py-4 flex items-center">
                {{ user.email }}
              </div>
            </td>
            <td class="border-t">
              <div class="focus:outline-none px-6 py-4 flex items-center">
                {{ user.roles ? user.roles.map(r => t(r)).join(', ') : '' }}
              </div>
            </td>
            <td class="border-t w-px">
              <div class="focus:outline-none px-4 flex items-center" v-if="$can('update-users')">
                <icons name="chevron-down" class="transform -rotate-90 block w-4 h-4" />
              </div>
            </td>
          </tr>
          <tr v-if="users.data.length === 0">
            <td class="border-t px-6 py-4" colspan="4">{{ t('There is no data to display.') }}</td>
          </tr>
        </table>
      </div>
      <pagination class="mt-6" :meta="users.meta" :links="users.links" />
    </div>
  </admin-layout>
</template>

<script>
import pickBy from 'lodash/pickBy';
import throttle from 'lodash/throttle';
import mapValues from 'lodash/mapValues';
import TecButton from '@/Jetstream/Button.vue';
import Pagination from '@/Shared/Pagination.vue';
import SelectInput from '@/Shared/SelectInput.vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import SearchFilter from '@/Shared/SearchFilter.vue';
import TecSectionTitle from '@/Jetstream/SectionTitle.vue';

export default {
  components: {
    TecButton,
    Pagination,
    AdminLayout,
    SelectInput,
    SearchFilter,
    TecSectionTitle,
  },

  props: {
    roles: Object,
    users: Object,
    filters: Object,
  },

  data() {
    return {
      form: {
        role: this.filters.role,
        search: this.filters.search,
        trashed: this.filters.trashed,
      },
    };
  },

  watch: {
    form: {
      handler: throttle(function () {
        let query = pickBy(this.form);
        this.$router.visit(this.route('users.index', Object.keys(query).length ? query : { remember: 'forget' }), {
          onFinish: () => {
            document.getElementById('page-search').focus();
          },
        });
      }, 150),
      deep: true,
    },
  },

  methods: {
    goto(link) {
      if (this.$can('update-users')) {
        this.$router.visit(link);
      }
    },
    reset() {
      this.form = mapValues(this.form, () => null);
    },
  },
};
</script> -->
