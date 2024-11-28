<script setup>
import { useI18n } from 'vue-i18n';
import { router, Head, usePage } from '@inertiajs/vue3';
import { computed, onMounted, ref } from 'vue';

import { LANGUAGES } from '@/Core/i18n';
import Banner from '@/Jetstream/Banner.vue';
import NavLink from '@/Jetstream/NavLink.vue';
import Dropdown from '@/Jetstream/Dropdown.vue';
import AlertsModal from '@/Shared/AlertsModal.vue';
import FlashMessages from '@/Shared/FlashMessages.vue';
import DropdownLink from '@/Jetstream/DropdownLink.vue';
import ApplicationMark from '@/Jetstream/ApplicationMark.vue';
import ResponsiveNavLink from '@/Jetstream/ResponsiveNavLink.vue';

const { t } = useI18n({});
const alerts = ref(false);
defineProps({
  title: String,
});

const theme = ref(null);
const showingNavigationDropdown = ref(false);
const user = computed(() => usePage().props.auth.user);

const lang = computed(() => {
  return LANGUAGES.find(l => l.value == this.$root.$i18n.locale)?.flag || 'US';
});

onMounted(() => {
  theme.value = localStorage.getItem('theme') || document.documentElement.getAttribute('data-theme');
  document.getElementById('app-loading').style.display = 'none';
});

const switchToTeam = team => {
  router.put(route('current-team.update'), { team_id: team.id }, { preserveState: false });
};

const logout = () => {
  router.post(route('logout'));
};

const toggleMode = () => {
  theme.value = theme.value == 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
};
</script>

<script>
export default {
  data() {
    return { currentLang: this.$page.props.language };
  },
  methods: {
    getFlag() {
      return LANGUAGES.find(l => l.value == this.$root.$i18n.locale)?.flag || 'US';
    },
    changeLang(lang) {
      router.visit('/language/' + lang, {
        onFinish: v => {
          window.Locale = lang;
          this.currentLang = lang;
          document.querySelector('html').setAttribute('lang', lang);
          this.$root.$i18n.locale = lang;
        },
      });
    },
  },
};
</script>

