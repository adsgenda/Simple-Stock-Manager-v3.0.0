import { onMounted, onBeforeUnmount, ref, watch, computed, nextTick, resolveComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import axios from "axios";
import { useI18n } from "vue-i18n";
import { v4 } from "uuid";
import throttle from "lodash/throttle.js";
import { _ as _sfc_main$1 } from "./Label-DhVQiNLB.js";
import { _ as _sfc_main$2 } from "./InputError-DN7DJAFH.js";
function useClickOutside(component, callback, excludeComponent) {
  if (!component) {
    throw new Error("A target component has to be provided.");
  }
  if (!callback) {
    throw new Error("A callback has to be provided.");
  }
  const listener = (event) => {
    if (event.target === component.value || event.composedPath().includes(component.value) || event.target === excludeComponent.value || event.composedPath().includes(excludeComponent.value)) {
      return;
    }
    if (typeof callback === "function") {
      callback();
    }
  };
  onMounted(() => {
    window.addEventListener("click", listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  });
}
const _sfc_main = {
  __name: "AutoCompleteApi",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default() {
        return v4();
      }
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
    valueKey: { type: String, default: "value" },
    labelKey: { type: String, default: "label" },
    clearable: { type: Boolean, default: false },
    searchable: { type: Boolean, default: true },
    keepFocus: { type: Boolean, default: false },
    resetSearch: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n({});
    const excludeRef = ref(null);
    const componentRef = ref(null);
    const emit = __emit;
    const props = __props;
    const search = ref("");
    const result = ref([]);
    const input = ref(null);
    const open = ref(false);
    const search0 = ref("");
    const current = ref(null);
    const loading = ref(false);
    const selected = ref(null);
    useClickOutside(componentRef, () => open.value = false, excludeRef);
    watch(
      () => props.modelValue,
      async (v) => {
        if (!v) {
          search.value = "";
          await hide();
        }
      }
    );
    watch(search, (s) => {
      if (props.searchable) {
        open.value = true;
        if (Array.isArray(props.suggestions)) {
          result.value = s ? props.suggestions.filter((r) => cLabel(r, s)) : props.suggestions;
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
            (s) => s == props.modelValue || s[props.valueKey] == props.modelValue || s.value == props.modelValue || s.id == props.modelValue
          );
          current.value = props.suggestions.findIndex(
            (s) => s == props.modelValue || s[props.valueKey] == props.modelValue || s.value == props.modelValue || s.id == props.modelValue
          );
          search.value = currentLabel.value;
          await nextTick();
          await hide();
        } else {
          axios.post(props.suggestions, { id: props.modelValue }).then((res) => {
            current.value = 0;
            result.value = res.data;
            selected.value = res.data[0];
            search.value = cLabel(selected.value);
          }).finally(async () => {
            await hide();
            loading.value = false;
          });
        }
      }
    });
    const getSuggestions = throttle((s) => {
      var _a;
      let nr = result.value;
      (nr == null ? void 0 : nr.length) ? nr[0] : {};
      if (s && s != search0.value && ((_a = props.modelValue) == null ? void 0 : _a.value) != search.value) {
        search0.value = s;
        axios.post(props.suggestions, { search: s }).then((res) => {
          result.value = res.data;
          if (result.value.length == 1) {
            suggestionClick(null, 0);
          }
        }).finally(() => loading.value = false);
      } else {
        loading.value = false;
      }
    }, 300);
    const cLabel = (r, s) => {
      if (r === null) {
        return null;
      } else if (typeof r !== "object") {
        return r;
      }
      let key = "";
      if (props.labelKey) {
        key = props.labelKey;
      } else if (r.label !== void 0) {
        key = "label";
      } else if (r.name !== void 0) {
        key = "name";
      }
      if (s) {
        return key ? r[key].toLowerCase().includes(s.toString().toLowerCase()) : r.toLowerCase().includes(s.toLowerCase());
      }
      return key ? r[key] : r;
    };
    const cValue = (r) => {
      if (r === null) {
        return null;
      } else if (typeof r !== "object") {
        return r;
      }
      let key = "";
      if (props.valueKey) {
        key = props.valueKey;
      } else if (r.value !== void 0) {
        key = "value";
      } else if (r.id !== void 0) {
        key = "id";
      }
      return key ? r[key] : r;
    };
    const hide = async () => {
      if (selected.value) {
        search.value = currentLabel.value;
      }
      await nextTick();
      open.value = false;
    };
    const isActive = (index) => {
      return index == current.value;
    };
    const suggestionClick = async (item, index, reset = false) => {
      {
        current.value = index;
        selected.value = result.value[index];
        emit("update:modelValue", props.json ? selected.value : currentValue.value);
        search.value = props.resetSearch ? "" : currentLabel.value;
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icons = resolveComponent("icons");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-6 sm:col-span-4" }, _attrs))}>`);
      if (__props.label) {
        _push(ssrRenderComponent(_sfc_main$1, {
          for: __props.id,
          value: __props.label
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative mt-1 mb-2 flex items-center"><label${ssrRenderAttr("for", __props.id)} class="cursor-pointer absolute top-0 right-0 border border-transparent p-3 text-gray-500 dark:text-gray-400">`);
      _push(ssrRenderComponent(_component_icons, {
        name: "chevron-down",
        "class-name": "w-5 h-6"
      }, null, _parent));
      _push(`</label>`);
      if (__props.clearable && __props.modelValue) {
        _push(`<button type="button" class="cursor-pointer focus:outline-none absolute top-0 right-8 border border-transparent p-2 text-gray-500 hover:text-red-500">`);
        _push(ssrRenderComponent(_component_icons, {
          name: "cross",
          "class-name": "w-4 h-6"
        }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<input${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("value", search.value)} autocomplete="off"${ssrIncludeBooleanAttr(!__props.searchable) ? " readonly" : ""}${ssrRenderAttr("placeholder", __props.placeholder || __props.label)} class="${ssrRenderClass([{ "border-red-500": __props.error, "pr-8": !__props.clearable, "pr-16": __props.clearable }, "w-full block text-base py-2 pl-4 placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800"])}">`);
      if (open.value) {
        _push(`<div class="${ssrRenderClass([__props.position, "absolute mt-2 top-full w-full rounded-md z-20"])}"><ul class="max-h-56 rounded-md bg-white dark:bg-gray-900 shadow-lg dark:border dark:border-gray-700 text-base overflow-auto focus:outline-none sm:text-sm">`);
        if (result.value && result.value.length) {
          _push(`<!--[-->`);
          ssrRenderList(result.value, (r, ri) => {
            _push(`<!--[-->`);
            if (!(__props.disable && __props.disable == cValue())) {
              _push(`<li><button type="button" class="${ssrRenderClass([isActive(ri) ? "bg-blue-600 text-white" : "text-gray-900 dark:text-gray-100", "w-full text-left flex items-center select-none relative py-2 pl-3 pr-9 hover:bg-blue-600 hover:text-white"])}"><span class="ml-3 block font-normal truncate">${ssrInterpolate(cLabel(r))}</span></button></li>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<li class="bg-blue-600 text-white cursor-default select-none relative py-2 pl-3 pr-9"><div class="flex items-center"><span class="ml-3 block font-normal truncate">`);
          if (loading.value) {
            _push(`<span>${ssrInterpolate(unref(t)("Searching for results"))}...</span>`);
          } else if (result.value == null) {
            _push(`<span>${ssrInterpolate(unref(t)("Scan barcode or search items for next"))}</span>`);
          } else if (__props.json) {
            _push(`<span>${ssrInterpolate(__props.defaultText || unref(t)("Please type to search"))}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(unref(t)("No result suggestions to list."))}</span>`);
          }
          _push(`</span></div></li>`);
        }
        _push(`</ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.error) {
        _push(ssrRenderComponent(_sfc_main$2, {
          message: __props.error,
          class: "mt-0"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/AutoCompleteApi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
