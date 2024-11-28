import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./DialogModal-Rn6ogKHt.js";
import { _ as _sfc_main$3 } from "./DangerButton-RhE9UT03.js";
import { _ as _sfc_main$2 } from "./SecondaryButton-BOMTPtRI.js";
const _sfc_main = {
  __name: "Attachments",
  __ssrInlineRender: true,
  props: {
    attachments: {
      type: Array
    }
  },
  setup(__props) {
    const modal = ref(false);
    const selected = ref(null);
    const { t } = useI18n({});
    const destroy = () => {
      router.delete(route("attachments.destroy", selected.value.id), {
        onFinish: closeModal
      });
    };
    const closeModal = () => {
      modal.value = false;
      selected.value = null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.attachments.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-6" }, _attrs))}><p class="mb-1">${ssrInterpolate(unref(t)("Attachments"))}</p><ul role="list" class="divide-y divide-gray-100 dark:divide-gray-800 rounded-md border border-gray-200 dark:border-gray-700"><!--[-->`);
        ssrRenderList(__props.attachments, (attachment) => {
          _push(`<li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6"><div class="flex w-0 flex-1 items-center"><svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd"></path></svg><div class="ml-4 flex min-w-0 flex-1 gap-2"><span class="truncate font-medium">${ssrInterpolate(attachment.title)}</span></div></div><div class="ml-4 flex-shrink-0 flex items-center gap-2"><a${ssrRenderAttr("href", _ctx.route("attachments.download", attachment.id))} class="font-medium text-blue-600 hover:text-blue-500">${ssrInterpolate(unref(t)("Download"))}</a><button type="button" class="font-medium text-red-600 hover:text-red-500">${ssrInterpolate(unref(t)("Delete"))}</button></div></li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          show: modal.value,
          onClose: closeModal,
          maxWidth: "sm"
        }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("Delete {x}", { x: unref(t)("attachment") }))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("Delete {x}", { x: unref(t)("attachment") })), 1)
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>${ssrInterpolate(unref(t)("Please confirm that you would like to delete the record?"))}</p><p class="mt-2 text-red-500"${_scopeId}>${ssrInterpolate(unref(t)("This action will delete the data permanently."))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(unref(t)("Please confirm that you would like to delete the record?")), 1),
                createVNode("p", { class: "mt-2 text-red-500" }, toDisplayString(unref(t)("This action will delete the data permanently.")), 1)
              ];
            }
          }),
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$2, { onClick: closeModal }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("Cancel"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("Cancel")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, { onClick: destroy }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("Yes, delete"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("Yes, delete")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$2, { onClick: closeModal }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Cancel")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$3, { onClick: destroy }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Yes, delete")), 1)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Attachments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
