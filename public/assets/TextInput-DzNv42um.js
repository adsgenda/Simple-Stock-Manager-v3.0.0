import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { v4 } from "uuid";
import { _ as _sfc_main$1 } from "./Label-DhVQiNLB.js";
import { _ as _sfc_main$2 } from "./Input-Cp6lSzEq.js";
import { _ as _sfc_main$3 } from "./InputError-DN7DJAFH.js";
const _sfc_main = {
  __name: "TextInput",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-span-6 sm:col-span-4" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: __props.id,
        value: __props.label
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        id: __props.id,
        ref_key: "input",
        ref: input,
        type: __props.type,
        value: __props.modelValue,
        class: ["mt-1 block w-full", { "border-red-500": __props.error }],
        onInput: ($event) => _ctx.$emit("update:modelValue", $event.target.value)
      }, null, _parent));
      if (__props.error) {
        _push(ssrRenderComponent(_sfc_main$3, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TextInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
