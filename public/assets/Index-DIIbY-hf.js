import { ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, withDirectives, vShow, withModifiers, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$9 } from "./Button-BSEDsKOy.js";
import { C as CheckBox } from "./CheckBox-CSZamrWp.js";
import { _ as _sfc_main$3 } from "./Label-DhVQiNLB.js";
import { _ as _sfc_main$6 } from "./TextInput-DzNv42um.js";
import { _ as _sfc_main$1 } from "./AppLayout-C0A7MbFs.js";
import "./SelectInput-BdgsEkVk.js";
import { _ as _sfc_main$2 } from "./FormSection-DIJ1oa3J.js";
import { _ as _sfc_main$5 } from "./InputError-DN7DJAFH.js";
import { _ as _sfc_main$7 } from "./AutoCompleteApi-BmPBo7oa.js";
import "./SectionTitle-cqRrKTqi.js";
import { _ as _sfc_main$8 } from "./ActionMessage-DVIrNK03.js";
import { _ as _sfc_main$4 } from "./SecondaryButton-BOMTPtRI.js";
import "./LoadingButton-BUTNmM5n.js";
import "../ssr.js";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
import "uuid";
import "./Checkbox-CqXn6Y6l.js";
import "./Input-Cp6lSzEq.js";
import "./Modal-Bhnq5Kl7.js";
import "./ApplicationMark-BHFUDJFo.js";
import "axios";
import "lodash/throttle.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: ["current", "languages"],
  setup(__props) {
    const props = __props;
    const { t } = useI18n({});
    const logoInput = ref(null);
    const logoPreview = ref(null);
    const form = useForm({
      name: props.current.name,
      hour12: props.current.hour12 || "1",
      per_page: 0 + props.current.per_page,
      language: props.current.language || "en",
      fraction: 0 + props.current.fraction || 0,
      reference: props.current.reference || "ulid",
      over_selling: props.current.over_selling == 1,
      customer_cf1: props.current.customer_cf1 || null,
      customer_cf2: props.current.customer_cf2 || null,
      supplier_cf1: props.current.supplier_cf1 || null,
      supplier_cf2: props.current.supplier_cf2 || null,
      default_locale: props.current.default_locale || "en-US",
      attachment_exts: props.current.attachment_exts || "jpg,png,pdf,xlsx,docx,zip",
      logo: props.current.logo || null,
      mail_from_address: props.current["mail_from_address"] || "noreply@domain.com",
      mail_from_name: props.current["mail_from_name"] || "SSM Desk",
      mail_default: props.current["mail_default"] || "smtp",
      mail_mailers_smtp_host: props.current["mail_mailers_smtp_host"] || "127.0.0.1",
      mail_mailers_smtp_port: props.current["mail_mailers_smtp_port"] || "2525",
      mail_mailers_smtp_username: props.current["mail_mailers_smtp_username"] || null,
      mail_mailers_smtp_password: props.current["mail_mailers_smtp_password"] || null,
      mail_mailers_smtp_encryption: props.current["mail_mailers_smtp_encryption"] || null,
      services_mailgun_domain: props.current["services_mailgun_domain"] || null,
      services_mailgun_secret: props.current["services_mailgun_secret"] || null,
      services_mailgun_endpoint: props.current["services_mailgun_endpoint"] || null,
      services_sparkpost_secret: props.current["services_sparkpost_secret"] || null,
      services_sparkpost_endpoint: props.current["services_sparkpost_endpoint"] || null,
      services_ses_key: props.current["services_ses_key"] || null,
      services_ses_secret: props.current["services_ses_secret"] || null,
      services_ses_region: props.current["services_ses_region"] || null
    });
    const submit = () => {
      if (logoInput.value) {
        form.logo = logoInput.value.files[0];
      }
      form.post(route("settings.store"));
    };
    const selectNewLogo = () => {
      logoInput.value.click();
    };
    const updateLogoPreview = () => {
      const photo = logoInput.value.files[0];
      if (!photo) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        logoPreview.value = e.target.result;
      };
      reader.readAsDataURL(photo);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: unref(t)("Settings")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              onSubmitted: submit,
              autocomplete: "off"
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Settings"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("Settings")), 1)
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Please fill the form below to update settings."))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("Please fill the form below to update settings.")), 1)
                  ];
                }
              }),
              form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="col-span-full"${_scopeId2}><input type="file" class="hidden" accept=".png,.jpg,.jpeg,.svg"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    for: "logo",
                    value: unref(t)("Logo")
                  }, null, _parent3, _scopeId2));
                  _push3(`<div style="${ssrRenderStyle(!logoPreview.value && unref(form).logo ? null : { display: "none" })}" class="my-2 rounded-md bg-white p-2"${_scopeId2}><img${ssrRenderAttr("src", unref(form).logo)}${ssrRenderAttr("alt", unref(form).name)} class="block rounded w-80 h-20 mx-auto bg-contain"${_scopeId2}></div><div style="${ssrRenderStyle(logoPreview.value ? null : { display: "none" })}" class="my-2 rounded-md bg-white p-2"${_scopeId2}><span class="block rounded w-80 h-20 mx-auto bg-contain bg-no-repeat bg-center" style="${ssrRenderStyle("background-image: url('" + logoPreview.value + "');")}"${_scopeId2}></span></div>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    class: "mt-2 mr-2",
                    type: "button",
                    onClick: selectNewLogo
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(unref(t)("Select Logo"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Select Logo")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    message: unref(form).errors.logo,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    error: unref(form).errors.name,
                    label: unref(t)("Site Name")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    id: "language",
                    searchable: false,
                    modelValue: unref(form).language,
                    "onUpdate:modelValue": ($event) => unref(form).language = $event,
                    label: unref(t)("Language"),
                    error: unref(form).errors.language,
                    suggestions: props.languages
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    id: "reference",
                    searchable: false,
                    modelValue: unref(form).reference,
                    "onUpdate:modelValue": ($event) => unref(form).reference = $event,
                    label: unref(t)("Reference"),
                    error: unref(form).errors.reference,
                    suggestions: [
                      { value: "ulid", label: "ULID - Universally Unique Lexicographically Sortable Identifier" },
                      { value: "ai", label: "Auto Increment (MYSQL only)" },
                      { value: "uniqid", label: "Uniqid - PHP Generate a Unique ID" },
                      { value: "uuid", label: "UUID - Universally Unique Identifier" }
                    ]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form).default_locale,
                    "onUpdate:modelValue": ($event) => unref(form).default_locale = $event,
                    error: unref(form).errors.default_locale,
                    label: unref(t)("Date & Number Locale")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    id: "hour12",
                    searchable: false,
                    modelValue: unref(form).hour12,
                    "onUpdate:modelValue": ($event) => unref(form).hour12 = $event,
                    label: unref(t)("Time Format"),
                    error: unref(form).errors.hour12,
                    suggestions: [
                      { value: "0", label: "24 Hours (23:30)" },
                      { value: "1", label: "12 Hours (11:30 PM)" }
                    ]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    id: "per_page",
                    searchable: false,
                    modelValue: unref(form).per_page,
                    "onUpdate:modelValue": ($event) => unref(form).per_page = $event,
                    label: unref(t)("Rows per page"),
                    error: unref(form).errors.per_page,
                    suggestions: [
                      { value: 10, label: 10 },
                      { value: 15, label: 15 },
                      { value: 25, label: 25 },
                      { value: 50, label: 50 },
                      { value: 100, label: 100 }
                    ]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form).attachment_exts,
                    "onUpdate:modelValue": ($event) => unref(form).attachment_exts = $event,
                    error: unref(form).errors.attachment_exts,
                    label: unref(t)("Allowed attachments")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form)["mail_from_name"],
                    "onUpdate:modelValue": ($event) => unref(form)["mail_from_name"] = $event,
                    error: unref(form).errors["mail_from_name"],
                    label: unref(t)("From Name")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    type: "email",
                    label: unref(t)("From Email Address"),
                    modelValue: unref(form)["mail_from_address"],
                    "onUpdate:modelValue": ($event) => unref(form)["mail_from_address"] = $event,
                    error: unref(form).errors["mail_from_address"]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    id: "mail_default",
                    searchable: false,
                    label: unref(t)("Mail Driver"),
                    modelValue: unref(form)["mail_default"],
                    "onUpdate:modelValue": ($event) => unref(form)["mail_default"] = $event,
                    error: unref(form).errors["mail_default"] ? unref(form).errors["mail_default"] : null,
                    suggestions: [
                      { value: "smtp", label: "SMTP" },
                      { value: "ses", label: "AWS SES" },
                      { value: "mailgun", label: "Mailgun" },
                      { value: "sparkpost", label: "Sparkpost" }
                    ]
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                  if (unref(form)["mail_default"] == "smtp") {
                    _push3(`<!--[--><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("SMTP Host"),
                      modelValue: unref(form)["mail_mailers_smtp_host"],
                      "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_host"] = $event,
                      error: unref(form).errors["mail_mailers_smtp_host"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("SMTP Port"),
                      modelValue: unref(form)["mail_mailers_smtp_port"],
                      "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_port"] = $event,
                      error: unref(form).errors["mail_mailers_smtp_port"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("SMTP Username"),
                      modelValue: unref(form)["mail_mailers_smtp_username"],
                      "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_username"] = $event,
                      error: unref(form).errors["mail_mailers_smtp_username"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("SMTP Password"),
                      modelValue: unref(form)["mail_mailers_smtp_password"],
                      "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_password"] = $event,
                      error: unref(form).errors["mail_mailers_smtp_password"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("SMTP Encryption"),
                      modelValue: unref(form)["mail_mailers_smtp_encryption"],
                      "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_encryption"] = $event,
                      error: unref(form).errors["mail_mailers_smtp_encryption"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}></div><!--]-->`);
                  } else if (unref(form)["mail_default"] == "ses") {
                    _push3(`<!--[--><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("AWS SES Key"),
                      modelValue: unref(form)["services_ses_key"],
                      "onUpdate:modelValue": ($event) => unref(form)["services_ses_key"] = $event,
                      error: unref(form).errors["services_ses_key"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("AWS SES Secret"),
                      modelValue: unref(form)["services_ses_secret"],
                      "onUpdate:modelValue": ($event) => unref(form)["services_ses_secret"] = $event,
                      error: unref(form).errors["services_ses_secret"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("AWS SES Region"),
                      modelValue: unref(form)["services_ses_region"],
                      "onUpdate:modelValue": ($event) => unref(form)["services_ses_region"] = $event,
                      error: unref(form).errors["services_ses_region"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}></div><!--]-->`);
                  } else if (unref(form)["mail_default"] == "mailgun") {
                    _push3(`<!--[--><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("Mailgun Domain"),
                      modelValue: unref(form)["services_mailgun_domain"],
                      "onUpdate:modelValue": ($event) => unref(form)["services_mailgun_domain"] = $event,
                      error: unref(form).errors["services_mailgun_domain"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("Mailgun Secret"),
                      modelValue: unref(form)["services_mailgun_secret"],
                      "onUpdate:modelValue": ($event) => unref(form)["services_mailgun_secret"] = $event,
                      error: unref(form).errors["services_mailgun_secret"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("Mailgun Endpoint"),
                      modelValue: unref(form)["services_mailgun_endpoint"],
                      "onUpdate:modelValue": ($event) => unref(form)["services_mailgun_endpoint"] = $event,
                      error: unref(form).errors["services_mailgun_endpoint"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}></div><!--]-->`);
                  } else if (unref(form)["mail_default"] == "sparkpost") {
                    _push3(`<!--[--><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("Sparkpost Secret"),
                      modelValue: unref(form)["services_sparkpost_secret"],
                      "onUpdate:modelValue": ($event) => unref(form)["services_sparkpost_secret"] = $event,
                      error: unref(form).errors["services_sparkpost_secret"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: unref(t)("Sparkpost Endpoint"),
                      modelValue: unref(form)["services_sparkpost_endpoint"],
                      "onUpdate:modelValue": ($event) => unref(form)["services_sparkpost_endpoint"] = $event,
                      error: unref(form).errors["services_sparkpost_endpoint"]
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form).customer_cf2,
                    "onUpdate:modelValue": ($event) => unref(form).customer_cf2 = $event,
                    error: unref(form).errors.customer_cf2,
                    label: unref(t)("Label for customer field 2")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form).customer_cf1,
                    "onUpdate:modelValue": ($event) => unref(form).customer_cf1 = $event,
                    error: unref(form).errors.customer_cf1,
                    label: unref(t)("Label for customer field 1")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form).customer_cf2,
                    "onUpdate:modelValue": ($event) => unref(form).customer_cf2 = $event,
                    error: unref(form).errors.customer_cf2,
                    label: unref(t)("Label for customer field 2")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form).supplier_cf1,
                    "onUpdate:modelValue": ($event) => unref(form).supplier_cf1 = $event,
                    error: unref(form).errors.supplier_cf1,
                    label: unref(t)("Label for supplier field 1")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    modelValue: unref(form).supplier_cf2,
                    "onUpdate:modelValue": ($event) => unref(form).supplier_cf2 = $event,
                    error: unref(form).errors.supplier_cf2,
                    label: unref(t)("Label for supplier field 2")
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-full mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(CheckBox, {
                    id: "over_selling",
                    label: unref(t)("Enable over selling"),
                    checked: unref(form).over_selling,
                    "onUpdate:checked": ($event) => unref(form).over_selling = $event,
                    error: unref(form).errors.over_selling
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "col-span-full" }, [
                      createVNode("input", {
                        ref_key: "logoInput",
                        ref: logoInput,
                        type: "file",
                        class: "hidden",
                        accept: ".png,.jpg,.jpeg,.svg",
                        onChange: updateLogoPreview
                      }, null, 544),
                      createVNode(_sfc_main$3, {
                        for: "logo",
                        value: unref(t)("Logo")
                      }, null, 8, ["value"]),
                      withDirectives(createVNode("div", { class: "my-2 rounded-md bg-white p-2" }, [
                        createVNode("img", {
                          src: unref(form).logo,
                          alt: unref(form).name,
                          class: "block rounded w-80 h-20 mx-auto bg-contain"
                        }, null, 8, ["src", "alt"])
                      ], 512), [
                        [vShow, !logoPreview.value && unref(form).logo]
                      ]),
                      withDirectives(createVNode("div", { class: "my-2 rounded-md bg-white p-2" }, [
                        createVNode("span", {
                          class: "block rounded w-80 h-20 mx-auto bg-contain bg-no-repeat bg-center",
                          style: "background-image: url('" + logoPreview.value + "');"
                        }, null, 4)
                      ], 512), [
                        [vShow, logoPreview.value]
                      ]),
                      createVNode(_sfc_main$4, {
                        class: "mt-2 mr-2",
                        type: "button",
                        onClick: withModifiers(selectNewLogo, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("Select Logo")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$5, {
                        message: unref(form).errors.logo,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).name,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        error: unref(form).errors.name,
                        label: unref(t)("Site Name")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$7, {
                        id: "language",
                        searchable: false,
                        modelValue: unref(form).language,
                        "onUpdate:modelValue": ($event) => unref(form).language = $event,
                        label: unref(t)("Language"),
                        error: unref(form).errors.language,
                        suggestions: props.languages
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "error", "suggestions"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$7, {
                        id: "reference",
                        searchable: false,
                        modelValue: unref(form).reference,
                        "onUpdate:modelValue": ($event) => unref(form).reference = $event,
                        label: unref(t)("Reference"),
                        error: unref(form).errors.reference,
                        suggestions: [
                          { value: "ulid", label: "ULID - Universally Unique Lexicographically Sortable Identifier" },
                          { value: "ai", label: "Auto Increment (MYSQL only)" },
                          { value: "uniqid", label: "Uniqid - PHP Generate a Unique ID" },
                          { value: "uuid", label: "UUID - Universally Unique Identifier" }
                        ]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "error"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).default_locale,
                        "onUpdate:modelValue": ($event) => unref(form).default_locale = $event,
                        error: unref(form).errors.default_locale,
                        label: unref(t)("Date & Number Locale")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$7, {
                        id: "hour12",
                        searchable: false,
                        modelValue: unref(form).hour12,
                        "onUpdate:modelValue": ($event) => unref(form).hour12 = $event,
                        label: unref(t)("Time Format"),
                        error: unref(form).errors.hour12,
                        suggestions: [
                          { value: "0", label: "24 Hours (23:30)" },
                          { value: "1", label: "12 Hours (11:30 PM)" }
                        ]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "error"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$7, {
                        id: "per_page",
                        searchable: false,
                        modelValue: unref(form).per_page,
                        "onUpdate:modelValue": ($event) => unref(form).per_page = $event,
                        label: unref(t)("Rows per page"),
                        error: unref(form).errors.per_page,
                        suggestions: [
                          { value: 10, label: 10 },
                          { value: 15, label: 15 },
                          { value: 25, label: 25 },
                          { value: 50, label: 50 },
                          { value: 100, label: 100 }
                        ]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "error"])
                    ]),
                    createVNode("div", { class: "col-span-6" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).attachment_exts,
                        "onUpdate:modelValue": ($event) => unref(form).attachment_exts = $event,
                        error: unref(form).errors.attachment_exts,
                        label: unref(t)("Allowed attachments")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form)["mail_from_name"],
                        "onUpdate:modelValue": ($event) => unref(form)["mail_from_name"] = $event,
                        error: unref(form).errors["mail_from_name"],
                        label: unref(t)("From Name")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        type: "email",
                        label: unref(t)("From Email Address"),
                        modelValue: unref(form)["mail_from_address"],
                        "onUpdate:modelValue": ($event) => unref(form)["mail_from_address"] = $event,
                        error: unref(form).errors["mail_from_address"]
                      }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                    ]),
                    createVNode("div", { class: "col-span-full" }, [
                      createVNode(_sfc_main$7, {
                        id: "mail_default",
                        searchable: false,
                        label: unref(t)("Mail Driver"),
                        modelValue: unref(form)["mail_default"],
                        "onUpdate:modelValue": ($event) => unref(form)["mail_default"] = $event,
                        error: unref(form).errors["mail_default"] ? unref(form).errors["mail_default"] : null,
                        suggestions: [
                          { value: "smtp", label: "SMTP" },
                          { value: "ses", label: "AWS SES" },
                          { value: "mailgun", label: "Mailgun" },
                          { value: "sparkpost", label: "Sparkpost" }
                        ]
                      }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                    ]),
                    unref(form)["mail_default"] == "smtp" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("SMTP Host"),
                          modelValue: unref(form)["mail_mailers_smtp_host"],
                          "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_host"] = $event,
                          error: unref(form).errors["mail_mailers_smtp_host"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("SMTP Port"),
                          modelValue: unref(form)["mail_mailers_smtp_port"],
                          "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_port"] = $event,
                          error: unref(form).errors["mail_mailers_smtp_port"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("SMTP Username"),
                          modelValue: unref(form)["mail_mailers_smtp_username"],
                          "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_username"] = $event,
                          error: unref(form).errors["mail_mailers_smtp_username"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("SMTP Password"),
                          modelValue: unref(form)["mail_mailers_smtp_password"],
                          "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_password"] = $event,
                          error: unref(form).errors["mail_mailers_smtp_password"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("SMTP Encryption"),
                          modelValue: unref(form)["mail_mailers_smtp_encryption"],
                          "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_encryption"] = $event,
                          error: unref(form).errors["mail_mailers_smtp_encryption"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" })
                    ], 64)) : unref(form)["mail_default"] == "ses" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("AWS SES Key"),
                          modelValue: unref(form)["services_ses_key"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_ses_key"] = $event,
                          error: unref(form).errors["services_ses_key"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("AWS SES Secret"),
                          modelValue: unref(form)["services_ses_secret"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_ses_secret"] = $event,
                          error: unref(form).errors["services_ses_secret"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("AWS SES Region"),
                          modelValue: unref(form)["services_ses_region"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_ses_region"] = $event,
                          error: unref(form).errors["services_ses_region"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" })
                    ], 64)) : unref(form)["mail_default"] == "mailgun" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("Mailgun Domain"),
                          modelValue: unref(form)["services_mailgun_domain"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_mailgun_domain"] = $event,
                          error: unref(form).errors["services_mailgun_domain"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("Mailgun Secret"),
                          modelValue: unref(form)["services_mailgun_secret"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_mailgun_secret"] = $event,
                          error: unref(form).errors["services_mailgun_secret"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("Mailgun Endpoint"),
                          modelValue: unref(form)["services_mailgun_endpoint"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_mailgun_endpoint"] = $event,
                          error: unref(form).errors["services_mailgun_endpoint"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" })
                    ], 64)) : unref(form)["mail_default"] == "sparkpost" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("Sparkpost Secret"),
                          modelValue: unref(form)["services_sparkpost_secret"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_sparkpost_secret"] = $event,
                          error: unref(form).errors["services_sparkpost_secret"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("Sparkpost Endpoint"),
                          modelValue: unref(form)["services_sparkpost_endpoint"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_sparkpost_endpoint"] = $event,
                          error: unref(form).errors["services_sparkpost_endpoint"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ])
                    ], 64)) : createCommentVNode("", true),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).customer_cf2,
                        "onUpdate:modelValue": ($event) => unref(form).customer_cf2 = $event,
                        error: unref(form).errors.customer_cf2,
                        label: unref(t)("Label for customer field 2")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).customer_cf1,
                        "onUpdate:modelValue": ($event) => unref(form).customer_cf1 = $event,
                        error: unref(form).errors.customer_cf1,
                        label: unref(t)("Label for customer field 1")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).customer_cf2,
                        "onUpdate:modelValue": ($event) => unref(form).customer_cf2 = $event,
                        error: unref(form).errors.customer_cf2,
                        label: unref(t)("Label for customer field 2")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).supplier_cf1,
                        "onUpdate:modelValue": ($event) => unref(form).supplier_cf1 = $event,
                        error: unref(form).errors.supplier_cf1,
                        label: unref(t)("Label for supplier field 1")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).supplier_cf2,
                        "onUpdate:modelValue": ($event) => unref(form).supplier_cf2 = $event,
                        error: unref(form).errors.supplier_cf2,
                        label: unref(t)("Label for supplier field 2")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-full mb-4" }, [
                      createVNode(CheckBox, {
                        id: "over_selling",
                        label: unref(t)("Enable over selling"),
                        checked: unref(form).over_selling,
                        "onUpdate:checked": ($event) => unref(form).over_selling = $event,
                        error: unref(form).errors.over_selling
                      }, null, 8, ["label", "checked", "onUpdate:checked", "error"])
                    ])
                  ];
                }
              }),
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, {
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
                  _push3(ssrRenderComponent(_sfc_main$9, {
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
                    createVNode(_sfc_main$8, {
                      on: unref(form).recentlySuccessful,
                      class: "mr-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Saved. ")
                      ]),
                      _: 1
                    }, 8, ["on"]),
                    createVNode(_sfc_main$9, {
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
            if (unref(form) && ((_a = unref(form)) == null ? void 0 : _a.default_locale)) {
              _push2(`<div class="mt-8"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, null, {
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("Preview"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("Preview")), 1)
                    ];
                  }
                }),
                description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("Number and Date Format"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("Number and Date Format")), 1)
                    ];
                  }
                }),
                form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="col-span-full -m-6 rounded-md overflow-hidden"${_scopeId2}><dl${_scopeId2}><div class="bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"${_scopeId2}><dt class="font-medium text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(unref(t)("Number"))}</dt><dd class="mt-1 sm:mt-0 sm:col-span-2"${_scopeId2}>${ssrInterpolate(_ctx.$number(200000005e-1, unref(form).default_locale, {
                      minimumFractionDigits: unref(form).fraction
                    }))}</dd></div><div class="bg-gray-50 dark:bg-black/20 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"${_scopeId2}><dt class="font-medium text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(unref(t)("Date"))}</dt><dd class="mt-1 sm:mt-0 sm:col-span-2"${_scopeId2}>${ssrInterpolate(_ctx.$date(/* @__PURE__ */ new Date(), unref(form).default_locale))}</dd></div><div class="bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"${_scopeId2}><dt class="font-medium text-gray-500 dark:text-gray-400"${_scopeId2}>${ssrInterpolate(unref(t)("Date Time"))}</dt><dd class="mt-1 sm:mt-0 sm:col-span-2"${_scopeId2}>${ssrInterpolate(_ctx.$datetime(/* @__PURE__ */ new Date(), unref(form).default_locale))}</dd></div></dl></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "col-span-full -m-6 rounded-md overflow-hidden" }, [
                        createVNode("dl", null, [
                          createVNode("div", { class: "bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, [
                            createVNode("dt", { class: "font-medium text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Number")), 1),
                            createVNode("dd", { class: "mt-1 sm:mt-0 sm:col-span-2" }, toDisplayString(_ctx.$number(200000005e-1, unref(form).default_locale, {
                              minimumFractionDigits: unref(form).fraction
                            })), 1)
                          ]),
                          createVNode("div", { class: "bg-gray-50 dark:bg-black/20 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, [
                            createVNode("dt", { class: "font-medium text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Date")), 1),
                            createVNode("dd", { class: "mt-1 sm:mt-0 sm:col-span-2" }, toDisplayString(_ctx.$date(/* @__PURE__ */ new Date(), unref(form).default_locale)), 1)
                          ]),
                          createVNode("div", { class: "bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, [
                            createVNode("dt", { class: "font-medium text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Date Time")), 1),
                            createVNode("dd", { class: "mt-1 sm:mt-0 sm:col-span-2" }, toDisplayString(_ctx.$datetime(/* @__PURE__ */ new Date(), unref(form).default_locale)), 1)
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                createVNode(_sfc_main$2, {
                  onSubmitted: submit,
                  autocomplete: "off"
                }, {
                  title: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Settings")), 1)
                  ]),
                  description: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Please fill the form below to update settings.")), 1)
                  ]),
                  form: withCtx(() => [
                    createVNode("div", { class: "col-span-full" }, [
                      createVNode("input", {
                        ref_key: "logoInput",
                        ref: logoInput,
                        type: "file",
                        class: "hidden",
                        accept: ".png,.jpg,.jpeg,.svg",
                        onChange: updateLogoPreview
                      }, null, 544),
                      createVNode(_sfc_main$3, {
                        for: "logo",
                        value: unref(t)("Logo")
                      }, null, 8, ["value"]),
                      withDirectives(createVNode("div", { class: "my-2 rounded-md bg-white p-2" }, [
                        createVNode("img", {
                          src: unref(form).logo,
                          alt: unref(form).name,
                          class: "block rounded w-80 h-20 mx-auto bg-contain"
                        }, null, 8, ["src", "alt"])
                      ], 512), [
                        [vShow, !logoPreview.value && unref(form).logo]
                      ]),
                      withDirectives(createVNode("div", { class: "my-2 rounded-md bg-white p-2" }, [
                        createVNode("span", {
                          class: "block rounded w-80 h-20 mx-auto bg-contain bg-no-repeat bg-center",
                          style: "background-image: url('" + logoPreview.value + "');"
                        }, null, 4)
                      ], 512), [
                        [vShow, logoPreview.value]
                      ]),
                      createVNode(_sfc_main$4, {
                        class: "mt-2 mr-2",
                        type: "button",
                        onClick: withModifiers(selectNewLogo, ["prevent"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(t)("Select Logo")), 1)
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$5, {
                        message: unref(form).errors.logo,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).name,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        error: unref(form).errors.name,
                        label: unref(t)("Site Name")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$7, {
                        id: "language",
                        searchable: false,
                        modelValue: unref(form).language,
                        "onUpdate:modelValue": ($event) => unref(form).language = $event,
                        label: unref(t)("Language"),
                        error: unref(form).errors.language,
                        suggestions: props.languages
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "error", "suggestions"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$7, {
                        id: "reference",
                        searchable: false,
                        modelValue: unref(form).reference,
                        "onUpdate:modelValue": ($event) => unref(form).reference = $event,
                        label: unref(t)("Reference"),
                        error: unref(form).errors.reference,
                        suggestions: [
                          { value: "ulid", label: "ULID - Universally Unique Lexicographically Sortable Identifier" },
                          { value: "ai", label: "Auto Increment (MYSQL only)" },
                          { value: "uniqid", label: "Uniqid - PHP Generate a Unique ID" },
                          { value: "uuid", label: "UUID - Universally Unique Identifier" }
                        ]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "error"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).default_locale,
                        "onUpdate:modelValue": ($event) => unref(form).default_locale = $event,
                        error: unref(form).errors.default_locale,
                        label: unref(t)("Date & Number Locale")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$7, {
                        id: "hour12",
                        searchable: false,
                        modelValue: unref(form).hour12,
                        "onUpdate:modelValue": ($event) => unref(form).hour12 = $event,
                        label: unref(t)("Time Format"),
                        error: unref(form).errors.hour12,
                        suggestions: [
                          { value: "0", label: "24 Hours (23:30)" },
                          { value: "1", label: "12 Hours (11:30 PM)" }
                        ]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "error"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$7, {
                        id: "per_page",
                        searchable: false,
                        modelValue: unref(form).per_page,
                        "onUpdate:modelValue": ($event) => unref(form).per_page = $event,
                        label: unref(t)("Rows per page"),
                        error: unref(form).errors.per_page,
                        suggestions: [
                          { value: 10, label: 10 },
                          { value: 15, label: 15 },
                          { value: 25, label: 25 },
                          { value: 50, label: 50 },
                          { value: 100, label: 100 }
                        ]
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "error"])
                    ]),
                    createVNode("div", { class: "col-span-6" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).attachment_exts,
                        "onUpdate:modelValue": ($event) => unref(form).attachment_exts = $event,
                        error: unref(form).errors.attachment_exts,
                        label: unref(t)("Allowed attachments")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form)["mail_from_name"],
                        "onUpdate:modelValue": ($event) => unref(form)["mail_from_name"] = $event,
                        error: unref(form).errors["mail_from_name"],
                        label: unref(t)("From Name")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        type: "email",
                        label: unref(t)("From Email Address"),
                        modelValue: unref(form)["mail_from_address"],
                        "onUpdate:modelValue": ($event) => unref(form)["mail_from_address"] = $event,
                        error: unref(form).errors["mail_from_address"]
                      }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                    ]),
                    createVNode("div", { class: "col-span-full" }, [
                      createVNode(_sfc_main$7, {
                        id: "mail_default",
                        searchable: false,
                        label: unref(t)("Mail Driver"),
                        modelValue: unref(form)["mail_default"],
                        "onUpdate:modelValue": ($event) => unref(form)["mail_default"] = $event,
                        error: unref(form).errors["mail_default"] ? unref(form).errors["mail_default"] : null,
                        suggestions: [
                          { value: "smtp", label: "SMTP" },
                          { value: "ses", label: "AWS SES" },
                          { value: "mailgun", label: "Mailgun" },
                          { value: "sparkpost", label: "Sparkpost" }
                        ]
                      }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                    ]),
                    unref(form)["mail_default"] == "smtp" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("SMTP Host"),
                          modelValue: unref(form)["mail_mailers_smtp_host"],
                          "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_host"] = $event,
                          error: unref(form).errors["mail_mailers_smtp_host"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("SMTP Port"),
                          modelValue: unref(form)["mail_mailers_smtp_port"],
                          "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_port"] = $event,
                          error: unref(form).errors["mail_mailers_smtp_port"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("SMTP Username"),
                          modelValue: unref(form)["mail_mailers_smtp_username"],
                          "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_username"] = $event,
                          error: unref(form).errors["mail_mailers_smtp_username"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("SMTP Password"),
                          modelValue: unref(form)["mail_mailers_smtp_password"],
                          "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_password"] = $event,
                          error: unref(form).errors["mail_mailers_smtp_password"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("SMTP Encryption"),
                          modelValue: unref(form)["mail_mailers_smtp_encryption"],
                          "onUpdate:modelValue": ($event) => unref(form)["mail_mailers_smtp_encryption"] = $event,
                          error: unref(form).errors["mail_mailers_smtp_encryption"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" })
                    ], 64)) : unref(form)["mail_default"] == "ses" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("AWS SES Key"),
                          modelValue: unref(form)["services_ses_key"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_ses_key"] = $event,
                          error: unref(form).errors["services_ses_key"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("AWS SES Secret"),
                          modelValue: unref(form)["services_ses_secret"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_ses_secret"] = $event,
                          error: unref(form).errors["services_ses_secret"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("AWS SES Region"),
                          modelValue: unref(form)["services_ses_region"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_ses_region"] = $event,
                          error: unref(form).errors["services_ses_region"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" })
                    ], 64)) : unref(form)["mail_default"] == "mailgun" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("Mailgun Domain"),
                          modelValue: unref(form)["services_mailgun_domain"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_mailgun_domain"] = $event,
                          error: unref(form).errors["services_mailgun_domain"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("Mailgun Secret"),
                          modelValue: unref(form)["services_mailgun_secret"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_mailgun_secret"] = $event,
                          error: unref(form).errors["services_mailgun_secret"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("Mailgun Endpoint"),
                          modelValue: unref(form)["services_mailgun_endpoint"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_mailgun_endpoint"] = $event,
                          error: unref(form).errors["services_mailgun_endpoint"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" })
                    ], 64)) : unref(form)["mail_default"] == "sparkpost" ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("Sparkpost Secret"),
                          modelValue: unref(form)["services_sparkpost_secret"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_sparkpost_secret"] = $event,
                          error: unref(form).errors["services_sparkpost_secret"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ]),
                      createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                        createVNode(_sfc_main$6, {
                          label: unref(t)("Sparkpost Endpoint"),
                          modelValue: unref(form)["services_sparkpost_endpoint"],
                          "onUpdate:modelValue": ($event) => unref(form)["services_sparkpost_endpoint"] = $event,
                          error: unref(form).errors["services_sparkpost_endpoint"]
                        }, null, 8, ["label", "modelValue", "onUpdate:modelValue", "error"])
                      ])
                    ], 64)) : createCommentVNode("", true),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).customer_cf2,
                        "onUpdate:modelValue": ($event) => unref(form).customer_cf2 = $event,
                        error: unref(form).errors.customer_cf2,
                        label: unref(t)("Label for customer field 2")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).customer_cf1,
                        "onUpdate:modelValue": ($event) => unref(form).customer_cf1 = $event,
                        error: unref(form).errors.customer_cf1,
                        label: unref(t)("Label for customer field 1")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).customer_cf2,
                        "onUpdate:modelValue": ($event) => unref(form).customer_cf2 = $event,
                        error: unref(form).errors.customer_cf2,
                        label: unref(t)("Label for customer field 2")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).supplier_cf1,
                        "onUpdate:modelValue": ($event) => unref(form).supplier_cf1 = $event,
                        error: unref(form).errors.supplier_cf1,
                        label: unref(t)("Label for supplier field 1")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$6, {
                        modelValue: unref(form).supplier_cf2,
                        "onUpdate:modelValue": ($event) => unref(form).supplier_cf2 = $event,
                        error: unref(form).errors.supplier_cf2,
                        label: unref(t)("Label for supplier field 2")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error", "label"])
                    ]),
                    createVNode("div", { class: "col-span-full mb-4" }, [
                      createVNode(CheckBox, {
                        id: "over_selling",
                        label: unref(t)("Enable over selling"),
                        checked: unref(form).over_selling,
                        "onUpdate:checked": ($event) => unref(form).over_selling = $event,
                        error: unref(form).errors.over_selling
                      }, null, 8, ["label", "checked", "onUpdate:checked", "error"])
                    ])
                  ]),
                  actions: withCtx(() => [
                    createVNode(_sfc_main$8, {
                      on: unref(form).recentlySuccessful,
                      class: "mr-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Saved. ")
                      ]),
                      _: 1
                    }, 8, ["on"]),
                    createVNode(_sfc_main$9, {
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
                }),
                unref(form) && ((_b = unref(form)) == null ? void 0 : _b.default_locale) ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-8"
                }, [
                  createVNode(_sfc_main$2, null, {
                    title: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Preview")), 1)
                    ]),
                    description: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Number and Date Format")), 1)
                    ]),
                    form: withCtx(() => [
                      createVNode("div", { class: "col-span-full -m-6 rounded-md overflow-hidden" }, [
                        createVNode("dl", null, [
                          createVNode("div", { class: "bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, [
                            createVNode("dt", { class: "font-medium text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Number")), 1),
                            createVNode("dd", { class: "mt-1 sm:mt-0 sm:col-span-2" }, toDisplayString(_ctx.$number(200000005e-1, unref(form).default_locale, {
                              minimumFractionDigits: unref(form).fraction
                            })), 1)
                          ]),
                          createVNode("div", { class: "bg-gray-50 dark:bg-black/20 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, [
                            createVNode("dt", { class: "font-medium text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Date")), 1),
                            createVNode("dd", { class: "mt-1 sm:mt-0 sm:col-span-2" }, toDisplayString(_ctx.$date(/* @__PURE__ */ new Date(), unref(form).default_locale)), 1)
                          ]),
                          createVNode("div", { class: "bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6" }, [
                            createVNode("dt", { class: "font-medium text-gray-500 dark:text-gray-400" }, toDisplayString(unref(t)("Date Time")), 1),
                            createVNode("dd", { class: "mt-1 sm:mt-0 sm:col-span-2" }, toDisplayString(_ctx.$datetime(/* @__PURE__ */ new Date(), unref(form).default_locale)), 1)
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Setting/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
