import { v4 } from "uuid";
import { _ as _sfc_main$1 } from "./Checkbox-CqXn6Y6l.js";
import { _ as _sfc_main$2 } from "./InputError-DN7DJAFH.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../ssr.js";
const _sfc_main = {
  emits: ["update:checked"],
  components: { TecCheckbox: _sfc_main$1, TecInputError: _sfc_main$2 },
  props: {
    id: {
      type: String,
      default() {
        return v4();
      }
    },
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      default: null
    },
    label: String,
    error: String
  },
  computed: {
    proxyChecked: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit("update:checked", val);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><label${ssrRenderAttr("for", $props.id)} class="flex items-start"><input${ssrRenderAttr("id", $props.id)}${ssrRenderAttr("value", $props.value)} type="checkbox"${ssrIncludeBooleanAttr(Array.isArray($options.proxyChecked) ? ssrLooseContain($options.proxyChecked, $props.value) : $options.proxyChecked) ? " checked" : ""} class="${ssrRenderClass([{ "border-red-500": $props.error }, "mt-1 rounded border-gray-300 dark:border-gray-700 dark:bg-gray-700 text-blue-600 shadow-sm"])}">`);
  if ($props.label) {
    _push(`<span class="ml-2 text-gray-600 dark:text-gray-400">${$props.label ?? ""}</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</label></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/CheckBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CheckBox as C
};
