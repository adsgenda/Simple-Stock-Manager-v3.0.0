import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./Button-BSEDsKOy.js";
import { C as CheckBox } from "./CheckBox-CSZamrWp.js";
import { _ as _sfc_main$4 } from "./TextInput-DzNv42um.js";
import { _ as _sfc_main$1 } from "./AppLayout-C0A7MbFs.js";
import { _ as _sfc_main$2 } from "./FormSection-DIJ1oa3J.js";
import { _ as _sfc_main$5 } from "./ActionMessage-DVIrNK03.js";
import "./LoadingButton-BUTNmM5n.js";
import "../ssr.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "uuid";
import "./Checkbox-CqXn6Y6l.js";
import "./InputError-DN7DJAFH.js";
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
    const form = useForm({ name: null, permissions: [] });
    const props = __props;
    if (props.edit) {
      form.name = props.edit.data.name;
      form.permissions = props.edit.data.permissions || [];
    }
    const { t } = useI18n({});
    const updatePermissions = (v) => {
      if (form.permissions.includes(v)) {
        form.permissions = form.permissions.filter((r) => r != v);
      } else {
        form.permissions = [...form.permissions, v];
      }
    };
    function submit() {
      let method = props.edit ? "put" : "post";
      let url = props.edit ? route("roles.update", props.edit.data.id) : route("roles.store");
      form[method](url, {
        preserveScroll: true,
        onSuccess: () => {
          props.edit ? "" : form.reset();
        },
        onError: () => {
          if (form.errors.name) {
            document.getElementById("name").focus();
          }
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: props.edit ? unref(t)("Edit Role") : unref(t)("Add New Role")
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
                  _push3(`${ssrInterpolate(props.edit ? unref(t)("Edit Role") : unref(t)("Add New Role"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.edit ? unref(t)("Edit Role") : unref(t)("Add New Role")), 1)
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Please fill the form below to {x} item.", { x: props.edit ? unref(t)("update") : unref(t)("add") }))} <div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    href: _ctx.route("roles.index"),
                    class: "mt-4"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("List Roles"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List Roles")), 1)
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
                        href: _ctx.route("roles.index"),
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("List Roles")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ];
                }
              }),
              form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="col-span-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    id: "name",
                    error: unref(form).errors.name,
                    label: unref(t)("Name")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (__props.edit) {
                    _push3(`<div class="col-span-full"${_scopeId2}><div class="mt-6"${_scopeId2}><label class="block w-full font-bold mb-2"${_scopeId2}>${ssrInterpolate(unref(t)("Checkins"))}</label><div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "read-checkins",
                      value: "read-checkins",
                      onInput: ($event) => updatePermissions("read-checkins"),
                      label: unref(t)("View {x}", { x: unref(t)("Checkins") }),
                      checked: unref(form).permissions.includes("read-checkins")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "create-checkins",
                      value: "create-checkins",
                      onInput: ($event) => updatePermissions("create-checkins"),
                      label: unref(t)("Create {x}", { x: unref(t)("Checkins") }),
                      checked: unref(form).permissions.includes("create-checkins")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "update-checkins",
                      value: "update-checkins",
                      onInput: ($event) => updatePermissions("update-checkins"),
                      label: unref(t)("Update {x}", { x: unref(t)("Checkins") }),
                      checked: unref(form).permissions.includes("update-checkins")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "delete-checkins",
                      value: "delete-checkins",
                      onInput: ($event) => updatePermissions("delete-checkins"),
                      label: unref(t)("Delete {x}", { x: unref(t)("Checkins") }),
                      checked: unref(form).permissions.includes("delete-checkins")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="my-6"${_scopeId2}><label class="block w-full font-bold mb-2"${_scopeId2}>${ssrInterpolate(unref(t)("Checkouts"))}</label><div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "read-checkouts",
                      value: "read-checkouts",
                      onInput: ($event) => updatePermissions("read-checkouts"),
                      label: unref(t)("View {x}", { x: unref(t)("Checkouts") }),
                      checked: unref(form).permissions.includes("read-checkouts")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "create-checkouts",
                      value: "create-checkouts",
                      onInput: ($event) => updatePermissions("create-checkouts"),
                      label: unref(t)("Create {x}", { x: unref(t)("Checkouts") }),
                      checked: unref(form).permissions.includes("create-checkouts")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "update-checkouts",
                      value: "update-checkouts",
                      onInput: ($event) => updatePermissions("update-checkouts"),
                      label: unref(t)("Update {x}", { x: unref(t)("Checkouts") }),
                      checked: unref(form).permissions.includes("update-checkouts")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "delete-checkouts",
                      value: "delete-checkouts",
                      onInput: ($event) => updatePermissions("delete-checkouts"),
                      label: unref(t)("Delete {x}", { x: unref(t)("Checkouts") }),
                      checked: unref(form).permissions.includes("delete-checkouts")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="my-6"${_scopeId2}><label class="block w-full font-bold mb-2"${_scopeId2}>${ssrInterpolate(unref(t)("Items"))}</label><div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "read-items",
                      value: "read-items",
                      onInput: ($event) => updatePermissions("read-items"),
                      label: unref(t)("View {x}", { x: unref(t)("Items") }),
                      checked: unref(form).permissions.includes("read-items")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "create-items",
                      value: "create-items",
                      onInput: ($event) => updatePermissions("create-items"),
                      label: unref(t)("Create {x}", { x: unref(t)("Items") }),
                      checked: unref(form).permissions.includes("create-items")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "update-items",
                      value: "update-items",
                      onInput: ($event) => updatePermissions("update-items"),
                      label: unref(t)("Update {x}", { x: unref(t)("Items") }),
                      checked: unref(form).permissions.includes("update-items")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "import-items",
                      value: "import-items",
                      onInput: ($event) => updatePermissions("import-items"),
                      label: unref(t)("Import {x}", { x: unref(t)("Items") }),
                      checked: unref(form).permissions.includes("import-items")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "delete-items",
                      value: "delete-items",
                      onInput: ($event) => updatePermissions("delete-items"),
                      label: unref(t)("Delete {x}", { x: unref(t)("Items") }),
                      checked: unref(form).permissions.includes("delete-items")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="my-6"${_scopeId2}><label class="block w-full font-bold mb-2"${_scopeId2}>${ssrInterpolate(unref(t)("Customers"))}</label><div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "read-customers",
                      value: "read-customers",
                      onInput: ($event) => updatePermissions("read-customers"),
                      label: unref(t)("View {x}", { x: unref(t)("Customers") }),
                      checked: unref(form).permissions.includes("read-customers")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "create-customers",
                      value: "create-customers",
                      onInput: ($event) => updatePermissions("create-customers"),
                      label: unref(t)("Create {x}", { x: unref(t)("Customers") }),
                      checked: unref(form).permissions.includes("create-customers")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "update-customers",
                      value: "update-customers",
                      onInput: ($event) => updatePermissions("update-customers"),
                      label: unref(t)("Update {x}", { x: unref(t)("Customers") }),
                      checked: unref(form).permissions.includes("update-customers")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "import-customers",
                      value: "import-customers",
                      onInput: ($event) => updatePermissions("import-customers"),
                      label: unref(t)("Import {x}", { x: unref(t)("Customers") }),
                      checked: unref(form).permissions.includes("import-customers")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "delete-customers",
                      value: "delete-customers",
                      onInput: ($event) => updatePermissions("delete-customers"),
                      label: unref(t)("Delete {x}", { x: unref(t)("Customers") }),
                      checked: unref(form).permissions.includes("delete-customers")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="my-6"${_scopeId2}><label class="block w-full font-bold mb-2"${_scopeId2}>${ssrInterpolate(unref(t)("Suppliers"))}</label><div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "read-suppliers",
                      value: "read-suppliers",
                      onInput: ($event) => updatePermissions("read-suppliers"),
                      label: unref(t)("View {x}", { x: unref(t)("Suppliers") }),
                      checked: unref(form).permissions.includes("read-suppliers")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "create-suppliers",
                      value: "create-suppliers",
                      onInput: ($event) => updatePermissions("create-suppliers"),
                      label: unref(t)("Create {x}", { x: unref(t)("Suppliers") }),
                      checked: unref(form).permissions.includes("create-suppliers")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "update-suppliers",
                      value: "update-suppliers",
                      onInput: ($event) => updatePermissions("update-suppliers"),
                      label: unref(t)("Update {x}", { x: unref(t)("Suppliers") }),
                      checked: unref(form).permissions.includes("update-suppliers")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "import-suppliers",
                      value: "import-suppliers",
                      onInput: ($event) => updatePermissions("import-suppliers"),
                      label: unref(t)("Import {x}", { x: unref(t)("Suppliers") }),
                      checked: unref(form).permissions.includes("import-suppliers")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "delete-suppliers",
                      value: "delete-suppliers",
                      onInput: ($event) => updatePermissions("delete-suppliers"),
                      label: unref(t)("Delete {x}", { x: unref(t)("Suppliers") }),
                      checked: unref(form).permissions.includes("delete-suppliers")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="my-6"${_scopeId2}><label class="block w-full font-bold mb-2"${_scopeId2}>${ssrInterpolate(unref(t)("Categories"))}</label><div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "read-categories",
                      value: "read-categories",
                      onInput: ($event) => updatePermissions("read-categories"),
                      label: unref(t)("View {x}", { x: unref(t)("Categories") }),
                      checked: unref(form).permissions.includes("read-categories")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "create-categories",
                      value: "create-categories",
                      onInput: ($event) => updatePermissions("create-categories"),
                      label: unref(t)("Create {x}", { x: unref(t)("Categories") }),
                      checked: unref(form).permissions.includes("create-categories")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "update-categories",
                      value: "update-categories",
                      onInput: ($event) => updatePermissions("update-categories"),
                      label: unref(t)("Update {x}", { x: unref(t)("Categories") }),
                      checked: unref(form).permissions.includes("update-categories")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "import-categories",
                      value: "import-categories",
                      onInput: ($event) => updatePermissions("import-categories"),
                      label: unref(t)("Import {x}", { x: unref(t)("Categories") }),
                      checked: unref(form).permissions.includes("import-categories")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "delete-categories",
                      value: "delete-categories",
                      onInput: ($event) => updatePermissions("delete-categories"),
                      label: unref(t)("Delete {x}", { x: unref(t)("Categories") }),
                      checked: unref(form).permissions.includes("delete-categories")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="my-6"${_scopeId2}><label class="block w-full font-bold mb-2"${_scopeId2}>${ssrInterpolate(unref(t)("Users"))}</label><div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "read-users",
                      value: "read-users",
                      onInput: ($event) => updatePermissions("read-users"),
                      label: unref(t)("View {x}", { x: unref(t)("Users") }),
                      checked: unref(form).permissions.includes("read-users")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "create-users",
                      value: "create-users",
                      onInput: ($event) => updatePermissions("create-users"),
                      label: unref(t)("Create {x}", { x: unref(t)("Users") }),
                      checked: unref(form).permissions.includes("create-users")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "update-users",
                      value: "update-users",
                      onInput: ($event) => updatePermissions("update-users"),
                      label: unref(t)("Update {x}", { x: unref(t)("Users") }),
                      checked: unref(form).permissions.includes("update-users")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "delete-users",
                      value: "delete-users",
                      onInput: ($event) => updatePermissions("delete-users"),
                      label: unref(t)("Delete {x}", { x: unref(t)("Users") }),
                      checked: unref(form).permissions.includes("delete-users")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="my-6"${_scopeId2}><label class="block w-full font-bold mb-2"${_scopeId2}>${ssrInterpolate(unref(t)("Roles"))}</label><div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "read-roles",
                      value: "read-roles",
                      onInput: ($event) => updatePermissions("read-roles"),
                      label: unref(t)("View {x}", { x: unref(t)("Roles") }),
                      checked: unref(form).permissions.includes("read-roles")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "create-roles",
                      value: "create-roles",
                      onInput: ($event) => updatePermissions("create-roles"),
                      label: unref(t)("Create {x}", { x: unref(t)("Roles") }),
                      checked: unref(form).permissions.includes("create-roles")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "update-roles",
                      value: "update-roles",
                      onInput: ($event) => updatePermissions("update-roles"),
                      label: unref(t)("Update {x}", { x: unref(t)("Roles") }),
                      checked: unref(form).permissions.includes("update-roles")
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "delete-roles",
                      value: "delete-roles",
                      onInput: ($event) => updatePermissions("delete-roles"),
                      label: unref(t)("Delete {x}", { x: unref(t)("Roles") }),
                      checked: unref(form).permissions.includes("delete-roles")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="mt-6"${_scopeId2}><label class="block w-full font-bold mb-2"${_scopeId2}>${ssrInterpolate(unref(t)("Attachments"))}</label><div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "delete-attachments",
                      value: "delete-attachments",
                      onInput: ($event) => updatePermissions("delete-attachments"),
                      label: unref(t)("Delete {x}", { x: unref(t)("Attachments") }),
                      checked: unref(form).permissions.includes("delete-attachments")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="mt-6"${_scopeId2}><label class="block w-full font-bold mb-2"${_scopeId2}>${ssrInterpolate(unref(t)("Activity Logs"))}</label><div class="flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6"${_scopeId2}>`);
                    _push3(ssrRenderComponent(CheckBox, {
                      id: "read-activity",
                      value: "read-activity",
                      onInput: ($event) => updatePermissions("read-activity"),
                      label: unref(t)("View {x}", { x: unref(t)("Activity Logs") }),
                      checked: unref(form).permissions.includes("read-activity")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", { class: "col-span-full" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).name,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        id: "name",
                        error: unref(form).errors.name,
                        label: unref(t)("Name")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    __props.edit ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "col-span-full"
                    }, [
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Checkins")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-checkins",
                            value: "read-checkins",
                            onInput: ($event) => updatePermissions("read-checkins"),
                            label: unref(t)("View {x}", { x: unref(t)("Checkins") }),
                            checked: unref(form).permissions.includes("read-checkins")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-checkins",
                            value: "create-checkins",
                            onInput: ($event) => updatePermissions("create-checkins"),
                            label: unref(t)("Create {x}", { x: unref(t)("Checkins") }),
                            checked: unref(form).permissions.includes("create-checkins")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-checkins",
                            value: "update-checkins",
                            onInput: ($event) => updatePermissions("update-checkins"),
                            label: unref(t)("Update {x}", { x: unref(t)("Checkins") }),
                            checked: unref(form).permissions.includes("update-checkins")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-checkins",
                            value: "delete-checkins",
                            onInput: ($event) => updatePermissions("delete-checkins"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Checkins") }),
                            checked: unref(form).permissions.includes("delete-checkins")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Checkouts")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-checkouts",
                            value: "read-checkouts",
                            onInput: ($event) => updatePermissions("read-checkouts"),
                            label: unref(t)("View {x}", { x: unref(t)("Checkouts") }),
                            checked: unref(form).permissions.includes("read-checkouts")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-checkouts",
                            value: "create-checkouts",
                            onInput: ($event) => updatePermissions("create-checkouts"),
                            label: unref(t)("Create {x}", { x: unref(t)("Checkouts") }),
                            checked: unref(form).permissions.includes("create-checkouts")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-checkouts",
                            value: "update-checkouts",
                            onInput: ($event) => updatePermissions("update-checkouts"),
                            label: unref(t)("Update {x}", { x: unref(t)("Checkouts") }),
                            checked: unref(form).permissions.includes("update-checkouts")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-checkouts",
                            value: "delete-checkouts",
                            onInput: ($event) => updatePermissions("delete-checkouts"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Checkouts") }),
                            checked: unref(form).permissions.includes("delete-checkouts")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Items")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-items",
                            value: "read-items",
                            onInput: ($event) => updatePermissions("read-items"),
                            label: unref(t)("View {x}", { x: unref(t)("Items") }),
                            checked: unref(form).permissions.includes("read-items")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-items",
                            value: "create-items",
                            onInput: ($event) => updatePermissions("create-items"),
                            label: unref(t)("Create {x}", { x: unref(t)("Items") }),
                            checked: unref(form).permissions.includes("create-items")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-items",
                            value: "update-items",
                            onInput: ($event) => updatePermissions("update-items"),
                            label: unref(t)("Update {x}", { x: unref(t)("Items") }),
                            checked: unref(form).permissions.includes("update-items")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "import-items",
                            value: "import-items",
                            onInput: ($event) => updatePermissions("import-items"),
                            label: unref(t)("Import {x}", { x: unref(t)("Items") }),
                            checked: unref(form).permissions.includes("import-items")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-items",
                            value: "delete-items",
                            onInput: ($event) => updatePermissions("delete-items"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Items") }),
                            checked: unref(form).permissions.includes("delete-items")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Customers")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-customers",
                            value: "read-customers",
                            onInput: ($event) => updatePermissions("read-customers"),
                            label: unref(t)("View {x}", { x: unref(t)("Customers") }),
                            checked: unref(form).permissions.includes("read-customers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-customers",
                            value: "create-customers",
                            onInput: ($event) => updatePermissions("create-customers"),
                            label: unref(t)("Create {x}", { x: unref(t)("Customers") }),
                            checked: unref(form).permissions.includes("create-customers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-customers",
                            value: "update-customers",
                            onInput: ($event) => updatePermissions("update-customers"),
                            label: unref(t)("Update {x}", { x: unref(t)("Customers") }),
                            checked: unref(form).permissions.includes("update-customers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "import-customers",
                            value: "import-customers",
                            onInput: ($event) => updatePermissions("import-customers"),
                            label: unref(t)("Import {x}", { x: unref(t)("Customers") }),
                            checked: unref(form).permissions.includes("import-customers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-customers",
                            value: "delete-customers",
                            onInput: ($event) => updatePermissions("delete-customers"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Customers") }),
                            checked: unref(form).permissions.includes("delete-customers")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Suppliers")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-suppliers",
                            value: "read-suppliers",
                            onInput: ($event) => updatePermissions("read-suppliers"),
                            label: unref(t)("View {x}", { x: unref(t)("Suppliers") }),
                            checked: unref(form).permissions.includes("read-suppliers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-suppliers",
                            value: "create-suppliers",
                            onInput: ($event) => updatePermissions("create-suppliers"),
                            label: unref(t)("Create {x}", { x: unref(t)("Suppliers") }),
                            checked: unref(form).permissions.includes("create-suppliers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-suppliers",
                            value: "update-suppliers",
                            onInput: ($event) => updatePermissions("update-suppliers"),
                            label: unref(t)("Update {x}", { x: unref(t)("Suppliers") }),
                            checked: unref(form).permissions.includes("update-suppliers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "import-suppliers",
                            value: "import-suppliers",
                            onInput: ($event) => updatePermissions("import-suppliers"),
                            label: unref(t)("Import {x}", { x: unref(t)("Suppliers") }),
                            checked: unref(form).permissions.includes("import-suppliers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-suppliers",
                            value: "delete-suppliers",
                            onInput: ($event) => updatePermissions("delete-suppliers"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Suppliers") }),
                            checked: unref(form).permissions.includes("delete-suppliers")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Categories")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-categories",
                            value: "read-categories",
                            onInput: ($event) => updatePermissions("read-categories"),
                            label: unref(t)("View {x}", { x: unref(t)("Categories") }),
                            checked: unref(form).permissions.includes("read-categories")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-categories",
                            value: "create-categories",
                            onInput: ($event) => updatePermissions("create-categories"),
                            label: unref(t)("Create {x}", { x: unref(t)("Categories") }),
                            checked: unref(form).permissions.includes("create-categories")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-categories",
                            value: "update-categories",
                            onInput: ($event) => updatePermissions("update-categories"),
                            label: unref(t)("Update {x}", { x: unref(t)("Categories") }),
                            checked: unref(form).permissions.includes("update-categories")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "import-categories",
                            value: "import-categories",
                            onInput: ($event) => updatePermissions("import-categories"),
                            label: unref(t)("Import {x}", { x: unref(t)("Categories") }),
                            checked: unref(form).permissions.includes("import-categories")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-categories",
                            value: "delete-categories",
                            onInput: ($event) => updatePermissions("delete-categories"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Categories") }),
                            checked: unref(form).permissions.includes("delete-categories")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Users")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-users",
                            value: "read-users",
                            onInput: ($event) => updatePermissions("read-users"),
                            label: unref(t)("View {x}", { x: unref(t)("Users") }),
                            checked: unref(form).permissions.includes("read-users")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-users",
                            value: "create-users",
                            onInput: ($event) => updatePermissions("create-users"),
                            label: unref(t)("Create {x}", { x: unref(t)("Users") }),
                            checked: unref(form).permissions.includes("create-users")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-users",
                            value: "update-users",
                            onInput: ($event) => updatePermissions("update-users"),
                            label: unref(t)("Update {x}", { x: unref(t)("Users") }),
                            checked: unref(form).permissions.includes("update-users")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-users",
                            value: "delete-users",
                            onInput: ($event) => updatePermissions("delete-users"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Users") }),
                            checked: unref(form).permissions.includes("delete-users")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Roles")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-roles",
                            value: "read-roles",
                            onInput: ($event) => updatePermissions("read-roles"),
                            label: unref(t)("View {x}", { x: unref(t)("Roles") }),
                            checked: unref(form).permissions.includes("read-roles")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-roles",
                            value: "create-roles",
                            onInput: ($event) => updatePermissions("create-roles"),
                            label: unref(t)("Create {x}", { x: unref(t)("Roles") }),
                            checked: unref(form).permissions.includes("create-roles")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-roles",
                            value: "update-roles",
                            onInput: ($event) => updatePermissions("update-roles"),
                            label: unref(t)("Update {x}", { x: unref(t)("Roles") }),
                            checked: unref(form).permissions.includes("update-roles")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-roles",
                            value: "delete-roles",
                            onInput: ($event) => updatePermissions("delete-roles"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Roles") }),
                            checked: unref(form).permissions.includes("delete-roles")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Attachments")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "delete-attachments",
                            value: "delete-attachments",
                            onInput: ($event) => updatePermissions("delete-attachments"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Attachments") }),
                            checked: unref(form).permissions.includes("delete-attachments")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Activity Logs")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-activity",
                            value: "read-activity",
                            onInput: ($event) => updatePermissions("read-activity"),
                            label: unref(t)("View {x}", { x: unref(t)("Activity Logs") }),
                            checked: unref(form).permissions.includes("read-activity")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
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
                    createTextVNode(toDisplayString(props.edit ? unref(t)("Edit Role") : unref(t)("Add New Role")), 1)
                  ]),
                  description: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Please fill the form below to {x} item.", { x: props.edit ? unref(t)("update") : unref(t)("add") })) + " ", 1),
                    createVNode("div", null, [
                      createVNode(_sfc_main$3, {
                        href: _ctx.route("roles.index"),
                        class: "mt-4"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("List Roles")), 1)
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ]),
                  form: withCtx(() => [
                    createVNode("div", { class: "col-span-full" }, [
                      createVNode(_sfc_main$4, {
                        modelValue: unref(form).name,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        id: "name",
                        error: unref(form).errors.name,
                        label: unref(t)("Name")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    __props.edit ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "col-span-full"
                    }, [
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Checkins")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-checkins",
                            value: "read-checkins",
                            onInput: ($event) => updatePermissions("read-checkins"),
                            label: unref(t)("View {x}", { x: unref(t)("Checkins") }),
                            checked: unref(form).permissions.includes("read-checkins")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-checkins",
                            value: "create-checkins",
                            onInput: ($event) => updatePermissions("create-checkins"),
                            label: unref(t)("Create {x}", { x: unref(t)("Checkins") }),
                            checked: unref(form).permissions.includes("create-checkins")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-checkins",
                            value: "update-checkins",
                            onInput: ($event) => updatePermissions("update-checkins"),
                            label: unref(t)("Update {x}", { x: unref(t)("Checkins") }),
                            checked: unref(form).permissions.includes("update-checkins")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-checkins",
                            value: "delete-checkins",
                            onInput: ($event) => updatePermissions("delete-checkins"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Checkins") }),
                            checked: unref(form).permissions.includes("delete-checkins")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Checkouts")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-checkouts",
                            value: "read-checkouts",
                            onInput: ($event) => updatePermissions("read-checkouts"),
                            label: unref(t)("View {x}", { x: unref(t)("Checkouts") }),
                            checked: unref(form).permissions.includes("read-checkouts")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-checkouts",
                            value: "create-checkouts",
                            onInput: ($event) => updatePermissions("create-checkouts"),
                            label: unref(t)("Create {x}", { x: unref(t)("Checkouts") }),
                            checked: unref(form).permissions.includes("create-checkouts")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-checkouts",
                            value: "update-checkouts",
                            onInput: ($event) => updatePermissions("update-checkouts"),
                            label: unref(t)("Update {x}", { x: unref(t)("Checkouts") }),
                            checked: unref(form).permissions.includes("update-checkouts")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-checkouts",
                            value: "delete-checkouts",
                            onInput: ($event) => updatePermissions("delete-checkouts"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Checkouts") }),
                            checked: unref(form).permissions.includes("delete-checkouts")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Items")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-items",
                            value: "read-items",
                            onInput: ($event) => updatePermissions("read-items"),
                            label: unref(t)("View {x}", { x: unref(t)("Items") }),
                            checked: unref(form).permissions.includes("read-items")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-items",
                            value: "create-items",
                            onInput: ($event) => updatePermissions("create-items"),
                            label: unref(t)("Create {x}", { x: unref(t)("Items") }),
                            checked: unref(form).permissions.includes("create-items")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-items",
                            value: "update-items",
                            onInput: ($event) => updatePermissions("update-items"),
                            label: unref(t)("Update {x}", { x: unref(t)("Items") }),
                            checked: unref(form).permissions.includes("update-items")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "import-items",
                            value: "import-items",
                            onInput: ($event) => updatePermissions("import-items"),
                            label: unref(t)("Import {x}", { x: unref(t)("Items") }),
                            checked: unref(form).permissions.includes("import-items")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-items",
                            value: "delete-items",
                            onInput: ($event) => updatePermissions("delete-items"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Items") }),
                            checked: unref(form).permissions.includes("delete-items")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Customers")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-customers",
                            value: "read-customers",
                            onInput: ($event) => updatePermissions("read-customers"),
                            label: unref(t)("View {x}", { x: unref(t)("Customers") }),
                            checked: unref(form).permissions.includes("read-customers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-customers",
                            value: "create-customers",
                            onInput: ($event) => updatePermissions("create-customers"),
                            label: unref(t)("Create {x}", { x: unref(t)("Customers") }),
                            checked: unref(form).permissions.includes("create-customers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-customers",
                            value: "update-customers",
                            onInput: ($event) => updatePermissions("update-customers"),
                            label: unref(t)("Update {x}", { x: unref(t)("Customers") }),
                            checked: unref(form).permissions.includes("update-customers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "import-customers",
                            value: "import-customers",
                            onInput: ($event) => updatePermissions("import-customers"),
                            label: unref(t)("Import {x}", { x: unref(t)("Customers") }),
                            checked: unref(form).permissions.includes("import-customers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-customers",
                            value: "delete-customers",
                            onInput: ($event) => updatePermissions("delete-customers"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Customers") }),
                            checked: unref(form).permissions.includes("delete-customers")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Suppliers")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-suppliers",
                            value: "read-suppliers",
                            onInput: ($event) => updatePermissions("read-suppliers"),
                            label: unref(t)("View {x}", { x: unref(t)("Suppliers") }),
                            checked: unref(form).permissions.includes("read-suppliers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-suppliers",
                            value: "create-suppliers",
                            onInput: ($event) => updatePermissions("create-suppliers"),
                            label: unref(t)("Create {x}", { x: unref(t)("Suppliers") }),
                            checked: unref(form).permissions.includes("create-suppliers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-suppliers",
                            value: "update-suppliers",
                            onInput: ($event) => updatePermissions("update-suppliers"),
                            label: unref(t)("Update {x}", { x: unref(t)("Suppliers") }),
                            checked: unref(form).permissions.includes("update-suppliers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "import-suppliers",
                            value: "import-suppliers",
                            onInput: ($event) => updatePermissions("import-suppliers"),
                            label: unref(t)("Import {x}", { x: unref(t)("Suppliers") }),
                            checked: unref(form).permissions.includes("import-suppliers")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-suppliers",
                            value: "delete-suppliers",
                            onInput: ($event) => updatePermissions("delete-suppliers"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Suppliers") }),
                            checked: unref(form).permissions.includes("delete-suppliers")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Categories")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-categories",
                            value: "read-categories",
                            onInput: ($event) => updatePermissions("read-categories"),
                            label: unref(t)("View {x}", { x: unref(t)("Categories") }),
                            checked: unref(form).permissions.includes("read-categories")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-categories",
                            value: "create-categories",
                            onInput: ($event) => updatePermissions("create-categories"),
                            label: unref(t)("Create {x}", { x: unref(t)("Categories") }),
                            checked: unref(form).permissions.includes("create-categories")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-categories",
                            value: "update-categories",
                            onInput: ($event) => updatePermissions("update-categories"),
                            label: unref(t)("Update {x}", { x: unref(t)("Categories") }),
                            checked: unref(form).permissions.includes("update-categories")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "import-categories",
                            value: "import-categories",
                            onInput: ($event) => updatePermissions("import-categories"),
                            label: unref(t)("Import {x}", { x: unref(t)("Categories") }),
                            checked: unref(form).permissions.includes("import-categories")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-categories",
                            value: "delete-categories",
                            onInput: ($event) => updatePermissions("delete-categories"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Categories") }),
                            checked: unref(form).permissions.includes("delete-categories")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Users")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-users",
                            value: "read-users",
                            onInput: ($event) => updatePermissions("read-users"),
                            label: unref(t)("View {x}", { x: unref(t)("Users") }),
                            checked: unref(form).permissions.includes("read-users")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-users",
                            value: "create-users",
                            onInput: ($event) => updatePermissions("create-users"),
                            label: unref(t)("Create {x}", { x: unref(t)("Users") }),
                            checked: unref(form).permissions.includes("create-users")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-users",
                            value: "update-users",
                            onInput: ($event) => updatePermissions("update-users"),
                            label: unref(t)("Update {x}", { x: unref(t)("Users") }),
                            checked: unref(form).permissions.includes("update-users")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-users",
                            value: "delete-users",
                            onInput: ($event) => updatePermissions("delete-users"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Users") }),
                            checked: unref(form).permissions.includes("delete-users")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "my-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Roles")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-roles",
                            value: "read-roles",
                            onInput: ($event) => updatePermissions("read-roles"),
                            label: unref(t)("View {x}", { x: unref(t)("Roles") }),
                            checked: unref(form).permissions.includes("read-roles")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "create-roles",
                            value: "create-roles",
                            onInput: ($event) => updatePermissions("create-roles"),
                            label: unref(t)("Create {x}", { x: unref(t)("Roles") }),
                            checked: unref(form).permissions.includes("create-roles")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "update-roles",
                            value: "update-roles",
                            onInput: ($event) => updatePermissions("update-roles"),
                            label: unref(t)("Update {x}", { x: unref(t)("Roles") }),
                            checked: unref(form).permissions.includes("update-roles")
                          }, null, 8, ["onInput", "label", "checked"]),
                          createVNode(CheckBox, {
                            id: "delete-roles",
                            value: "delete-roles",
                            onInput: ($event) => updatePermissions("delete-roles"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Roles") }),
                            checked: unref(form).permissions.includes("delete-roles")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Attachments")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "delete-attachments",
                            value: "delete-attachments",
                            onInput: ($event) => updatePermissions("delete-attachments"),
                            label: unref(t)("Delete {x}", { x: unref(t)("Attachments") }),
                            checked: unref(form).permissions.includes("delete-attachments")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ]),
                      createVNode("div", { class: "mt-6" }, [
                        createVNode("label", { class: "block w-full font-bold mb-2" }, toDisplayString(unref(t)("Activity Logs")), 1),
                        createVNode("div", { class: "flex flex-wrap sm:flex-row items-start gap-x-6 gap-y-2 sm:gap-y-6" }, [
                          createVNode(CheckBox, {
                            id: "read-activity",
                            value: "read-activity",
                            onInput: ($event) => updatePermissions("read-activity"),
                            label: unref(t)("View {x}", { x: unref(t)("Activity Logs") }),
                            checked: unref(form).permissions.includes("read-activity")
                          }, null, 8, ["onInput", "label", "checked"])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Role/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
