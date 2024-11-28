import { ref, computed, watch, useSSRContext, unref, mergeProps, withCtx, renderSlot, onMounted, onUnmounted, resolveComponent, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderTeleport, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { useI18n } from "vue-i18n";
import { usePage, Link, Head, router } from "@inertiajs/vue3";
import { _ as _export_sfc, L as LANGUAGES } from "../ssr.js";
import { _ as _sfc_main$8 } from "./Modal-Bhnq5Kl7.js";
import "./ApplicationMark-BHFUDJFo.js";
const _sfc_main$7 = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const show = ref(true);
    const style = computed(() => {
      var _a;
      return ((_a = usePage().props.jetstream.flash) == null ? void 0 : _a.bannerStyle) || "success";
    });
    const message = computed(() => {
      var _a;
      return ((_a = usePage().props.jetstream.flash) == null ? void 0 : _a.banner) || "";
    });
    watch(message, async () => {
      show.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (show.value && message.value) {
        _push(`<div class="${ssrRenderClass({ "bg-blue-500": style.value == "success", "bg-red-700": style.value == "danger" })}"><div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center min-w-0"><span class="${ssrRenderClass([{ "bg-blue-600": style.value == "success", "bg-red-600": style.value == "danger" }, "flex p-2 rounded-lg"])}">`);
        if (style.value == "success") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (style.value == "danger") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><p class="ml-3 font-medium text-sm text-white truncate">${ssrInterpolate(message.value)}</p></div><div class="shrink-0 sm:ml-3"><button type="button" class="${ssrRenderClass([{ "hover:bg-blue-600 focus:bg-blue-600": style.value == "success", "hover:bg-red-600 focus:bg-red-600": style.value == "danger" }, "-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition"])}" aria-label="Dismiss"><svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Banner.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    active: Boolean
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "inline-flex items-center px-1 border-b border-blue-400 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-blue-700 transition" : "inline-flex items-center px-1 border-b border-transparent text-sm font-medium leading-5 text-gray-700 hover:text-gray-900 dark:hover:text-gray-100 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500 focus:outline-none focus:text-gray-700 focus:border-gray-300 dark:focus:border-gray-500 transition";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/NavLink.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: Array,
      default: () => ["py-1", "bg-white dark:bg-gray-900"]
    },
    closeOnClick: {
      default: true
    }
  },
  setup(__props) {
    const props = __props;
    let open = ref(false);
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        40: "w-40",
        48: "w-48",
        56: "w-56",
        64: "w-64",
        80: "w-80"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "center") {
        return "origin-top left-1/2 -translate-x-1/2 -translate-y-1";
      }
      if (props.align === "left") {
        return "origin-top-left left-0";
      }
      if (props.align === "right") {
        return "origin-top-right right-0";
      }
      return "origin-top";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-stretch" }, _attrs))}><div class="self-stretch flex items-stretch">`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        unref(open) ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 top-full mt-2 rounded-md shadow-lg dark:border dark:border-gray-700"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/Dropdown.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "AlertsModal",
  __ssrInlineRender: true,
  props: {
    show: {
      default: false
    },
    maxWidth: {
      default: "2xl"
    },
    closeable: {
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icons = resolveComponent("icons");
      _push(ssrRenderComponent(_sfc_main$8, mergeProps({
        show: __props.show,
        "max-width": __props.maxWidth,
        closeable: __props.closeable,
        onClose: ($event) => _ctx.$emit("close")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative px-6 py-4"${_scopeId}><h3 class="text-lg font-bold"${_scopeId}>${ssrInterpolate(unref(t)("Application Alerts"))}</h3><button class="fixed top-2 right-2 flex items-center justify-center h-8 w-8 rounded-full hover:text-gray-800 hover:bg-gray-300 focus:outline-none"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icons, {
              name: "cross",
              class: "h-5 w-5"
            }, null, _parent2, _scopeId));
            _push2(`</button><div class="mt-4"${_scopeId}><section class="py-2 mx-auto max-w-7xl"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-2 gap-5"${_scopeId}><a href="#/" class="block p-4 border dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900"${_scopeId}><span class="mb-2 text-xl font-semibold leading-none text-gray-900 dark:text-gray-100 truncate"${_scopeId}>6</span><p class="text-sm leading-none"${_scopeId}>${ssrInterpolate(unref(t)("Items reached alert quantity"))}</p></a><a href="#/" class="p-4 border dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900"${_scopeId}><span class="mb-2 text-xl font-semibold leading-none text-gray-900 dark:text-gray-100 truncate"${_scopeId}>4</span><p class="text-sm leading-none"${_scopeId}>${ssrInterpolate(unref(t)("Items need to be reorder"))}</p></a></div></section></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative px-6 py-4" }, [
                createVNode("h3", { class: "text-lg font-bold" }, toDisplayString(unref(t)("Application Alerts")), 1),
                createVNode("button", {
                  onClick: ($event) => _ctx.$emit("close"),
                  class: "fixed top-2 right-2 flex items-center justify-center h-8 w-8 rounded-full hover:text-gray-800 hover:bg-gray-300 focus:outline-none"
                }, [
                  createVNode(_component_icons, {
                    name: "cross",
                    class: "h-5 w-5"
                  })
                ], 8, ["onClick"]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode("section", { class: "py-2 mx-auto max-w-7xl" }, [
                    createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-2 gap-5" }, [
                      createVNode("a", {
                        href: "#/",
                        class: "block p-4 border dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900"
                      }, [
                        createVNode("span", { class: "mb-2 text-xl font-semibold leading-none text-gray-900 dark:text-gray-100 truncate" }, "6"),
                        createVNode("p", { class: "text-sm leading-none" }, toDisplayString(unref(t)("Items reached alert quantity")), 1)
                      ]),
                      createVNode("a", {
                        href: "#/",
                        class: "p-4 border dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900"
                      }, [
                        createVNode("span", { class: "mb-2 text-xl font-semibold leading-none text-gray-900 dark:text-gray-100 truncate" }, "4"),
                        createVNode("p", { class: "text-sm leading-none" }, toDisplayString(unref(t)("Items need to be reorder")), 1)
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/AlertsModal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  setup() {
    useI18n({});
  },
  data() {
    return {
      show: true
    };
  },
  watch: {
    "$page.props.flash": {
      handler() {
        this.show = true;
        setTimeout(() => this.show = false, 5e3);
      },
      deep: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icons = resolveComponent("icons");
  ssrRenderTeleport(_push, (_push2) => {
    _push2(`<div class="relative z-50">`);
    if (_ctx.$page.props.flash.message && $data.show) {
      _push2(`<div class="fixed top-16 right-4 w-full max-w-xs mb-8 ml-4 flex items-center justify-between bg-green-500 rounded-md text-white cursor-pointer"><div class="flex items-start">`);
      _push2(ssrRenderComponent(_component_icons, {
        name: "tick",
        class: "ml-4 mt-4 w-4 h-4"
      }, null, _parent));
      _push2(`<div class="p-4 text-sm font-bold">${ssrInterpolate(_ctx.$page.props.flash.message)}</div></div></div>`);
    } else {
      _push2(`<!---->`);
    }
    if ((_ctx.$page.props.flash.error || Object.keys(_ctx.$page.props.errors).length > 0) && $data.show) {
      _push2(`<div class="fixed top-16 right-4 w-full max-w-xs mb-8 ml-4 flex items-center justify-between bg-red-500 rounded-md text-white cursor-pointer"><div class="flex items-start text-white">`);
      _push2(ssrRenderComponent(_component_icons, {
        name: "cross",
        class: "ml-4 mt-4 w-4 h-4"
      }, null, _parent));
      if (_ctx.$page.props.flash.error) {
        _push2(`<div class="p-4 text-sm font-medium">${_ctx.$page.props.flash.error ?? ""}</div>`);
      } else {
        _push2(`<div class="p-4 text-sm font-medium">`);
        if (Object.keys(_ctx.$page.props.errors).length === 1) {
          _push2(`<span>There is one form error.</span>`);
        } else {
          _push2(`<span>There are ${ssrInterpolate(Object.keys(_ctx.$page.props.errors).length)} form errors.</span>`);
        }
        _push2(`</div>`);
      }
      _push2(`</div></div>`);
    } else {
      _push2(`<!---->`);
    }
    _push2(`</div>`);
  }, "body", false, _parent);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/FlashMessages.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FlashMessages = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    as: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.as == "button") {
        _push(`<button type="submit" class="block w-full px-4 py-2 text-sm leading-5 text-gray-900 dark:text-gray-100 text-left hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else if (__props.as == "a") {
        _push(`<a${ssrRenderAttr("href", __props.href)} class="block px-4 py-2 text-sm leading-5 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.href,
          class: "block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/DropdownLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    active: Boolean,
    href: String,
    as: String
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "block pl-3 pr-4 py-2 border-l-4 border-blue-400 dark:border-blue-700 text-base font-medium text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900 focus:outline-none focus:text-blue-800 focus:bg-blue-100 dark:focus:bg-blue-900 focus:border-blue-700 dark:focus:border-blue-400 transition" : "block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dar:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-700 transition";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.as == "button") {
        _push(`<button class="${ssrRenderClass([classes.value, "w-full text-left"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.href,
          class: classes.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ResponsiveNavLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __default__ = {
  data() {
    return { currentLang: this.$page.props.language };
  },
  methods: {
    getFlag() {
      var _a;
      return ((_a = LANGUAGES.find((l) => l.value == this.$root.$i18n.locale)) == null ? void 0 : _a.flag) || "US";
    },
    changeLang(lang) {
      router.visit("/language/" + lang, {
        onFinish: (v) => {
          window.Locale = lang;
          this.currentLang = lang;
          document.querySelector("html").setAttribute("lang", lang);
          this.$root.$i18n.locale = lang;
        }
      });
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const { t } = useI18n({});
    const alerts = ref(false);
    const theme = ref(null);
    const showingNavigationDropdown = ref(false);
    const user = computed(() => usePage().props.auth.user);
    computed(() => {
      var _a;
      return ((_a = LANGUAGES.find((l) => l.value == this.$root.$i18n.locale)) == null ? void 0 : _a.flag) || "US";
    });
    onMounted(() => {
      theme.value = localStorage.getItem("theme") || document.documentElement.getAttribute("data-theme");
      document.getElementById("app-loading").style.display = "none";
    });
    const switchToTeam = (team) => {
      router.put(route("current-team.update"), { team_id: team.id }, { preserveState: false });
    };
    const logout = () => {
      router.post(route("logout"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_Link = resolveComponent("Link");
      const _component_icons = resolveComponent("icons");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`<div class="page min-h-screen bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"><nav class="header bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-14"><div class="flex"><div class="shrink-0 flex items-center mr-4">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<h2 class="font-extrabold text-2xl"${_scopeId}>${ssrInterpolate(((_a2 = _ctx.$settings) == null ? void 0 : _a2.name) || "SSM")}</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-extrabold text-2xl" }, toDisplayString(((_b2 = _ctx.$settings) == null ? void 0 : _b2.name) || "SSM"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-2 lg:-my-px sm:ml-2 lg:ml-4 lg:flex">`);
      _push(ssrRenderComponent(_sfc_main$6, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard"),
        class: "hidden xl:flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Dashboard"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Dashboard")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$can(["read-items", "create-items", "import-items", "labels-items"])) {
        _push(ssrRenderComponent(_sfc_main$5, {
          align: "center",
          width: "48"
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="${ssrRenderClass([
                _ctx.route().current("items.*") ? "border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400" : "border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500",
                "inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100"
              ])}"${_scopeId}>${ssrInterpolate(unref(t)("Items"))} `);
              _push2(ssrRenderComponent(_component_icons, {
                name: "chevron-down",
                class: "ml-2 -mr-0.5 h-4 w-4 text-gray-500"
              }, null, _parent2, _scopeId));
              _push2(`</button></span>`);
            } else {
              return [
                createVNode("span", { class: "inline-flex rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    class: [
                      "inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100",
                      _ctx.route().current("items.*") ? "border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400" : "border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500"
                    ]
                  }, [
                    createTextVNode(toDisplayString(unref(t)("Items")) + " ", 1),
                    createVNode(_component_icons, {
                      name: "chevron-down",
                      class: "ml-2 -mr-0.5 h-4 w-4 text-gray-500"
                    })
                  ], 2)
                ])
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.$can("read-items")) {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  href: _ctx.route("items.index")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(t)("List Items"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)("List Items")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$can("create-items")) {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  href: _ctx.route("items.create")
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
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$can(["items.import"])) {
                _push2(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"${_scopeId}></div>`);
                if (_ctx.$can("import-items")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("items.import")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("Import Items"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Import Items")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                _ctx.$can("read-items") ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  href: _ctx.route("items.index")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("List Items")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true),
                _ctx.$can("create-items") ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 1,
                  href: _ctx.route("items.create")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Add New Item")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true),
                _ctx.$can(["items.import"]) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                  createVNode("div", { class: "border-t border-gray-100 dark:border-gray-700" }),
                  _ctx.$can("import-items") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    href: _ctx.route("items.import")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Import Items")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$can(["read-checkins", "create-checkins", "import-checkins", "read-checkouts", "create-checkouts", "import-checkouts"])) {
        _push(ssrRenderComponent(_sfc_main$5, {
          align: "center",
          width: "48"
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="${ssrRenderClass([
                _ctx.route().current("checkins.*") || _ctx.route().current("checkouts.*") ? "border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400" : "border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500",
                "inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100"
              ])}"${_scopeId}>${ssrInterpolate(unref(t)("Stock"))} `);
              _push2(ssrRenderComponent(_component_icons, {
                name: "chevron-down",
                class: "ml-2 -mr-0.5 h-4 w-4 text-gray-500"
              }, null, _parent2, _scopeId));
              _push2(`</button></span>`);
            } else {
              return [
                createVNode("span", { class: "inline-flex rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    class: [
                      "inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100",
                      _ctx.route().current("checkins.*") || _ctx.route().current("checkouts.*") ? "border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400" : "border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500"
                    ]
                  }, [
                    createTextVNode(toDisplayString(unref(t)("Stock")) + " ", 1),
                    createVNode(_component_icons, {
                      name: "chevron-down",
                      class: "ml-2 -mr-0.5 h-4 w-4 text-gray-500"
                    })
                  ], 2)
                ])
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.$can(["read-checkins", "create-checkins"])) {
                _push2(`<!--[--><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("Manage Checkins"))}</div>`);
                if (_ctx.$can("read-checkins")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("checkins.index")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("List Checkins"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List Checkins")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$can("create-checkins")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("checkins.create")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("Add New Checkin"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Add New Checkin")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$can(["read-checkouts", "create-checkouts"])) {
                _push2(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"${_scopeId}></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("Manage Checkouts"))}</div>`);
                if (_ctx.$can("read-checkouts")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("checkouts.index")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("List Checkouts"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List Checkouts")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$can("create-checkouts")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("checkouts.create")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("Add New Checkout"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Add New Checkout")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                _ctx.$can(["read-checkins", "create-checkins"]) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-500" }, toDisplayString(unref(t)("Manage Checkins")), 1),
                  _ctx.$can("read-checkins") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    href: _ctx.route("checkins.index")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("List Checkins")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  _ctx.$can("create-checkins") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 1,
                    href: _ctx.route("checkins.create")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Add New Checkin")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true),
                _ctx.$can(["read-checkouts", "create-checkouts"]) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode("div", { class: "border-t border-gray-100 dark:border-gray-700" }),
                  createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-500" }, toDisplayString(unref(t)("Manage Checkouts")), 1),
                  _ctx.$can("read-checkouts") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    href: _ctx.route("checkouts.index")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("List Checkouts")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  _ctx.$can("create-checkouts") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 1,
                    href: _ctx.route("checkouts.create")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Add New Checkout")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$can([
        "read-customers",
        "create-customers",
        "import-customers",
        "read-suppliers",
        "create-suppliers",
        "import-suppliers",
        "read-users",
        "create-users"
      ])) {
        _push(ssrRenderComponent(_sfc_main$5, {
          align: "center",
          width: "48"
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="${ssrRenderClass([
                _ctx.route().current("customers.*") || _ctx.route().current("suppliers.*") || _ctx.route().current("users.*") ? "border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400" : "border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500",
                "inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100"
              ])}"${_scopeId}>${ssrInterpolate(unref(t)("People"))} `);
              _push2(ssrRenderComponent(_component_icons, {
                name: "chevron-down",
                class: "ml-2 -mr-0.5 h-4 w-4 text-gray-500"
              }, null, _parent2, _scopeId));
              _push2(`</button></span>`);
            } else {
              return [
                createVNode("span", { class: "inline-flex rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    class: [
                      "inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100",
                      _ctx.route().current("customers.*") || _ctx.route().current("suppliers.*") || _ctx.route().current("users.*") ? "border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400" : "border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500"
                    ]
                  }, [
                    createTextVNode(toDisplayString(unref(t)("People")) + " ", 1),
                    createVNode(_component_icons, {
                      name: "chevron-down",
                      class: "ml-2 -mr-0.5 h-4 w-4 text-gray-500"
                    })
                  ], 2)
                ])
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.$can(["read-customers", "create-customers", "import-customers"])) {
                _push2(`<!--[--><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("Manage Customers"))}</div>`);
                if (_ctx.$can("read-customers")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("customers.index")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("List Customers"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List Customers")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$can("create-customers")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("customers.create")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("Add New Customer"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Add New Customer")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$can("import-customers")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("customers.import")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("Import Customer"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Import Customer")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$can(["read-suppliers", "create-suppliers", "import-suppliers"])) {
                _push2(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"${_scopeId}></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("Manage Suppliers"))}</div>`);
                if (_ctx.$can("read-suppliers")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("suppliers.index")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("List Suppliers"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List Suppliers")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$can("create-suppliers")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("suppliers.create")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("Add New Supplier"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Add New Supplier")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$can("import-suppliers")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("suppliers.import")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("Import Supplier"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Import Supplier")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$can(["read-users", "create-users"])) {
                _push2(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"${_scopeId}></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("Manage Users"))}</div>`);
                if (_ctx.$can("read-users")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("users.index")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("List Users"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List Users")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$can("create-users")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("users.create")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("Add New User"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Add New User")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                _ctx.$can(["read-customers", "create-customers", "import-customers"]) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-500" }, toDisplayString(unref(t)("Manage Customers")), 1),
                  _ctx.$can("read-customers") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    href: _ctx.route("customers.index")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("List Customers")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  _ctx.$can("create-customers") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 1,
                    href: _ctx.route("customers.create")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Add New Customer")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  _ctx.$can("import-customers") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 2,
                    href: _ctx.route("customers.import")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Import Customer")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true),
                _ctx.$can(["read-suppliers", "create-suppliers", "import-suppliers"]) ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode("div", { class: "border-t border-gray-100 dark:border-gray-700" }),
                  createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-500" }, toDisplayString(unref(t)("Manage Suppliers")), 1),
                  _ctx.$can("read-suppliers") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    href: _ctx.route("suppliers.index")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("List Suppliers")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  _ctx.$can("create-suppliers") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 1,
                    href: _ctx.route("suppliers.create")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Add New Supplier")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  _ctx.$can("import-suppliers") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 2,
                    href: _ctx.route("suppliers.import")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Import Supplier")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true),
                _ctx.$can(["read-users", "create-users"]) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                  createVNode("div", { class: "border-t border-gray-100 dark:border-gray-700" }),
                  createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-500" }, toDisplayString(unref(t)("Manage Users")), 1),
                  _ctx.$can("read-users") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    href: _ctx.route("users.index")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("List Users")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  _ctx.$can("create-users") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 1,
                    href: _ctx.route("users.create")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Add New User")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$can(["read-activity", "read-settings", "create-settings", "read-categories", "create-categories", "import-categories"])) {
        _push(ssrRenderComponent(_sfc_main$5, {
          align: "center",
          width: "48"
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="${ssrRenderClass([
                _ctx.route().current("settings") || _ctx.route().current("categories.*") || _ctx.route().current("roles.*") ? "border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400" : "border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500",
                "inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100"
              ])}"${_scopeId}>${ssrInterpolate(unref(t)("Settings"))} `);
              _push2(ssrRenderComponent(_component_icons, {
                name: "chevron-down",
                class: "ml-2 -mr-0.5 h-4 w-4 text-gray-500"
              }, null, _parent2, _scopeId));
              _push2(`</button></span>`);
            } else {
              return [
                createVNode("span", { class: "inline-flex rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    class: [
                      "inline-flex items-center px-3 py-2 border-b text-sm leading-4 font-medium text-gray-600 hover:text-gray-800 focus:outline-none transition focus:ring-0 focus:rounded-none focus:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 dark:focus:text-gray-100",
                      _ctx.route().current("settings") || _ctx.route().current("categories.*") || _ctx.route().current("roles.*") ? "border-blue-700 hover:border-blue-300 focus:border-blue-400 dark:border-blue-700 dark:hover:border-blue-300 dark:focus:border-blue-400" : "border-gray-300 hover:border-gray-400 focus:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500 dark:focus:border-gray-500"
                    ]
                  }, [
                    createTextVNode(toDisplayString(unref(t)("Settings")) + " ", 1),
                    createVNode(_component_icons, {
                      name: "chevron-down",
                      class: "ml-2 -mr-0.5 h-4 w-4 text-gray-500"
                    })
                  ], 2)
                ])
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.$can("read-activity")) {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  href: _ctx.route("activity")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(t)("Activity Log"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)("Activity Log")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$can(["read-settings", "create-settings"])) {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  href: _ctx.route("settings")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(t)("System Settings"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)("System Settings")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$can(["read-categories", "create-categories", "import-categories"])) {
                _push2(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"${_scopeId}></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("Manage Categories"))}</div>`);
                if (_ctx.$can("read-categories")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("categories.index")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("List Categories"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List Categories")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$can("create-categories")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("categories.create")
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
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$can("import-categories")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("categories.import")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("Import Category"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Import Category")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$can(["read-roles", "create-roles"])) {
                _push2(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"${_scopeId}></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("Manage User Roles"))}</div>`);
                if (_ctx.$can("read-roles")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("roles.index")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("List User Roles"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("List User Roles")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$can("create-roles")) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("roles.create")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`${ssrInterpolate(unref(t)("Add New User Role"))}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(unref(t)("Add New User Role")), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                _ctx.$can("read-activity") ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 0,
                  href: _ctx.route("activity")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Activity Log")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true),
                _ctx.$can(["read-settings", "create-settings"]) ? (openBlock(), createBlock(_sfc_main$2, {
                  key: 1,
                  href: _ctx.route("settings")
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("System Settings")), 1)
                  ]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true),
                _ctx.$can(["read-categories", "create-categories", "import-categories"]) ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                  createVNode("div", { class: "border-t border-gray-100 dark:border-gray-700" }),
                  createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-500" }, toDisplayString(unref(t)("Manage Categories")), 1),
                  _ctx.$can("read-categories") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    href: _ctx.route("categories.index")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("List Categories")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  _ctx.$can("create-categories") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 1,
                    href: _ctx.route("categories.create")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Add New Category")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  _ctx.$can("import-categories") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 2,
                    href: _ctx.route("categories.import")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Import Category")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true),
                _ctx.$can(["read-roles", "create-roles"]) ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                  createVNode("div", { class: "border-t border-gray-100 dark:border-gray-700" }),
                  createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-500" }, toDisplayString(unref(t)("Manage User Roles")), 1),
                  _ctx.$can("read-roles") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    href: _ctx.route("roles.index")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("List User Roles")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  _ctx.$can("create-roles") ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 1,
                    href: _ctx.route("roles.create")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("Add New User Role")), 1)
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ], 64)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="hidden lg:flex lg:items-center lg:ml-6"><div class="ml-3 relative">`);
      if (_ctx.$page.props.jetstream.hasTeamFeatures) {
        _push(ssrRenderComponent(_sfc_main$5, {
          align: "right",
          width: "60"
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2;
            if (_push2) {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"${_scopeId}>${ssrInterpolate((_a2 = user.value) == null ? void 0 : _a2.current_team.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
            } else {
              return [
                createVNode("span", { class: "inline-flex rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition"
                  }, [
                    createTextVNode(toDisplayString((_b2 = user.value) == null ? void 0 : _b2.current_team.name) + " ", 1),
                    (openBlock(), createBlock("svg", {
                      class: "ml-2 -mr-0.5 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor"
                    }, [
                      createVNode("path", {
                        "fill-rule": "evenodd",
                        d: "M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",
                        "clip-rule": "evenodd"
                      })
                    ]))
                  ])
                ])
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2;
            if (_push2) {
              _push2(`<div class="w-60"${_scopeId}>`);
              if (_ctx.$page.props.jetstream.hasTeamFeatures) {
                _push2(`<!--[--><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("Manage Team"))}</div>`);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  href: _ctx.route("teams.show", (_a2 = user.value) == null ? void 0 : _a2.current_team)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(unref(t)("Team Settings"))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(unref(t)("Team Settings")), 1)
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                if (_ctx.$page.props.jetstream.canCreateTeams) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    href: _ctx.route("teams.create")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` Create New Team `);
                      } else {
                        return [
                          createTextVNode(" Create New Team ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="border-t border-gray-100 dark:border-gray-700"${_scopeId}></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("Switch Teams"))}</div><!--[-->`);
                ssrRenderList((_b2 = user.value) == null ? void 0 : _b2.all_teams, (team) => {
                  _push2(`<form${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$2, { as: "button" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      var _a3, _b3;
                      if (_push3) {
                        _push3(`<div class="flex items-center"${_scopeId2}>`);
                        if (team.id == ((_a3 = user.value) == null ? void 0 : _a3.current_team_id)) {
                          _push3(`<svg class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId2}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId2}></path></svg>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<div${_scopeId2}>${ssrInterpolate(team.name)}</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            team.id == ((_b3 = user.value) == null ? void 0 : _b3.current_team_id) ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "mr-2 h-5 w-5 text-green-400",
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                            ])) : createCommentVNode("", true),
                            createVNode("div", null, toDisplayString(team.name), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</form>`);
                });
                _push2(`<!--]--><!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-60" }, [
                  _ctx.$page.props.jetstream.hasTeamFeatures ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-500" }, toDisplayString(unref(t)("Manage Team")), 1),
                    createVNode(_sfc_main$2, {
                      href: _ctx.route("teams.show", (_c2 = user.value) == null ? void 0 : _c2.current_team)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("Team Settings")), 1)
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    _ctx.$page.props.jetstream.canCreateTeams ? (openBlock(), createBlock(_sfc_main$2, {
                      key: 0,
                      href: _ctx.route("teams.create")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Create New Team ")
                      ]),
                      _: 1
                    }, 8, ["href"])) : createCommentVNode("", true),
                    createVNode("div", { class: "border-t border-gray-100 dark:border-gray-700" }),
                    createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-500" }, toDisplayString(unref(t)("Switch Teams")), 1),
                    (openBlock(true), createBlock(Fragment, null, renderList((_d2 = user.value) == null ? void 0 : _d2.all_teams, (team) => {
                      return openBlock(), createBlock("form", {
                        key: team.id,
                        onSubmit: withModifiers(($event) => switchToTeam(team), ["prevent"])
                      }, [
                        createVNode(_sfc_main$2, { as: "button" }, {
                          default: withCtx(() => {
                            var _a3;
                            return [
                              createVNode("div", { class: "flex items-center" }, [
                                team.id == ((_a3 = user.value) == null ? void 0 : _a3.current_team_id) ? (openBlock(), createBlock("svg", {
                                  key: 0,
                                  class: "mr-2 h-5 w-5 text-green-400",
                                  fill: "none",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                                ])) : createCommentVNode("", true),
                                createVNode("div", null, toDisplayString(team.name), 1)
                              ])
                            ];
                          }),
                          _: 2
                        }, 1024)
                      ], 40, ["onSubmit"]);
                    }), 128))
                  ], 64)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="relative mx-2">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        align: "center",
        width: "40"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="flex h-12 items-center p-0.5 m-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none focus:ring-0 focus:border-transparent"${_scopeId}><span class="mt-0.5 w-6 h-6"${_scopeId}>${_ctx.getFlag().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397)) ?? ""}</span></button>`);
          } else {
            return [
              createVNode("button", { class: "flex h-12 items-center p-0.5 m-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none focus:ring-0 focus:border-transparent" }, [
                createVNode("span", {
                  class: "mt-0.5 w-6 h-6",
                  innerHTML: _ctx.getFlag().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
                }, null, 8, ["innerHTML"])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(LANGUAGES), (lang) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                as: "button",
                onClick: ($event) => _ctx.changeLang(lang.value)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="mr-2"${_scopeId2}>${lang.flag.replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397)) ?? ""}</span> ${ssrInterpolate(lang.label)}`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "mr-2",
                        innerHTML: lang.flag.replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
                      }, null, 8, ["innerHTML"]),
                      createTextVNode(" " + toDisplayString(lang.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(LANGUAGES), (lang) => {
                return openBlock(), createBlock(_sfc_main$2, {
                  key: lang.value,
                  as: "button",
                  onClick: ($event) => _ctx.changeLang(lang.value)
                }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: "mr-2",
                      innerHTML: lang.flag.replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
                    }, null, 8, ["innerHTML"]),
                    createTextVNode(" " + toDisplayString(lang.label), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button type="button" class="bg-gray-200 dark:bg-gray-700 relative inline-flex h-6 w-11 mr-3 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:border-transparent focus:rounded-full focus:ring-0"><span class="sr-only">Theme toggle</span><span class="translate-x-0 dark:translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white dark:bg-black shadow ring-0 transition duration-200 ease-in-out"><span class="${ssrRenderClass([theme.value == "dark" ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"])}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 text-yellow-500 dark:text-yellow-300"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg></span><span class="${ssrRenderClass([theme.value == "dark" ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"])}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 text-blue-500 dark:text-blue-300"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path></svg></span></span></button>`);
      if (_ctx.$page.props.alerts) {
        _push(ssrRenderComponent(_component_Link, {
          href: "/items?alerts=yes",
          class: "relative bg-gray-200 dark:bg-gray-700 p-1 mx-1 rounded-full text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="sr-only"${_scopeId}>${ssrInterpolate(unref(t)("View notifications"))}</span>`);
              _push2(ssrRenderComponent(_component_icons, { name: "bell" }, null, _parent2, _scopeId));
              _push2(`<div class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[10px] bg-red-500 text-white flex items-center justify-center"${_scopeId}>${ssrInterpolate(_ctx.$page.props.alerts)}</div>`);
            } else {
              return [
                createVNode("span", { class: "sr-only" }, toDisplayString(unref(t)("View notifications")), 1),
                createVNode(_component_icons, { name: "bell" }),
                createVNode("div", { class: "absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[10px] bg-red-500 text-white flex items-center justify-center" }, toDisplayString(_ctx.$page.props.alerts), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ml-3 relative">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2;
          if (_push2) {
            _push2(`<div class="flex items-center border-0 border-gray-300 dark:border-gray-700 mt-px -mb-px focus-within:border-blue-400 focus-within:ring-0"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2.5 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-0 transition"${_scopeId}><img class="h-8 w-8 rounded-full object-cover mr-2"${ssrRenderAttr("src", (_a2 = user.value) == null ? void 0 : _a2.profile_photo_url)}${ssrRenderAttr("alt", (_b2 = user.value) == null ? void 0 : _b2.name)}${_scopeId}> ${ssrInterpolate((_c2 = user.value) == null ? void 0 : _c2.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center border-0 border-gray-300 dark:border-gray-700 mt-px -mb-px focus-within:border-blue-400 focus-within:ring-0" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2.5 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-0 transition"
                }, [
                  createVNode("img", {
                    class: "h-8 w-8 rounded-full object-cover mr-2",
                    src: (_d2 = user.value) == null ? void 0 : _d2.profile_photo_url,
                    alt: (_e2 = user.value) == null ? void 0 : _e2.name
                  }, null, 8, ["src", "alt"]),
                  createTextVNode(" " + toDisplayString((_f2 = user.value) == null ? void 0 : _f2.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500"${_scopeId}>${ssrInterpolate(unref(t)("Manage Account"))}</div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("profile.show")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Profile"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("Profile")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasApiFeatures) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                href: _ctx.route("api-tokens.index")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(unref(t)("API Tokens"))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)("API Tokens")), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-t border-gray-100 dark:border-gray-700"${_scopeId}></div><form${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { as: "button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("Log Out"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("Log Out")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400 dark:text-gray-500" }, toDisplayString(unref(t)("Manage Account")), 1),
              createVNode(_sfc_main$2, {
                href: _ctx.route("profile.show")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("Profile")), 1)
                ]),
                _: 1
              }, 8, ["href"]),
              _ctx.$page.props.jetstream.hasApiFeatures ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                href: _ctx.route("api-tokens.index")
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("API Tokens")), 1)
                ]),
                _: 1
              }, 8, ["href"])) : createCommentVNode("", true),
              createVNode("div", { class: "border-t border-gray-100 dark:border-gray-700" }),
              createVNode("form", {
                onSubmit: withModifiers(logout, ["prevent"])
              }, [
                createVNode(_sfc_main$2, { as: "button" }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("Log Out")), 1)
                  ]),
                  _: 1
                })
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center gap-2 lg:hidden bg-white dark:bg-gray-900"><div class="relative mx-2">`);
      _push(ssrRenderComponent(_sfc_main$5, {
        align: "center",
        width: "40"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="flex h-12 items-center p-0.5 m-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none focus:ring-0 focus:border-transparent"${_scopeId}><span class="mt-0.5 w-6 h-6"${_scopeId}>${_ctx.getFlag().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397)) ?? ""}</span></button>`);
          } else {
            return [
              createVNode("button", { class: "flex h-12 items-center p-0.5 m-1 rounded-full text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none focus:ring-0 focus:border-transparent" }, [
                createVNode("span", {
                  class: "mt-0.5 w-6 h-6",
                  innerHTML: _ctx.getFlag().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
                }, null, 8, ["innerHTML"])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(LANGUAGES), (lang) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                as: "button",
                onClick: ($event) => _ctx.changeLang(lang.value)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="mr-2"${_scopeId2}>${lang.flag.replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397)) ?? ""}</span> ${ssrInterpolate(lang.label)}`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "mr-2",
                        innerHTML: lang.flag.replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
                      }, null, 8, ["innerHTML"]),
                      createTextVNode(" " + toDisplayString(lang.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(LANGUAGES), (lang) => {
                return openBlock(), createBlock(_sfc_main$2, {
                  key: lang.value,
                  as: "button",
                  onClick: ($event) => _ctx.changeLang(lang.value)
                }, {
                  default: withCtx(() => [
                    createVNode("span", {
                      class: "mr-2",
                      innerHTML: lang.flag.replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
                    }, null, 8, ["innerHTML"]),
                    createTextVNode(" " + toDisplayString(lang.label), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button type="button" class="bg-gray-200 dark:bg-gray-700 relative inline-flex h-6 w-11 mr-3 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:border-transparent focus:rounded-full focus:ring-0"><span class="sr-only">Theme toggle</span><span class="${ssrRenderClass([theme.value == "dark" ? "translate-x-5" : "translate-x-0", "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white dark:bg-black shadow ring-0 transition duration-200 ease-in-out"])}"><span class="${ssrRenderClass([theme.value == "dark" ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"])}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 text-gray-700 dark:text-gray-100"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg></span><span class="${ssrRenderClass([theme.value == "dark" ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100", "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"])}" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-3 w-3 text-blue-600 dark:text-blue-400"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path></svg></span></span></button>`);
      if (_ctx.$page.props.alerts) {
        _push(ssrRenderComponent(_component_Link, {
          href: "/items?alerts=yes",
          class: "relative bg-gray-200 dark:bg-gray-700 p-2 rounded-full text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="sr-only"${_scopeId}>${ssrInterpolate(unref(t)("View notifications"))}</span>`);
              _push2(ssrRenderComponent(_component_icons, { name: "bell" }, null, _parent2, _scopeId));
              _push2(`<div class="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[10px] bg-red-500 text-white flex items-center justify-center"${_scopeId}>${ssrInterpolate(_ctx.$page.props.alerts)}</div>`);
            } else {
              return [
                createVNode("span", { class: "sr-only" }, toDisplayString(unref(t)("View notifications")), 1),
                createVNode(_component_icons, { name: "bell" }),
                createVNode("div", { class: "absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-[10px] bg-red-500 text-white flex items-center justify-center" }, toDisplayString(_ctx.$page.props.alerts), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="-mr-2 flex items-center lg:hidden"><button class="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-700 focus:text-gray-500 dark:focus:text-gray-400 transition"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
        hidden: showingNavigationDropdown.value,
        "inline-flex": !showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
        hidden: !showingNavigationDropdown.value,
        "inline-flex": showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div><div class="${ssrRenderClass([{
        block: showingNavigationDropdown.value,
        hidden: !showingNavigationDropdown.value
      }, "lg:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Dashboard"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Dashboard")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$can(["read-items", "create-items", "import-items", "labels-items"])) {
        _push(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">${ssrInterpolate(unref(t)("Manage Items"))}</div>`);
        if (_ctx.$can("read-items")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("items.index"),
            active: _ctx.route().current("items.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("List Items"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("List Items")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$can("create-items")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("items.create"),
            active: _ctx.route().current("items.create")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("Add New Item"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("Add New Item")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$can("import-items")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("items.import"),
            active: _ctx.route().current("items.import")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("Import Items"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("Import Items")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$can(["read-checkins", "create-checkins", "import-checkins"])) {
        _push(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">${ssrInterpolate(unref(t)("Manage Checkins"))}</div>`);
        if (_ctx.$can("read-checkins")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("checkins.index"),
            active: _ctx.route().current("checkins.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("List Checkins"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("List Checkins")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$can("create-checkins")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("checkins.create"),
            active: _ctx.route().current("checkins.create")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("Add New Checkin"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("Add New Checkin")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$can(["read-checkouts", "create-checkouts", "import-checkouts"])) {
        _push(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">${ssrInterpolate(unref(t)("Manage Checkouts"))}</div>`);
        if (_ctx.$can("read-checkouts")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("checkouts.index"),
            active: _ctx.route().current("checkouts.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("List Checkouts"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("List Checkouts")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$can("create-checkouts")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("checkouts.create"),
            active: _ctx.route().current("checkouts.create")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("Add New Checkout"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("Add New Checkout")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$can(["read-customers", "create-customers", "import-customers"])) {
        _push(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">${ssrInterpolate(unref(t)("Manage Customers"))}</div>`);
        if (_ctx.$can("read-customers")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("customers.index"),
            active: _ctx.route().current("customers.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("List Customers"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("List Customers")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$can("create-customers")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("customers.create"),
            active: _ctx.route().current("customers.create")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("Add New Customer"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("Add New Customer")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$can("import-customers")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("customers.import"),
            active: _ctx.route().current("customers.import")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("Import Customers"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("Import Customers")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$can(["read-suppliers", "create-suppliers", "import-suppliers"])) {
        _push(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">${ssrInterpolate(unref(t)("Manage Suppliers"))}</div>`);
        if (_ctx.$can("read-suppliers")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("suppliers.index"),
            active: _ctx.route().current("suppliers.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("List Suppliers"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("List Suppliers")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$can("create-suppliers")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("suppliers.create"),
            active: _ctx.route().current("suppliers.create")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("Add New Supplier"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("Add New Supplier")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$can("import-suppliers")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("suppliers.import"),
            active: _ctx.route().current("suppliers.import")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("Import Suppliers"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("Import Suppliers")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$can(["read-categories", "create-categories", "import-categories"])) {
        _push(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">${ssrInterpolate(unref(t)("Manage Categories"))}</div>`);
        if (_ctx.$can("read-categories")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("categories.index"),
            active: _ctx.route().current("categories.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("List Categories"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("List Categories")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$can("create-categories")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("categories.create"),
            active: _ctx.route().current("categories.create")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("Add New Category"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("Add New Category")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$can("import-categories")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("categories.import"),
            active: _ctx.route().current("categories.import")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("Import Categories"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("Import Categories")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$can(["read-users", "create-users"])) {
        _push(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">${ssrInterpolate(unref(t)("Manage Users"))}</div>`);
        if (_ctx.$can("read-users")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("users.index"),
            active: _ctx.route().current("users.index")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("List Users"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("List Users")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$can("create-users")) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("users.create"),
            active: _ctx.route().current("users.create")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(unref(t)("Add New User"))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(unref(t)("Add New User")), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$can(["read-activity", "read-settings", "create-settings"])) {
        _push(`<!--[--><div class="border-t border-gray-100 dark:border-gray-700"></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">${ssrInterpolate(unref(t)("Settings"))}</div>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          href: _ctx.route("settings"),
          active: _ctx.route().current("settings")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("System Settings"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("System Settings")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$1, {
          href: _ctx.route("activity"),
          active: _ctx.route().current("activity")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("Activity Log"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("Activity Log")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200 dark:border-gray-700"><div class="flex items-center px-4">`);
      if (_ctx.$page.props.jetstream.managesProfilePhotos) {
        _push(`<div class="shrink-0 mr-3"><img class="h-10 w-10 rounded-full object-cover"${ssrRenderAttr("src", (_a = user.value) == null ? void 0 : _a.profile_photo_url)}${ssrRenderAttr("alt", (_b = user.value) == null ? void 0 : _b.name)}></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><div class="font-medium text-base text-gray-800 dark:text-gray-200">${ssrInterpolate((_c = user.value) == null ? void 0 : _c.name)}</div><div class="font-medium text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate((_d = user.value) == null ? void 0 : _d.email)}</div></div></div><div class="mt-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("profile.show"),
        active: _ctx.route().current("profile.show")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$page.props.jetstream.hasApiFeatures) {
        _push(ssrRenderComponent(_sfc_main$1, {
          href: _ctx.route("api-tokens.index"),
          active: _ctx.route().current("api-tokens.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` API Tokens `);
            } else {
              return [
                createTextVNode(" API Tokens ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<form method="POST">`);
      _push(ssrRenderComponent(_sfc_main$1, { as: "button" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      if (_ctx.$page.props.jetstream.hasTeamFeatures) {
        _push(`<!--[--><div class="border-t border-gray-200"></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">Manage Team</div>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          href: _ctx.route("teams.show", (_e = user.value) == null ? void 0 : _e.current_team),
          active: _ctx.route().current("teams.show")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Team Settings `);
            } else {
              return [
                createTextVNode(" Team Settings ")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.$page.props.jetstream.canCreateTeams) {
          _push(ssrRenderComponent(_sfc_main$1, {
            href: _ctx.route("teams.create"),
            active: _ctx.route().current("teams.create")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Create New Team `);
              } else {
                return [
                  createTextVNode(" Create New Team ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="border-t border-gray-200"></div><div class="block px-4 py-2 text-xs text-gray-400 dark:text-gray-500">Switch Teams</div><!--[-->`);
        ssrRenderList((_f = user.value) == null ? void 0 : _f.all_teams, (team) => {
          _push(`<form>`);
          _push(ssrRenderComponent(_sfc_main$1, { as: "button" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2;
              if (_push2) {
                _push2(`<div class="flex items-center"${_scopeId}>`);
                if (team.id == ((_a2 = user.value) == null ? void 0 : _a2.current_team_id)) {
                  _push2(`<svg class="mr-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div${_scopeId}>${ssrInterpolate(team.name)}</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center" }, [
                    team.id == ((_b2 = user.value) == null ? void 0 : _b2.current_team_id) ? (openBlock(), createBlock("svg", {
                      key: 0,
                      class: "mr-2 h-5 w-5 text-green-400",
                      fill: "none",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                    ])) : createCommentVNode("", true),
                    createVNode("div", null, toDisplayString(team.name), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</form>`);
        });
        _push(`<!--]--><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></nav><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$4, {
        show: alerts.value,
        onClose: ($event) => alerts.value = false
      }, null, _parent));
      _push(ssrRenderComponent(FlashMessages, { class: "print:hidden" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$5 as a
};
