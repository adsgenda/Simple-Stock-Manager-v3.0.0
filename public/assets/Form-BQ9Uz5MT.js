import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./Button-BSEDsKOy.js";
import { _ as _sfc_main$4 } from "./TextInput-DzNv42um.js";
import { _ as _sfc_main$1 } from "./AppLayout-C0A7MbFs.js";
import { _ as _sfc_main$2 } from "./FormSection-DIJ1oa3J.js";
import { _ as _sfc_main$5 } from "./ActionMessage-DVIrNK03.js";
import "./LoadingButton-BUTNmM5n.js";
import "../ssr.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "uuid";
import "./Label-DhVQiNLB.js";
import "./Input-Cp6lSzEq.js";
import "./InputError-DN7DJAFH.js";
import "./Modal-Bhnq5Kl7.js";
import "./ApplicationMark-BHFUDJFo.js";
import "./SectionTitle-cqRrKTqi.js";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["edit"],
  setup(__props) {
    const form = useForm({ name: null, email: null, phone: null, company: null, cf1: null, cf2: null });
    const props = __props;
    if (props.edit) {
      form.name = props.edit.data.name;
      form.email = props.edit.data.email;
      form.phone = props.edit.data.phone;
      form.company = props.edit.data.company;
      form.cf1 = props.edit.data.cf1;
      form.cf2 = props.edit.data.cf2;
    }
    const { t } = useI18n({});
    function submit() {
      let method = props.edit ? "put" : "post";
      let url = props.edit ? route("suppliers.update", props.edit.data.id) : route("suppliers.store");
      form[method](url, {
        preserveScroll: true,
        onSuccess: () => {
          props.edit ? "" : form.reset();
        },
        onError: () => {
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
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: props.edit ? unref(t)("Edit Supplier") : unref(t)("Add New Supplier")
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
                  _push3(`${ssrInterpolate(props.edit ? unref(t)("Edit Supplier") : unref(t)("Add New Supplier"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.edit ? unref(t)("Edit Supplier") : unref(t)("Add New Supplier")), 1)
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Please fill the form below to {x} item.", { x: props.edit ? unref(t)("update") : unref(t)("add") }))} <div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    href: _ctx.route("suppliers.index"),
                    class: "mt-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("List Suppliers"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List Suppliers")), 1)
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
                        href: _ctx.route("suppliers.index"),
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("List Suppliers")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ];
                }
              }),
              form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
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
                    modelValue: unref(form).company,
                    "onUpdate:modelValue": ($event) => unref(form).company = $event,
                    id: "company",
                    error: unref(form).errors.company,
                    label: unref(t)("Company")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    id: "email",
                    error: unref(form).errors.email,
                    label: unref(t)("Email")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).phone,
                    "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                    id: "phone",
                    error: unref(form).errors.phone,
                    label: unref(t)("Phone")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).cf1,
                    "onUpdate:modelValue": ($event) => unref(form).cf1 = $event,
                    id: "cf1",
                    error: unref(form).errors.cf1,
                    label: unref(t)(((_a = _ctx.$settings) == null ? void 0 : _a.supplier_cf1) || "Custom Field 1")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).cf2,
                    "onUpdate:modelValue": ($event) => unref(form).cf2 = $event,
                    id: "cf2",
                    error: unref(form).errors.cf2,
                    label: unref(t)(((_b = _ctx.$settings) == null ? void 0 : _b.supplier_cf2) || "Custom Field 2")
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
                        modelValue: unref(form).company,
                        "onUpdate:modelValue": ($event) => unref(form).company = $event,
                        id: "company",
                        error: unref(form).errors.company,
                        label: unref(t)("Company")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        id: "email",
                        error: unref(form).errors.email,
                        label: unref(t)("Email")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).phone,
                        "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                        id: "phone",
                        error: unref(form).errors.phone,
                        label: unref(t)("Phone")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).cf1,
                        "onUpdate:modelValue": ($event) => unref(form).cf1 = $event,
                        id: "cf1",
                        error: unref(form).errors.cf1,
                        label: unref(t)(((_c = _ctx.$settings) == null ? void 0 : _c.supplier_cf1) || "Custom Field 1")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).cf2,
                        "onUpdate:modelValue": ($event) => unref(form).cf2 = $event,
                        id: "cf2",
                        error: unref(form).errors.cf2,
                        label: unref(t)(((_d = _ctx.$settings) == null ? void 0 : _d.supplier_cf2) || "Custom Field 2")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ])
                  ];
                }
              }),
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, {
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
                    createVNode(_sfc_main$5, {
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
                    createTextVNode(toDisplayString(props.edit ? unref(t)("Edit Supplier") : unref(t)("Add New Supplier")), 1)
                  ]),
                  description: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Please fill the form below to {x} item.", { x: props.edit ? unref(t)("update") : unref(t)("add") })) + " ", 1),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        href: _ctx.route("suppliers.index"),
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("List Suppliers")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ]),
                  form: withCtx(() => {
                    var _a, _b;
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
                          modelValue: unref(form).company,
                          "onUpdate:modelValue": ($event) => unref(form).company = $event,
                          id: "company",
                          error: unref(form).errors.company,
                          label: unref(t)("Company")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$4, {
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          id: "email",
                          error: unref(form).errors.email,
                          label: unref(t)("Email")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$4, {
                          modelValue: unref(form).phone,
                          "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                          id: "phone",
                          error: unref(form).errors.phone,
                          label: unref(t)("Phone")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$4, {
                          modelValue: unref(form).cf1,
                          "onUpdate:modelValue": ($event) => unref(form).cf1 = $event,
                          id: "cf1",
                          error: unref(form).errors.cf1,
                          label: unref(t)(((_a = _ctx.$settings) == null ? void 0 : _a.supplier_cf1) || "Custom Field 1")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$4, {
                          modelValue: unref(form).cf2,
                          "onUpdate:modelValue": ($event) => unref(form).cf2 = $event,
                          id: "cf2",
                          error: unref(form).errors.cf2,
                          label: unref(t)(((_b = _ctx.$settings) == null ? void 0 : _b.supplier_cf2) || "Custom Field 2")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                      ])
                    ];
                  }),
                  actions: withCtx(() => [
                    createVNode(_sfc_main$5, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Supplier/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
