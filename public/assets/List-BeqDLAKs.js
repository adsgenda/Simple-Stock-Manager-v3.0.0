import { ref, computed, onMounted, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers, withDirectives, vModelCheckbox, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrLooseContain } from "vue/server-renderer";
import { T } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./Button-BSEDsKOy.js";
import { _ as _sfc_main$9 } from "./Modal-Bhnq5Kl7.js";
import { _ as _sfc_main$a } from "./Barcode-5YpaZhrO.js";
import { _ as _sfc_main$1 } from "./AppLayout-C0A7MbFs.js";
import { _ as _sfc_main$3, b as _sfc_main$7, a as _sfc_main$8 } from "./SearchFilter-D2zr0JjJ.js";
import { S as SelectInput } from "./SelectInput-BdgsEkVk.js";
import { _ as _sfc_main$4 } from "./DialogModal-Rn6ogKHt.js";
import { _ as _sfc_main$6 } from "./DangerButton-RhE9UT03.js";
import { _ as _sfc_main$5 } from "./SecondaryButton-BOMTPtRI.js";
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
  props: ["items"],
  setup(__props) {
    const { t } = useI18n({});
    const alerts = ref(null);
    const details = ref(false);
    const selected = ref(null);
    const bulkDelete = ref(false);
    const props = __props;
    const form = useForm({ selection: [], force: false });
    const search = useForm({ search: "", trashed: null });
    const indeterminate = computed(() => form.selection.length > 0 && form.selection.length < props.items.data.length);
    onMounted(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      alerts.value = urlParams.has("alerts") ? urlParams.get("alerts") : null;
      search.trashed = urlParams.has("trashed") ? urlParams.get("trashed") : null;
    });
    const deleteRow = (id, force = false) => {
      router.delete(T("items.destroy" + (force ? ".permanently" : ""), id));
    };
    const restoreRow = (id) => {
      router.put(T("items.restore", id));
    };
    const showDetails = (row) => {
      selected.value = row;
      details.value = true;
    };
    const closeDetails = () => {
      details.value = false;
      selected.value = null;
    };
    const closeModal = () => {
      bulkDelete.value = false;
    };
    const confirmDelete = (force) => {
      form.force = force || false;
      bulkDelete.value = true;
    };
    const deleteSelected = (force) => {
      form.delete(T("items.destroy.many"), {
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
      }).get(T("items.index"), { preserveState: true });
    };
    const resetSearch = () => {
      search.search = "";
      search.trashed = null;
      searchNow();
    };
    const print = () => {
      window.print();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icons = resolveComponent("icons");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: unref(t)("List Items")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="contents"${_scopeId}><div class="py-8"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white dark:bg-gray-900 shadow sm:rounded-lg"${_scopeId}><div class="sm:rounded-lg"${_scopeId}><div class="p-6 sm:rounded-t-lg border-b border-gray-200 dark:border-gray-700 block md:flex md:items-center md:justify-between"${_scopeId}><div${_scopeId}><div class="text-2xl"${_scopeId}>${ssrInterpolate(unref(t)("Items"))} <span class="text-base"${_scopeId}>${ssrInterpolate(alerts.value == "yes" ? "(" + unref(t)("Low Stock") + ")" : "")} ${ssrInterpolate({ with: "(" + unref(t)("With Trashed") + ")", only: "(" + unref(t)("Only Trashed") + ")" }[unref(search).trashed])}</span></div><div class="mt-1 text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(unref(t)("Please review the result below"))}</div></div><div class="mt-4 sm:mt-0 block sm:flex sm:items-center sm:gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: unref(T)("items.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Add New Item"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("Add New Item")), 1)
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
            if (__props.items && __props.items.data && __props.items.data.length) {
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
              _push2(`<table class="min-w-full table-fixed divide-y divide-gray-300 dark:divide-gray-700"${_scopeId}><thead class="bg-gray-50 dark:bg-black/50"${_scopeId}><tr${_scopeId}><th scope="col" class="relative w-12 px-6 sm:w-16 sm:px-8"${_scopeId}><input type="checkbox"${ssrRenderAttr("indeterminate", indeterminate.value)}${ssrIncludeBooleanAttr(indeterminate.value || unref(form).selection.length === __props.items.data.length) ? " checked" : ""} class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"${_scopeId}></th><th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(unref(t)("Code"))}</th><th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(unref(t)("Name"))}</th><th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(unref(t)("Category"))}</th><th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(unref(t)("Quantity"))}</th><th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(unref(t)("Unit"))}</th><th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"${_scopeId}>${ssrInterpolate(unref(t)("Alert Quantity"))}</th><th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6"${_scopeId}><span class="sr-only"${_scopeId}>${ssrInterpolate(unref(t)("Actions"))}</span></th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900"${_scopeId}><!--[-->`);
              ssrRenderList(props.items.data, (item) => {
                var _a;
                _push2(`<tr class="${ssrRenderClass([
                  unref(form).selection.includes(item.id) && "bg-gray-50 dark:bg-gray-800/50",
                  item.deleted_at && "bg-red-100 dark:bg-red-900"
                ])}"${_scopeId}><td class="relative w-12 px-6 sm:w-16 sm:px-8"${_scopeId}>`);
                if (unref(form).selection.includes(item.id)) {
                  _push2(`<div class="absolute inset-y-0 left-0 w-0.5 bg-blue-600"${_scopeId}></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<input type="checkbox"${ssrRenderAttr("value", item.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).selection) ? ssrLooseContain(unref(form).selection, item.id) : unref(form).selection) ? " checked" : ""} class="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"${_scopeId}></td><td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm font-medium"${_scopeId}>${ssrInterpolate(item.code)}</td><td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm"${_scopeId}>${ssrInterpolate(item.name)}</td><td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm"${_scopeId}>${ssrInterpolate(((_a = item.category) == null ? void 0 : _a.name) || "")}</td><td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-right w-28"${_scopeId}>${ssrInterpolate(_ctx.$number(item.quantity))}</td><td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm"${_scopeId}>${ssrInterpolate(item.unit)}</td><td class="whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-right w-32"${_scopeId}>${ssrInterpolate(_ctx.$number(item.alert_quantity))}</td><td class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 w-20"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$7, {
                  pm: "items",
                  row: item,
                  property: "name",
                  deleteFn: deleteRow,
                  restoreFn: restoreRow,
                  editStr: unref(T)("items.edit", item.id)
                }, null, _parent2, _scopeId));
                _push2(`</td></tr>`);
              });
              _push2(`<!--]--></tbody></table></div></div></div>`);
              _push2(ssrRenderComponent(_sfc_main$8, {
                class: "m-4",
                meta: props.items.meta,
                links: props.items.links
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<div class="py-4 px-6"${_scopeId}>${ssrInterpolate(unref(t)("There is no data to display."))}</div>`);
            }
            _push2(`</div></div></div></div></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              show: details.value,
              "max-width": "sm",
              onClose: ($event) => closeDetails()
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="relative print:static print:w-full"${_scopeId2}><div class="absolute print:hidden top-0 right-0 hidden py-1.5 px-2 sm:flex sm:items-center sm:justify-center border-l border-b dark:border-gray-700 rounded-bl-lg hover:bg-gray-700 dark:hover:bg-gray-900 hover:text-gray-100 dark:hover:text-gray-100"${_scopeId2}><button class="flex items-center justify-center h-8 w-8 mr-2 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icons, {
                    name: "printer",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button><button type="button" class="rounded-md focus:outline-none focus:ring-0"${_scopeId2}><span class="sr-only"${_scopeId2}>${ssrInterpolate(unref(t)("Close"))}</span><svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"${_scopeId2}></path></svg></button></div><div class="p-6 sm:flex print:hidden"${_scopeId2}><div class="w-full text-center"${_scopeId2}><h3 class="text-lg font-bold leading-6 text-gray-900 dark:text-gray-100" id="modal-title"${_scopeId2}>${ssrInterpolate(selected.value.name)}</h3>`);
                  _push3(ssrRenderComponent(_sfc_main$a, {
                    tag: "svg",
                    value: selected.value.code,
                    options: { format: selected.value.symbology, height: 38, fontSize: 14 },
                    class: "mt-4 mx-auto border rounded-md overflow-hidden text-left bg-white"
                  }, null, _parent3, _scopeId2));
                  if (selected.value.photo) {
                    _push3(`<img${ssrRenderAttr("src", selected.value.photo)} class="block my-4 max-w-full max-h-full rounded-md border dark:border-gray-700"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="mt-4 border dark:border-gray-700 rounded-md overflow-hidden text-left"${_scopeId2}><dl${_scopeId2}><div class="bg-white dark:bg-gray-900 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3"${_scopeId2}><dt class="text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(unref(t)("Category"))}</dt><dd class="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 sm:mt-0"${_scopeId2}>${ssrInterpolate(((_a = selected.value.category) == null ? void 0 : _a.name) || "")}</dd></div><div class="bg-gray-50 dark:bg-gray-900/50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3"${_scopeId2}><dt class="text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(unref(t)("Quantity"))}</dt><dd class="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 sm:mt-0"${_scopeId2}>${ssrInterpolate(selected.value.quantity)} ${ssrInterpolate(selected.value.unit)}</dd></div><div class="bg-white dark:bg-gray-900 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3"${_scopeId2}><dt class="text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(unref(t)("Alert on"))}</dt><dd class="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 sm:mt-0"${_scopeId2}>${ssrInterpolate(selected.value.alert_quantity)} ${ssrInterpolate(selected.value.unit)}</dd></div></dl></div></div></div><div class="hidden print:block print:w-full print:-mt-2"${_scopeId2}><table class="table-fixed print:w-full"${_scopeId2}><!--[-->`);
                  ssrRenderList([0, 1, 2, 3], (i) => {
                    _push3(`<tr${_scopeId2}><!--[-->`);
                    ssrRenderList([0, 1], (i2) => {
                      var _a2;
                      _push3(`<td class="w-1/2 p-2"${_scopeId2}><div class="w-full text-center border rounded-md p-4"${_scopeId2}><h3 class="text-lg font-bold leading-6 text-gray-900 dark:text-gray-100" id="modal-title"${_scopeId2}>${ssrInterpolate(selected.value.name)}</h3>`);
                      _push3(ssrRenderComponent(_sfc_main$a, {
                        tag: "svg",
                        value: selected.value.code,
                        options: { format: selected.value.symbology, height: 38, fontSize: 14 },
                        class: "mt-2 mx-auto rounded-md overflow-hidden text-left bg-white"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="mt-2 overflow-hidden text-left"${_scopeId2}><dl${_scopeId2}><div class="bg-white dark:bg-gray-900 px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3"${_scopeId2}><dt class="text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(unref(t)("Category"))}</dt><dd class="text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 print:col-span-2 sm:mt-0"${_scopeId2}> : ${ssrInterpolate(((_a2 = selected.value.category) == null ? void 0 : _a2.name) || "")}</dd></div><div class="bg-gray-50 dark:bg-gray-900/50 px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3"${_scopeId2}><dt class="text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(unref(t)("Quantity"))}</dt><dd class="text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 print:col-span-2 sm:mt-0"${_scopeId2}> : ${ssrInterpolate(selected.value.quantity)} ${ssrInterpolate(selected.value.unit)}</dd></div><div class="bg-white dark:bg-gray-900 px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3"${_scopeId2}><dt class="text-sm text-gray-500"${_scopeId2}>${ssrInterpolate(unref(t)("Alert on"))}</dt><dd class="text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 print:col-span-2 sm:mt-0"${_scopeId2}> : ${ssrInterpolate(selected.value.alert_quantity)} ${ssrInterpolate(selected.value.unit)}</dd></div></dl></div></div></td>`);
                    });
                    _push3(`<!--]--></tr>`);
                  });
                  _push3(`<!--]--></table></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "relative print:static print:w-full" }, [
                      createVNode("div", { class: "absolute print:hidden top-0 right-0 hidden py-1.5 px-2 sm:flex sm:items-center sm:justify-center border-l border-b dark:border-gray-700 rounded-bl-lg hover:bg-gray-700 dark:hover:bg-gray-900 hover:text-gray-100 dark:hover:text-gray-100" }, [
                        createVNode("button", {
                          onClick: ($event) => print(),
                          class: "flex items-center justify-center h-8 w-8 mr-2 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                        }, [
                          createVNode(_component_icons, {
                            name: "printer",
                            class: "h-5 w-5"
                          })
                        ], 8, ["onClick"]),
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
                      createVNode("div", { class: "p-6 sm:flex print:hidden" }, [
                        createVNode("div", { class: "w-full text-center" }, [
                          createVNode("h3", {
                            class: "text-lg font-bold leading-6 text-gray-900 dark:text-gray-100",
                            id: "modal-title"
                          }, toDisplayString(selected.value.name), 1),
                          createVNode(_sfc_main$a, {
                            tag: "svg",
                            value: selected.value.code,
                            options: { format: selected.value.symbology, height: 38, fontSize: 14 },
                            class: "mt-4 mx-auto border rounded-md overflow-hidden text-left bg-white"
                          }, null, 8, ["value", "options"]),
                          selected.value.photo ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: selected.value.photo,
                            class: "block my-4 max-w-full max-h-full rounded-md border dark:border-gray-700"
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode("div", { class: "mt-4 border dark:border-gray-700 rounded-md overflow-hidden text-left" }, [
                            createVNode("dl", null, [
                              createVNode("div", { class: "bg-white dark:bg-gray-900 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3" }, [
                                createVNode("dt", { class: "text-sm text-gray-500" }, toDisplayString(unref(t)("Category")), 1),
                                createVNode("dd", { class: "mt-1 text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 sm:mt-0" }, toDisplayString(((_b = selected.value.category) == null ? void 0 : _b.name) || ""), 1)
                              ]),
                              createVNode("div", { class: "bg-gray-50 dark:bg-gray-900/50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3" }, [
                                createVNode("dt", { class: "text-sm text-gray-500" }, toDisplayString(unref(t)("Quantity")), 1),
                                createVNode("dd", { class: "mt-1 text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 sm:mt-0" }, toDisplayString(selected.value.quantity) + " " + toDisplayString(selected.value.unit), 1)
                              ]),
                              createVNode("div", { class: "bg-white dark:bg-gray-900 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3" }, [
                                createVNode("dt", { class: "text-sm text-gray-500" }, toDisplayString(unref(t)("Alert on")), 1),
                                createVNode("dd", { class: "mt-1 text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 sm:mt-0" }, toDisplayString(selected.value.alert_quantity) + " " + toDisplayString(selected.value.unit), 1)
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "hidden print:block print:w-full print:-mt-2" }, [
                        createVNode("table", { class: "table-fixed print:w-full" }, [
                          (openBlock(), createBlock(Fragment, null, renderList([0, 1, 2, 3], (i) => {
                            return createVNode("tr", { key: i }, [
                              (openBlock(), createBlock(Fragment, null, renderList([0, 1], (i2) => {
                                var _a2;
                                return createVNode("td", {
                                  key: i2,
                                  class: "w-1/2 p-2"
                                }, [
                                  createVNode("div", { class: "w-full text-center border rounded-md p-4" }, [
                                    createVNode("h3", {
                                      class: "text-lg font-bold leading-6 text-gray-900 dark:text-gray-100",
                                      id: "modal-title"
                                    }, toDisplayString(selected.value.name), 1),
                                    createVNode(_sfc_main$a, {
                                      tag: "svg",
                                      value: selected.value.code,
                                      options: { format: selected.value.symbology, height: 38, fontSize: 14 },
                                      class: "mt-2 mx-auto rounded-md overflow-hidden text-left bg-white"
                                    }, null, 8, ["value", "options"]),
                                    createVNode("div", { class: "mt-2 overflow-hidden text-left" }, [
                                      createVNode("dl", null, [
                                        createVNode("div", { class: "bg-white dark:bg-gray-900 px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3" }, [
                                          createVNode("dt", { class: "text-sm text-gray-500" }, toDisplayString(unref(t)("Category")), 1),
                                          createVNode("dd", { class: "text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 print:col-span-2 sm:mt-0" }, " : " + toDisplayString(((_a2 = selected.value.category) == null ? void 0 : _a2.name) || ""), 1)
                                        ]),
                                        createVNode("div", { class: "bg-gray-50 dark:bg-gray-900/50 px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3" }, [
                                          createVNode("dt", { class: "text-sm text-gray-500" }, toDisplayString(unref(t)("Quantity")), 1),
                                          createVNode("dd", { class: "text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 print:col-span-2 sm:mt-0" }, " : " + toDisplayString(selected.value.quantity) + " " + toDisplayString(selected.value.unit), 1)
                                        ]),
                                        createVNode("div", { class: "bg-white dark:bg-gray-900 px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3" }, [
                                          createVNode("dt", { class: "text-sm text-gray-500" }, toDisplayString(unref(t)("Alert on")), 1),
                                          createVNode("dd", { class: "text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 print:col-span-2 sm:mt-0" }, " : " + toDisplayString(selected.value.alert_quantity) + " " + toDisplayString(selected.value.unit), 1)
                                        ])
                                      ])
                                    ])
                                  ])
                                ]);
                              }), 64))
                            ]);
                          }), 64))
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "contents" }, [
                createVNode("div", { class: "py-8" }, [
                  createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                    createVNode("div", { class: "bg-white dark:bg-gray-900 shadow sm:rounded-lg" }, [
                      createVNode("div", { class: "sm:rounded-lg" }, [
                        createVNode("div", { class: "p-6 sm:rounded-t-lg border-b border-gray-200 dark:border-gray-700 block md:flex md:items-center md:justify-between" }, [
                          createVNode("div", null, [
                            createVNode("div", { class: "text-2xl" }, [
                              createTextVNode(toDisplayString(unref(t)("Items")) + " ", 1),
                              createVNode("span", { class: "text-base" }, toDisplayString(alerts.value == "yes" ? "(" + unref(t)("Low Stock") + ")" : "") + " " + toDisplayString({ with: "(" + unref(t)("With Trashed") + ")", only: "(" + unref(t)("Only Trashed") + ")" }[unref(search).trashed]), 1)
                            ]),
                            createVNode("div", { class: "mt-1 text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Please review the result below")), 1)
                          ]),
                          createVNode("div", { class: "mt-4 sm:mt-0 block sm:flex sm:items-center sm:gap-4" }, [
                            createVNode(_sfc_main$2, {
                              href: unref(T)("items.create")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(t)("Add New Item")), 1)
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
                          __props.items && __props.items.data && __props.items.data.length ? (openBlock(), createBlock("div", { key: 0 }, [
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
                                              checked: indeterminate.value || unref(form).selection.length === __props.items.data.length,
                                              onChange: ($event) => unref(form).selection = $event.target.checked ? __props.items.data.map((p) => p.id) : [],
                                              class: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"
                                            }, null, 40, ["indeterminate", "checked", "onChange"])
                                          ]),
                                          createVNode("th", {
                                            scope: "col",
                                            class: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                          }, toDisplayString(unref(t)("Code")), 1),
                                          createVNode("th", {
                                            scope: "col",
                                            class: "py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                          }, toDisplayString(unref(t)("Name")), 1),
                                          createVNode("th", {
                                            scope: "col",
                                            class: "py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                          }, toDisplayString(unref(t)("Category")), 1),
                                          createVNode("th", {
                                            scope: "col",
                                            class: "py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                          }, toDisplayString(unref(t)("Quantity")), 1),
                                          createVNode("th", {
                                            scope: "col",
                                            class: "py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                          }, toDisplayString(unref(t)("Unit")), 1),
                                          createVNode("th", {
                                            scope: "col",
                                            class: "py-3.5 px-3 text-left text-sm font-semibold text-gray-900 dark:text-gray-100"
                                          }, toDisplayString(unref(t)("Alert Quantity")), 1),
                                          createVNode("th", {
                                            scope: "col",
                                            class: "relative py-3.5 pl-3 pr-4 sm:pr-6"
                                          }, [
                                            createVNode("span", { class: "sr-only" }, toDisplayString(unref(t)("Actions")), 1)
                                          ])
                                        ])
                                      ]),
                                      createVNode("tbody", { class: "divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900" }, [
                                        (openBlock(true), createBlock(Fragment, null, renderList(props.items.data, (item) => {
                                          var _a;
                                          return openBlock(), createBlock("tr", {
                                            key: item.id,
                                            class: [
                                              unref(form).selection.includes(item.id) && "bg-gray-50 dark:bg-gray-800/50",
                                              item.deleted_at && "bg-red-100 dark:bg-red-900"
                                            ]
                                          }, [
                                            createVNode("td", { class: "relative w-12 px-6 sm:w-16 sm:px-8" }, [
                                              unref(form).selection.includes(item.id) ? (openBlock(), createBlock("div", {
                                                key: 0,
                                                class: "absolute inset-y-0 left-0 w-0.5 bg-blue-600"
                                              })) : createCommentVNode("", true),
                                              withDirectives(createVNode("input", {
                                                type: "checkbox",
                                                value: item.id,
                                                "onUpdate:modelValue": ($event) => unref(form).selection = $event,
                                                class: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 sm:left-6 dark:bg-gray-700 dark:border-gray-700"
                                              }, null, 8, ["value", "onUpdate:modelValue"]), [
                                                [vModelCheckbox, unref(form).selection]
                                              ])
                                            ]),
                                            createVNode("td", {
                                              onClick: ($event) => showDetails(item),
                                              class: "whitespace-nowrap cursor-pointer px-3 py-4 text-sm font-medium"
                                            }, toDisplayString(item.code), 9, ["onClick"]),
                                            createVNode("td", {
                                              onClick: ($event) => showDetails(item),
                                              class: "whitespace-nowrap cursor-pointer px-3 py-4 text-sm"
                                            }, toDisplayString(item.name), 9, ["onClick"]),
                                            createVNode("td", {
                                              onClick: ($event) => showDetails(item),
                                              class: "whitespace-nowrap cursor-pointer px-3 py-4 text-sm"
                                            }, toDisplayString(((_a = item.category) == null ? void 0 : _a.name) || ""), 9, ["onClick"]),
                                            createVNode("td", {
                                              onClick: ($event) => showDetails(item),
                                              class: "whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-right w-28"
                                            }, toDisplayString(_ctx.$number(item.quantity)), 9, ["onClick"]),
                                            createVNode("td", {
                                              onClick: ($event) => showDetails(item),
                                              class: "whitespace-nowrap cursor-pointer px-3 py-4 text-sm"
                                            }, toDisplayString(item.unit), 9, ["onClick"]),
                                            createVNode("td", {
                                              onClick: ($event) => showDetails(item),
                                              class: "whitespace-nowrap cursor-pointer px-3 py-4 text-sm text-right w-32"
                                            }, toDisplayString(_ctx.$number(item.alert_quantity)), 9, ["onClick"]),
                                            createVNode("td", { class: "whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 w-20" }, [
                                              createVNode(_sfc_main$7, {
                                                pm: "items",
                                                row: item,
                                                property: "name",
                                                deleteFn: deleteRow,
                                                restoreFn: restoreRow,
                                                editStr: unref(T)("items.edit", item.id)
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
                                meta: props.items.meta,
                                links: props.items.links
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
              ]),
              createVNode(_sfc_main$9, {
                show: details.value,
                "max-width": "sm",
                onClose: ($event) => closeDetails()
              }, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("div", { class: "relative print:static print:w-full" }, [
                      createVNode("div", { class: "absolute print:hidden top-0 right-0 hidden py-1.5 px-2 sm:flex sm:items-center sm:justify-center border-l border-b dark:border-gray-700 rounded-bl-lg hover:bg-gray-700 dark:hover:bg-gray-900 hover:text-gray-100 dark:hover:text-gray-100" }, [
                        createVNode("button", {
                          onClick: ($event) => print(),
                          class: "flex items-center justify-center h-8 w-8 mr-2 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                        }, [
                          createVNode(_component_icons, {
                            name: "printer",
                            class: "h-5 w-5"
                          })
                        ], 8, ["onClick"]),
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
                      createVNode("div", { class: "p-6 sm:flex print:hidden" }, [
                        createVNode("div", { class: "w-full text-center" }, [
                          createVNode("h3", {
                            class: "text-lg font-bold leading-6 text-gray-900 dark:text-gray-100",
                            id: "modal-title"
                          }, toDisplayString(selected.value.name), 1),
                          createVNode(_sfc_main$a, {
                            tag: "svg",
                            value: selected.value.code,
                            options: { format: selected.value.symbology, height: 38, fontSize: 14 },
                            class: "mt-4 mx-auto border rounded-md overflow-hidden text-left bg-white"
                          }, null, 8, ["value", "options"]),
                          selected.value.photo ? (openBlock(), createBlock("img", {
                            key: 0,
                            src: selected.value.photo,
                            class: "block my-4 max-w-full max-h-full rounded-md border dark:border-gray-700"
                          }, null, 8, ["src"])) : createCommentVNode("", true),
                          createVNode("div", { class: "mt-4 border dark:border-gray-700 rounded-md overflow-hidden text-left" }, [
                            createVNode("dl", null, [
                              createVNode("div", { class: "bg-white dark:bg-gray-900 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3" }, [
                                createVNode("dt", { class: "text-sm text-gray-500" }, toDisplayString(unref(t)("Category")), 1),
                                createVNode("dd", { class: "mt-1 text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 sm:mt-0" }, toDisplayString(((_a = selected.value.category) == null ? void 0 : _a.name) || ""), 1)
                              ]),
                              createVNode("div", { class: "bg-gray-50 dark:bg-gray-900/50 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3" }, [
                                createVNode("dt", { class: "text-sm text-gray-500" }, toDisplayString(unref(t)("Quantity")), 1),
                                createVNode("dd", { class: "mt-1 text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 sm:mt-0" }, toDisplayString(selected.value.quantity) + " " + toDisplayString(selected.value.unit), 1)
                              ]),
                              createVNode("div", { class: "bg-white dark:bg-gray-900 px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3" }, [
                                createVNode("dt", { class: "text-sm text-gray-500" }, toDisplayString(unref(t)("Alert on")), 1),
                                createVNode("dd", { class: "mt-1 text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 sm:mt-0" }, toDisplayString(selected.value.alert_quantity) + " " + toDisplayString(selected.value.unit), 1)
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "hidden print:block print:w-full print:-mt-2" }, [
                        createVNode("table", { class: "table-fixed print:w-full" }, [
                          (openBlock(), createBlock(Fragment, null, renderList([0, 1, 2, 3], (i) => {
                            return createVNode("tr", { key: i }, [
                              (openBlock(), createBlock(Fragment, null, renderList([0, 1], (i2) => {
                                var _a2;
                                return createVNode("td", {
                                  key: i2,
                                  class: "w-1/2 p-2"
                                }, [
                                  createVNode("div", { class: "w-full text-center border rounded-md p-4" }, [
                                    createVNode("h3", {
                                      class: "text-lg font-bold leading-6 text-gray-900 dark:text-gray-100",
                                      id: "modal-title"
                                    }, toDisplayString(selected.value.name), 1),
                                    createVNode(_sfc_main$a, {
                                      tag: "svg",
                                      value: selected.value.code,
                                      options: { format: selected.value.symbology, height: 38, fontSize: 14 },
                                      class: "mt-2 mx-auto rounded-md overflow-hidden text-left bg-white"
                                    }, null, 8, ["value", "options"]),
                                    createVNode("div", { class: "mt-2 overflow-hidden text-left" }, [
                                      createVNode("dl", null, [
                                        createVNode("div", { class: "bg-white dark:bg-gray-900 px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3" }, [
                                          createVNode("dt", { class: "text-sm text-gray-500" }, toDisplayString(unref(t)("Category")), 1),
                                          createVNode("dd", { class: "text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 print:col-span-2 sm:mt-0" }, " : " + toDisplayString(((_a2 = selected.value.category) == null ? void 0 : _a2.name) || ""), 1)
                                        ]),
                                        createVNode("div", { class: "bg-gray-50 dark:bg-gray-900/50 px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3" }, [
                                          createVNode("dt", { class: "text-sm text-gray-500" }, toDisplayString(unref(t)("Quantity")), 1),
                                          createVNode("dd", { class: "text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 print:col-span-2 sm:mt-0" }, " : " + toDisplayString(selected.value.quantity) + " " + toDisplayString(selected.value.unit), 1)
                                        ]),
                                        createVNode("div", { class: "bg-white dark:bg-gray-900 px-2 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 print:grid print:grid-cols-3" }, [
                                          createVNode("dt", { class: "text-sm text-gray-500" }, toDisplayString(unref(t)("Alert on")), 1),
                                          createVNode("dd", { class: "text-sm text-gray-900 dark:text-gray-100 sm:col-span-2 print:col-span-2 sm:mt-0" }, " : " + toDisplayString(selected.value.alert_quantity) + " " + toDisplayString(selected.value.unit), 1)
                                        ])
                                      ])
                                    ])
                                  ])
                                ]);
                              }), 64))
                            ]);
                          }), 64))
                        ])
                      ])
                    ])
                  ];
                }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Item/List.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
