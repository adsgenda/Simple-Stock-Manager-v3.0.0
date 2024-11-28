import { ref, computed, onMounted, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, withModifiers, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { T } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { useForm } from "@inertiajs/vue3";
import "./Button-BSEDsKOy.js";
import { _ as _sfc_main$4 } from "./Modal-Bhnq5Kl7.js";
import "./Barcode-5YpaZhrO.js";
import { _ as _sfc_main$1 } from "./AppLayout-C0A7MbFs.js";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./SearchFilter-D2zr0JjJ.js";
import "./SelectInput-BdgsEkVk.js";
import "./DialogModal-Rn6ogKHt.js";
import "./DangerButton-RhE9UT03.js";
import "./SecondaryButton-BOMTPtRI.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "./LoadingButton-BUTNmM5n.js";
import "jsbarcode";
import "./ApplicationMark-BHFUDJFo.js";
import "./Button-98kWooz2.js";
import "uuid";
import "./Label-DhVQiNLB.js";
import "./InputError-DN7DJAFH.js";
const _sfc_main = {
  __name: "List",
  __ssrInlineRender: true,
  props: ["activities"],
  setup(__props) {
    const { t } = useI18n({});
    const details = ref(false);
    const selected = ref(null);
    ref(false);
    const props = __props;
    const form = useForm({ selection: [], force: false });
    const search = useForm({ search: "", trashed: null });
    computed(() => form.selection.length > 0 && form.selection.length < props.activities.data.length);
    onMounted(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      search.trashed = urlParams.has("trashed") ? urlParams.get("trashed") : "";
    });
    const showDetails = (row) => {
      selected.value = row;
      details.value = true;
    };
    const closeDetails = () => {
      details.value = false;
      selected.value = null;
    };
    const searchNow = () => {
      search.transform((data) => {
        let obj = {
          ...data,
          remember: data.remember ? "on" : ""
        };
        return Object.entries(obj).reduce((a, [k, v]) => v ? (a[k] = v, a) : a, {});
      }).get(T("activity"), { preserveState: true });
    };
    const resetSearch = () => {
      search.search = "";
      search.trashed = null;
      searchNow();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: unref(t)("Activity Log")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-900 shadow sm:rounded-lg"${_scopeId}><div class="sm:rounded-lg"${_scopeId}><div class="p-6 sm:rounded-t-lg border-b border-gray-200 dark:border-gray-700 block md:flex md:items-center md:justify-between"${_scopeId}><div${_scopeId}><div class="text-2xl"${_scopeId}>${ssrInterpolate(unref(t)("Activity Log"))}</div><div class="mt-1 text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(t)("Please review the result below"))}</div></div><div class="mt-4 sm:mt-0 block sm:flex sm:items-center sm:gap-4"${_scopeId}><form${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              onReset: ($event) => resetSearch(),
              modelValue: unref(search).search,
              "onUpdate:modelValue": ($event) => unref(search).search = $event,
              dropdown: false
            }, null, _parent2, _scopeId));
            _push2(`</form></div></div><div class="bg-gray-50 dark:bg-black/50 border-b dark:border-gray-700 sm:rounded-b-lg"${_scopeId}>`);
            if (__props.activities && __props.activities.data && __props.activities.data.length) {
              _push2(`<div${_scopeId}><div class="flex flex-col"${_scopeId}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId}><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"${_scopeId}><div class="relative overflow-hidden ring-1 ring-black ring-opacity-5"${_scopeId}><table class="min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700"${_scopeId}><thead class="bg-gray-50 dark:bg-black/50"${_scopeId}><tr${_scopeId}><th scope="col" class="pl-5 pr-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(unref(t)("Created at"))}</th><th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(unref(t)("Name"))}</th><th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(unref(t)("Description"))}</th><th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(unref(t)("By"))}</th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900"${_scopeId}><!--[-->`);
              ssrRenderList(props.activities.data, (item) => {
                _push2(`<tr class="${ssrRenderClass([
                  unref(form).selection.includes(item.id) && "bg-gray-50 dark:bg-gray-800/50",
                  item.deleted_at && "bg-red-100 dark:bg-red-900"
                ])}"${_scopeId}><td class="whitespace-nowrap pl-5 pr-3 py-4 text-sm font-medium"${_scopeId}>${ssrInterpolate(_ctx.$datetime(item.created_at))}</td><td class="whitespace-nowrap px-3 py-4 text-sm"${_scopeId}>${ssrInterpolate(item.log_name)}</td><td class="whitespace-nowrap px-3 py-4 text-sm"${_scopeId}>${ssrInterpolate(item.description)}</td><td class="whitespace-nowrap px-3 py-4 text-sm"${_scopeId}>${ssrInterpolate(item.causer ? item.causer.name : "")}</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div></div></div>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "m-4",
                meta: props.activities.meta,
                links: props.activities.links
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="py-4 px-6"${_scopeId}>${ssrInterpolate(unref(t)("There is no data to display."))}</div>`);
            }
            _push2(`</div></div></div></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              show: details.value,
              "max-width": "lg",
              onClose: ($event) => closeDetails()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative"${_scopeId2}><div class="absolute top-0 right-0 hidden py-1.5 px-2 sm:flex sm:items-center sm:justify-center border-l border-b dark:border-gray-700 rounded-bl-lg hover:bg-gray-700 dark:hover:bg-gray-900 hover:text-gray-100 dark:hover:text-gray-100"${_scopeId2}><button type="button" class="rounded-md focus:outline-none focus:ring-0"${_scopeId2}><span class="sr-only"${_scopeId2}>${ssrInterpolate(unref(t)("Close"))}</span><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"${_scopeId2}></path></svg></button></div><div class="p-6 sm:flex sm:items-start"${_scopeId2}>`);
                  if (selected.value) {
                    _push3(`<div class="flex-1"${_scopeId2}><h3 class="-mt-2 text-lg font-bold leading-6 text-gray-900 dark:text-gray-100" id="modal-title"${_scopeId2}>${ssrInterpolate(selected.value.description)}</h3><div class="p-4 -mx-6 -mb-6 md:rounded-b-lg"${_scopeId2}><div class="bg-white dark:bg-gray-900 w-full -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto print:m-0"${_scopeId2}><table class="w-full my-4 table-fixed"${_scopeId2}><tr class="bg-white dark:bg-gray-900"${_scopeId2}><td class="px-6 py-2 w-32 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(unref(t)("Subject Id"))}</td><td class="px-6 py-2"${_scopeId2}>${ssrInterpolate(selected.value.subject_id)}</td></tr><tr class="bg-gray-50 dark:bg-gray-900/50"${_scopeId2}><td class="px-6 py-2 w-32 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(unref(t)("Subject Type"))}</td><td class="px-6 py-2"${_scopeId2}>${ssrInterpolate(selected.value.subject_type)}</td></tr><tr class="bg-white dark:bg-gray-900"${_scopeId2}><td class="px-6 py-2 w-32 whitespace-nowrap align-top"${_scopeId2}>${ssrInterpolate(unref(t)("Properties"))}</td><td class="px-6 py-2"${_scopeId2}><pre class="text-sm font-mono tracking-wide whitespace-wrap"${_scopeId2}>${ssrInterpolate(selected.value.properties)}</pre></td></tr></table></div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative" }, [
                      createVNode("div", { class: "absolute top-0 right-0 hidden py-1.5 px-2 sm:flex sm:items-center sm:justify-center border-l border-b dark:border-gray-700 rounded-bl-lg hover:bg-gray-700 dark:hover:bg-gray-900 hover:text-gray-100 dark:hover:text-gray-100" }, [
                        createVNode("button", {
                          type: "button",
                          onClick: ($event) => closeDetails(),
                          class: "rounded-md focus:outline-none focus:ring-0"
                        }, [
                          createVNode("span", { class: "sr-only" }, toDisplayString(unref(t)("Close")), 1),
                          (openBlock(), createBlock("svg", {
                            class: "h-6 w-6",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            "stroke-width": "1.5",
                            stroke: "currentColor",
                            "aria-hidden": "true"
                          }, [
                            createVNode("path", {
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              d: "M6 18L18 6M6 6l12 12"
                            })
                          ]))
                        ], 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "p-6 sm:flex sm:items-start" }, [
                        selected.value ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex-1"
                        }, [
                          createVNode("h3", {
                            class: "-mt-2 text-lg font-bold leading-6 text-gray-900 dark:text-gray-100",
                            id: "modal-title"
                          }, toDisplayString(selected.value.description), 1),
                          createVNode("div", { class: "p-4 -mx-6 -mb-6 md:rounded-b-lg" }, [
                            createVNode("div", { class: "bg-white dark:bg-gray-900 w-full -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto print:m-0" }, [
                              createVNode("table", { class: "w-full my-4 table-fixed" }, [
                                createVNode("tr", { class: "bg-white dark:bg-gray-900" }, [
                                  createVNode("td", { class: "px-6 py-2 w-32 whitespace-nowrap" }, toDisplayString(unref(t)("Subject Id")), 1),
                                  createVNode("td", { class: "px-6 py-2" }, toDisplayString(selected.value.subject_id), 1)
                                ]),
                                createVNode("tr", { class: "bg-gray-50 dark:bg-gray-900/50" }, [
                                  createVNode("td", { class: "px-6 py-2 w-32 whitespace-nowrap" }, toDisplayString(unref(t)("Subject Type")), 1),
                                  createVNode("td", { class: "px-6 py-2" }, toDisplayString(selected.value.subject_type), 1)
                                ]),
                                createVNode("tr", { class: "bg-white dark:bg-gray-900" }, [
                                  createVNode("td", { class: "px-6 py-2 w-32 whitespace-nowrap align-top" }, toDisplayString(unref(t)("Properties")), 1),
                                  createVNode("td", { class: "px-6 py-2" }, [
                                    createVNode("pre", { class: "text-sm font-mono tracking-wide whitespace-wrap" }, toDisplayString(selected.value.properties), 1)
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-900 shadow sm:rounded-lg" }, [
                    createVNode("div", { class: "sm:rounded-lg" }, [
                      createVNode("div", { class: "p-6 sm:rounded-t-lg border-b border-gray-200 dark:border-gray-700 block md:flex md:items-center md:justify-between" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "text-2xl" }, toDisplayString(unref(t)("Activity Log")), 1),
                          createVNode("div", { class: "mt-1 text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Please review the result below")), 1)
                        ]),
                        createVNode("div", { class: "mt-4 sm:mt-0 block sm:flex sm:items-center sm:gap-4" }, [
                          createVNode("form", {
                            onSubmit: withModifiers(searchNow, ["prevent"])
                          }, [
                            createVNode(_sfc_main$2, {
                              onReset: ($event) => resetSearch(),
                              modelValue: unref(search).search,
                              "onUpdate:modelValue": ($event) => unref(search).search = $event,
                              dropdown: false
                            }, null, 8, ["onReset", "modelValue", "onUpdate:modelValue"])
                          ], 32)
                        ])
                      ]),
                      createVNode("div", { class: "bg-gray-50 dark:bg-black/50 border-b dark:border-gray-700 sm:rounded-b-lg" }, [
                        __props.activities && __props.activities.data && __props.activities.data.length ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                              createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                                createVNode("div", { class: "relative overflow-hidden ring-1 ring-black ring-opacity-5" }, [
                                  createVNode("table", { class: "min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700" }, [
                                    createVNode("thead", { class: "bg-gray-50 dark:bg-black/50" }, [
                                      createVNode("tr", null, [
                                        createVNode("th", {
                                          scope: "col",
                                          class: "pl-5 pr-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                        }, toDisplayString(unref(t)("Created at")), 1),
                                        createVNode("th", {
                                          scope: "col",
                                          class: "py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                        }, toDisplayString(unref(t)("Name")), 1),
                                        createVNode("th", {
                                          scope: "col",
                                          class: "py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                        }, toDisplayString(unref(t)("Description")), 1),
                                        createVNode("th", {
                                          scope: "col",
                                          class: "py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                        }, toDisplayString(unref(t)("By")), 1)
                                      ])
                                    ]),
                                    createVNode("tbody", { class: "divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(props.activities.data, (item) => {
                                        return openBlock(), createBlock("tr", {
                                          key: item.id,
                                          class: [
                                            unref(form).selection.includes(item.id) && "bg-gray-50 dark:bg-gray-800/50",
                                            item.deleted_at && "bg-red-100 dark:bg-red-900"
                                          ]
                                        }, [
                                          createVNode("td", {
                                            class: "whitespace-nowrap pl-5 pr-3 py-4 text-sm font-medium",
                                            onClick: ($event) => showDetails(item)
                                          }, toDisplayString(_ctx.$datetime(item.created_at)), 9, ["onClick"]),
                                          createVNode("td", {
                                            class: "whitespace-nowrap px-3 py-4 text-sm",
                                            onClick: ($event) => showDetails(item)
                                          }, toDisplayString(item.log_name), 9, ["onClick"]),
                                          createVNode("td", {
                                            class: "whitespace-nowrap px-3 py-4 text-sm",
                                            onClick: ($event) => showDetails(item)
                                          }, toDisplayString(item.description), 9, ["onClick"]),
                                          createVNode("td", {
                                            class: "whitespace-nowrap px-3 py-4 text-sm",
                                            onClick: ($event) => showDetails(item)
                                          }, toDisplayString(item.causer ? item.causer.name : ""), 9, ["onClick"])
                                        ], 2);
                                      }), 128))
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createVNode(_sfc_main$3, {
                              class: "m-4",
                              meta: props.activities.meta,
                              links: props.activities.links
                            }, null, 8, ["meta", "links"])
                          ])
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "py-4 px-6"
                        }, toDisplayString(unref(t)("There is no data to display.")), 1))
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode(_sfc_main$4, {
                show: details.value,
                "max-width": "lg",
                onClose: ($event) => closeDetails()
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "absolute top-0 right-0 hidden py-1.5 px-2 sm:flex sm:items-center sm:justify-center border-l border-b dark:border-gray-700 rounded-bl-lg hover:bg-gray-700 dark:hover:bg-gray-900 hover:text-gray-100 dark:hover:text-gray-100" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: ($event) => closeDetails(),
                        class: "rounded-md focus:outline-none focus:ring-0"
                      }, [
                        createVNode("span", { class: "sr-only" }, toDisplayString(unref(t)("Close")), 1),
                        (openBlock(), createBlock("svg", {
                          class: "h-6 w-6",
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          "stroke-width": "1.5",
                          stroke: "currentColor",
                          "aria-hidden": "true"
                        }, [
                          createVNode("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M6 18L18 6M6 6l12 12"
                          })
                        ]))
                      ], 8, ["onClick"])
                    ]),
                    createVNode("div", { class: "p-6 sm:flex sm:items-start" }, [
                      selected.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex-1"
                      }, [
                        createVNode("h3", {
                          class: "-mt-2 text-lg font-bold leading-6 text-gray-900 dark:text-gray-100",
                          id: "modal-title"
                        }, toDisplayString(selected.value.description), 1),
                        createVNode("div", { class: "p-4 -mx-6 -mb-6 md:rounded-b-lg" }, [
                          createVNode("div", { class: "bg-white dark:bg-gray-900 w-full -mx-4 md:mx-0 md:rounded-md shadow overflow-x-auto print:m-0" }, [
                            createVNode("table", { class: "w-full my-4 table-fixed" }, [
                              createVNode("tr", { class: "bg-white dark:bg-gray-900" }, [
                                createVNode("td", { class: "px-6 py-2 w-32 whitespace-nowrap" }, toDisplayString(unref(t)("Subject Id")), 1),
                                createVNode("td", { class: "px-6 py-2" }, toDisplayString(selected.value.subject_id), 1)
                              ]),
                              createVNode("tr", { class: "bg-gray-50 dark:bg-gray-900/50" }, [
                                createVNode("td", { class: "px-6 py-2 w-32 whitespace-nowrap" }, toDisplayString(unref(t)("Subject Type")), 1),
                                createVNode("td", { class: "px-6 py-2" }, toDisplayString(selected.value.subject_type), 1)
                              ]),
                              createVNode("tr", { class: "bg-white dark:bg-gray-900" }, [
                                createVNode("td", { class: "px-6 py-2 w-32 whitespace-nowrap align-top" }, toDisplayString(unref(t)("Properties")), 1),
                                createVNode("td", { class: "px-6 py-2" }, [
                                  createVNode("pre", { class: "text-sm font-mono tracking-wide whitespace-wrap" }, toDisplayString(selected.value.properties), 1)
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["show", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Activity/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
