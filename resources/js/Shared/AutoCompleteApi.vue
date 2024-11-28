<script setup>
import axios from 'axios';
import { useI18n } from 'vue-i18n';
import { v4 as uuidv4 } from 'uuid';
import throttle from 'lodash/throttle';
import Label from '@/Jetstream/Label.vue';
import InputError from '@/Jetstream/InputError.vue';
import { ref, computed, watch, onMounted, nextTick } from 'vue';
import useClickOutside from '@/Core/useClickOutside.js';

const { t } = useI18n({});
const excludeRef = ref(null);
const componentRef = ref(null);
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  id: {
    type: String,
    default() {
      return uuidv4();
    },
  },
  json: Boolean,
  label: String,
  error: String,
  position: String,
  selected: String,
  defaultText: String,
  placeholder: String,
  disable: [String, Number],
  modelValue: [String, Number],
  suggestions: [String, Array],
  valueKey: { type: String, default: 'value' },
  labelKey: { type: String, default: 'label' },
  clearable: { type: Boolean, default: false },
  searchable: { type: Boolean, default: true },
  keepFocus: { type: Boolean, default: false },
  resetSearch: { type: Boolean, default: false },
});

const search = ref('');
const result = ref([]);
const input = ref(null);
const open = ref(false);
const search0 = ref('');
const current = ref(null);
const loading = ref(false);
const selected = ref(null);

useClickOutside(componentRef, () => (open.value = false), excludeRef);

watch(
  () => props.modelValue,
  async v => {
    if (!v) {
      search.value = '';
      await hide();
    }
  }
);

watch(search, s => {
  if (props.searchable) {
    open.value = true;
    if (Array.isArray(props.suggestions)) {
      result.value = s ? props.suggestions.filter(r => cLabel(r, s)) : props.suggestions;
    } else if (s) {
      loading.value = true;
      getSuggestions(s);
    }
  }
});

const currentLabel = computed(() => cLabel(selected.value));
const currentValue = computed(() => cValue(selected.value));

onMounted(async () => {
  if (Array.isArray(props.suggestions)) {
    result.value = props.suggestions;
  }
  if (props.modelValue) {
    if (Array.isArray(props.suggestions)) {
      selected.value = props.suggestions.find(
        s => s == props.modelValue || s[props.valueKey] == props.modelValue || s.value == props.modelValue || s.id == props.modelValue
      );
      current.value = props.suggestions.findIndex(
        s => s == props.modelValue || s[props.valueKey] == props.modelValue || s.value == props.modelValue || s.id == props.modelValue
      );
      search.value = currentLabel.value;
      //   search.value = props.searchable ? currentLabel.value : '';
      await nextTick();
      await hide();
    } else {
      axios
        .post(props.suggestions, { id: props.modelValue })
        .then(res => {
          current.value = 0;
          result.value = res.data;
          selected.value = res.data[0];
          search.value = cLabel(selected.value);
        })
        .finally(async () => {
          await hide();
          loading.value = false;
        });
    }
  }
});

const getSuggestions = throttle(s => {
  let nr = result.value;
  let nr0 = nr?.length ? nr[0] : {};
  if (s && s != search0.value && props.modelValue?.value != search.value) {
    //   if (s && ((s && !nr) || (nr && (!nr.length || props.modelValue?.value != nr0?.value)))) {
    search0.value = s;
    axios
      .post(props.suggestions, { search: s })
      .then(res => {
        result.value = res.data;
        if (result.value.length == 1) {
          suggestionClick(null, 0);
          //   suggestionClick(0, true);
        }
      })
      .finally(() => (loading.value = false));
  } else {
    loading.value = false;
  }
}, 300);

const cLabel = (r, s) => {
  if (r === null) {
    return null;
  } else if (typeof r !== 'object') {
    return r;
  }
  let key = '';
  if (props.labelKey) {
    key = props.labelKey;
  } else if (r.label !== undefined) {
    key = 'label';
  } else if (r.name !== undefined) {
    key = 'name';
  }
  if (s) {
    return key ? r[key].toLowerCase().includes(s.toString().toLowerCase()) : r.toLowerCase().includes(s.toLowerCase());
  }
  return key ? r[key] : r;
};
const cValue = r => {
  if (r === null) {
    return null;
  } else if (typeof r !== 'object') {
    return r;
  }
  let key = '';
  if (props.valueKey) {
    key = props.valueKey;
  } else if (r.value !== undefined) {
    key = 'value';
  } else if (r.id !== undefined) {
    key = 'id';
  }
  return key ? r[key] : r;
};

