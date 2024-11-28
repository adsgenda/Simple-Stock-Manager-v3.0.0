<script setup>
import { route } from 'ziggy-js';
import { useI18n } from 'vue-i18n';
import AppLayout from '@/Layouts/AppLayout.vue';

const { t } = useI18n({});
const props = defineProps(['data']);
</script>

<template>
  <AppLayout :title="t('Dashboard')">
    <div class="py-8">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-900 overflow-hidden shadow sm:rounded-lg">
          <div>
            <div class="p-6">
              <div class="text-2xl">
                {{ t('Welcome to') }}
                {{ $settings?.name || 'SSM' }} {{ t('management portal') }}.
              </div>
              <div class="mt-2 text-gray-500 dark:text-gray-400">
                {{ t('Last 30 days checkins and checkouts with total items & customers followed by quick links.') }}
              </div>
            </div>

            <div v-if="data" class="p-6 bg-blue-50 dark:bg-blue-900/10 border-b border-t border-blue-100 dark:border-gray-700">
              <h3 class="text-lg leading-6 font-semibold">{{ t('Last 30 days') }}</h3>

              <dl
                class="mt-2 grid grid-cols-1 rounded-lg bg-white dark:bg-gray-900 overflow-hidden border dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800 md:grid-cols-2 lg:grid-cols-4 md:divide-x lg:divide-y-0 lg:divide-x"
              >
                <div class="px-4 py-5 sm:p-6">
                  <dt class="text-base font-normal">{{ t('Total Checkins') }}</dt>
                  <dd class="mt-1 flex justify-between items-end">
                    <div class="flex items-baseline text-2xl font-semibold text-blue-600 dark:text-blue-400">
                      {{ data.checkins }}
                      <!-- <span class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"> from 70,946 </span> -->
                    </div>

                    <span
                      v-if="data.checkins != 0 && data.previous_checkins != 0"
                      class="flex items-center space-x-1 text-sm font-medium leading-none"
                      :class="data.checkins > data.previous_checkins ? 'text-green-500' : 'text-red-500'"
                    >
                      <icons v-if="data.checkins > data.previous_checkins" name="up" />
                      <icons v-else name="down" />
                      <span> {{ $number((data.checkins / data.previous_checkins) * 100 - 100) }}% </span>
                    </span>
                  </dd>
                </div>

                <div class="px-4 py-5 sm:p-6">
                  <dt class="text-base font-normal">{{ t('Total Checkouts') }}</dt>
                  <dd class="mt-1 flex justify-between items-center">
                    <div class="flex items-baseline text-2xl font-semibold text-blue-600 dark:text-blue-400">
                      {{ data.checkouts }}
                      <!-- <span class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"> from 56.14% </span> -->
                    </div>

                    <span
                      v-if="data.checkouts != 0 && data.previous_checkouts != 0"
                      class="flex items-center space-x-1 text-sm font-medium leading-none"
                      :class="data.checkouts > data.previous_checkouts ? 'text-green-500' : 'text-red-500'"
                    >
                      <icons v-if="data.checkouts > data.previous_checkouts" name="up" />
                      <icons v-else name="down" />
                      <span> {{ $number((data.checkouts / data.previous_checkouts) * 100 - 100) }}% </span>
                    </span>
                  </dd>
                </div>

                <div class="px-4 py-5 sm:p-6">
                  <dt class="text-base font-normal">{{ t('Items') }}</dt>
                  <dd class="mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400">
                    {{ data.items }}
                  </dd>
                </div>
                <div class="px-4 py-5 sm:p-6">
                  <dt class="text-base font-normal">{{ t('Customers') }}</dt>
                  <dd class="mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400">
                    {{ data.customers }}
                  </dd>
                </div>
              </dl>
            </div>

            <div v-if="$isAdmin" class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-6">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                  <div class="ml-4 text-lg leading-7 font-semibold">
                    <Link :href="route('items.index')">{{ t('Items') }}</Link>
                  </div>
                </div>

                <div class="ml-12 flex flex-wrap gap-y-4 gap-x-6">
                  <div class="w-full mt-2 text-sm text-gray-500 dark:text-gray-400">{{ t('Items are the products to track') }}</div>

                  <template
                    v-for="[title, rn] of [
                      ['List', 'items.index'],
                      ['Add', 'items.create'],
                      ['Import', 'items.import'],
                    ]"
                    :key="rn"
                  >
                    <Link
                      :href="route(rn)"
                      class="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {{ t(title) }}
                    </Link>
                  </template>
                </div>
              </div>

              <div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  <div class="ml-4 text-lg leading-7 font-semibold">
                    <Link :href="route('categories.index')">{{ t('Categories') }}</Link>
                  </div>
                </div>

                <div class="ml-12 flex flex-wrap gap-y-4 gap-x-6">
                  <div class="w-full mt-2 text-sm text-gray-500 dark:text-gray-400">{{ t('Manage your items categories') }}</div>

                  <template
                    v-for="[title, rn] of [
                      ['List', 'categories.index'],
                      ['Add', 'categories.create'],
                      ['Import', 'categories.import'],
                    ]"
                    :key="rn"
                  >
                    <Link
                      :href="route(rn)"
                      class="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {{ t(title) }}
                    </Link>
                  </template>
                </div>
              </div>

              <div class="p-6 border-t border-gray-200 dark:border-gray-700">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                  </svg>
                  <div class="ml-4 text-lg leading-7 font-semibold">
                    <Link :href="route('checkins.index')">{{ t('Checkins') }}</Link>
                  </div>
                </div>

                <div class="ml-12 flex flex-wrap gap-y-4 gap-x-6">
                  <div class="w-full mt-2 text-sm text-gray-500 dark:text-gray-400">{{ t('Manage your incoming inventory/stock') }}</div>

                  <!-- ['Add by Excel File', 'checkins.import'], -->
                  <template
                    v-for="[title, rn] of [
                      ['List', 'checkins.index'],
                      ['Add', 'checkins.create'],
                    ]"
                    :key="rn"
                  >
                    <Link
                      :href="route(rn)"
                      class="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {{ t(title) }}
                    </Link>
                  </template>
                </div>
              </div>

              <div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                  </svg>
                  <div class="ml-4 text-lg leading-7 font-semibold">
                    <Link :href="route('checkouts.index')">{{ t('Checkouts') }}</Link>
                  </div>
                </div>

                <div class="ml-12 flex flex-wrap gap-y-4 gap-x-6">
                  <div class="w-full mt-2 text-sm text-gray-500 dark:text-gray-400">{{ t('Manage your outgoing inventory/stock') }}</div>

                  <!-- ['Add by Excel File', 'checkouts.import'], -->
                  <template
                    v-for="[title, rn] of [
                      ['List', 'checkouts.index'],
                      ['Add', 'checkouts.create'],
                    ]"
                    :key="rn"
                  >
                    <Link
                      :href="route(rn)"
                      class="inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {{ t(title) }}
                    </Link>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
