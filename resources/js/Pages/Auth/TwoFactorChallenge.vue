<script setup>
import { nextTick, onMounted, ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import LoadingButton from '@/Shared/LoadingButton.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n({});

const recovery = ref(false);

const form = useForm({
  code: '',
  recovery_code: '',
});

const recoveryCodeInput = ref(null);
const codeInput = ref(null);

onMounted(() => {
  document.getElementById('app-loading').style.display = 'none';
});

const toggleRecovery = async () => {
  recovery.value ^= true;

  await nextTick();

  if (recovery.value) {
    recoveryCodeInput.value.focus();
    form.code = '';
  } else {
    codeInput.value.focus();
    form.recovery_code = '';
  }
};

const submit = () => {
  form.post(route('two-factor.login'));
};
</script>

<template>
  <Head :title="t('Two-factor Confirmation')" />

  <JetAuthenticationCard>
    <template #logo>
      <JetAuthenticationCardLogo />
    </template>

    <div class="mb-4 text-sm text-gray-600">
      <template v-if="!recovery">
        {{ t('Please confirm access to your account by entering the authentication code provided by your authenticator application.') }}
      </template>

      <template v-else>
        {{ t('Please confirm access to your account by entering one of your emergency recovery codes.') }}
      </template>
    </div>

    <JetValidationErrors class="mb-4" />

    <form @submit.prevent="submit">
      <div v-if="!recovery">
        <JetLabel for="code" value="Code" />
        <JetInput
          id="code"
          ref="codeInput"
          v-model="form.code"
          type="text"
          inputmode="numeric"
          class="mt-1 block w-full"
          autofocus
          autocomplete="one-time-code"
        />
      </div>

      <div v-else>
        <JetLabel for="recovery_code" value="Recovery Code" />
        <JetInput
          id="recovery_code"
          ref="recoveryCodeInput"
          v-model="form.recovery_code"
          type="text"
          class="mt-1 block w-full"
          autocomplete="one-time-code"
        />
      </div>

      <div class="flex items-center justify-end mt-4">
        <button type="button" class="text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer" @click.prevent="toggleRecovery">
          <template v-if="!recovery">
            {{ t('Use a recovery code') }}
          </template>

          <template v-else>
            {{ t('Use an authentication code') }}
          </template>
        </button>

        <LoadingButton class="ml-4" :loading="form.processing">
          {{ t('Log in') }}
        </LoadingButton>
      </div>
    </form>
  </JetAuthenticationCard>
</template>
