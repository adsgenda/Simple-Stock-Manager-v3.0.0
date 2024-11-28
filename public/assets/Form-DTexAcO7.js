import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./Button-BSEDsKOy.js";
import { C as CheckBox } from "./CheckBox-CSZamrWp.js";
import { _ as _sfc_main$4 } from "./TextInput-DzNv42um.js";
import { _ as _sfc_main$1 } from "./AppLayout-C0A7MbFs.js";
import { _ as _sfc_main$5 } from "./InputError-DN7DJAFH.js";
import { _ as _sfc_main$2 } from "./FormSection-DIJ1oa3J.js";
import { _ as _sfc_main$6 } from "./ActionMessage-DVIrNK03.js";
import "./LoadingButton-BUTNmM5n.js";
import "../ssr.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "uuid";
import "./Checkbox-CqXn6Y6l.js";
import "./Label-DhVQiNLB.js";
import "./Input-Cp6lSzEq.js";
import "./Modal-Bhnq5Kl7.js";
import "./ApplicationMark-BHFUDJFo.js";
import "./SectionTitle-cqRrKTqi.js";
const _sfc_main = {
  __name: "Form",
  __ssrInlineRender: true,
  props: ["edit", "roles"],
  setup(__props) {
    const form = useForm({ name: null, email: null, password: null, password_confirmation: null, roles: [], view_all: null, edit_all: null });
    const props = __props;
    if (props.edit) {
      form.name = props.edit.data.name;
      form.email = props.edit.data.email;
      form.password = props.edit.data.password;
      form.password_confirmation = props.edit.data.password_confirmation;
      form.roles = props.edit.data.roles.map((r) => r.name);
      form.view_all = props.edit.view_all;
      form.edit_all = props.edit.edit_all;
    }
    const { t } = useI18n({});
    function submit() {
      let method = props.edit ? "put" : "post";
      let url = props.edit ? route("users.update", props.edit.data.id) : route("users.store");
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
        title: props.edit ? unref(t)("Edit User") : unref(t)("Add New User")
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
                  _push3(`${ssrInterpolate(props.edit ? unref(t)("Edit User") : unref(t)("Add New User"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.edit ? unref(t)("Edit User") : unref(t)("Add New User")), 1)
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Please fill the form below to {x} item.", { x: props.edit ? unref(t)("update") : unref(t)("add") }))} <div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    href: _ctx.route("users.index"),
                    class: "mt-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("List Users"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List Users")), 1)
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
                        href: _ctx.route("users.index"),
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("List Users")), 1)
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
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    id: "email",
                    type: "email",
                    error: unref(form).errors.email,
                    label: unref(t)("Email")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    id: "password",
                    type: "password",
                    error: unref(form).errors.password,
                    label: unref(t)("Password")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    type: "password",
                    id: "password_confirmation",
                    label: unref(t)("Confirm Password"),
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    error: unref(form).errors.password_confirmation
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-full"${_scopeId2}>`);
                  if (__props.roles && __props.roles.length) {
                    _push3(`<div class="flex flex-wrap items-center gap-x-6 gap-y-3 mb-4"${_scopeId2}><label class="block w-full font-medium"${_scopeId2}>${ssrInterpolate(unref(t)("Roles"))}</label><!--[-->`);
                    ssrRenderList(__props.roles, (role) => {
                      _push3(ssrRenderComponent(CheckBox, {
                        id: role.name,
                        value: role.name,
                        label: unref(t)(role.name),
                        error: unref(form).errors.roles,
                        checked: unref(form).roles,
                        "onUpdate:checked": ($event) => unref(form).roles = $event
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                    if (unref(form).errors.roles) {
                      _push3(ssrRenderComponent(_sfc_main$5, {
                        message: unref(form).errors.roles,
                        class: "w-full -mt-1"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<h1 class="font-bold mb-2"${_scopeId2}>${ssrInterpolate(unref(t)("Permissions"))}</h1><div class="flex flex-col lg:flex-row gap-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(CheckBox, {
                    id: "view_all",
                    checked: unref(form).view_all,
                    "onUpdate:checked": ($event) => unref(form).view_all = $event,
                    label: unref(t)("Can view all records")
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(CheckBox, {
                    id: "edit_all",
                    checked: unref(form).edit_all,
                    "onUpdate:checked": ($event) => unref(form).edit_all = $event,
                    label: unref(t)("Can edit all records")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
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
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        id: "email",
                        type: "email",
                        error: unref(form).errors.email,
                        label: unref(t)("Email")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        id: "password",
                        type: "password",
                        error: unref(form).errors.password,
                        label: unref(t)("Password")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        type: "password",
                        id: "password_confirmation",
                        label: unref(t)("Confirm Password"),
                        modelValue: unref(form).password_confirmation,
                        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                        error: unref(form).errors.password_confirmation
                      }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                    ]),
                    createVNode("div", { class: "col-span-full" }, [
                      __props.roles && __props.roles.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex flex-wrap items-center gap-x-6 gap-y-3 mb-4"
                      }, [
                        createVNode("label", { class: "block w-full font-medium" }, toDisplayString(unref(t)("Roles")), 1),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
                          return openBlock(), createBlock(CheckBox, {
                            key: role.name,
                            id: role.name,
                            value: role.name,
                            label: unref(t)(role.name),
                            error: unref(form).errors.roles,
                            checked: unref(form).roles,
                            "onUpdate:checked": ($event) => unref(form).roles = $event
                          }, null, 8, ["id", "value", "label", "error", "checked", "onUpdate:checked"]);
                        }), 128)),
                        unref(form).errors.roles ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          message: unref(form).errors.roles,
                          class: "w-full -mt-1"
                        }, null, 8, ["message"])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createVNode("h1", { class: "font-bold mb-2" }, toDisplayString(unref(t)("Permissions")), 1),
                      createVNode("div", { class: "flex flex-col lg:flex-row gap-6" }, [
                        createVNode(CheckBox, {
                          id: "view_all",
                          checked: unref(form).view_all,
                          "onUpdate:checked": ($event) => unref(form).view_all = $event,
                          label: unref(t)("Can view all records")
                        }, null, 8, ["checked", "onUpdate:checked", "label"]),
                        createVNode(CheckBox, {
                          id: "edit_all",
                          checked: unref(form).edit_all,
                          "onUpdate:checked": ($event) => unref(form).edit_all = $event,
                          label: unref(t)("Can edit all records")
                        }, null, 8, ["checked", "onUpdate:checked", "label"])
                      ])
                    ])
                  ];
                }
              }),
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$6, {
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
                    createVNode(_sfc_main$6, {
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
                    createTextVNode(toDisplayString(props.edit ? unref(t)("Edit User") : unref(t)("Add New User")), 1)
                  ]),
                  description: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Please fill the form below to {x} item.", { x: props.edit ? unref(t)("update") : unref(t)("add") })) + " ", 1),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        href: _ctx.route("users.index"),
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("List Users")), 1)
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
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        id: "email",
                        type: "email",
                        error: unref(form).errors.email,
                        label: unref(t)("Email")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        id: "password",
                        type: "password",
                        error: unref(form).errors.password,
                        label: unref(t)("Password")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        type: "password",
                        id: "password_confirmation",
                        label: unref(t)("Confirm Password"),
                        modelValue: unref(form).password_confirmation,
                        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                        error: unref(form).errors.password_confirmation
                      }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                    ]),
                    createVNode("div", { class: "col-span-full" }, [
                      __props.roles && __props.roles.length ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex flex-wrap items-center gap-x-6 gap-y-3 mb-4"
                      }, [
                        createVNode("label", { class: "block w-full font-medium" }, toDisplayString(unref(t)("Roles")), 1),
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.roles, (role) => {
                          return openBlock(), createBlock(CheckBox, {
                            key: role.name,
                            id: role.name,
                            value: role.name,
                            label: unref(t)(role.name),
                            error: unref(form).errors.roles,
                            checked: unref(form).roles,
                            "onUpdate:checked": ($event) => unref(form).roles = $event
                          }, null, 8, ["id", "value", "label", "error", "checked", "onUpdate:checked"]);
                        }), 128)),
                        unref(form).errors.roles ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          message: unref(form).errors.roles,
                          class: "w-full -mt-1"
                        }, null, 8, ["message"])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      createVNode("h1", { class: "font-bold mb-2" }, toDisplayString(unref(t)("Permissions")), 1),
                      createVNode("div", { class: "flex flex-col lg:flex-row gap-6" }, [
                        createVNode(CheckBox, {
                          id: "view_all",
                          checked: unref(form).view_all,
                          "onUpdate:checked": ($event) => unref(form).view_all = $event,
                          label: unref(t)("Can view all records")
                        }, null, 8, ["checked", "onUpdate:checked", "label"]),
                        createVNode(CheckBox, {
                          id: "edit_all",
                          checked: unref(form).edit_all,
                          "onUpdate:checked": ($event) => unref(form).edit_all = $event,
                          label: unref(t)("Can edit all records")
                        }, null, 8, ["checked", "onUpdate:checked", "label"])
                      ])
                    ])
                  ]),
                  actions: withCtx(() => [
                    createVNode(_sfc_main$6, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
