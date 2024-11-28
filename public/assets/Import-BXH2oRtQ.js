import { ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./Button-BSEDsKOy.js";
import { _ as _sfc_main$1 } from "./AppLayout-C0A7MbFs.js";
import { _ as _sfc_main$2 } from "./FormSection-DIJ1oa3J.js";
import "./DropDownInput-T1q8l2_e.js";
import { L as LoadingButton } from "./LoadingButton-BUTNmM5n.js";
import "../ssr.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "./Modal-Bhnq5Kl7.js";
import "./ApplicationMark-BHFUDJFo.js";
import "./SectionTitle-cqRrKTqi.js";
import "uuid";
import "./Label-DhVQiNLB.js";
import "./Input-Cp6lSzEq.js";
import "./InputError-DN7DJAFH.js";
const _sfc_main = {
  __name: "Import",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({});
    const formRef = ref([]);
    const selected = ref(null);
    const form = useForm({ _method: "POST", excel: null });
    const updateFile = (e) => {
      selected.value = e.target.files[0].name;
    };
    const submit = () => {
      if (formRef.value.files) {
        form.excel = formRef.value.files[0];
      }
      form.post(route("customers.import.save"), { preserveScroll: true });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icons = resolveComponent("icons");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: unref(t)("Import {x}", { x: unref(t)("Customers") })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { onSubmitted: submit }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Import {x}", { x: unref(t)("Customers") }))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("Import {x}", { x: unref(t)("Customers") })), 1)
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Please upload the excel file to import records."))} <div class="flex items-center gap-4 flex-wrap mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    href: _ctx.route("customers.index")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("List Customers"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List Customers")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    away: "",
                    href: _ctx.route("customers.export")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("Export Customers"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Export Customers")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("Please upload the excel file to import records.")) + " ", 1),
                    createVNode("div", { class: "flex items-center gap-4 flex-wrap mt-4" }, [
                      createVNode(_sfc_main$3, {
                        href: _ctx.route("customers.index")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("List Customers")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(_sfc_main$3, {
                        away: "",
                        href: _ctx.route("customers.export")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("Export Customers")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ];
                }
              }),
              form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full col-span-full"${_scopeId2}><label for="file-upload" class="block font-medium"${_scopeId2}>${ssrInterpolate(unref(t)("Excel File"))}</label><div class="${ssrRenderClass([_ctx.$page.props.errors.excel ? "border-red-500" : "border-gray-300 dark:border-gray-700", "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md"])}"${_scopeId2}><div class="space-y-1 text-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icons, {
                    name: "doc-text",
                    size: "mx-auto h-12 w-12 text-gray-400"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="flex items-center justify-center py-2"${_scopeId2}><label for="file-upload" class="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-300"${_scopeId2}>`);
                  if (selected.value) {
                    _push3(`<span class="font-semibold"${_scopeId2}>${ssrInterpolate(unref(t)("Change file"))}</span>`);
                  } else {
                    _push3(`<span class="font-semibold"${_scopeId2}>${ssrInterpolate(unref(t)("Select file"))}</span>`);
                  }
                  _push3(`<input type="file" class="sr-only" id="file-upload" name="file-upload" accept=".xls,.xlsx,application/vnd.ms-excel"${_scopeId2}></label><p class="pl-1"${_scopeId2}>${ssrInterpolate(unref(t)("or drag and drop"))}</p></div><div class="text-xs"${_scopeId2}><div${_scopeId2}>${ssrInterpolate(unref(t)("Excel file should have name, company, phone, email, cf1 and cf2 columns."))}</div><div${_scopeId2}>${ssrInterpolate(unref(t)("The name and phone or email are required."))}</div></div>`);
                  if (selected.value) {
                    _push3(`<div class="inline-block pt-4"${_scopeId2}><div class="px-3 py-1 rounded-md border font-bold text-lg"${_scopeId2}>${ssrInterpolate(unref(t)("Selected File"))}: ${ssrInterpolate(selected.value)}</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.$page.props.errors.excel) {
                    _push3(`<div class="mt-4 pt-2 text-red-600 rounded-md"${_scopeId2}>${ssrInterpolate(_ctx.$page.props.errors.excel)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full col-span-full" }, [
                      createVNode("label", {
                        for: "file-upload",
                        class: "block font-medium"
                      }, toDisplayString(unref(t)("Excel File")), 1),
                      createVNode("div", {
                        class: [_ctx.$page.props.errors.excel ? "border-red-500" : "border-gray-300 dark:border-gray-700", "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md"]
                      }, [
                        createVNode("div", { class: "space-y-1 text-center" }, [
                          createVNode(_component_icons, {
                            name: "doc-text",
                            size: "mx-auto h-12 w-12 text-gray-400"
                          }),
                          createVNode("div", { class: "flex items-center justify-center py-2" }, [
                            createVNode("label", {
                              for: "file-upload",
                              class: "relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-300"
                            }, [
                              selected.value ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "font-semibold"
                              }, toDisplayString(unref(t)("Change file")), 1)) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "font-semibold"
                              }, toDisplayString(unref(t)("Select file")), 1)),
                              createVNode("input", {
                                type: "file",
                                ref_key: "formRef",
                                ref: formRef,
                                class: "sr-only",
                                id: "file-upload",
                                name: "file-upload",
                                onChange: updateFile,
                                accept: ".xls,.xlsx,application/vnd.ms-excel"
                              }, null, 544)
                            ]),
                            createVNode("p", { class: "pl-1" }, toDisplayString(unref(t)("or drag and drop")), 1)
                          ]),
                          createVNode("div", { class: "text-xs" }, [
                            createVNode("div", null, toDisplayString(unref(t)("Excel file should have name, company, phone, email, cf1 and cf2 columns.")), 1),
                            createVNode("div", null, toDisplayString(unref(t)("The name and phone or email are required.")), 1)
                          ]),
                          selected.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "inline-block pt-4"
                          }, [
                            createVNode("div", { class: "px-3 py-1 rounded-md border font-bold text-lg" }, toDisplayString(unref(t)("Selected File")) + ": " + toDisplayString(selected.value), 1)
                          ])) : createCommentVNode("", true),
                          _ctx.$page.props.errors.excel ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "mt-4 pt-2 text-red-600 rounded-md"
                          }, toDisplayString(_ctx.$page.props.errors.excel), 1)) : createCommentVNode("", true)
                        ])
                      ], 2)
                    ])
                  ];
                }
              }),
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(LoadingButton, {
                    loading: unref(form).processing,
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("Import"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Import")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(LoadingButton, {
                      loading: unref(form).processing,
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("Import")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                createVNode(_sfc_main$2, { onSubmitted: submit }, {
                  title: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Import {x}", { x: unref(t)("Customers") })), 1)
                  ]),
                  description: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Please upload the excel file to import records.")) + " ", 1),
                    createVNode("div", { class: "flex items-center gap-4 flex-wrap mt-4" }, [
                      createVNode(_sfc_main$3, {
                        href: _ctx.route("customers.index")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("List Customers")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(_sfc_main$3, {
                        away: "",
                        href: _ctx.route("customers.export")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("Export Customers")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ]),
                  form: withCtx(() => [
                    createVNode("div", { class: "w-full col-span-full" }, [
                      createVNode("label", {
                        for: "file-upload",
                        class: "block font-medium"
                      }, toDisplayString(unref(t)("Excel File")), 1),
                      createVNode("div", {
                        class: [_ctx.$page.props.errors.excel ? "border-red-500" : "border-gray-300 dark:border-gray-700", "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md"]
                      }, [
                        createVNode("div", { class: "space-y-1 text-center" }, [
                          createVNode(_component_icons, {
                            name: "doc-text",
                            size: "mx-auto h-12 w-12 text-gray-400"
                          }),
                          createVNode("div", { class: "flex items-center justify-center py-2" }, [
                            createVNode("label", {
                              for: "file-upload",
                              class: "relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-300"
                            }, [
                              selected.value ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "font-semibold"
                              }, toDisplayString(unref(t)("Change file")), 1)) : (openBlock(), createBlock("span", {
                                key: 1,
                                class: "font-semibold"
                              }, toDisplayString(unref(t)("Select file")), 1)),
                              createVNode("input", {
                                type: "file",
                                ref_key: "formRef",
                                ref: formRef,
                                class: "sr-only",
                                id: "file-upload",
                                name: "file-upload",
                                onChange: updateFile,
                                accept: ".xls,.xlsx,application/vnd.ms-excel"
                              }, null, 544)
                            ]),
                            createVNode("p", { class: "pl-1" }, toDisplayString(unref(t)("or drag and drop")), 1)
                          ]),
                          createVNode("div", { class: "text-xs" }, [
                            createVNode("div", null, toDisplayString(unref(t)("Excel file should have name, company, phone, email, cf1 and cf2 columns.")), 1),
                            createVNode("div", null, toDisplayString(unref(t)("The name and phone or email are required.")), 1)
                          ]),
                          selected.value ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "inline-block pt-4"
                          }, [
                            createVNode("div", { class: "px-3 py-1 rounded-md border font-bold text-lg" }, toDisplayString(unref(t)("Selected File")) + ": " + toDisplayString(selected.value), 1)
                          ])) : createCommentVNode("", true),
                          _ctx.$page.props.errors.excel ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "mt-4 pt-2 text-red-600 rounded-md"
                          }, toDisplayString(_ctx.$page.props.errors.excel), 1)) : createCommentVNode("", true)
                        ])
                      ], 2)
                    ])
                  ]),
                  actions: withCtx(() => [
                    createVNode(LoadingButton, {
                      loading: unref(form).processing,
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("Import")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Customer/Import.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