const show = () => {
  open.value = true;
  search.value = '';
  input.value.select();
  if (!selected.value) {
    current.value = 0;
  }
};
const hide = async () => {
  if (selected.value) {
    search.value = currentLabel.value;
  }
  await nextTick();
  open.value = false;
  //   setTimeout(() => (open.value = false), 250);
};

const enter = async () => {
  suggestionClick(null, current.value);
  await hide();
  return false;
};

const up = () => {
  if (current.value > 0) current.value--;
};

const down = () => {
  if (current.value < result.value.length - 1) current.value++;
};

const isActive = index => {
  return index == current.value;
};

const suggestionClick = async (item, index, reset = false) => {
  if (item) {
    selected.value = item;
    current.value = index;
    // current.value = result.value.findIndex(i => {
    //   if (i.value) {
    //     return i.value == item.value;
    //   }
    //   return i == item;
    // });
    emit('update:modelValue', props.json ? selected.value : currentValue.value);
    search.value = props.resetSearch ? '' : currentLabel.value;
  } else if (index !== undefined) {
    current.value = index;
    selected.value = result.value[index];
    emit('update:modelValue', props.json ? selected.value : currentValue.value);
    search.value = props.resetSearch ? '' : currentLabel.value;
  } else {
    current.value = null;
    selected.value = null;
  }
  if (reset) {
    result.value = [];
  }
  if (props.resetSearch) {
    selected.value = null;
  }
  if (props.keepFocus) {
    input.value.focus();
  }
  hide();
};

const reset = async () => {
  search.value = '';
  emit('update:modelValue', '');
  await hide();
};
</script>

<template>
  <div class="col-span-6 sm:col-span-4">
    <Label :for="id" :value="label" v-if="label" />
    <div ref="excludeRef" class="relative mt-1 mb-2 flex items-center">
      <label :for="id" class="cursor-pointer absolute top-0 right-0 border border-transparent p-3 text-gray-500 dark:text-gray-400">
        <icons name="chevron-down" class-name="w-5 h-6" />
      </label>
      <button
        type="button"
        @click="reset()"
        v-if="clearable && modelValue"
        class="cursor-pointer focus:outline-none absolute top-0 right-8 border border-transparent p-2 text-gray-500 hover:text-red-500"
      >
        <icons name="cross" class-name="w-4 h-6" />
      </button>
      <!-- @blur="hide" -->
      <input
        :id="id"
        ref="input"
        @focus="show"
        @click="show"
        @keyup.up="up"
        v-model="search"
        autocomplete="off"
        @keyup.down="down"
        @keyup.enter="enter"
        :readonly="!searchable"
        :placeholder="placeholder || label"
        :class="{ 'border-red-500': error, 'pr-8': !clearable, 'pr-16': clearable }"
        class="w-full block text-base py-2 pl-4 placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800"
      />
      <div v-if="open" ref="componentRef" :class="position" class="absolute mt-2 top-full w-full rounded-md z-20">
        <ul
          class="max-h-56 rounded-md bg-white dark:bg-gray-900 shadow-lg dark:border dark:border-gray-700 text-base overflow-auto focus:outline-none sm:text-sm"
        >
          <template v-if="result && result.length">
            <template :key="ri" v-for="(r, ri) in result">
              <!-- v-if="disable && !disabledOptions.includes(cValue(r))" -->
              <template v-if="!(disable && disable == cValue())">
                <li>
                  <button
                    type="button"
                    @click.stop.prevent="suggestionClick(r, ri)"
                    :class="isActive(ri) ? 'bg-blue-600 text-white' : 'text-gray-900 dark:text-gray-100'"
                    class="w-full text-left flex items-center select-none relative py-2 pl-3 pr-9 hover:bg-blue-600 hover:text-white"
                  >
                    <span class="ml-3 block font-normal truncate">
                      {{ cLabel(r) }}
                    </span>
                  </button>
                </li>
              </template>
            </template>
          </template>
          <li v-else class="bg-blue-600 text-white cursor-default select-none relative py-2 pl-3 pr-9">
            <div class="flex items-center">
              <span class="ml-3 block font-normal truncate">
                <span v-if="loading">{{ t('Searching for results') }}...</span>
                <span v-else-if="result == null">{{ t('Scan barcode or search items for next') }}</span>
                <span v-else-if="json">{{ defaultText || t('Please type to search') }}</span>
                <span v-else>{{ t('No result suggestions to list.') }}</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <InputError v-if="error" :message="error" class="mt-0" />
  </div>
</template>
