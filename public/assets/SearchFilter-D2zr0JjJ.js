import { resolveComponent, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, ref, mergeProps, openBlock, createBlock, createVNode, createCommentVNode, renderSlot } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$5 } from "./Button-98kWooz2.js";
import { _ as _sfc_main$3 } from "./DialogModal-Rn6ogKHt.js";
import { _ as _sfc_main$6 } from "./DangerButton-RhE9UT03.js";
import { _ as _sfc_main$4 } from "./SecondaryButton-BOMTPtRI.js";
import { a as _sfc_main$7 } from "./AppLayout-C0A7MbFs.js";
const _sfc_main$2 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: ["meta", "links"],
  setup(__props) {
    const props = __props;
    const { t } = useI18n({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="hidden lg:flex items-center justify-between"><div class="mr-4">${ssrInterpolate(unref(t)("Showing from {from} to {to} of total {total} records", { from: props.meta.from, to: props.meta.to, total: props.meta.total }))}</div><div class="flex flex-wrap -mb-1"><!--[-->`);
      ssrRenderList(props.meta.links, (link, i) => {
        _push(`<!--[-->`);
        if (link.url === null) {
          _push(`<div class="mr-1 mb-1 px-4 py-2 text-sm leading-4 text-gray-400 dark:text-gray-600 shadow opacity-50 bg-white dark:bg-gray-800 rounded-md cursor-default">${link.label ?? ""}</div>`);
        } else {
          _push(ssrRenderComponent(_component_Link, {
            href: link.url,
            class: [link.active ? "bg-blue-600 border-blue-700 text-white" : "bg-white dark:bg-gray-800", "inline-block whitespace-nowrap mr-1 mb-1 px-4 py-2 text-sm leading-4 shadow rounded-md hover:bg-blue-700 hover:text-white hover:border-blue-700 focus:border-blue-600 focus:text-white"]
          }, null, _parent));
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div><div class="flex items-center justify-between lg:hidden">`);
      if (props.links.prev) {
        _push(ssrRenderComponent(_component_Link, {
          href: props.links.prev,
          class: "inline-block whitespace-nowrap mr-1 mb-1 px-4 py-2 text-sm leading-4 shadow rounded-md bg-white dark:bg-gray-800 hover:bg-blue-700 hover:text-white hover:border-blue-700 focus:border-blue-600 focus:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` « ${ssrInterpolate(unref(t)("Previous"))}`);
            } else {
              return [
                createTextVNode(" « " + toDisplayString(unref(t)("Previous")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<span class="inline-block whitespace-nowrap mr-1 mb-1 px-4 py-2 text-sm leading-4 shadow rounded-md text-gray-600 bg-gray-100 dark:bg-gray-800 cursor-default"> « ${ssrInterpolate(unref(t)("Previous"))}</span>`);
      }
      _push(`<div class="mx-3">${ssrInterpolate(unref(t)("Showing from {from} to {to} of total {total} records", { from: props.meta.from, to: props.meta.to, total: props.meta.total }))}</div>`);
      if (props.links.next) {
        _push(ssrRenderComponent(_component_Link, {
          href: props.links.next,
          class: "inline-block whitespace-nowrap mr-1 mb-1 px-4 py-2 text-sm leading-4 shadow rounded-md bg-white dark:bg-gray-800 hover:bg-blue-700 hover:text-white hover:border-blue-700 focus:border-blue-600 focus:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("Next"))} » `);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("Next")) + " » ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<span class="inline-block whitespace-nowrap mr-1 mb-1 px-4 py-2 text-sm leading-4 shadow rounded-md text-gray-600 bg-gray-100 dark:bg-gray-800 cursor-default">${ssrInterpolate(unref(t)("Next"))} » </span>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Pagination.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "RowActions",
  __ssrInlineRender: true,
  props: {
    pm: String,
    editFn: String,
    editStr: String,
    property: String,
    deleteFn: Function,
    restoreFn: Function,
    row: { type: Object, required: true },
    classStr: { type: String, default: "" }
  },
  setup(__props) {
    const { t } = useI18n({});
    const show = ref(false);
    const restore = ref(false);
    const props = __props;
    const deleteConfirmed = () => {
      props.deleteFn(props.row.id, !!props.row.deleted_at);
      closeModal();
    };
    const restoreConfirmed = () => {
      props.restoreFn(props.row.id);
      closeModal();
    };
    const closeModal = () => {
      show.value = false;
    };
    const closeRestoreModal = () => {
      restore.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["flex items-center justify-end gap-3", __props.classStr]
      }, _attrs))}>`);
      if (!__props.row.deleted_at && _ctx.$can("update-" + __props.pm)) {
        _push(`<!--[-->`);
        if (__props.editStr) {
          _push(ssrRenderComponent(_component_Link, {
            href: __props.editStr,
            class: "text-blue-600 hover:text-blue-900 dark:hover:text-blue-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    class: "w-6 h-6"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    })
                  ]))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (__props.editFn) {
          _push(`<button class="text-blue-600 hover:text-blue-900 dark:hover:text-blue-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (__props.row.deleted_at && _ctx.$can("update-" + __props.pm) && __props.restoreFn) {
        _push(`<!--[--><button class="text-blue-600 hover:text-blue-900 dark:hover:text-blue-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"></path></svg></button>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          show: restore.value,
          onClose: closeRestoreModal,
          maxWidth: "sm"
        }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.property) {
                _push2(`<span${_scopeId}>${ssrInterpolate(unref(t)("Restore {x}", { x: __props.row[__props.property] }))}</span>`);
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(unref(t)("Confirm record restore"))}</span>`);
              }
            } else {
              return [
                __props.property ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("Restore {x}", { x: __props.row[__props.property] })), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(t)("Confirm record restore")), 1))
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>${ssrInterpolate(unref(t)("Please confirm that you would like to restore the record?"))}</p>`);
            } else {
              return [
                createVNode("p", null, toDisplayString(unref(t)("Please confirm that you would like to restore the record?")), 1)
              ];
            }
          }),
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4, { onClick: closeRestoreModal }, {
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
              _push2(ssrRenderComponent(_sfc_main$5, {
                onClick: ($event) => restoreConfirmed()
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("Yes, restore"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("Yes, restore")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$4, { onClick: closeRestoreModal }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Cancel")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$5, {
                  onClick: ($event) => restoreConfirmed()
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Yes, restore")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$can("delete-" + __props.pm) && __props.deleteFn) {
        _push(`<!--[--><button class="text-red-600 hover:text-red-900 dark:hover:text-red-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg></button>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          show: show.value,
          onClose: closeModal,
          maxWidth: "sm"
        }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.property) {
                _push2(`<span${_scopeId}>${ssrInterpolate(unref(t)("Delete {x}", { x: __props.row[__props.property] }))}</span>`);
              } else {
                _push2(`<span${_scopeId}>${ssrInterpolate(unref(t)("Confirm record delete"))}</span>`);
              }
            } else {
              return [
                __props.property ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("Delete {x}", { x: __props.row[__props.property] })), 1)) : (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(t)("Confirm record delete")), 1))
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>${ssrInterpolate(unref(t)("Please confirm that you would like to delete the record?"))}</p>`);
              if (__props.row.deleted_at) {
                _push2(`<p class="mt-2 text-red-500"${_scopeId}>${ssrInterpolate(unref(t)("This action will delete the data permanently."))}</p>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("p", null, toDisplayString(unref(t)("Please confirm that you would like to delete the record?")), 1),
                __props.row.deleted_at ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "mt-2 text-red-500"
                }, toDisplayString(unref(t)("This action will delete the data permanently.")), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4, { onClick: closeModal }, {
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
              _push2(ssrRenderComponent(_sfc_main$6, {
                onClick: ($event) => deleteConfirmed()
              }, {
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
                createVNode(_sfc_main$4, { onClick: closeModal }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Cancel")), 1)
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$6, {
                  onClick: ($event) => deleteConfirmed()
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Yes, delete")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/RowActions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "SearchFilter",
  __ssrInlineRender: true,
  props: { modelValue: String, close: { type: Boolean, default: false }, dropdown: { type: Boolean, default: true } },
  emits: ["update:modelValue", "reset"],
  setup(__props) {
    const { t } = useI18n({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icons = resolveComponent("icons");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-4 sm:mt-0 p-px w-full flex items-stretch justify-stretch group bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-md focus-within:border-blue-300 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:ring-opacity-50" }, _attrs))}><div class="relative w-full flex items-stretch"><div class="flex items-center w-full rounded-md"><input type="text" name="search" autocomplete="off"${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("placeholder", unref(t)("Search"))} class="${ssrRenderClass([{ "rounded-l-md": !__props.dropdown }, "flex-1 text-sm z-0 w-full pl-3 pr-2 py-2 border-0 border-r border-gray-200 dark:border-gray-700 rounded-l-md focus:outline-none focus:ring-0 focus:border-0 dark:bg-gray-800"])}"></div><button type="button" class="hidden group-hover:block absolute top-0 my-1 right-2 px-2 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:text-blue-500 rounded-md focus:outline-none">${ssrInterpolate(unref(t)("Reset"))}</button></div>`);
      if (__props.dropdown) {
        _push(`<div class="flex items-stretch">`);
        _push(ssrRenderComponent(_sfc_main$7, {
          align: "right",
          width: "56",
          closeOnClick: __props.close
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" class="flex min-w-fit py-1 px-1 md:pl-2 md:pr-0 items-center justify-center rounded-r-md focus:outline-none relative transition duration-150 ease-in-out bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700"${_scopeId}><span class="hidden md:block min-w-fit"${_scopeId}>${ssrInterpolate(unref(t)("Filter"))}</span>`);
              _push2(ssrRenderComponent(_component_icons, {
                name: "chevron-down",
                size: "h-4 w-4 min-w-fit text-gray-400 md:mx-1"
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: "flex min-w-fit py-1 px-1 md:pl-2 md:pr-0 items-center justify-center rounded-r-md focus:outline-none relative transition duration-150 ease-in-out bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700"
                }, [
                  createVNode("span", { class: "hidden md:block min-w-fit" }, toDisplayString(unref(t)("Filter")), 1),
                  createVNode(_component_icons, {
                    name: "chevron-down",
                    size: "h-4 w-4 min-w-fit text-gray-400 md:mx-1"
                  })
                ])
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-4"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "p-4" }, [
                  renderSlot(_ctx.$slots, "default")
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SearchFilter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$2 as a,
  _sfc_main$1 as b
};
