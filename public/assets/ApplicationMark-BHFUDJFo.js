import { useSSRContext, mergeProps } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "../ssr.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  var _a;
  _push(`<img${ssrRenderAttrs(mergeProps({
    src: _ctx.$page.props.logo,
    alt: ((_a = _ctx.$page.props.settings) == null ? void 0 : _a.name) || "Simple Stock Manager",
    class: "w-full h-full"
  }, _attrs))}>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ApplicationMark.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Mark = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Mark as M
};
