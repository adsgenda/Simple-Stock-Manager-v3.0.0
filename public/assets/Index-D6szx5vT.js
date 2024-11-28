import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$2 from "./ApiTokenManager-BGLViF8E.js";
import { _ as _sfc_main$1 } from "./AppLayout-C0A7MbFs.js";
import "@inertiajs/vue3";
import "./ActionMessage-DVIrNK03.js";
import "./ActionSection-Cv0m503E.js";
import "./SectionTitle-cqRrKTqi.js";
import "../ssr.js";
import "vue-i18n";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "./Button-98kWooz2.js";
import "./Modal-Bhnq5Kl7.js";
import "./DangerButton-RhE9UT03.js";
import "./DialogModal-Rn6ogKHt.js";
import "./FormSection-DIJ1oa3J.js";
import "./Input-Cp6lSzEq.js";
import "./Checkbox-CqXn6Y6l.js";
import "./InputError-DN7DJAFH.js";
import "./Label-DhVQiNLB.js";
import "./SecondaryButton-BOMTPtRI.js";
import "./SectionBorder-BAcsiKIe.js";
import "./ApplicationMark-BHFUDJFo.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    tokens: Array,
    availablePermissions: Array,
    defaultPermissions: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "API Tokens" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>API Tokens</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "API Tokens")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              tokens: __props.tokens,
              "available-permissions": __props.availablePermissions,
              "default-permissions": __props.defaultPermissions
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  createVNode(_sfc_main$2, {
                    tokens: __props.tokens,
                    "available-permissions": __props.availablePermissions,
                    "default-permissions": __props.defaultPermissions
                  }, null, 8, ["tokens", "available-permissions", "default-permissions"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
