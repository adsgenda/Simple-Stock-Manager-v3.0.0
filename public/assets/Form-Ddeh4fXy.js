import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./Button-BSEDsKOy.js";
import { _ as _sfc_main$6 } from "./FileInput-FmWcaIk9.js";
import { _ as _sfc_main$4 } from "./TextInput-DzNv42um.js";
import { _ as _sfc_main$1 } from "./AppLayout-C0A7MbFs.js";
import "./SelectInput-BdgsEkVk.js";
import { _ as _sfc_main$2 } from "./FormSection-DIJ1oa3J.js";
import { _ as _sfc_main$5 } from "./AutoCompleteApi-BmPBo7oa.js";
import { _ as _sfc_main$7 } from "./ActionMessage-DVIrNK03.js";
import "./LoadingButton-BUTNmM5n.js";
import "../ssr.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "uuid";
import "./Label-DhVQiNLB.js";
import "./InputError-DN7DJAFH.js";
import "./Input-Cp6lSzEq.js";
import "./Modal-Bhnq5Kl7.js";
import "./ApplicationMark-BHFUDJFo.js";
import "./SectionTitle-cqRrKTqi.js";
import "axios";
import "lodash/throttle.js";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["categories", "edit"],
  setup(__props) {
    ref(null);
    const form = useForm({
      name: null,
      code: null,
      symbology: null,
      category_id: null,
      quantity: null,
      unit: null,
      alert_quantity: null,
      photo: null,
      _method: "post"
    });
    const props = __props;
    if (props.edit) {
      form.name = props.edit.data.name;
      form.code = props.edit.data.code;
      form.symbology = props.edit.data.symbology;
      form.category_id = props.edit.data.category_id;
      form.quantity = props.edit.data.quantity;
      form.unit = props.edit.data.unit;
      form.alert_quantity = props.edit.data.alert_quantity;
    }
    const { t } = useI18n({});
    function submit() {
      form._method = props.edit ? "put" : "post";
      let url = props.edit ? route("items.update", props.edit.data.id) : route("items.store");
      form.post(url, {
        preserveScroll: true,
        onSuccess: () => {
          props.edit ? "" : form.reset();
        },
        onError: () => {
          if (form.errors.quantity) {
            document.getElementById("quantity").focus();
          }
          if (form.errors.code) {
            document.getElementById("code").focus();
          }
          if (form.errors.name) {
            document.getElementById("name").focus();
          }
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: props.edit ? unref(t)("Edit Item") : unref(t)("Add New Item")
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
                  _push3(`${ssrInterpolate(props.edit ? unref(t)("Edit Item") : unref(t)("Add New Item"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.edit ? unref(t)("Edit Item") : unref(t)("Add New Item")), 1)
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Please fill the form below to {x} item.", { x: props.edit ? unref(t)("update") : unref(t)("add") }))} <div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    href: _ctx.route("items.index"),
                    class: "mt-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("List Items"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List Items")), 1)
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
                        href: _ctx.route("items.index"),
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("List Items")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ];
                }
              }),
              form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    id: "name",
                    error: unref(form).errors.name,
                    label: unref(t)("Name")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": ($event) => unref(form).code = $event,
                    id: "code",
                    error: unref(form).errors.code,
                    label: unref(t)("Code")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    id: "symbology",
                    searchable: false,
                    modelValue: unref(form).symbology,
                    "onUpdate:modelValue": ($event) => unref(form).symbology = $event,
                    label: unref(t)("Symbology"),
                    error: unref(form).errors.symbology,
                    suggestions: ["CODE128", "CODE39", "EAN8", "EAN13", "UPC"]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    id: "category_id",
                    searchable: true,
                    label: unref(t)("Category"),
                    suggestions: __props.categories,
                    modelValue: unref(form).category_id,
                    "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                    error: unref(form).errors.category_id
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).quantity,
                    "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                    id: "quantity",
                    error: unref(form).errors.quantity,
                    label: unref(t)("Quantity")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).unit,
                    "onUpdate:modelValue": ($event) => unref(form).unit = $event,
                    id: "unit",
                    error: unref(form).errors.unit,
                    label: unref(t)("Unit")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).alert_quantity,
                    "onUpdate:modelValue": ($event) => unref(form).alert_quantity = $event,
                    id: "alert_quantity",
                    error: unref(form).errors.alert_quantity,
                    label: unref(t)("Alert Quantity")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form).photo,
                    "onUpdate:modelValue": ($event) => unref(form).photo = $event,
                    id: "photo",
                    error: unref(form).errors.photo,
                    label: unref(t)("Photo")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).name,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        id: "name",
                        error: unref(form).errors.name,
                        label: unref(t)("Name")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).code,
                        "onUpdate:modelValue": ($event) => unref(form).code = $event,
                        id: "code",
                        error: unref(form).errors.code,
                        label: unref(t)("Code")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$5, {
                        id: "symbology",
                        searchable: false,
                        modelValue: unref(form).symbology,
                        "onUpdate:modelValue": ($event) => unref(form).symbology = $event,
                        label: unref(t)("Symbology"),
                        error: unref(form).errors.symbology,
                        suggestions: ["CODE128", "CODE39", "EAN8", "EAN13", "UPC"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "error"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$5, {
                        id: "category_id",
                        searchable: true,
                        label: unref(t)("Category"),
                        suggestions: __props.categories,
                        modelValue: unref(form).category_id,
                        "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                        error: unref(form).errors.category_id
                      }, null, 8, ["label", "suggestions", "modelValue", "onUpdate:modelValue", "error"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).quantity,
                        "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                        id: "quantity",
                        error: unref(form).errors.quantity,
                        label: unref(t)("Quantity")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).unit,
                        "onUpdate:modelValue": ($event) => unref(form).unit = $event,
                        id: "unit",
                        error: unref(form).errors.unit,
                        label: unref(t)("Unit")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).alert_quantity,
                        "onUpdate:modelValue": ($event) => unref(form).alert_quantity = $event,
                        id: "alert_quantity",
                        error: unref(form).errors.alert_quantity,
                        label: unref(t)("Alert Quantity")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).photo,
                        "onUpdate:modelValue": ($event) => unref(form).photo = $event,
                        id: "photo",
                        error: unref(form).errors.photo,
                        label: unref(t)("Photo")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ])
                  ];
                }
              }),
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, {
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
                    createVNode(_sfc_main$7, {
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
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                createVNode(_sfc_main$2, {
                  onSubmitted: submit,
                  autocomplete: "off"
                }, {
                  title: withCtx(() => [
                    createTextVNode(toDisplayString(props.edit ? unref(t)("Edit Item") : unref(t)("Add New Item")), 1)
                  ]),
                  description: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Please fill the form below to {x} item.", { x: props.edit ? unref(t)("update") : unref(t)("add") })) + " ", 1),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        href: _ctx.route("items.index"),
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("List Items")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ]),
                  form: withCtx(() => [
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).name,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        id: "name",
                        error: unref(form).errors.name,
                        label: unref(t)("Name")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).code,
                        "onUpdate:modelValue": ($event) => unref(form).code = $event,
                        id: "code",
                        error: unref(form).errors.code,
                        label: unref(t)("Code")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$5, {
                        id: "symbology",
                        searchable: false,
                        modelValue: unref(form).symbology,
                        "onUpdate:modelValue": ($event) => unref(form).symbology = $event,
                        label: unref(t)("Symbology"),
                        error: unref(form).errors.symbology,
                        suggestions: ["CODE128", "CODE39", "EAN8", "EAN13", "UPC"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "error"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$5, {
                        id: "category_id",
                        searchable: true,
                        label: unref(t)("Category"),
                        suggestions: __props.categories,
                        modelValue: unref(form).category_id,
                        "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                        error: unref(form).errors.category_id
                      }, null, 8, ["label", "suggestions", "modelValue", "onUpdate:modelValue", "error"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).quantity,
                        "onUpdate:modelValue": ($event) => unref(form).quantity = $event,
                        id: "quantity",
                        error: unref(form).errors.quantity,
                        label: unref(t)("Quantity")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).unit,
                        "onUpdate:modelValue": ($event) => unref(form).unit = $event,
                        id: "unit",
                        error: unref(form).errors.unit,
                        label: unref(t)("Unit")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).alert_quantity,
                        "onUpdate:modelValue": ($event) => unref(form).alert_quantity = $event,
                        id: "alert_quantity",
                        error: unref(form).errors.alert_quantity,
                        label: unref(t)("Alert Quantity")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).photo,
                        "onUpdate:modelValue": ($event) => unref(form).photo = $event,
                        id: "photo",
                        error: unref(form).errors.photo,
                        label: unref(t)("Photo")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ])
                  ]),
                  actions: withCtx(() => [
                    createVNode(_sfc_main$7, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Item/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
