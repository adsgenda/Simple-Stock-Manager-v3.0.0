import { useI18n } from 'vue-i18n';
import { createSSRApp, h } from 'vue';
import { route, ZiggyVue } from 'ziggy-js';
import createServer from '@inertiajs/vue3/server';
import { renderToString } from '@vue/server-renderer';
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = 'SSM';
import i18n from '@/Core/i18n';
import mixin from '@/Core/mixin';
import Icons from '@/Shared/Icons.vue';

createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    title: title => `${title} - ${appName}`,
    resolve: name => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ app, props, plugin }) {
      return createSSRApp({
        setup() {
          const { t } = useI18n();
          return { t };
        },
        render: () => h(app, props),
      })
        .use(plugin)
        .use(ZiggyVue, {
          ...page.props.ziggy,
          location: new URL(page.props.ziggy.location),
        })
        .component('Head', Head)
        .component('Link', Link)
        .component('Icons', Icons)
        .use(i18n)
        .mixin(mixin);
    },
  })
);