<template>
  <div>
    <Head :title="title" />
    <Banner />

    <div class="page min-h-screen bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
      <nav class="header bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-14">
            <div class="flex">
              <div class="shrink-0 flex items-center mr-4">
                <Link :href="route('dashboard')">
                  <h2 class="font-extrabold text-2xl">{{ $settings?.name || 'SSM' }}</h2>
                  <!-- <ApplicationMark class="block h-8 w-auto dark:invert dark:grayscale" /> -->
                </Link>
              </div>

              <!-- Navigation Links -->
              <div class="hidden space-x-2 lg:-my-px sm:ml-2 lg:ml-4 lg:flex">
                <NavLink :href="route('dashboard')" :active="route().current('dashboard')" class="hidden xl:flex">
                  {{ t('Dashboard') }}
                </NavLink>

                <template v-if="$can(['read-items', 'create-items', 'import-items', 'labels-items'])">
                  <Dropdown align="center" width="48">
                    <template #trigger>
                      <span class="inline-flex rounded-md">
                        <!-- route().has('items') -->
                        <button
                          type="button"
                          class="inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100"
                          :class="
                            route().current('items.*')
                              ? 'border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400'
                              : 'border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500'
                          "
                        >
                          {{ t('Items') }}
                          <icons name="chevron-down" class="ml-2 -mr-0.5 h-4 w-4 text-gray-500" />
                        </button>
                      </span>
                    </template>

                    <template #content>
                      <!-- <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">Manage Items</div> -->
                      <DropdownLink v-if="$can('read-items')" :href="route('items.index')"> {{ t('List Items') }} </DropdownLink>
                      <DropdownLink v-if="$can('create-items')" :href="route('items.create')"> {{ t('Add New Item') }} </DropdownLink>
                      <template v-if="$can(['items.import'])">
                        <!-- <template v-if="$can(['items.import', 'items.labels'])"> -->
                        <div class="border-t border-gray-100 dark:border-gray-700" />
                        <DropdownLink v-if="$can('import-items')" :href="route('items.import')"> {{ t('Import Items') }} </DropdownLink>
                        <!-- <DropdownLink v-if="$can('labels-items')" :href="route('items.labels')"> {{ t('Print Barcodes') }} </DropdownLink> -->
                      </template>
                    </template>
                  </Dropdown>
                </template>

                <template
                  v-if="
                    $can(['read-checkins', 'create-checkins', 'import-checkins', 'read-checkouts', 'create-checkouts', 'import-checkouts'])
                  "
                >
                  <Dropdown align="center" width="48">
                    <template #trigger>
                      <span class="inline-flex rounded-md">
                        <button
                          type="button"
                          class="inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100"
                          :class="
                            route().current('checkins.*') || route().current('checkouts.*')
                              ? 'border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400'
                              : 'border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500'
                          "
                        >
                          {{ t('Stock') }}
                          <icons name="chevron-down" class="ml-2 -mr-0.5 h-4 w-4 text-gray-500" />
                        </button>
                      </span>
                    </template>

                    <template #content>
                      <template v-if="$can(['read-checkins', 'create-checkins'])">
                        <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Checkins') }}</div>
                        <DropdownLink v-if="$can('read-checkins')" :href="route('checkins.index')"> {{ t('List Checkins') }} </DropdownLink>
                        <DropdownLink v-if="$can('create-checkins')" :href="route('checkins.create')">
                          {{ t('Add New Checkin') }}
                        </DropdownLink>
                      </template>

                      <template v-if="$can(['read-checkouts', 'create-checkouts'])">
                        <div class="border-t border-gray-100 dark:border-gray-700" />
                        <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Checkouts') }}</div>
                        <DropdownLink v-if="$can('read-checkouts')" :href="route('checkouts.index')">
                          {{ t('List Checkouts') }}
                        </DropdownLink>
                        <DropdownLink v-if="$can('create-checkouts')" :href="route('checkouts.create')">
                          {{ t('Add New Checkout') }}
                        </DropdownLink>
                      </template>
                    </template>
                  </Dropdown>
                </template>

                <!-- <template v-if="$can(['read-checkouts', 'create-checkouts', 'import-checkouts'])">
                  <Dropdown align="center" width="48">
                    <template #trigger>
                      <span class="inline-flex rounded-md">
                        <button
                          type="button"
                          class="inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100"
                          :class="
                            route().current('checkouts.*')
                              ? 'border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400'
                              : 'border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500'
                          "
                        >
                          {{ t('Checkouts') }}
                          <icons name="chevron-down" class="ml-2 -mr-0.5 h-4 w-4 text-gray-500" />
                        </button>
                      </span>
                    </template>

                    <template #content>
                      <DropdownLink v-if="$can('read-checkouts')" :href="route('checkouts.index')">
                        {{ t('List Checkouts') }}
                      </DropdownLink>
                      <DropdownLink v-if="$can('create-checkouts')" :href="route('checkouts.create')">
                        {{ t('Add New Checkout') }}
                      </DropdownLink>
                    </template>
                  </Dropdown>
                </template> -->

                <template
                  v-if="
                    $can([
                      'read-customers',
                      'create-customers',
                      'import-customers',
                      'read-suppliers',
                      'create-suppliers',
                      'import-suppliers',
                      'read-users',
                      'create-users',
                    ])
                  "
                >
                  <Dropdown align="center" width="48">
                    <template #trigger>
                      <span class="inline-flex rounded-md">
                        <button
                          type="button"
                          class="inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100"
                          :class="
                            route().current('customers.*') || route().current('suppliers.*') || route().current('users.*')
                              ? 'border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400'
                              : 'border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500'
                          "
                        >
                          {{ t('People') }}
                          <icons name="chevron-down" class="ml-2 -mr-0.5 h-4 w-4 text-gray-500" />
                        </button>
                      </span>
                    </template>

                    <template #content>
                      <template v-if="$can(['read-customers', 'create-customers', 'import-customers'])">
                        <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Customers') }}</div>
                        <DropdownLink v-if="$can('read-customers')" :href="route('customers.index')">{{
                          t('List Customers')
                        }}</DropdownLink>
                        <DropdownLink v-if="$can('create-customers')" :href="route('customers.create')">{{
                          t('Add New Customer')
                        }}</DropdownLink>
                        <DropdownLink v-if="$can('import-customers')" :href="route('customers.import')">
                          {{ t('Import Customer') }}</DropdownLink
                        >
                      </template>
                      <template v-if="$can(['read-suppliers', 'create-suppliers', 'import-suppliers'])">
                        <div class="border-t border-gray-100 dark:border-gray-700" />
                        <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Suppliers') }}</div>
                        <DropdownLink v-if="$can('read-suppliers')" :href="route('suppliers.index')">{{
                          t('List Suppliers')
                        }}</DropdownLink>
                        <DropdownLink v-if="$can('create-suppliers')" :href="route('suppliers.create')">{{
                          t('Add New Supplier')
                        }}</DropdownLink>
                        <DropdownLink v-if="$can('import-suppliers')" :href="route('suppliers.import')">{{
                          t('Import Supplier')
                        }}</DropdownLink>
                      </template>
                      <template v-if="$can(['read-users', 'create-users'])">
                        <div class="border-t border-gray-100 dark:border-gray-700" />
                        <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Users') }}</div>
                        <DropdownLink v-if="$can('read-users')" :href="route('users.index')">{{ t('List Users') }}</DropdownLink>
                        <DropdownLink v-if="$can('create-users')" :href="route('users.create')">{{ t('Add New User') }}</DropdownLink>
                      </template>
                    </template>
                  </Dropdown>
                </template>

                <template
                  v-if="
                    $can(['read-activity', 'read-settings', 'create-settings', 'read-categories', 'create-categories', 'import-categories'])
                  "
                >
                  <Dropdown align="center" width="48">
                    <template #trigger>
                      <span class="inline-flex rounded-md">
                        <button
                          type="button"
                          class="inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100"
                          :class="
                            route().current('settings') || route().current('categories.*') || route().current('roles.*')
                              ? 'border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400'
                              : 'border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500'
                          "
                        >
                          {{ t('Settings') }}
                          <icons name="chevron-down" class="ml-2 -mr-0.5 h-4 w-4 text-gray-500" />
                        </button>
                      </span>
                    </template>

                    <template #content>
                      <template v-if="$can('read-activity')">
                        <DropdownLink :href="route('activity')"> {{ t('Activity Log') }} </DropdownLink>
                      </template>
                      <template v-if="$can(['read-settings', 'create-settings'])">
                        <DropdownLink :href="route('settings')"> {{ t('System Settings') }} </DropdownLink>
                      </template>
                      <template v-if="$can(['read-categories', 'create-categories', 'import-categories'])">
                        <div class="border-t border-gray-100 dark:border-gray-700" />
                        <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Categories') }}</div>
                        <DropdownLink v-if="$can('read-categories')" :href="route('categories.index')">
                          {{ t('List Categories') }}
                        </DropdownLink>
                        <DropdownLink v-if="$can('create-categories')" :href="route('categories.create')">
                          {{ t('Add New Category') }}
                        </DropdownLink>
                        <DropdownLink v-if="$can('import-categories')" :href="route('categories.import')">
                          {{ t('Import Category') }}
                        </DropdownLink>
                      </template>
                      <template v-if="$can(['read-roles', 'create-roles'])">
                        <div class="border-t border-gray-100 dark:border-gray-700" />
                        <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage User Roles') }}</div>
                        <DropdownLink v-if="$can('read-roles')" :href="route('roles.index')">
                          {{ t('List User Roles') }}
                        </DropdownLink>
                        <DropdownLink v-if="$can('create-roles')" :href="route('roles.create')">
                          {{ t('Add New User Role') }}
                        </DropdownLink>
                      </template>
                      <!-- <div class="border-t border-gray-100 dark:border-gray-700" />
                    <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Database Backup') }}</div>
                    <DropdownLink :href="route('profile.show')"> {{ t('Backup Database') }} </DropdownLink> -->
                    </template>
                  </Dropdown>
                </template>
              </div>
            </div>

            <div class="hidden lg:flex lg:items-center lg:ml-6">
              <div class="ml-3 relative">
                <!-- Teams Dropdown -->
                <Dropdown v-if="$page.props.jetstream.hasTeamFeatures" align="right" width="60">
                  <template #trigger>
                    <span class="inline-flex rounded-md">
                      <button
                        type="button"
                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"
                      >
                        {{ user?.current_team.name }}

                        <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </template>

                  <template #content>
                    <div class="w-60">
                      <!-- Team Management -->
                      <template v-if="$page.props.jetstream.hasTeamFeatures">
                        <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Team') }}</div>

                        <!-- Team Settings -->
                        <DropdownLink :href="route('teams.show', user?.current_team)">
                          {{ t('Team Settings') }}
                        </DropdownLink>

                        <DropdownLink v-if="$page.props.jetstream.canCreateTeams" :href="route('teams.create')">
                          Create New Team
                        </DropdownLink>

                        <div class="border-t border-gray-100 dark:border-gray-700" />

                        <!-- Team Switcher -->
                        <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Switch Teams') }}</div>

                        <template v-for="team in user?.all_teams" :key="team.id">
                          <form @submit.prevent="switchToTeam(team)">
                            <DropdownLink as="button">
                              <div class="flex items-center">
                                <svg
                                  v-if="team.id == user?.current_team_id"
                                  class="mr-2 h-5 w-5 text-green-400"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                  {{ team.name }}
                                </div>
                              </div>
                            </DropdownLink>
                          </form>
                        </template>
                      </template>
                    </div>
                  </template>
                </Dropdown>
              </div>

              <div class="relative mx-2">
                <Dropdown align="center" width="40">
                  <template #trigger>
                    <button
                      class="flex h-12 items-center p-0.5 m-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none focus:ring-0 focus:border-transparent"
                    >
                      <span
                        class="mt-0.5 w-6 h-6"
                        v-html="getFlag().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))"
                      >
                      </span>
                    </button>
                  </template>

                  <template #content>
                    <template v-for="lang in LANGUAGES" :key="lang.value">
                      <DropdownLink as="button" @click="changeLang(lang.value)">
                        <span class="mr-2" v-html="lang.flag.replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))">
                        </span>
                        {{ lang.label }}
                      </DropdownLink>
                    </template>
                  </template>
                </Dropdown>
              </div>
              <button
                type="button"
                @click="toggleMode()"
                class="bg-gray-200 dark:bg-gray-700 relative inline-flex h-6 w-11 mr-3 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:border-transparent focus:rounded-full focus:ring-0"
              >
                <span class="sr-only">Theme toggle</span>
                <span
                  class="translate-x-0 dark:translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white dark:bg-black shadow ring-0 transition duration-200 ease-in-out"
                >
                  <span
                    :class="theme == 'dark' ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'"
                    class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-3 w-3 text-yellow-500 dark:text-yellow-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  </span>

                  <span
                    :class="theme == 'dark' ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'"
                    class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-3 w-3 text-blue-500 dark:text-blue-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  </span>
                </span>
              </button>
              <Link
                href="/items?alerts=yes"
                v-if="$page.props.alerts"
                class="relative bg-gray-200 dark:bg-gray-700 p-1 mx-1 rounded-full text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <span class="sr-only">{{ t('View notifications') }}</span>
                <icons name="bell" />
                <div
                  class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[10px] bg-red-500 text-white flex items-center justify-center"
                >
                  {{ $page.props.alerts }}
                </div>
              </Link>
              <!-- Settings Dropdown -->
              <div class="ml-3 relative">
                <Dropdown align="right" width="48">
                  <template #trigger>
                    <div
                      class="flex items-center border-0 border-gray-300 dark:border-gray-700 mt-px -mb-px focus-within:border-blue-400 focus-within:ring-0"
                    >
                      <button
                        type="button"
                        class="inline-flex items-center px-3 py-2.5 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-0 transition"
                      >
                        <img class="h-8 w-8 rounded-full object-cover mr-2" :src="user?.profile_photo_url" :alt="user?.name" />
                        {{ user?.name }}

                        <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </template>

                  <template #content>
                    <!-- Account Management -->
                    <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Account') }}</div>

                    <DropdownLink :href="route('profile.show')"> {{ t('Profile') }} </DropdownLink>

                    <DropdownLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')">
                      {{ t('API Tokens') }}
                    </DropdownLink>

                    <div class="border-t border-gray-100 dark:border-gray-700" />

                    <!-- Authentication -->
                    <form @submit.prevent="logout">
                      <DropdownLink as="button"> {{ t('Log Out') }} </DropdownLink>
                    </form>
                  </template>
                </Dropdown>
              </div>
            </div>

            <div class="flex items-center gap-2 lg:hidden bg-white dark:bg-gray-900">
              <div class="relative mx-2">
                <Dropdown align="center" width="40">
                  <template #trigger>
                    <button
                      class="flex h-12 items-center p-0.5 m-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none focus:ring-0 focus:border-transparent"
                    >
                      <span
                        class="mt-0.5 w-6 h-6"
                        v-html="getFlag().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))"
                      >
                      </span>
                    </button>
                  </template>

                  <template #content>
                    <template v-for="lang in LANGUAGES" :key="lang.value">
                      <DropdownLink as="button" @click="changeLang(lang.value)">
                        <span class="mr-2" v-html="lang.flag.replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397))">
                        </span>
                        {{ lang.label }}
                      </DropdownLink>
                    </template>
                  </template>
                </Dropdown>
              </div>
              <button
                type="button"
                @click="toggleMode()"
                class="bg-gray-200 dark:bg-gray-700 relative inline-flex h-6 w-11 mr-3 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:border-transparent focus:rounded-full focus:ring-0"
              >
                <span class="sr-only">Theme toggle</span>
                <span
                  :class="theme == 'dark' ? 'translate-x-5' : 'translate-x-0'"
                  class="pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white dark:bg-black shadow ring-0 transition duration-200 ease-in-out"
                >
                  <span
                    :class="theme == 'dark' ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200'"
                    class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-3 w-3 text-gray-700 dark:text-gray-100"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  </span>

                  <span
                    :class="theme == 'dark' ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'"
                    class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-3 w-3 text-blue-600 dark:text-blue-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  </span>
                </span>
              </button>
              <!-- @click="alerts = true" -->
              <Link
                href="/items?alerts=yes"
                v-if="$page.props.alerts"
                class="relative bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
              >
                <span class="sr-only">{{ t('View notifications') }}</span>
                <icons name="bell" />
                <div
                  class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[10px] bg-red-500 text-white flex items-center justify-center"
                >
                  {{ $page.props.alerts }}
                </div>
              </Link>
              <!-- Hamburger -->
              <div class="-mr-2 flex items-center lg:hidden">
                <button
                  class="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-500 dark:focus:text-gray-400 transition"
                  @click="showingNavigationDropdown = !showingNavigationDropdown"
                >
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path
                      :class="{
                        hidden: showingNavigationDropdown,
                        'inline-flex': !showingNavigationDropdown,
                      }"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                    <path
                      :class="{
                        hidden: !showingNavigationDropdown,
                        'inline-flex': showingNavigationDropdown,
                      }"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Responsive Navigation Menu -->
        <div
          :class="{
            block: showingNavigationDropdown,
            hidden: !showingNavigationDropdown,
          }"
          class="lg:hidden"
        >
          <div class="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
              {{ t('Dashboard') }}
            </ResponsiveNavLink>

            <template v-if="$can(['read-items', 'create-items', 'import-items', 'labels-items'])">
              <div class="border-t border-gray-100 dark:border-gray-700" />
              <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Items') }}</div>
              <ResponsiveNavLink v-if="$can('read-items')" :href="route('items.index')" :active="route().current('items.index')">
                {{ t('List Items') }}
              </ResponsiveNavLink>
              <ResponsiveNavLink v-if="$can('create-items')" :href="route('items.create')" :active="route().current('items.create')">
                {{ t('Add New Item') }}
              </ResponsiveNavLink>
              <ResponsiveNavLink v-if="$can('import-items')" :href="route('items.import')" :active="route().current('items.import')">
                {{ t('Import Items') }}
              </ResponsiveNavLink>
              <!-- <ResponsiveNavLink :href="route('items.labels')" :active="route().current('items.labels')">
              {{ t('Print Barcodes') }}
            </ResponsiveNavLink> -->
            </template>

            <template v-if="$can(['read-checkins', 'create-checkins', 'import-checkins'])">
              <div class="border-t border-gray-100 dark:border-gray-700" />
              <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Checkins') }}</div>
              <ResponsiveNavLink v-if="$can('read-checkins')" :href="route('checkins.index')" :active="route().current('checkins.index')">
                {{ t('List Checkins') }}
              </ResponsiveNavLink>
              <ResponsiveNavLink
                v-if="$can('create-checkins')"
                :href="route('checkins.create')"
                :active="route().current('checkins.create')"
              >
                {{ t('Add New Checkin') }}
              </ResponsiveNavLink>
              <!-- <ResponsiveNavLink
                v-if="$can('import-checkins')"
                :href="route('checkins.import')"
                :active="route().current('checkins.import')"
              >
                {{ t('Add Checkins by File') }}
              </ResponsiveNavLink> -->
            </template>

            <template v-if="$can(['read-checkouts', 'create-checkouts', 'import-checkouts'])">
              <div class="border-t border-gray-100 dark:border-gray-700" />
              <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Checkouts') }}</div>
              <ResponsiveNavLink
                v-if="$can('read-checkouts')"
                :href="route('checkouts.index')"
                :active="route().current('checkouts.index')"
              >
                {{ t('List Checkouts') }}
              </ResponsiveNavLink>
              <ResponsiveNavLink
                v-if="$can('create-checkouts')"
                :href="route('checkouts.create')"
                :active="route().current('checkouts.create')"
              >
                {{ t('Add New Checkout') }}
              </ResponsiveNavLink>
              <!-- <ResponsiveNavLink
                v-if="$can('import-checkouts')"
                :href="route('checkouts.import')"
                :active="route().current('checkouts.import')"
              >
                {{ t('Add Checkouts by File') }}
              </ResponsiveNavLink> -->
            </template>

            <template v-if="$can(['read-customers', 'create-customers', 'import-customers'])">
              <div class="border-t border-gray-100 dark:border-gray-700" />
              <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Customers') }}</div>
              <ResponsiveNavLink
                v-if="$can('read-customers')"
                :href="route('customers.index')"
                :active="route().current('customers.index')"
              >
                {{ t('List Customers') }}
              </ResponsiveNavLink>
              <ResponsiveNavLink
                v-if="$can('create-customers')"
                :href="route('customers.create')"
                :active="route().current('customers.create')"
              >
                {{ t('Add New Customer') }}
              </ResponsiveNavLink>
              <ResponsiveNavLink
                v-if="$can('import-customers')"
                :href="route('customers.import')"
                :active="route().current('customers.import')"
              >
                {{ t('Import Customers') }}
              </ResponsiveNavLink>
            </template>

            <template v-if="$can(['read-suppliers', 'create-suppliers', 'import-suppliers'])">
              <div class="border-t border-gray-100 dark:border-gray-700" />
              <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Suppliers') }}</div>
              <ResponsiveNavLink
                v-if="$can('read-suppliers')"
                :href="route('suppliers.index')"
                :active="route().current('suppliers.index')"
              >
                {{ t('List Suppliers') }}
              </ResponsiveNavLink>
              <ResponsiveNavLink
                v-if="$can('create-suppliers')"
                :href="route('suppliers.create')"
                :active="route().current('suppliers.create')"
              >
                {{ t('Add New Supplier') }}
              </ResponsiveNavLink>
              <ResponsiveNavLink
                v-if="$can('import-suppliers')"
                :href="route('suppliers.import')"
                :active="route().current('suppliers.import')"
              >
                {{ t('Import Suppliers') }}
              </ResponsiveNavLink>
            </template>

            <template v-if="$can(['read-categories', 'create-categories', 'import-categories'])">
              <div class="border-t border-gray-100 dark:border-gray-700" />
              <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Categories') }}</div>
              <ResponsiveNavLink
                v-if="$can('read-categories')"
                :href="route('categories.index')"
                :active="route().current('categories.index')"
              >
                {{ t('List Categories') }}
              </ResponsiveNavLink>
              <ResponsiveNavLink
                v-if="$can('create-categories')"
                :href="route('categories.create')"
                :active="route().current('categories.create')"
              >
                {{ t('Add New Category') }}
              </ResponsiveNavLink>
              <ResponsiveNavLink
                v-if="$can('import-categories')"
                :href="route('categories.import')"
                :active="route().current('categories.import')"
              >
                {{ t('Import Categories') }}
              </ResponsiveNavLink>
            </template>

            <template v-if="$can(['read-users', 'create-users'])">
              <div class="border-t border-gray-100 dark:border-gray-700" />
              <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Manage Users') }}</div>
              <ResponsiveNavLink v-if="$can('read-users')" :href="route('users.index')" :active="route().current('users.index')">
                {{ t('List Users') }}
              </ResponsiveNavLink>
              <ResponsiveNavLink v-if="$can('create-users')" :href="route('users.create')" :active="route().current('users.create')">
                {{ t('Add New User') }}
              </ResponsiveNavLink>
            </template>

            <template v-if="$can(['read-activity', 'read-settings', 'create-settings'])">
              <div class="border-t border-gray-100 dark:border-gray-700" />
              <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">{{ t('Settings') }}</div>
              <ResponsiveNavLink :href="route('settings')" :active="route().current('settings')">
                {{ t('System Settings') }}
              </ResponsiveNavLink>
              <ResponsiveNavLink :href="route('activity')" :active="route().current('activity')">
                {{ t('Activity Log') }}
              </ResponsiveNavLink>
              <!-- <ResponsiveNavLink :href="route('dashboard')" :active="route().current('users')">
              {{ t('Backup Database') }}
            </ResponsiveNavLink> -->
            </template>
          </div>

          <!-- Responsive Settings Options -->
          <div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-700">
            <div class="flex items-center px-4">
              <div v-if="$page.props.jetstream.managesProfilePhotos" class="shrink-0 mr-3">
                <img class="h-10 w-10 rounded-full object-cover" :src="user?.profile_photo_url" :alt="user?.name" />
              </div>

              <div>
                <div class="font-medium text-base text-gray-800 dark:text-gray-200">
                  {{ user?.name }}
                </div>
                <div class="font-medium text-sm text-gray-500 dark:text-gray-400">
                  {{ user?.email }}
                </div>
              </div>
            </div>

            <div class="mt-3 space-y-1">
              <ResponsiveNavLink :href="route('profile.show')" :active="route().current('profile.show')"> Profile </ResponsiveNavLink>

              <ResponsiveNavLink
                v-if="$page.props.jetstream.hasApiFeatures"
                :href="route('api-tokens.index')"
                :active="route().current('api-tokens.index')"
              >
                API Tokens
              </ResponsiveNavLink>

              <!-- Authentication -->
              <form method="POST" @submit.prevent="logout">
                <ResponsiveNavLink as="button"> Log Out </ResponsiveNavLink>
              </form>

              <!-- Team Management -->
              <template v-if="$page.props.jetstream.hasTeamFeatures">
                <div class="border-t border-gray-200" />

                <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">Manage Team</div>

                <!-- Team Settings -->
                <ResponsiveNavLink :href="route('teams.show', user?.current_team)" :active="route().current('teams.show')">
                  Team Settings
                </ResponsiveNavLink>

                <ResponsiveNavLink
                  v-if="$page.props.jetstream.canCreateTeams"
                  :href="route('teams.create')"
                  :active="route().current('teams.create')"
                >
                  Create New Team
                </ResponsiveNavLink>

                <div class="border-t border-gray-200" />

                <!-- Team Switcher -->
                <div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">Switch Teams</div>

                <template v-for="team in user?.all_teams" :key="team.id">
                  <form @submit.prevent="switchToTeam(team)">
                    <ResponsiveNavLink as="button">
                      <div class="flex items-center">
                        <svg
                          v-if="team.id == user?.current_team_id"
                          class="mr-2 h-5 w-5 text-green-400"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>{{ team.name }}</div>
                      </div>
                    </ResponsiveNavLink>
                  </form>
                </template>
              </template>
            </div>
          </div>
        </div>
      </nav>

      <!-- Page Heading -->
      <!-- <header v-if="$slots.header" class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8">
          <slot name="header" />
        </div>
      </header> -->

      <!-- Page Content -->
      <main>
        <slot />
      </main>
      <AlertsModal :show="alerts" @close="alerts = false" />
      <flash-messages class="print:hidden"></flash-messages>
    </div>
  </div>
</template>
