import JsBarcode from "jsbarcode";
import { defineComponent, h, useSSRContext } from "vue";
const _sfc_main = defineComponent({
  name: "Barcode",
  props: {
    value: {
      type: String,
      default: void 0
    },
    options: {
      type: Object,
      default: void 0
    },
    tag: {
      type: String,
      default: "canvas"
    }
  },
  watch: {
    $props: {
      deep: true,
      immediate: true,
      handler() {
        if (this.$el) {
          this.generate();
        }
      }
    }
  },
  mounted() {
    this.generate();
  },
  methods: {
    generate() {
      JsBarcode(this.$el, String(this.value), this.options);
    }
  },
  render() {
    return h(this.tag, this.$slots.default);
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Barcode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
