import { v4 } from "uuid";
import { _ as _sfc_main$1 } from "./Label-DhVQiNLB.js";
import { _ as _sfc_main$2 } from "./Input-Cp6lSzEq.js";
import { _ as _sfc_main$3 } from "./InputError-DN7DJAFH.js";
import { useSSRContext } from "vue";
import "vue/server-renderer";
const _sfc_main = {
  emits: ["update:modelValue"],
  components: { TecLabel: _sfc_main$1, TecInput: _sfc_main$2, TecInputError: _sfc_main$3 },
  props: {
    label: String,
    error: String,
    accept: String,
    modelValue: File,
    id: {
      type: String,
      default() {
        return v4();
      }
    }
  },
  watch: {
    modelValue(value) {
      if (!value) {
        this.$refs.file.value = "";
      }
    }
  },
  computed: {
    selected() {
      return this.modelValue ? this.modelValue.name + " (" + this.filesize(this.modelValue.size) + ")" : "";
    }
  },
  methods: {
    filesize(size) {
      var i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i];
    },
    browse() {
      this.$refs.file.click();
    },
    change(e) {
      this.$emit("update:modelValue", e.target.files[0]);
    },
    remove() {
      this.$emit("update:modelValue", null);
    }
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/DropDownInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
