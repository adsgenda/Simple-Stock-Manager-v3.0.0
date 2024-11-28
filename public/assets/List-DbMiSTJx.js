import { ref, computed, onMounted, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, Fragment, renderList, withDirectives, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrLooseContain } from "vue/server-renderer";
import { T } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./Button-BSEDsKOy.js";
import { _ as _sfc_main$1 } from "./AppLayout-C0A7MbFs.js";
import { _ as _sfc_main$3, b as _sfc_main$7, a as _sfc_main$8 } from "./SearchFilter-D2zr0JjJ.js";
import { S as SelectInput } from "./SelectInput-BdgsEkVk.js";
import { _ as _sfc_main$4 } from "./DialogModal-Rn6ogKHt.js";
import { _ as _sfc_main$6 } from "./DangerButton-RhE9UT03.js";
import { _ as _sfc_main$5 } from "./SecondaryButton-BOMTPtRI.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "./LoadingButton-BUTNmM5n.js";
import "./Modal-Bhnq5Kl7.js";
import "./ApplicationMark-BHFUDJFo.js";
import "./Button-98kWooz2.js";
import "uuid";
import "./Label-DhVQiNLB.js";
import "./InputError-DN7DJAFH.js";
const _sfc_main = {
  __name: "List",
  __ssrInlineRender: true,
  props: ["categories"],
  setup(__props) {
    const { t } = useI18n({});
    const bulkDelete = ref(false);
    const props = __props;
    const form = useForm({ selection: [], force: false });
    const search = useForm({ search: "", trashed: null });
    const indeterminate = computed(() => form.selection.length > 0 && form.selection.length < props.categories.data.length);
    onMounted(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      search.trashed = urlParams.has("trashed") ? urlParams.get("trashed") : null;
    });
    const deleteRow = (id, force = false) => {
      router.delete(T("categories.destroy" + (force ? ".permanently" : ""), id));
    };
    const restoreRow = (id) => {
      router.put(T("categories.restore", id));
    };
    const closeModal = () => {
      bulkDelete.value = false;
    };
    const confirmDelete = (force) => {
      form.force = force || false;
      bulkDelete.value = true;
    };
    const deleteSelected = (force) => {
      form.delete(T("categories.destroy.many"), {
        onSuccess: () => {
          form.reset();
        },
        onFinish: () => {
          bulkDelete.value = false;
        }
      });
    };
    const searchNow = () => {
      search.transform((data) => {
        let obj = {
          ...data,
          remember: data.remember ? "on" : ""
        };
        return Object.entries(obj).reduce((a, [k, v]) => v ? (a[k] = v, a) : a, {});
      }).get(T("categories.index"), { preserveState: true });
    };
    const resetSearch = () => {
      search.search = "";
      search.trashed = null;
      searchNow();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: unref(t)("List Categories")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-900 shadow sm:rounded-lg"${_scopeId}><div class="sm:rounded-lg"${_scopeId}><div class="p-6 sm:rounded-t-lg border-b border-gray-200 dark:border-gray-700 block md:flex md:items-center md:justify-between"${_scopeId}><div${_scopeId}><div class="text-2xl"${_scopeId}>${ssrInterpolate(unref(t)("Categories"))} <span class="text-base"${_scopeId}>${ssrInterpolate({ with: "(" + unref(t)("With Trashed") + ")", only: "(" + unref(t)("Only Trashed") + ")" }[unref(search).trashed])}</span></div><div class="mt-1 text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(t)("Please review the result below"))}</div></div><div class="mt-4 sm:mt-0 block sm:flex sm:items-center sm:gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: unref(T)("categories.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Add New Category"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("Add New Category")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<form${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              onReset: ($event) => resetSearch(),
              modelValue: unref(search).search,
              "onUpdate:modelValue": ($event) => unref(search).search = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<label class="block"${_scopeId2}>${ssrInterpolate(unref(t)("Trashed"))}:</label>`);
                  _push3(ssrRenderComponent(SelectInput, {
                    modelValue: unref(search).trashed,
                    "onUpdate:modelValue": ($event) => unref(search).trashed = $event,
                    onChange: ($event) => searchNow(),
                    class: "mt-1 w-full"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<option${ssrRenderAttr("value", null)}${_scopeId3}>${ssrInterpolate(unref(t)("Not Trashed"))}</option><option value="with"${_scopeId3}>${ssrInterpolate(unref(t)("With Trashed"))}</option><option value="only"${_scopeId3}>${ssrInterpolate(unref(t)("Only Trashed"))}</option>`);
                      } else {
                        return [
                          createVNode("option", { value: null }, toDisplayString(unref(t)("Not Trashed")), 1),
                          createVNode("option", { value: "with" }, toDisplayString(unref(t)("With Trashed")), 1),
                          createVNode("option", { value: "only" }, toDisplayString(unref(t)("Only Trashed")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("label", { class: "block" }, toDisplayString(unref(t)("Trashed")) + ":", 1),
                    createVNode(SelectInput, {
                      modelValue: unref(search).trashed,
                      "onUpdate:modelValue": ($event) => unref(search).trashed = $event,
                      onChange: ($event) => searchNow(),
                      class: "mt-1 w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("option", { value: null }, toDisplayString(unref(t)("Not Trashed")), 1),
                        createVNode("option", { value: "with" }, toDisplayString(unref(t)("With Trashed")), 1),
                        createVNode("option", { value: "only" }, toDisplayString(unref(t)("Only Trashed")), 1)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form></div></div><div class="bg-gray-50 dark:bg-black/50 border-b dark:border-gray-700 sm:rounded-b-lg"${_scopeId}>`);
            if (props.categories && props.categories.data && props.categories.data.length) {
              _push2(`<div${_scopeId}><div class="flex flex-col"${_scopeId}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId}><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"${_scopeId}><div class="relative overflow-hidden ring-1 ring-black ring-opacity-5"${_scopeId}>`);
              if (unref(form).selection && unref(form).selection.length) {
                _push2(`<div class="absolute top-0 left-12 flex h-12 items-center space-x-3 sm:left-16"${_scopeId}><button type="button" class="inline-flex items-center rounded border text-white border-red-500 bg-red-500 px-2.5 py-1.5 text-xs font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"${_scopeId}>${ssrInterpolate(unref(t)("Move to Trash"))}</button><button type="button" class="inline-flex items-center rounded border text-white border-red-500 bg-red-500 px-2.5 py-1.5 text-xs font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"${_scopeId}>${ssrInterpolate(unref(t)("Delete Permanently"))}</button>`);
                _push2(ssrRenderComponent(_sfc_main$4, {
                  show: bulkDelete.value,
                  onClose: closeModal,
                  maxWidth: "sm"
                }, {
                  title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(t)("Delete bulk records"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)("Delete bulk records")), 1)
                      ];
                    }
                  }),
                  content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<p${_scopeId2}>${ssrInterpolate(unref(t)("Please confirm that you would like to delete the records?"))}</p>`);
                      if (unref(form).force) {
                        _push3(`<p class="mt-2 text-red-500"${_scopeId2}>${ssrInterpolate(unref(t)("This action will delete the data permanently."))}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        createVNode("p", null, toDisplayString(unref(t)("Please confirm that you would like to delete the records?")), 1),
                        unref(form).force ? (openBlock(), createBlock("p", {
                          key: 0,
                          class: "mt-2 text-red-500"
                        }, toDisplayString(unref(t)("This action will delete the data permanently.")), 1)) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$5, { onClick: closeModal }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(t)("Cancel"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(t)("Cancel")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_sfc_main$6, {
                        onClick: ($event) => deleteSelected()
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(unref(t)("Yes, delete"))}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(unref(t)("Yes, delete")), 1)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_sfc_main$5, { onClick: closeModal }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)("Cancel")), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$6, {
                          onClick: ($event) => deleteSelected()
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
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<table class="min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700"${_scopeId}><thead class="bg-gray-50 dark:bg-black/50"${_scopeId}><tr${_scopeId}><th scope="col" class="relative w-12 px-6 sm:w-16 sm:px-8"${_scopeId}><input type="checkbox"${ssrRenderAttr("indeterminate", indeterminate.value)}${ssrIncludeBooleanAttr(indeterminate.value || unref(form).selection.length === props.categories.data.length) ? " checked" : ""} class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"${_scopeId}></th><th scope="col" class="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(unref(t)("Code"))}</th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(unref(t)("Name"))}</th><th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6"${_scopeId}><span class="sr-only"${_scopeId}>${ssrInterpolate(unref(t)("Actions"))}</span></th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900"${_scopeId}><!--[-->`);
              ssrRenderList(props.categories.data, (category) => {
                _push2(`<tr class="${ssrRenderClass([
                  unref(form).selection.includes(category.id) && "bg-gray-50 dark:bg-gray-800/50",
                  category.deleted_at && "bg-red-100 dark:bg-red-900"
                ])}"${_scopeId}><td class="relative w-12 px-6 sm:w-16 sm:px-8"${_scopeId}>`);
                if (unref(form).selection.includes(category.id)) {
                  _push2(`<div class="absolute inset-y-0 left-0 w-0.5 bg-blue-600"${_scopeId}></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<input type="checkbox"${ssrRenderAttr("value", category.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).selection) ? ssrLooseContain(unref(form).selection, category.id) : unref(form).selection) ? " checked" : ""} class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"${_scopeId}></td><td class="whitespace-nowrap py-4 pr-3 text-sm font-medium"${_scopeId}>${ssrInterpolate(category.code)}</td><td class="whitespace-nowrap px-3 py-4 text-sm"${_scopeId}>${ssrInterpolate(category.name)}</td><td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 w-20"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$7, {
                  pm: "categories",
                  property: "name",
                  row: category,
                  deleteFn: deleteRow,
                  restoreFn: restoreRow,
                  editStr: unref(T)("categories.edit", category.id)
                }, null, _parent2, _scopeId));
                _push2(`</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div></div></div>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                class: "m-4",
                meta: props.categories.meta,
                links: props.categories.links
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="py-4 px-6"${_scopeId}>${ssrInterpolate(unref(t)("There is no data to display."))}</div>`);
            }
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white dark:bg-gray-900 shadow sm:rounded-lg" }, [
                    createVNode("div", { class: "sm:rounded-lg" }, [
                      createVNode("div", { class: "p-6 sm:rounded-t-lg border-b border-gray-200 dark:border-gray-700 block md:flex md:items-center md:justify-between" }, [
                        createVNode("div", null, [
                          createVNode("div", { class: "text-2xl" }, [
                            createTextVNode(toDisplayString(unref(t)("Categories")) + " ", 1),
                            createVNode("span", { class: "text-base" }, toDisplayString({ with: "(" + unref(t)("With Trashed") + ")", only: "(" + unref(t)("Only Trashed") + ")" }[unref(search).trashed]), 1)
                          ]),
                          createVNode("div", { class: "mt-1 text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Please review the result below")), 1)
                        ]),
                        createVNode("div", { class: "mt-4 sm:mt-0 block sm:flex sm:items-center sm:gap-4" }, [
                          createVNode(_sfc_main$2, {
                            href: unref(T)("categories.create")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)("Add New Category")), 1)
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createVNode("form", {
                            onSubmit: withModifiers(searchNow, ["prevent"])
                          }, [
                            createVNode(_sfc_main$3, {
                              onReset: ($event) => resetSearch(),
                              modelValue: unref(search).search,
                              "onUpdate:modelValue": ($event) => unref(search).search = $event
                            }, {
                              default: withCtx(() => [
                                createVNode("label", { class: "block" }, toDisplayString(unref(t)("Trashed")) + ":", 1),
                                createVNode(SelectInput, {
                                  modelValue: unref(search).trashed,
                                  "onUpdate:modelValue": ($event) => unref(search).trashed = $event,
                                  onChange: ($event) => searchNow(),
                                  class: "mt-1 w-full"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("option", { value: null }, toDisplayString(unref(t)("Not Trashed")), 1),
                                    createVNode("option", { value: "with" }, toDisplayString(unref(t)("With Trashed")), 1),
                                    createVNode("option", { value: "only" }, toDisplayString(unref(t)("Only Trashed")), 1)
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                              ]),
                              _: 1
                            }, 8, ["onReset", "modelValue", "onUpdate:modelValue"])
                          ], 32)
                        ])
                      ]),
                      createVNode("div", { class: "bg-gray-50 dark:bg-black/50 border-b dark:border-gray-700 sm:rounded-b-lg" }, [
                        props.categories && props.categories.data && props.categories.data.length ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                              createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                                createVNode("div", { class: "relative overflow-hidden ring-1 ring-black ring-opacity-5" }, [
                                  unref(form).selection && unref(form).selection.length ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "absolute top-0 left-12 flex h-12 items-center space-x-3 sm:left-16"
                                  }, [
                                    createVNode("button", {
                                      type: "button",
                                      onClick: ($event) => confirmDelete(),
                                      class: "inline-flex items-center rounded border text-white border-red-500 bg-red-500 px-2.5 py-1.5 text-xs font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                    }, toDisplayString(unref(t)("Move to Trash")), 9, ["onClick"]),
                                    createVNode("button", {
                                      type: "button",
                                      onClick: ($event) => confirmDelete(true),
                                      class: "inline-flex items-center rounded border text-white border-red-500 bg-red-500 px-2.5 py-1.5 text-xs font-medium shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                                    }, toDisplayString(unref(t)("Delete Permanently")), 9, ["onClick"]),
                                    createVNode(_sfc_main$4, {
                                      show: bulkDelete.value,
                                      onClose: closeModal,
                                      maxWidth: "sm"
                                    }, {
                                      title: withCtx(() => [
                                        createTextVNode(toDisplayString(unref(t)("Delete bulk records")), 1)
                                      ]),
                                      content: withCtx(() => [
                                        createVNode("p", null, toDisplayString(unref(t)("Please confirm that you would like to delete the records?")), 1),
                                        unref(form).force ? (openBlock(), createBlock("p", {
                                          key: 0,
                                          class: "mt-2 text-red-500"
                                        }, toDisplayString(unref(t)("This action will delete the data permanently.")), 1)) : createCommentVNode("", true)
                                      ]),
                                      footer: withCtx(() => [
                                        createVNode(_sfc_main$5, { onClick: closeModal }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(t)("Cancel")), 1)
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_sfc_main$6, {
                                          onClick: ($event) => deleteSelected()
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(unref(t)("Yes, delete")), 1)
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }, 8, ["show"])
                                  ])) : createCommentVNode("", true),
                                  createVNode("table", { class: "min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700" }, [
                                    createVNode("thead", { class: "bg-gray-50 dark:bg-black/50" }, [
                                      createVNode("tr", null, [
                                        createVNode("th", {
                                          scope: "col",
                                          class: "relative w-12 px-6 sm:w-16 sm:px-8"
                                        }, [
                                          createVNode("input", {
                                            type: "checkbox",
                                            indeterminate: indeterminate.value,
                                            checked: indeterminate.value || unref(form).selection.length === props.categories.data.length,
                                            onChange: ($event) => unref(form).selection = $event.target.checked ? props.categories.data.map((p) => p.id) : [],
                                            class: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"
                                          }, null, 40, ["indeterminate", "checked", "onChange"])
                                        ]),
                                        createVNode("th", {
                                          scope: "col",
                                          class: "py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                        }, toDisplayString(unref(t)("Code")), 1),
                                        createVNode("th", {
                                          scope: "col",
                                          class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                        }, toDisplayString(unref(t)("Name")), 1),
                                        createVNode("th", {
                                          scope: "col",
                                          class: "relative py-3.5 pl-3 pr-4 sm:pr-6"
                                        }, [
                                          createVNode("span", { class: "sr-only" }, toDisplayString(unref(t)("Actions")), 1)
                                        ])
                                      ])
                                    ]),
                                    createVNode("tbody", { class: "divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900" }, [
                                      (openBlock(true), createBlock(Fragment, null, renderList(props.categories.data, (category) => {
                                        return openBlock(), createBlock("tr", {
                                          key: category.id,
                                          class: [
                                            unref(form).selection.includes(category.id) && "bg-gray-50 dark:bg-gray-800/50",
                                            category.deleted_at && "bg-red-100 dark:bg-red-900"
                                          ]
                                        }, [
                                          createVNode("td", { class: "relative w-12 px-6 sm:w-16 sm:px-8" }, [
                                            unref(form).selection.includes(category.id) ? (openBlock(), createBlock("div", {
                                              key: 0,
                                              class: "absolute inset-y-0 left-0 w-0.5 bg-blue-600"
                                            })) : createCommentVNode("", true),
                                            withDirectives(createVNode("input", {
                                              type: "checkbox",
                                              value: category.id,
                                              "onUpdate:modelValue": ($event) => unref(form).selection = $event,
                                              class: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"
                                            }, null, 8, ["value", "onUpdate:modelValue"]), [
                                              [vModelCheckbox, unref(form).selection]
                                            ])
                                          ]),
                                          createVNode("td", { class: "whitespace-nowrap py-4 pr-3 text-sm font-medium" }, toDisplayString(category.code), 1),
                                          createVNode("td", { class: "whitespace-nowrap px-3 py-4 text-sm" }, toDisplayString(category.name), 1),
                                          createVNode("td", { class: "whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 w-20" }, [
                                            createVNode(_sfc_main$7, {
                                              pm: "categories",
                                              property: "name",
                                              row: category,
                                              deleteFn: deleteRow,
                                              restoreFn: restoreRow,
                                              editStr: unref(T)("categories.edit", category.id)
                                            }, null, 8, ["row", "editStr"])
                                          ])
                                        ], 2);
                                      }), 128))
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createVNode(_sfc_main$8, {
                              class: "m-4",
                              meta: props.categories.meta,
                              links: props.categories.links
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Category/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
