<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useForm } from '@inertiajs/vue3';

import Button from '@/Shared/Button.vue';
import CheckBox from '@/Shared/CheckBox.vue';
import JetLabel from '@/Jetstream/Label.vue';
import TextInput from '@/Shared/TextInput.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import SelectInput from '@/Shared/SelectInput.vue';
import FormSection from '@/Jetstream/FormSection.vue';
import JetInputError from '@/Jetstream/InputError.vue';
import AutoComplete from '@/Shared/AutoCompleteApi.vue';
import SectionTitle from '@/Jetstream/SectionTitle.vue';
import ActionMessage from '@/Jetstream/ActionMessage.vue';
import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue';

const props = defineProps(['current', 'languages']);
const { t } = useI18n({});

const logoInput = ref(null);
const logoPreview = ref(null);

const form = useForm({
  name: props.current.name,
  hour12: props.current.hour12 || '1',
  per_page: 0 + props.current.per_page,
  language: props.current.language || 'en',
  fraction: 0 + props.current.fraction || 0,
  reference: props.current.reference || 'ulid',
  over_selling: props.current.over_selling == 1,
  customer_cf1: props.current.customer_cf1 || null,
  customer_cf2: props.current.customer_cf2 || null,
  supplier_cf1: props.current.supplier_cf1 || null,
  supplier_cf2: props.current.supplier_cf2 || null,
  default_locale: props.current.default_locale || 'en-US',
  attachment_exts: props.current.attachment_exts || 'jpg,png,pdf,xlsx,docx,zip',
  logo: props.current.logo || null,
  mail_from_address: props.current['mail_from_address'] || 'noreply@domain.com',
  mail_from_name: props.current['mail_from_name'] || 'SSM Desk',
  mail_default: props.current['mail_default'] || 'smtp',
  mail_mailers_smtp_host: props.current['mail_mailers_smtp_host'] || '127.0.0.1',
  mail_mailers_smtp_port: props.current['mail_mailers_smtp_port'] || '2525',
  mail_mailers_smtp_username: props.current['mail_mailers_smtp_username'] || null,
  mail_mailers_smtp_password: props.current['mail_mailers_smtp_password'] || null,
  mail_mailers_smtp_encryption: props.current['mail_mailers_smtp_encryption'] || null,
  services_mailgun_domain: props.current['services_mailgun_domain'] || null,
  services_mailgun_secret: props.current['services_mailgun_secret'] || null,
  services_mailgun_endpoint: props.current['services_mailgun_endpoint'] || null,
  services_sparkpost_secret: props.current['services_sparkpost_secret'] || null,
  services_sparkpost_endpoint: props.current['services_sparkpost_endpoint'] || null,
  services_ses_key: props.current['services_ses_key'] || null,
  services_ses_secret: props.current['services_ses_secret'] || null,
  services_ses_region: props.current['services_ses_region'] || null,
});

const submit = () => {
  if (logoInput.value) {
    form.logo = logoInput.value.files[0];
  }
  form.post(route('settings.store'));
};

const selectNewLogo = () => {
  logoInput.value.click();
};

const updateLogoPreview = () => {
  const photo = logoInput.value.files[0];
  if (!photo) return;

  const reader = new FileReader();
  reader.onload = e => {
    logoPreview.value = e.target.result;
  };
  reader.readAsDataURL(photo);
};
</script>

