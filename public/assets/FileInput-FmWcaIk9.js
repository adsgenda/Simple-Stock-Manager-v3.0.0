import { ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { v4 } from "uuid";
import { _ as _sfc_main$1 } from "./Label-DhVQiNLB.js";
import { _ as _sfc_main$2 } from "./InputError-DN7DJAFH.js";
const _sfc_main = {
  __name: "FileInput",
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
    multiple: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: "image/*"
    },
    modelValue: String,
    label: String,
    error: String
  },
  emits: ["input", "update:modelValue"],
  setup(__props, { emit: __emit }) {
    const photo = ref(null);
    const { t } = useI18n({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        for: __props.id,
        value: __props.label
      }, null, _parent));
      _push(`<input${ssrRenderAttr("id", __props.id)}${ssrIncludeBooleanAttr(__props.multiple) ? " multiple" : ""} type="file" name="photo"${ssrRenderAttr("accept", __props.accept)} class="invisible absolute"><label${ssrRenderAttr("for", __props.id)} class="${ssrRenderClass([{ "border-red-500": __props.error, "text-gray-400": photo.value, "border-gray-300 dark:border-gray-700": !__props.error }, "cursor-pointer mt-1 py-2 px-4 border text-left block w-full focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm dark:bg-gray-800"])}">${ssrInterpolate(photo.value ? photo.value : unref(t)("Select"))}</label>`);
      if (__props.error) {
        _push(ssrRenderComponent(_sfc_main$2, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/FileInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
