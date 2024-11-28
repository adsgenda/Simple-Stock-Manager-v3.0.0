<script setup>
import JsBarcode from 'jsbarcode';
import { useI18n } from 'vue-i18n';
import { onMounted, onUpdated } from 'vue';
import Attachments from '@/Shared/Attachments.vue';

const { t } = useI18n({});
const props = defineProps({ checkin: Object });

onMounted(() => {
  //   JsBarcode('.barcode').init();
  JsBarcode('#barcode', props.checkin.reference, {
    width: 1,
    margin: 0,
    fontSize: 0,
    height: '30',
    format: 'CODE128',
  });
});

onUpdated(() => {
  JsBarcode('#barcode', props.checkin.reference, {
    width: 1,
    margin: 0,
    fontSize: 0,
    height: '30',
    format: 'CODE128',
  });
});
</script>

<template>
  <div
    v-if="checkin"
    class="mt-auto bg-gray-100 dark:bg-gray-800 -m-6 py-6 px-4 md:px-6 rounded-md print:bg-white print:mt-0 print:pt-0 print:h-full print:overflow-visible"
  >
    <div
      class="bg-white dark:bg-gray-900 p-4 rounded-md shadow overflow-x-auto border dark:border-gray-700 print:border-0 print:shadow-none print:pt-0"
    >
      <div class="block sm:flex justify-between print:flex">
        <p class="mb-4 sm:mb-0">{{ $settings.name }}</p>
        <!-- <div class="text-left sm:text-right leading-snug max-w-md print:text-right">
          <div class="font-bold">{{ checkin.warehouse.name }} ({{ checkin.warehouse.code }})</div>
          <div v-if="checkin.warehouse.address">{{ checkin.warehouse.address }}</div>
          <div v-if="checkin.warehouse.phone">{{ checkin.warehouse.phone }}</div>
          <div v-if="checkin.warehouse.email">{{ checkin.warehouse.email }}</div>
        </div> -->
      </div>
      <div class="border-b dark:border-gray-700 my-4 -mx-4"></div>

      <div class="py-4 w-full">
        <h1 class="text-xl text-center uppercase font-extrabold">{{ t('Checkin') }}</h1>
        <div class="mt-4 flex items-center justify-center">
          <div class="inline-flex bg-white p-2 rounded-md mx-auto">
            <svg id="barcode" class="mt-px"></svg>
          </div>
        </div>
      </div>

      <div class="mt-6 block sm:flex justify-between print:flex">
        <div class="w-full sm:w-1/2 leading-snug mb-6 sm:mb-0">
          <div class="text-sm font-bold">&nbsp;</div>
          <div>{{ t('Date') }}: {{ $date(checkin.date) }}</div>
          <div>{{ t('Reference') }}: {{ checkin.reference }}</div>
          <div>{{ t('Created at') }}: {{ $datetime(checkin.created_at) }}</div>
        </div>
        <div class="text-left w-full sm:w-1/2 leading-snug">
          <div class="text-sm font-bold">{{ t('For') }}:</div>
          <div>{{ checkin.supplier.name }}</div>
          <div v-if="checkin.supplier.company" class="font-bold">{{ checkin.supplier.company }}</div>
          <div v-if="checkin.supplier.phone">{{ t('Tel') }}: {{ checkin.supplier.phone }}</div>
          <div v-if="checkin.supplier.email">{{ t('Email') }}: {{ checkin.supplier.email }}</div>
        </div>
      </div>

      <div v-if="checkin.attachment" class="print:hidden mt-6 p-4 w-full border dark:border-gray-700 rounded-md">
        {{ t('This record has an attachment') }},
        <a :href="checkin.attachment" target="_blank" class="link">{{ t('click here to view') }}</a>
      </div>

      <div class="-mx-4 overflow-x-auto">
        <table class="w-full mt-8 mb-4" style="min-width: 500px">
          <tr>
            <th class="px-6 py-2 text-left">{{ t('Item') }}</th>
            <th class="px-6 py-2 w-32 text-center">{{ t('Quantity') }}</th>
          </tr>
          <template v-for="(item, ii) in checkin.items" :key="'i_' + item.id">
            <tr
              class="group avoid"
              :class="{ 'bg-gray-50 dark:bg-gray-800': ii % 2 != 0, 'border-b dark:border-gray-700': checkin.items.length == ii + 1 }"
            >
              <td class="group-hover:bg-gray-100 dark:group-hover:bg-gray-700 border-t dark:border-gray-700 px-6 py-2">
                {{ item.name }} ({{ item.code }})
              </td>
              <td class="group-hover:bg-gray-100 dark:group-hover:bg-gray-700 border-t dark:border-gray-700 px-6 py-2 w-32 text-center">
                {{ $number(item.quantity) }} {{ item.unit || '' }}
              </td>
            </tr>
          </template>
        </table>
      </div>

      <div v-if="checkin.attachments && checkin.attachments.length" class="py-4 w-full">
        <Attachments :attachments="checkin.attachments" />
      </div>

      <div v-if="checkin.note" class="py-4 w-full">
        {{ checkin.note }}
      </div>
    </div>
    <div class="mt-auto pt-4 w-full text-center text-sm text-gray-500 hidden print:block">
      {{ t('This is computer generated document, no signature required.') }}
    </div>
  </div>
</template>
