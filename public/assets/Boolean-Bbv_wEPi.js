import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = {
  __name: "Boolean",
  __ssrInlineRender: true,
  props: ["value"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icons = resolveComponent("Icons");
      _push(`<span${ssrRenderAttrs(_attrs)}>`);
      if (__props.value) {
        _push(ssrRenderComponent(_component_Icons, {
          name: "tick",
          size: "w-4 h-4 text-green-500"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icons, {
          name: "cross",
          size: "w-4 h-4 text-red-500"
        }, null, _parent));
      }
      _push(`</span>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Boolean.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
