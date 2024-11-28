import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList } from "vue/server-renderer";
import { T } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$1 } from "./AppLayout-C0A7MbFs.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "@inertiajs/vue3";
import "./Modal-Bhnq5Kl7.js";
import "./ApplicationMark-BHFUDJFo.js";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    const { t } = useI18n({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icons = resolveComponent("icons");
      const _component_Link = resolveComponent("Link");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: unref(t)("Dashboard")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="py-8"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-900 overflow-hidden shadow sm:rounded-lg"${_scopeId}><div${_scopeId}><div class="p-6"${_scopeId}><div class="text-2xl"${_scopeId}>${ssrInterpolate(unref(t)("Welcome to"))} ${ssrInterpolate(((_a = _ctx.$settings) == null ? void 0 : _a.name) || "SSM")} ${ssrInterpolate(unref(t)("management portal"))}. </div><div class="mt-2 text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(t)("Last 30 days checkins and checkouts with total items & customers followed by quick links."))}</div></div>`);
            if (__props.data) {
              _push2(`<div class="p-6 bg-blue-50 dark:bg-blue-900/10 border-b border-t border-blue-100 dark:border-gray-700"${_scopeId}><h3 class="text-lg leading-6 font-semibold"${_scopeId}>${ssrInterpolate(unref(t)("Last 30 days"))}</h3><dl class="mt-2 grid grid-cols-1 rounded-lg bg-white dark:bg-gray-900 overflow-hidden border dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800 md:grid-cols-2 lg:grid-cols-4 md:divide-x lg:divide-y-0 lg:divide-x"${_scopeId}><div class="px-4 py-5 sm:p-6"${_scopeId}><dt class="text-base font-normal"${_scopeId}>${ssrInterpolate(unref(t)("Total Checkins"))}</dt><dd class="mt-1 flex justify-between items-end"${_scopeId}><div class="flex items-baseline text-2xl font-semibold text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(__props.data.checkins)}</div>`);
              if (__props.data.checkins != 0 && __props.data.previous_checkins != 0) {
                _push2(`<span class="${ssrRenderClass([__props.data.checkins > __props.data.previous_checkins ? "text-green-500" : "text-red-500", "flex items-center space-x-1 text-sm font-medium leading-none"])}"${_scopeId}>`);
                if (__props.data.checkins > __props.data.previous_checkins) {
                  _push2(ssrRenderComponent(_component_icons, { name: "up" }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_icons, { name: "down" }, null, _parent2, _scopeId));
                }
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$number(__props.data.checkins / __props.data.previous_checkins * 100 - 100))}% </span></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</dd></div><div class="px-4 py-5 sm:p-6"${_scopeId}><dt class="text-base font-normal"${_scopeId}>${ssrInterpolate(unref(t)("Total Checkouts"))}</dt><dd class="mt-1 flex justify-between items-center"${_scopeId}><div class="flex items-baseline text-2xl font-semibold text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(__props.data.checkouts)}</div>`);
              if (__props.data.checkouts != 0 && __props.data.previous_checkouts != 0) {
                _push2(`<span class="${ssrRenderClass([__props.data.checkouts > __props.data.previous_checkouts ? "text-green-500" : "text-red-500", "flex items-center space-x-1 text-sm font-medium leading-none"])}"${_scopeId}>`);
                if (__props.data.checkouts > __props.data.previous_checkouts) {
                  _push2(ssrRenderComponent(_component_icons, { name: "up" }, null, _parent2, _scopeId));
                } else {
                  _push2(ssrRenderComponent(_component_icons, { name: "down" }, null, _parent2, _scopeId));
                }
                _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.$number(__props.data.checkouts / __props.data.previous_checkouts * 100 - 100))}% </span></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</dd></div><div class="px-4 py-5 sm:p-6"${_scopeId}><dt class="text-base font-normal"${_scopeId}>${ssrInterpolate(unref(t)("Items"))}</dt><dd class="mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(__props.data.items)}</dd></div><div class="px-4 py-5 sm:p-6"${_scopeId}><dt class="text-base font-normal"${_scopeId}>${ssrInterpolate(unref(t)("Customers"))}</dt><dd class="mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400"${_scopeId}>${ssrInterpolate(__props.data.customers)}</dd></div></dl></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$isAdmin) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2"${_scopeId}><div class="p-6"${_scopeId}><div class="flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"${_scopeId}></path></svg><div class="ml-4 text-lg leading-7 font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(T)("items.index")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("Items"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("Items")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="ml-12 flex flex-wrap gap-y-4 gap-x-6"${_scopeId}><div class="w-full mt-2 text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(t)("Items are the products to track"))}</div><!--[-->`);
              ssrRenderList([
                ["List", "items.index"],
                ["Add", "items.create"],
                ["Import", "items.import"]
              ], ([title, rn]) => {
                _push2(ssrRenderComponent(_component_Link, {
                  href: unref(T)(rn),
                  class: "inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(t)(title))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)(title)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l"${_scopeId}><div class="flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"${_scopeId}></path></svg><div class="ml-4 text-lg leading-7 font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(T)("categories.index")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("Categories"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("Categories")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="ml-12 flex flex-wrap gap-y-4 gap-x-6"${_scopeId}><div class="w-full mt-2 text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(t)("Manage your items categories"))}</div><!--[-->`);
              ssrRenderList([
                ["List", "categories.index"],
                ["Add", "categories.create"],
                ["Import", "categories.import"]
              ], ([title, rn]) => {
                _push2(ssrRenderComponent(_component_Link, {
                  href: unref(T)(rn),
                  class: "inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(t)(title))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)(title)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700"${_scopeId}><div class="flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3"${_scopeId}></path></svg><div class="ml-4 text-lg leading-7 font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(T)("checkins.index")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("Checkins"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("Checkins")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="ml-12 flex flex-wrap gap-y-4 gap-x-6"${_scopeId}><div class="w-full mt-2 text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(t)("Manage your incoming inventory/stock"))}</div><!--[-->`);
              ssrRenderList([
                ["List", "checkins.index"],
                ["Add", "checkins.create"]
              ], ([title, rn]) => {
                _push2(ssrRenderComponent(_component_Link, {
                  href: unref(T)(rn),
                  class: "inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(t)(title))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)(title)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div><div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l"${_scopeId}><div class="flex items-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18"${_scopeId}></path></svg><div class="ml-4 text-lg leading-7 font-semibold"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: unref(T)("checkouts.index")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("Checkouts"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("Checkouts")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><div class="ml-12 flex flex-wrap gap-y-4 gap-x-6"${_scopeId}><div class="w-full mt-2 text-sm text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(t)("Manage your outgoing inventory/stock"))}</div><!--[-->`);
              ssrRenderList([
                ["List", "checkouts.index"],
                ["Add", "checkouts.create"]
              ], ([title, rn]) => {
                _push2(ssrRenderComponent(_component_Link, {
                  href: unref(T)(rn),
                  class: "inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(t)(title))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)(title)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-900 overflow-hidden shadow sm:rounded-lg" }, [
                    createVNode("div", null, [
                      createVNode("div", { class: "p-6" }, [
                        createVNode("div", { class: "text-2xl" }, toDisplayString(unref(t)("Welcome to")) + " " + toDisplayString(((_b = _ctx.$settings) == null ? void 0 : _b.name) || "SSM") + " " + toDisplayString(unref(t)("management portal")) + ". ", 1),
                        createVNode("div", { class: "mt-2 text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Last 30 days checkins and checkouts with total items & customers followed by quick links.")), 1)
                      ]),
                      __props.data ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "p-6 bg-blue-50 dark:bg-blue-900/10 border-b border-t border-blue-100 dark:border-gray-700"
                      }, [
                        createVNode("h3", { class: "text-lg leading-6 font-semibold" }, toDisplayString(unref(t)("Last 30 days")), 1),
                        createVNode("dl", { class: "mt-2 grid grid-cols-1 rounded-lg bg-white dark:bg-gray-900 overflow-hidden border dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800 md:grid-cols-2 lg:grid-cols-4 md:divide-x lg:divide-y-0 lg:divide-x" }, [
                          createVNode("div", { class: "px-4 py-5 sm:p-6" }, [
                            createVNode("dt", { class: "text-base font-normal" }, toDisplayString(unref(t)("Total Checkins")), 1),
                            createVNode("dd", { class: "mt-1 flex justify-between items-end" }, [
                              createVNode("div", { class: "flex items-baseline text-2xl font-semibold text-blue-600 dark:text-blue-400" }, toDisplayString(__props.data.checkins), 1),
                              __props.data.checkins != 0 && __props.data.previous_checkins != 0 ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ["flex items-center space-x-1 text-sm font-medium leading-none", __props.data.checkins > __props.data.previous_checkins ? "text-green-500" : "text-red-500"]
                              }, [
                                __props.data.checkins > __props.data.previous_checkins ? (openBlock(), createBlock(_component_icons, {
                                  key: 0,
                                  name: "up"
                                })) : (openBlock(), createBlock(_component_icons, {
                                  key: 1,
                                  name: "down"
                                })),
                                createVNode("span", null, toDisplayString(_ctx.$number(__props.data.checkins / __props.data.previous_checkins * 100 - 100)) + "% ", 1)
                              ], 2)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "px-4 py-5 sm:p-6" }, [
                            createVNode("dt", { class: "text-base font-normal" }, toDisplayString(unref(t)("Total Checkouts")), 1),
                            createVNode("dd", { class: "mt-1 flex justify-between items-center" }, [
                              createVNode("div", { class: "flex items-baseline text-2xl font-semibold text-blue-600 dark:text-blue-400" }, toDisplayString(__props.data.checkouts), 1),
                              __props.data.checkouts != 0 && __props.data.previous_checkouts != 0 ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: ["flex items-center space-x-1 text-sm font-medium leading-none", __props.data.checkouts > __props.data.previous_checkouts ? "text-green-500" : "text-red-500"]
                              }, [
                                __props.data.checkouts > __props.data.previous_checkouts ? (openBlock(), createBlock(_component_icons, {
                                  key: 0,
                                  name: "up"
                                })) : (openBlock(), createBlock(_component_icons, {
                                  key: 1,
                                  name: "down"
                                })),
                                createVNode("span", null, toDisplayString(_ctx.$number(__props.data.checkouts / __props.data.previous_checkouts * 100 - 100)) + "% ", 1)
                              ], 2)) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("div", { class: "px-4 py-5 sm:p-6" }, [
                            createVNode("dt", { class: "text-base font-normal" }, toDisplayString(unref(t)("Items")), 1),
                            createVNode("dd", { class: "mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400" }, toDisplayString(__props.data.items), 1)
                          ]),
                          createVNode("div", { class: "px-4 py-5 sm:p-6" }, [
                            createVNode("dt", { class: "text-base font-normal" }, toDisplayString(unref(t)("Customers")), 1),
                            createVNode("dd", { class: "mt-1 text-2xl font-semibold text-blue-600 dark:text-blue-400" }, toDisplayString(__props.data.customers), 1)
                          ])
                        ])
                      ])) : createCommentVNode("", true),
                      _ctx.$isAdmin ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "grid grid-cols-1 md:grid-cols-2"
                      }, [
                        createVNode("div", { class: "p-6" }, [
                          createVNode("div", { class: "flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "w-8 h-8 text-gray-400",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              "stroke-width": "2"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                              })
                            ])),
                            createVNode("div", { class: "ml-4 text-lg leading-7 font-semibold" }, [
                              createVNode(_component_Link, {
                                href: unref(T)("items.index")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("Items")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ]),
                          createVNode("div", { class: "ml-12 flex flex-wrap gap-y-4 gap-x-6" }, [
                            createVNode("div", { class: "w-full mt-2 text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Items are the products to track")), 1),
                            (openBlock(), createBlock(Fragment, null, renderList([
                              ["List", "items.index"],
                              ["Add", "items.create"],
                              ["Import", "items.import"]
                            ], ([title, rn]) => {
                              return createVNode(_component_Link, {
                                key: rn,
                                href: unref(T)(rn),
                                class: "inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)(title)), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"]);
                            }), 64))
                          ])
                        ]),
                        createVNode("div", { class: "p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l" }, [
                          createVNode("div", { class: "flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "w-8 h-8 text-gray-400",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              "stroke-width": "2"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                              })
                            ])),
                            createVNode("div", { class: "ml-4 text-lg leading-7 font-semibold" }, [
                              createVNode(_component_Link, {
                                href: unref(T)("categories.index")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("Categories")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ]),
                          createVNode("div", { class: "ml-12 flex flex-wrap gap-y-4 gap-x-6" }, [
                            createVNode("div", { class: "w-full mt-2 text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Manage your items categories")), 1),
                            (openBlock(), createBlock(Fragment, null, renderList([
                              ["List", "categories.index"],
                              ["Add", "categories.create"],
                              ["Import", "categories.import"]
                            ], ([title, rn]) => {
                              return createVNode(_component_Link, {
                                key: rn,
                                href: unref(T)(rn),
                                class: "inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)(title)), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"]);
                            }), 64))
                          ])
                        ]),
                        createVNode("div", { class: "p-6 border-t border-gray-200 dark:border-gray-700" }, [
                          createVNode("div", { class: "flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "w-8 h-8 text-gray-400",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              "stroke-width": "2"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M16 17l-4 4m0 0l-4-4m4 4V3"
                              })
                            ])),
                            createVNode("div", { class: "ml-4 text-lg leading-7 font-semibold" }, [
                              createVNode(_component_Link, {
                                href: unref(T)("checkins.index")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("Checkins")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ]),
                          createVNode("div", { class: "ml-12 flex flex-wrap gap-y-4 gap-x-6" }, [
                            createVNode("div", { class: "w-full mt-2 text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Manage your incoming inventory/stock")), 1),
                            (openBlock(), createBlock(Fragment, null, renderList([
                              ["List", "checkins.index"],
                              ["Add", "checkins.create"]
                            ], ([title, rn]) => {
                              return createVNode(_component_Link, {
                                key: rn,
                                href: unref(T)(rn),
                                class: "inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)(title)), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"]);
                            }), 64))
                          ])
                        ]),
                        createVNode("div", { class: "p-6 border-t border-gray-200 dark:border-gray-700 md:border-l" }, [
                          createVNode("div", { class: "flex items-center" }, [
                            (openBlock(), createBlock("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              class: "w-8 h-8 text-gray-400",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor",
                              "stroke-width": "2"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M8 7l4-4m0 0l4 4m-4-4v18"
                              })
                            ])),
                            createVNode("div", { class: "ml-4 text-lg leading-7 font-semibold" }, [
                              createVNode(_component_Link, {
                                href: unref(T)("checkouts.index")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)("Checkouts")), 1)
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ]),
                          createVNode("div", { class: "ml-12 flex flex-wrap gap-y-4 gap-x-6" }, [
                            createVNode("div", { class: "w-full mt-2 text-sm text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Manage your outgoing inventory/stock")), 1),
                            (openBlock(), createBlock(Fragment, null, renderList([
                              ["List", "checkouts.index"],
                              ["Add", "checkouts.create"]
                            ], ([title, rn]) => {
                              return createVNode(_component_Link, {
                                key: rn,
                                href: unref(T)(rn),
                                class: "inline-flex items-center text-sm font-semibold text-blue-700 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(t)(title)), 1)
                                ]),
                                _: 2
                              }, 1032, ["href"]);
                            }), 64))
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
