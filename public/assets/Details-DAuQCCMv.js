import { onMounted, onUpdated, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import JsBarcode from "jsbarcode";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$1 } from "./Attachments-DXoLD4sd.js";
import "@inertiajs/vue3";
import "./DialogModal-Rn6ogKHt.js";
import "./Modal-Bhnq5Kl7.js";
import "./DangerButton-RhE9UT03.js";
import "./SecondaryButton-BOMTPtRI.js";
const _sfc_main = {
  __name: "Details",
  __ssrInlineRender: true,
  props: { checkin: Object },
  setup(__props) {
    const { t } = useI18n({});
    const props = __props;
    onMounted(() => {
      JsBarcode("#barcode", props.checkin.reference, {
        width: 1,
        margin: 0,
        fontSize: 0,
        height: "30",
        format: "CODE128"
      });
    });
    onUpdated(() => {
      JsBarcode("#barcode", props.checkin.reference, {
        width: 1,
        margin: 0,
        fontSize: 0,
        height: "30",
        format: "CODE128"
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.checkin) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-auto bg-gray-100 dark:bg-gray-800 -m-6 py-6 px-4 md:px-6 rounded-md print:bg-white print:mt-0 print:pt-0 print:h-full print:overflow-visible" }, _attrs))}><div class="bg-white dark:bg-gray-900 p-4 rounded-md shadow overflow-x-auto border dark:border-gray-700 print:border-0 print:shadow-none print:pt-0"><div class="block sm:flex justify-between print:flex"><p class="mb-4 sm:mb-0">${ssrInterpolate(_ctx.$settings.name)}</p></div><div class="border-b dark:border-gray-700 my-4 -mx-4"></div><div class="py-4 w-full"><h1 class="text-xl text-center uppercase font-extrabold">${ssrInterpolate(unref(t)("Checkin"))}</h1><div class="mt-4 flex items-center justify-center"><div class="inline-flex bg-white p-2 rounded-md mx-auto"><svg id="barcode" class="mt-px"></svg></div></div></div><div class="mt-6 block sm:flex justify-between print:flex"><div class="w-full sm:w-1/2 leading-snug mb-6 sm:mb-0"><div class="text-sm font-bold"> </div><div>${ssrInterpolate(unref(t)("Date"))}: ${ssrInterpolate(_ctx.$date(__props.checkin.date))}</div><div>${ssrInterpolate(unref(t)("Reference"))}: ${ssrInterpolate(__props.checkin.reference)}</div><div>${ssrInterpolate(unref(t)("Created at"))}: ${ssrInterpolate(_ctx.$datetime(__props.checkin.created_at))}</div></div><div class="text-left w-full sm:w-1/2 leading-snug"><div class="text-sm font-bold">${ssrInterpolate(unref(t)("For"))}:</div><div>${ssrInterpolate(__props.checkin.supplier.name)}</div>`);
        if (__props.checkin.supplier.company) {
          _push(`<div class="font-bold">${ssrInterpolate(__props.checkin.supplier.company)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.checkin.supplier.phone) {
          _push(`<div>${ssrInterpolate(unref(t)("Tel"))}: ${ssrInterpolate(__props.checkin.supplier.phone)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.checkin.supplier.email) {
          _push(`<div>${ssrInterpolate(unref(t)("Email"))}: ${ssrInterpolate(__props.checkin.supplier.email)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (__props.checkin.attachment) {
          _push(`<div class="print:hidden mt-6 p-4 w-full border dark:border-gray-700 rounded-md">${ssrInterpolate(unref(t)("This record has an attachment"))}, <a${ssrRenderAttr("href", __props.checkin.attachment)} target="_blank" class="link">${ssrInterpolate(unref(t)("click here to view"))}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="-mx-4 overflow-x-auto"><table class="w-full mt-8 mb-4" style="${ssrRenderStyle({ "min-width": "500px" })}"><tr><th class="px-6 py-2 text-left">${ssrInterpolate(unref(t)("Item"))}</th><th class="px-6 py-2 w-32 text-center">${ssrInterpolate(unref(t)("Quantity"))}</th></tr><!--[-->`);
        ssrRenderList(__props.checkin.items, (item, ii) => {
          _push(`<tr class="${ssrRenderClass([{ "bg-gray-50 dark:bg-gray-800": ii % 2 != 0, "border-b dark:border-gray-700": __props.checkin.items.length == ii + 1 }, "group avoid"])}"><td class="group-hover:bg-gray-100 dark:group-hover:bg-gray-700 border-t dark:border-gray-700 px-6 py-2">${ssrInterpolate(item.name)} (${ssrInterpolate(item.code)}) </td><td class="group-hover:bg-gray-100 dark:group-hover:bg-gray-700 border-t dark:border-gray-700 px-6 py-2 w-32 text-center">${ssrInterpolate(_ctx.$number(item.quantity))} ${ssrInterpolate(item.unit || "")}</td></tr>`);
        });
        _push(`<!--]--></table></div>`);
        if (__props.checkin.attachments && __props.checkin.attachments.length) {
          _push(`<div class="py-4 w-full">`);
          _push(ssrRenderComponent(_sfc_main$1, {
            attachments: __props.checkin.attachments
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.checkin.note) {
          _push(`<div class="py-4 w-full">${ssrInterpolate(__props.checkin.note)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="mt-auto pt-4 w-full text-center text-sm text-gray-500 hidden print:block">${ssrInterpolate(unref(t)("This is computer generated document, no signature required."))}</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Checkin/Details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
