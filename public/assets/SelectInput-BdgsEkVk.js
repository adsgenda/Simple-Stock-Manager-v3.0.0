import { v4 } from "uuid";
import { _ as _sfc_main$1 } from "./Label-DhVQiNLB.js";
import { _ as _sfc_main$2 } from "./InputError-DN7DJAFH.js";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.js";
const _sfc_main = {
  emits: ["update:modelValue"],
  components: { TecLabel: _sfc_main$1, TecInputError: _sfc_main$2 },
  props: {
    id: {
      type: String,
      default() {
        return v4();
      }
    },
    modelValue: [String, Number, Boolean],
    label: String,
    error: String,
    actionText: String,
    action: Function
  },
  data() {
    return {
      selected: this.modelValue
    };
  },
  watch: {
    selected(selected) {
      this.$emit("update:modelValue", selected);
    },
    modelValue(v) {
      this.selected = this.modelValue;
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_tec_label = resolveComponent("tec-label");
  const _component_tec_input_error = resolveComponent("tec-input-error");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.actionText && $props.action) {
    _push(`<button class="float-right text-blue-500 hover:text-blue-700" type="button">${ssrInterpolate($props.actionText)}</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_tec_label, {
    for: $props.id,
    value: $props.label
  }, null, _parent));
  _push(`<select${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input"
  }, _ctx.$attrs, {
    class: [{ "border-red-500": $props.error }, "w-full mt-1 border-gray-300 dark:border-gray-700 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800"]
  }))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</select>`);
  if ($props.error) {
    _push(ssrRenderComponent(_component_tec_input_error, {
      message: $props.error,
      class: "mt-2"
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SelectInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SelectInput as S
};
