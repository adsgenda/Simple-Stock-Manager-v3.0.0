<template>
  <teleport to="body">
    <div class="relative z-50">
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          @click="show = false"
          v-if="$page.props.flash.message && show"
          class="fixed top-16 right-4 w-full max-w-xs mb-8 ml-4 flex items-center justify-between bg-green-500 rounded-md text-white cursor-pointer"
        >
          <div class="flex items-start">
            <icons name="tick" class="ml-4 mt-4 w-4 h-4"></icons>
            <div class="p-4 text-sm font-bold">
              <!-- <div class="font-bold mb-1">{{ t('Success!') }}</div> -->
              {{ $page.props.flash.message }}
            </div>
          </div>
        </div>
      </transition>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
      >
        <div
          @click="show = false"
          v-if="($page.props.flash.error || Object.keys($page.props.errors).length > 0) && show"
          class="fixed top-16 right-4 w-full max-w-xs mb-8 ml-4 flex items-center justify-between bg-red-500 rounded-md text-white cursor-pointer"
        >
          <div class="flex items-start text-white">
            <icons name="cross" class="ml-4 mt-4 w-4 h-4"></icons>
            <div v-if="$page.props.flash.error" class="p-4 text-sm font-medium" v-html="$page.props.flash.error"></div>
            <div v-else class="p-4 text-sm font-medium">
              <span v-if="Object.keys($page.props.errors).length === 1">There is one form error.</span>
              <span v-else>There are {{ Object.keys($page.props.errors).length }} form errors.</span>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
  setup() {
    const { t } = useI18n({});
  },
  data() {
    return {
      show: true,
    };
  },
  watch: {
    '$page.props.flash': {
      handler() {
        this.show = true;
        setTimeout(() => (this.show = false), 5000);
      },
      deep: true,
    },
  },
};
</script>