<template>
  <AppLayout :title="t('Settings')">
    <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
      <FormSection @submitted="submit" autocomplete="off">
        <template #title>{{ t('Settings') }}</template>
        <template #description>{{ t('Please fill the form below to update settings.') }}</template>

        <template #form>
          <div class="col-span-full">
            <!-- Logo File Input -->
            <input ref="logoInput" type="file" class="hidden" accept=".png,.jpg,.jpeg,.svg" @change="updateLogoPreview" />
            <JetLabel for="logo" :value="t('Logo')" />

            <!-- Current Logo -->
            <div v-show="!logoPreview && form.logo" class="my-2 rounded-md bg-white p-2">
              <img :src="form.logo" :alt="form.name" class="block rounded w-80 h-20 mx-auto bg-contain" />
            </div>

            <!-- New Logo Preview -->
            <div v-show="logoPreview" class="my-2 rounded-md bg-white p-2">
              <span
                class="block rounded w-80 h-20 mx-auto bg-contain bg-no-repeat bg-center"
                :style="'background-image: url(\'' + logoPreview + '\');'"
              />
            </div>

            <JetSecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewLogo">
              {{ t('Select Logo') }}
            </JetSecondaryButton>

            <!-- <JetSecondaryButton v-if="form.logo" type="button" class="mt-2" @click.prevent="deleteLogo">
              {{ t('Remove Logo') }}
            </JetSecondaryButton> -->
            <JetInputError :message="form.errors.logo" class="mt-2" />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.name" :error="form.errors.name" :label="t('Site Name')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <AutoComplete
              id="language"
              :searchable="false"
              v-model="form.language"
              :label="t('Language')"
              :error="form.errors.language"
              :suggestions="props.languages"
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <AutoComplete
              id="reference"
              :searchable="false"
              v-model="form.reference"
              :label="t('Reference')"
              :error="form.errors.reference"
              :suggestions="[
                { value: 'ulid', label: 'ULID - Universally Unique Lexicographically Sortable Identifier' },
                { value: 'ai', label: 'Auto Increment (MYSQL only)' },
                { value: 'uniqid', label: 'Uniqid - PHP Generate a Unique ID' },
                { value: 'uuid', label: 'UUID - Universally Unique Identifier' },
              ]"
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.default_locale" :error="form.errors.default_locale" :label="t('Date & Number Locale')" />
          </div>

          <!-- <div class="col-span-6 sm:col-span-3">
              <AutoComplete
                id="fraction"
                :searchable="false"
                v-model="form.fraction"
                :label="t('Decimal Fractions')"
                :error="form.errors.fraction"
                :suggestions="[
                  { value: 0, label: 0 },
                  { value: 1, label: 1 },
                  { value: 2, label: 2 },
                  { value: 3, label: 3 },
                  { value: 4, label: 4 },
                ]"
              />
          </div> -->

          <div class="col-span-6 sm:col-span-3">
            <AutoComplete
              id="hour12"
              :searchable="false"
              v-model="form.hour12"
              :label="t('Time Format')"
              :error="form.errors.hour12"
              :suggestions="[
                { value: '0', label: '24 Hours (23:30)' },
                { value: '1', label: '12 Hours (11:30 PM)' },
              ]"
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <AutoComplete
              id="per_page"
              :searchable="false"
              v-model="form.per_page"
              :label="t('Rows per page')"
              :error="form.errors.per_page"
              :suggestions="[
                { value: 10, label: 10 },
                { value: 15, label: 15 },
                { value: 25, label: 25 },
                { value: 50, label: 50 },
                { value: 100, label: 100 },
              ]"
            />
          </div>

          <div class="col-span-6">
            <TextInput v-model="form.attachment_exts" :error="form.errors.attachment_exts" :label="t('Allowed attachments')" />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form['mail_from_name']" :error="form.errors['mail_from_name']" :label="t('From Name')" />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <TextInput
              type="email"
              :label="t('From Email Address')"
              v-model="form['mail_from_address']"
              :error="form.errors['mail_from_address']"
            />
          </div>

          <div class="col-span-full">
            <AutoComplete
              id="mail_default"
              :searchable="false"
              :label="t('Mail Driver')"
              v-model="form['mail_default']"
              :error="form.errors['mail_default'] ? form.errors['mail_default'] : null"
              :suggestions="[
                { value: 'smtp', label: 'SMTP' },
                { value: 'ses', label: 'AWS SES' },
                { value: 'mailgun', label: 'Mailgun' },
                { value: 'sparkpost', label: 'Sparkpost' },
              ]"
            />
          </div>

          <template v-if="form['mail_default'] == 'smtp'">
            <div class="col-span-6 sm:col-span-3">
              <TextInput :label="t('SMTP Host')" v-model="form['mail_mailers_smtp_host']" :error="form.errors['mail_mailers_smtp_host']" />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <TextInput :label="t('SMTP Port')" v-model="form['mail_mailers_smtp_port']" :error="form.errors['mail_mailers_smtp_port']" />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <TextInput
                :label="t('SMTP Username')"
                v-model="form['mail_mailers_smtp_username']"
                :error="form.errors['mail_mailers_smtp_username']"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <TextInput
                :label="t('SMTP Password')"
                v-model="form['mail_mailers_smtp_password']"
                :error="form.errors['mail_mailers_smtp_password']"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <TextInput
                :label="t('SMTP Encryption')"
                v-model="form['mail_mailers_smtp_encryption']"
                :error="form.errors['mail_mailers_smtp_encryption']"
              />
            </div>
            <div class="col-span-6 sm:col-span-3"></div>
          </template>
          <template v-else-if="form['mail_default'] == 'ses'">
            <div class="col-span-6 sm:col-span-3">
              <TextInput :label="t('AWS SES Key')" v-model="form['services_ses_key']" :error="form.errors['services_ses_key']" />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <TextInput :label="t('AWS SES Secret')" v-model="form['services_ses_secret']" :error="form.errors['services_ses_secret']" />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <TextInput :label="t('AWS SES Region')" v-model="form['services_ses_region']" :error="form.errors['services_ses_region']" />
            </div>
            <div class="col-span-6 sm:col-span-3"></div>
          </template>
          <template v-else-if="form['mail_default'] == 'mailgun'">
            <div class="col-span-6 sm:col-span-3">
              <TextInput
                :label="t('Mailgun Domain')"
                v-model="form['services_mailgun_domain']"
                :error="form.errors['services_mailgun_domain']"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <TextInput
                :label="t('Mailgun Secret')"
                v-model="form['services_mailgun_secret']"
                :error="form.errors['services_mailgun_secret']"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <TextInput
                :label="t('Mailgun Endpoint')"
                v-model="form['services_mailgun_endpoint']"
                :error="form.errors['services_mailgun_endpoint']"
              />
            </div>
            <div class="col-span-6 sm:col-span-3"></div>
          </template>
          <template v-else-if="form['mail_default'] == 'sparkpost'">
            <div class="col-span-6 sm:col-span-3">
              <TextInput
                :label="t('Sparkpost Secret')"
                v-model="form['services_sparkpost_secret']"
                :error="form.errors['services_sparkpost_secret']"
              />
            </div>
            <div class="col-span-6 sm:col-span-3">
              <TextInput
                :label="t('Sparkpost Endpoint')"
                v-model="form['services_sparkpost_endpoint']"
                :error="form.errors['services_sparkpost_endpoint']"
              />
            </div>
          </template>

          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.customer_cf2" :error="form.errors.customer_cf2" :label="t('Label for customer field 2')" />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.customer_cf1" :error="form.errors.customer_cf1" :label="t('Label for customer field 1')" />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.customer_cf2" :error="form.errors.customer_cf2" :label="t('Label for customer field 2')" />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.supplier_cf1" :error="form.errors.supplier_cf1" :label="t('Label for supplier field 1')" />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <TextInput v-model="form.supplier_cf2" :error="form.errors.supplier_cf2" :label="t('Label for supplier field 2')" />
          </div>

          <div class="col-span-full mb-4">
            <CheckBox
              id="over_selling"
              :label="t('Enable over selling')"
              v-model:checked="form.over_selling"
              :error="form.errors.over_selling"
            />
          </div>
        </template>

        <template #actions>
          <ActionMessage :on="form.recentlySuccessful" class="mr-3"> Saved. </ActionMessage>
          <Button type="submit" :loading="form.processing"> Save </Button>
        </template>
      </FormSection>

      <div v-if="form && form?.default_locale" class="mt-8">
        <FormSection>
          <template #title>{{ t('Preview') }}</template>
          <template #description>{{ t('Number and Date Format') }}</template>

          <template #form>
            <div class="col-span-full -m-6 rounded-md overflow-hidden">
              <dl>
                <div class="bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="font-medium text-gray-500 dark:text-gray-400">{{ t('Number') }}</dt>
                  <dd class="mt-1 sm:mt-0 sm:col-span-2">
                    {{
                      $number(20000000.5, form.default_locale, {
                        minimumFractionDigits: form.fraction,
                      })
                    }}
                  </dd>
                </div>
                <div class="bg-gray-50 dark:bg-black/20 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="font-medium text-gray-500 dark:text-gray-400">{{ t('Date') }}</dt>
                  <dd class="mt-1 sm:mt-0 sm:col-span-2">
                    {{ $date(new Date(), form.default_locale) }}
                  </dd>
                </div>
                <div class="bg-white dark:bg-gray-900 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="font-medium text-gray-500 dark:text-gray-400">{{ t('Date Time') }}</dt>
                  <dd class="mt-1 sm:mt-0 sm:col-span-2">
                    {{ $datetime(new Date(), form.default_locale) }}
                  </dd>
                </div>
              </dl>
            </div>
          </template>
        </FormSection>
      </div>
    </div>
  </AppLayout>
</template>
