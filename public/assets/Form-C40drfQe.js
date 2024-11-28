import { ref, watch, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, withDirectives, vModelText, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import axios from "axios";
import { useI18n } from "vue-i18n";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./Button-BSEDsKOy.js";
import { _ as _sfc_main$a } from "./Modal-Bhnq5Kl7.js";
import { _ as _sfc_main$6 } from "./FileInput-FmWcaIk9.js";
import { _ as _sfc_main$4 } from "./TextInput-DzNv42um.js";
import { _ as _sfc_main$1 } from "./AppLayout-C0A7MbFs.js";
import { _ as _sfc_main$7 } from "./Attachments-DXoLD4sd.js";
import { _ as _sfc_main$8, a as _sfc_main$b } from "./TextareaInput-DYFXTbrK.js";
import { _ as _sfc_main$2 } from "./FormSection-DIJ1oa3J.js";
import { _ as _sfc_main$5 } from "./AutoCompleteApi-BmPBo7oa.js";
import { _ as _sfc_main$9 } from "./ActionMessage-DVIrNK03.js";
import "./LoadingButton-BUTNmM5n.js";
import "../ssr.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "uuid";
import "./Label-DhVQiNLB.js";
import "./InputError-DN7DJAFH.js";
import "./Input-Cp6lSzEq.js";
import "./ApplicationMark-BHFUDJFo.js";
import "./DialogModal-Rn6ogKHt.js";
import "./DangerButton-RhE9UT03.js";
import "./SecondaryButton-BOMTPtRI.js";
import "./SectionTitle-cqRrKTqi.js";
import "lodash/throttle.js";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["edit", "checkouts"],
  setup(__props) {
    const search = ref("");
    const input = ref(null);
    const results = ref([]);
    const customer = ref(null);
    const read_xslx = ref(false);
    const searching = ref(false);
    const form = useForm({ date: null, reference: null, customer_id: null, attachments: null, items: [], note: null, _method: "post" });
    const props = __props;
    if (props.edit) {
      customer.value = { value: props.edit.data.customer.id, label: props.edit.data.customer.name };
      form.date = props.edit.data.date;
      form.reference = props.edit.data.reference;
      form.customer_id = props.edit.data.customer_id;
      form.attachments = null;
      form.items = props.edit.data.items;
      form.note = props.edit.data.note;
    }
    const { t } = useI18n({});
    watch(search, (s) => {
      searching.value = true;
      axios.post(route("search.items"), { search: s }).then((res) => {
        results.value = res.data;
        if (results.value.length == 1) {
          selectItem(results.value[0]);
        }
      }).finally(() => searching.value = false);
    });
    const selectItem = (v) => {
      let oi = form.items.find((i) => i.item_id == v.value);
      if (oi) {
        oi.quantity += 1;
      } else {
        form.items.push({ item_id: v.value, name: v.label, code: v.code, unit: v.unit, quantity: 1 });
      }
      search.value = "";
      input.value.focus();
    };
    const setItems = (items) => {
      form.items = items;
      read_xslx.value = false;
    };
    const blurInput = () => {
      setTimeout(() => search.value = "", 100);
    };
    const removeOrderItem = (v) => {
      form.items = form.items.filter((i) => i.item_id != v.item_id);
    };
    function submit() {
      form._method = props.edit ? "put" : "post";
      let url = props.edit ? route("checkouts.update", props.edit.data.id) : route("checkouts.store");
      form.transform((data) => {
        var _a;
        data.customer_id = ((_a = customer.value) == null ? void 0 : _a.value) || customer.value;
        return data;
      });
      form.post(url, {
        preserveScroll: true,
        onSuccess: () => {
          props.edit ? "" : form.reset();
        },
        onError: (e) => {
          if (form.errors.name) {
            document.getElementById("name").focus();
          }
          if (form.errors.company) {
            document.getElementById("company").focus();
          }
          if (form.errors.email) {
            document.getElementById("email").focus();
          }
          if (form.errors.phone) {
            document.getElementById("phone").focus();
          }
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icons = resolveComponent("icons");
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: props.edit ? unref(t)("Edit Checkout") : unref(t)("Add New Checkout")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              onSubmitted: submit,
              autocomplete: "off"
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.edit ? unref(t)("Edit Checkout") : unref(t)("Add New Checkout"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.edit ? unref(t)("Edit Checkout") : unref(t)("Add New Checkout")), 1)
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Please fill the form below to {x} item.", { x: props.edit ? unref(t)("update") : unref(t)("add") }))} <div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    href: _ctx.route("checkouts.index"),
                    class: "mt-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("List Checkouts"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List Checkouts")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("Please fill the form below to {x} item.", { x: props.edit ? unref(t)("update") : unref(t)("add") })) + " ", 1),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        href: _ctx.route("checkouts.index"),
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("List Checkouts")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ];
                }
              }),
              form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  _push3(`<div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    type: "date",
                    modelValue: unref(form).date,
                    "onUpdate:modelValue": ($event) => unref(form).date = $event,
                    id: "date",
                    error: unref(form).errors.date,
                    label: unref(t)("Date")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).reference,
                    "onUpdate:modelValue": ($event) => unref(form).reference = $event,
                    id: "reference",
                    error: unref(form).errors.reference,
                    label: unref(t)("Reference")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    json: true,
                    id: "customer_id",
                    modelValue: customer.value,
                    "onUpdate:modelValue": ($event) => customer.value = $event,
                    searchable: true,
                    label: unref(t)("Customer"),
                    selected: (_a = customer.value) == null ? void 0 : _a.value,
                    error: unref(form).errors.customer_id,
                    suggestions: _ctx.route("search.customers")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    multiple: "",
                    modelValue: unref(form).attachments,
                    "onUpdate:modelValue": ($event) => unref(form).attachments = $event,
                    id: "attachments",
                    error: unref(form).errors.attachments,
                    label: unref(t)("Attachment")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-full"${_scopeId2}><div class="mt-3 sm:mt-1 border border-gray-300 dark:border-gray-700 divide-y divide-gray-300 rounded-md transition-all dark:bg-gray-800"${_scopeId2}><div class="relative"${_scopeId2}><svg class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"${_scopeId2}><path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd"${_scopeId2}></path></svg><input type="text"${ssrRenderAttr("value", search.value)} class="h-12 w-full rounded-md border border-transparent px-11 placeholder-gray-400 focus:border-blue-300 dark:focus:border-gray-600 dark:focus:ring-blue-200 dark:focus:ring-opacity-50 focus:ring-2 focus:ring-blue-100 dark:bg-gray-800"${ssrRenderAttr("placeholder", unref(t)("Scan Barcode OR Search..."))}${_scopeId2}><button type="button" class="inline-flex items-center absolute top-1 right-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 py-2 px-3 rounded-md"${_scopeId2}><span class="hidden sm:inline-block mr-2"${_scopeId2}>${ssrInterpolate(unref(t)("Import"))}</span>`);
                  _push3(ssrRenderComponent(_component_icons, {
                    name: "xlsx",
                    size: "h-6 w-6"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div>`);
                  if (search.value && results.value && results.value.length) {
                    _push3(`<ul class="max-h-80 scroll-py-2 overflow-y-auto p-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(results.value, (r, i) => {
                      _push3(`<li${_scopeId2}><button type="button" class="block text-left w-full select-none rounded-md px-3 py-2 hover:bg-blue-500 hover:text-white"${_scopeId2}><span class="ml-3 flex-auto truncate"${_scopeId2}>${ssrInterpolate(r.label)}</span></button></li>`);
                    });
                    _push3(`<!--]--></ul>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  if (unref(form).items && unref(form).items.length) {
                    _push3(`<div class="my-6 flex flex-col"${_scopeId2}><div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId2}><div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"${_scopeId2}><table class="min-w-full border-b border-gray-300 dark:border-gray-700 divide-y divide-gray-300 dark:divide-gray-700"${_scopeId2}><thead${_scopeId2}><tr${_scopeId2}><th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-bold sm:pl-6 md:pl-0"${_scopeId2}>${ssrInterpolate(unref(t)("Item"))}</th><th scope="col" class="py-3.5 px-3 text-left text-sm font-bold"${_scopeId2}>${ssrInterpolate(unref(t)("Quantity"))}</th><th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"${_scopeId2}><span class="sr-only"${_scopeId2}>${ssrInterpolate(unref(t)("Remove"))}</span></th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(form).items, (i, r) => {
                      _push3(`<tr${_scopeId2}><td class="align-middle whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6 md:pl-0"${_scopeId2}>${ssrInterpolate(i.name)} (${ssrInterpolate(i.code)}) `);
                      if (unref(form).errors["items." + r + ".quantity"]) {
                        _push3(`<div class="text-red-500 mt-1"${_scopeId2}>${ssrInterpolate(unref(form).errors["items." + r + ".quantity"])}</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</td><td class="whitespace-nowrap py-4 px-3 text-sm text-gray-500 w-20 sm:w-40"${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$4, {
                        modelValue: i.quantity,
                        "onUpdate:modelValue": ($event) => i.quantity = $event,
                        class: "max-w-[80px] sm:max-w-[150px] -mt-4 -mb-3 text-gray-700 dark:text-gray-300"
                      }, null, _parent3, _scopeId2));
                      _push3(`</td><td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0 w-12"${_scopeId2}><div class="flex items-center justify-center"${_scopeId2}><button type="button" class="text-red-500 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-100 dark:hover:bg-red-900 p-2 rounded-md -my-2"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"${_scopeId2}></path></svg></button></div></td></tr>`);
                    });
                    _push3(`<!--]--></tbody></table></div></div></div>`);
                  } else {
                    _push3(`<div class="border dark:border-gray-700 text-gray-700 dark:text-gray-300 p-4 my-4 rounded-md"${_scopeId2}>${ssrInterpolate(unref(t)("Please scan barcode or search to add item"))} `);
                    if ((_c = (_b = unref(form)) == null ? void 0 : _b.errors) == null ? void 0 : _c.items) {
                      _push3(`<div class="text-red-500 text-sm mt-1"${_scopeId2}>${ssrInterpolate(unref(form).errors.items)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  }
                  _push3(`<div class="col-span-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    attachments: __props.edit ? (_d = __props.edit.data) == null ? void 0 : _d.attachments : []
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    modelValue: unref(form).note,
                    "onUpdate:modelValue": ($event) => unref(form).note = $event,
                    id: "note",
                    error: unref(form).errors.note,
                    label: unref(t)("Note")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        type: "date",
                        modelValue: unref(form).date,
                        "onUpdate:modelValue": ($event) => unref(form).date = $event,
                        id: "date",
                        error: unref(form).errors.date,
                        label: unref(t)("Date")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).reference,
                        "onUpdate:modelValue": ($event) => unref(form).reference = $event,
                        id: "reference",
                        error: unref(form).errors.reference,
                        label: unref(t)("Reference")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$5, {
                        json: true,
                        id: "customer_id",
                        modelValue: customer.value,
                        "onUpdate:modelValue": ($event) => customer.value = $event,
                        searchable: true,
                        label: unref(t)("Customer"),
                        selected: (_e = customer.value) == null ? void 0 : _e.value,
                        error: unref(form).errors.customer_id,
                        suggestions: _ctx.route("search.customers")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "selected", "error", "suggestions"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        multiple: "",
                        modelValue: unref(form).attachments,
                        "onUpdate:modelValue": ($event) => unref(form).attachments = $event,
                        id: "attachments",
                        error: unref(form).errors.attachments,
                        label: unref(t)("Attachment")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-full" }, [
                      createVNode("div", { class: "mt-3 sm:mt-1 border border-gray-300 dark:border-gray-700 divide-y divide-gray-300 rounded-md transition-all dark:bg-gray-800" }, [
                        createVNode("div", { class: "relative" }, [
                          (openBlock(), createBlock("svg", {
                            class: "pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true"
                          }, [
                            createVNode("path", {
                              "fill-rule": "evenodd",
                              d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
                              "clip-rule": "evenodd"
                            })
                          ])),
                          withDirectives(createVNode("input", {
                            type: "text",
                            ref_key: "input",
                            ref: input,
                            "onUpdate:modelValue": ($event) => search.value = $event,
                            onBlur: ($event) => blurInput(),
                            class: "h-12 w-full rounded-md border border-transparent px-11 placeholder-gray-400 focus:border-blue-300 dark:focus:border-gray-600 dark:focus:ring-blue-200 dark:focus:ring-opacity-50 focus:ring-2 focus:ring-blue-100 dark:bg-gray-800",
                            placeholder: unref(t)("Scan Barcode OR Search...")
                          }, null, 40, ["onUpdate:modelValue", "onBlur", "placeholder"]), [
                            [vModelText, search.value]
                          ]),
                          createVNode("button", {
                            type: "button",
                            onClick: ($event) => read_xslx.value = true,
                            class: "inline-flex items-center absolute top-1 right-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 py-2 px-3 rounded-md"
                          }, [
                            createVNode("span", { class: "hidden sm:inline-block mr-2" }, toDisplayString(unref(t)("Import")), 1),
                            createVNode(_component_icons, {
                              name: "xlsx",
                              size: "h-6 w-6"
                            })
                          ], 8, ["onClick"])
                        ]),
                        search.value && results.value && results.value.length ? (openBlock(), createBlock("ul", {
                          key: 0,
                          class: "max-h-80 scroll-py-2 overflow-y-auto p-2"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(results.value, (r, i) => {
                            return openBlock(), createBlock("li", { key: i }, [
                              createVNode("button", {
                                type: "button",
                                onClick: ($event) => selectItem(r),
                                class: "block text-left w-full select-none rounded-md px-3 py-2 hover:bg-blue-500 hover:text-white"
                              }, [
                                createVNode("span", { class: "ml-3 flex-auto truncate" }, toDisplayString(r.label), 1)
                              ], 8, ["onClick"])
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ]),
                      unref(form).items && unref(form).items.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "my-6 flex flex-col"
                      }, [
                        createVNode("div", { class: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                          createVNode("div", { class: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8" }, [
                            createVNode("table", { class: "min-w-full border-b border-gray-300 dark:border-gray-700 divide-y divide-gray-300 dark:divide-gray-700" }, [
                              createVNode("thead", null, [
                                createVNode("tr", null, [
                                  createVNode("th", {
                                    scope: "col",
                                    class: "py-3.5 pl-4 pr-3 text-left text-sm font-bold sm:pl-6 md:pl-0"
                                  }, toDisplayString(unref(t)("Item")), 1),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "py-3.5 px-3 text-left text-sm font-bold"
                                  }, toDisplayString(unref(t)("Quantity")), 1),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                                  }, [
                                    createVNode("span", { class: "sr-only" }, toDisplayString(unref(t)("Remove")), 1)
                                  ])
                                ])
                              ]),
                              createVNode("tbody", { class: "divide-y divide-gray-200 dark:divide-gray-700" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).items, (i, r) => {
                                  return openBlock(), createBlock("tr", { key: r }, [
                                    createVNode("td", { class: "align-middle whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6 md:pl-0" }, [
                                      createTextVNode(toDisplayString(i.name) + " (" + toDisplayString(i.code) + ") ", 1),
                                      unref(form).errors["items." + r + ".quantity"] ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "text-red-500 mt-1"
                                      }, toDisplayString(unref(form).errors["items." + r + ".quantity"]), 1)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("td", { class: "whitespace-nowrap py-4 px-3 text-sm text-gray-500 w-20 sm:w-40" }, [
                                      createVNode(_sfc_main$4, {
                                        modelValue: i.quantity,
                                        "onUpdate:modelValue": ($event) => i.quantity = $event,
                                        class: "max-w-[80px] sm:max-w-[150px] -mt-4 -mb-3 text-gray-700 dark:text-gray-300"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    createVNode("td", { class: "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0 w-12" }, [
                                      createVNode("div", { class: "flex items-center justify-center" }, [
                                        createVNode("button", {
                                          type: "button",
                                          onClick: ($event) => removeOrderItem(i),
                                          class: "text-red-500 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-100 dark:hover:bg-red-900 p-2 rounded-md -my-2"
                                        }, [
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
                                              d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            })
                                          ]))
                                        ], 8, ["onClick"])
                                      ])
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "border dark:border-gray-700 text-gray-700 dark:text-gray-300 p-4 my-4 rounded-md"
                      }, [
                        createTextVNode(toDisplayString(unref(t)("Please scan barcode or search to add item")) + " ", 1),
                        ((_g = (_f = unref(form)) == null ? void 0 : _f.errors) == null ? void 0 : _g.items) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-red-500 text-sm mt-1"
                        }, toDisplayString(unref(form).errors.items), 1)) : createCommentVNode("", true)
                      ])),
                      createVNode("div", { class: "col-span-full" }, [
                        createVNode(_sfc_main$7, {
                          attachments: __props.edit ? (_h = __props.edit.data) == null ? void 0 : _h.attachments : []
                        }, null, 8, ["attachments"])
                      ]),
                      createVNode("div", { class: "col-span-full" }, [
                        createVNode(_sfc_main$8, {
                          modelValue: unref(form).note,
                          "onUpdate:modelValue": ($event) => unref(form).note = $event,
                          id: "note",
                          error: unref(form).errors.note,
                          label: unref(t)("Note")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                      ])
                    ])
                  ];
                }
              }),
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$9, {
                    on: unref(form).recentlySuccessful,
                    class: "mr-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Saved. `);
                      } else {
                        return [
                          createTextVNode(" Saved. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    type: "submit",
                    loading: unref(form).processing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Save `);
                      } else {
                        return [
                          createTextVNode(" Save ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$9, {
                      on: unref(form).recentlySuccessful,
                      class: "mr-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Saved. ")
                      ]),
                      _: 1
                    }, 8, ["on"]),
                    createVNode(_sfc_main$3, {
                      type: "submit",
                      loading: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Save ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$a, {
              show: read_xslx.value,
              "max-width": "xl",
              closeable: false,
              onClose: () => read_xslx.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="px-6 pt-3 pb-6 print:px-0 bg-gray-100 dark:bg-gray-800"${_scopeId2}><div class="flex items-center justify-between print:hidden"${_scopeId2}><div class="text-lg font-bold"${_scopeId2}>${ssrInterpolate(unref(t)("Items from Excel"))}</div><div class="-mr-2 flex items- gap-2"${_scopeId2}><button class="flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icons, {
                    name: "cross",
                    class: "h-5 w-5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</button></div></div><div class=""${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$b, { onDone: setItems }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "px-6 pt-3 pb-6 print:px-0 bg-gray-100 dark:bg-gray-800" }, [
                      createVNode("div", { class: "flex items-center justify-between print:hidden" }, [
                        createVNode("div", { class: "text-lg font-bold" }, toDisplayString(unref(t)("Items from Excel")), 1),
                        createVNode("div", { class: "-mr-2 flex items- gap-2" }, [
                          createVNode("button", {
                            onClick: ($event) => read_xslx.value = false,
                            class: "flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                          }, [
                            createVNode(_component_icons, {
                              name: "cross",
                              class: "h-5 w-5"
                            })
                          ], 8, ["onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "" }, [
                        createVNode(_sfc_main$b, { onDone: setItems })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                createVNode(_sfc_main$2, {
                  onSubmitted: submit,
                  autocomplete: "off"
                }, {
                  title: withCtx(() => [
                    createTextVNode(toDisplayString(props.edit ? unref(t)("Edit Checkout") : unref(t)("Add New Checkout")), 1)
                  ]),
                  description: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Please fill the form below to {x} item.", { x: props.edit ? unref(t)("update") : unref(t)("add") })) + " ", 1),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        href: _ctx.route("checkouts.index"),
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("List Checkouts")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ]),
                  form: withCtx(() => {
                    var _a, _b, _c, _d;
                    return [
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$4, {
                          type: "date",
                          modelValue: unref(form).date,
                          "onUpdate:modelValue": ($event) => unref(form).date = $event,
                          id: "date",
                          error: unref(form).errors.date,
                          label: unref(t)("Date")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$4, {
                          modelValue: unref(form).reference,
                          "onUpdate:modelValue": ($event) => unref(form).reference = $event,
                          id: "reference",
                          error: unref(form).errors.reference,
                          label: unref(t)("Reference")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$5, {
                          json: true,
                          id: "customer_id",
                          modelValue: customer.value,
                          "onUpdate:modelValue": ($event) => customer.value = $event,
                          searchable: true,
                          label: unref(t)("Customer"),
                          selected: (_a = customer.value) == null ? void 0 : _a.value,
                          error: unref(form).errors.customer_id,
                          suggestions: _ctx.route("search.customers")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "selected", "error", "suggestions"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          multiple: "",
                          modelValue: unref(form).attachments,
                          "onUpdate:modelValue": ($event) => unref(form).attachments = $event,
                          id: "attachments",
                          error: unref(form).errors.attachments,
                          label: unref(t)("Attachment")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                      ]),
                      createVNode("div", { class: "col-span-full" }, [
                        createVNode("div", { class: "mt-3 sm:mt-1 border border-gray-300 dark:border-gray-700 divide-y divide-gray-300 rounded-md transition-all dark:bg-gray-800" }, [
                          createVNode("div", { class: "relative" }, [
                            (openBlock(), createBlock("svg", {
                              class: "pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 20 20",
                              fill: "currentColor",
                              "aria-hidden": "true"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
                                "clip-rule": "evenodd"
                              })
                            ])),
                            withDirectives(createVNode("input", {
                              type: "text",
                              ref_key: "input",
                              ref: input,
                              "onUpdate:modelValue": ($event) => search.value = $event,
                              onBlur: ($event) => blurInput(),
                              class: "h-12 w-full rounded-md border border-transparent px-11 placeholder-gray-400 focus:border-blue-300 dark:focus:border-gray-600 dark:focus:ring-blue-200 dark:focus:ring-opacity-50 focus:ring-2 focus:ring-blue-100 dark:bg-gray-800",
                              placeholder: unref(t)("Scan Barcode OR Search...")
                            }, null, 40, ["onUpdate:modelValue", "onBlur", "placeholder"]), [
                              [vModelText, search.value]
                            ]),
                            createVNode("button", {
                              type: "button",
                              onClick: ($event) => read_xslx.value = true,
                              class: "inline-flex items-center absolute top-1 right-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 py-2 px-3 rounded-md"
                            }, [
                              createVNode("span", { class: "hidden sm:inline-block mr-2" }, toDisplayString(unref(t)("Import")), 1),
                              createVNode(_component_icons, {
                                name: "xlsx",
                                size: "h-6 w-6"
                              })
                            ], 8, ["onClick"])
                          ]),
                          search.value && results.value && results.value.length ? (openBlock(), createBlock("ul", {
                            key: 0,
                            class: "max-h-80 scroll-py-2 overflow-y-auto p-2"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(results.value, (r, i) => {
                              return openBlock(), createBlock("li", { key: i }, [
                                createVNode("button", {
                                  type: "button",
                                  onClick: ($event) => selectItem(r),
                                  class: "block text-left w-full select-none rounded-md px-3 py-2 hover:bg-blue-500 hover:text-white"
                                }, [
                                  createVNode("span", { class: "ml-3 flex-auto truncate" }, toDisplayString(r.label), 1)
                                ], 8, ["onClick"])
                              ]);
                            }), 128))
                          ])) : createCommentVNode("", true)
                        ]),
                        unref(form).items && unref(form).items.length ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "my-6 flex flex-col"
                        }, [
                          createVNode("div", { class: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                            createVNode("div", { class: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8" }, [
                              createVNode("table", { class: "min-w-full border-b border-gray-300 dark:border-gray-700 divide-y divide-gray-300 dark:divide-gray-700" }, [
                                createVNode("thead", null, [
                                  createVNode("tr", null, [
                                    createVNode("th", {
                                      scope: "col",
                                      class: "py-3.5 pl-4 pr-3 text-left text-sm font-bold sm:pl-6 md:pl-0"
                                    }, toDisplayString(unref(t)("Item")), 1),
                                    createVNode("th", {
                                      scope: "col",
                                      class: "py-3.5 px-3 text-left text-sm font-bold"
                                    }, toDisplayString(unref(t)("Quantity")), 1),
                                    createVNode("th", {
                                      scope: "col",
                                      class: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                                    }, [
                                      createVNode("span", { class: "sr-only" }, toDisplayString(unref(t)("Remove")), 1)
                                    ])
                                  ])
                                ]),
                                createVNode("tbody", { class: "divide-y divide-gray-200 dark:divide-gray-700" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(form).items, (i, r) => {
                                    return openBlock(), createBlock("tr", { key: r }, [
                                      createVNode("td", { class: "align-middle whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6 md:pl-0" }, [
                                        createTextVNode(toDisplayString(i.name) + " (" + toDisplayString(i.code) + ") ", 1),
                                        unref(form).errors["items." + r + ".quantity"] ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "text-red-500 mt-1"
                                        }, toDisplayString(unref(form).errors["items." + r + ".quantity"]), 1)) : createCommentVNode("", true)
                                      ]),
                                      createVNode("td", { class: "whitespace-nowrap py-4 px-3 text-sm text-gray-500 w-20 sm:w-40" }, [
                                        createVNode(_sfc_main$4, {
                                          modelValue: i.quantity,
                                          "onUpdate:modelValue": ($event) => i.quantity = $event,
                                          class: "max-w-[80px] sm:max-w-[150px] -mt-4 -mb-3 text-gray-700 dark:text-gray-300"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      createVNode("td", { class: "relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 md:pr-0 w-12" }, [
                                        createVNode("div", { class: "flex items-center justify-center" }, [
                                          createVNode("button", {
                                            type: "button",
                                            onClick: ($event) => removeOrderItem(i),
                                            class: "text-red-500 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-100 dark:hover:bg-red-900 p-2 rounded-md -my-2"
                                          }, [
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
                                                d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                              })
                                            ]))
                                          ], 8, ["onClick"])
                                        ])
                                      ])
                                    ]);
                                  }), 128))
                                ])
                              ])
                            ])
                          ])
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "border dark:border-gray-700 text-gray-700 dark:text-gray-300 p-4 my-4 rounded-md"
                        }, [
                          createTextVNode(toDisplayString(unref(t)("Please scan barcode or search to add item")) + " ", 1),
                          ((_c = (_b = unref(form)) == null ? void 0 : _b.errors) == null ? void 0 : _c.items) ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-red-500 text-sm mt-1"
                          }, toDisplayString(unref(form).errors.items), 1)) : createCommentVNode("", true)
                        ])),
                        createVNode("div", { class: "col-span-full" }, [
                          createVNode(_sfc_main$7, {
                            attachments: __props.edit ? (_d = __props.edit.data) == null ? void 0 : _d.attachments : []
                          }, null, 8, ["attachments"])
                        ]),
                        createVNode("div", { class: "col-span-full" }, [
                          createVNode(_sfc_main$8, {
                            modelValue: unref(form).note,
                            "onUpdate:modelValue": ($event) => unref(form).note = $event,
                            id: "note",
                            error: unref(form).errors.note,
                            label: unref(t)("Note")
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                        ])
                      ])
                    ];
                  }),
                  actions: withCtx(() => [
                    createVNode(_sfc_main$9, {
                      on: unref(form).recentlySuccessful,
                      class: "mr-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Saved. ")
                      ]),
                      _: 1
                    }, 8, ["on"]),
                    createVNode(_sfc_main$3, {
                      type: "submit",
                      loading: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Save ")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              createVNode(_sfc_main$a, {
                show: read_xslx.value,
                "max-width": "xl",
                closeable: false,
                onClose: () => read_xslx.value = false
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "px-6 pt-3 pb-6 print:px-0 bg-gray-100 dark:bg-gray-800" }, [
                    createVNode("div", { class: "flex items-center justify-between print:hidden" }, [
                      createVNode("div", { class: "text-lg font-bold" }, toDisplayString(unref(t)("Items from Excel")), 1),
                      createVNode("div", { class: "-mr-2 flex items- gap-2" }, [
                        createVNode("button", {
                          onClick: ($event) => read_xslx.value = false,
                          class: "flex items-center justify-center h-8 w-8 rounded-full text-gray-600 hover:text-gray-800 hover:bg-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                        }, [
                          createVNode(_component_icons, {
                            name: "cross",
                            class: "h-5 w-5"
                          })
                        ], 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "" }, [
                      createVNode(_sfc_main$b, { onDone: setItems })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkout/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
