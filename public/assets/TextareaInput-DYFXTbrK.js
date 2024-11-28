import { ref, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, onMounted, mergeProps } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from "vue/server-renderer";
import axios from "axios";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$2 } from "./FileInput-FmWcaIk9.js";
import { L as LoadingButton } from "./LoadingButton-BUTNmM5n.js";
import { v4 } from "uuid";
import { _ as _sfc_main$3 } from "./Label-DhVQiNLB.js";
import "./Input-Cp6lSzEq.js";
import { _ as _sfc_main$4 } from "./InputError-DN7DJAFH.js";
const _sfc_main$1 = {
  __name: "ImportExcel",
  __ssrInlineRender: true,
  emits: ["done"],
  setup(__props, { emit: __emit }) {
    const excel = ref(null);
    const error = ref(null);
    const { t } = useI18n({});
    const loading = ref(false);
    const emits = __emit;
    function submit() {
      loading.value = true;
      let form = new FormData();
      form.append("excel", excel.value);
      axios.post(route("read.excel"), form).then((res) => {
        emits("done", res.data);
      }).catch((err) => {
        error.value = err.response.data.message;
      }).finally(() => loading.value = false);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="py-6">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: excel.value,
        "onUpdate:modelValue": ($event) => excel.value = $event,
        accept: ".xlsx",
        id: "file",
        error: error.value,
        label: unref(t)("Excel File")
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-end">`);
      _push(ssrRenderComponent(LoadingButton, {
        type: "button",
        onClick: submit,
        loading: loading.value,
        class: "inline-flex items-center px-4 py-3 bg-blue-600 border-0 rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 active:bg-blue-700 disabled:opacity-25 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Import"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Import")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/ImportExcel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "TextareaInput",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      default() {
        return v4();
      }
    },
    type: {
      type: String,
      default: "text"
    },
    modelValue: String,
    label: String,
    error: String
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const input = ref(null);
    onMounted(() => {
      resize();
    });
    const resize = () => {
      input.value.style.height = "58px";
      input.value.style.height = input.value.scrollHeight + 2 + "px";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-6 sm:col-span-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        for: __props.id,
        value: __props.label
      }, null, _parent));
      _push(`<textarea${ssrRenderAttr("id", __props.id)}${ssrRenderAttr("type", __props.type)} class="${ssrRenderClass([__props.error ? "border-red-500" : "border-gray-300", "mt-1 block w-full rounded-md shadow-sm border dark:border-gray-700 focus:border-blue-300 focus:ring-2 focus:ring-blue-100 sm:text-sm dark:bg-gray-800 dark:focus:border-gray-600 dark:focus:ring-opacity-50"])}">${ssrInterpolate(__props.modelValue)}</textarea>`);
      if (__props.error) {
        _push(ssrRenderComponent(_sfc_main$4, {
          message: __props.error,
          class: "mt-1"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TextareaInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
