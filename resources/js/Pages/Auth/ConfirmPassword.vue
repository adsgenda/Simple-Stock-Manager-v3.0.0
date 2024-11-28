<script setup>
import { onMounted, ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import LoadingButton from '@/Shared/LoadingButton.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n({});

const form = useForm({
  password: '',
});

const passwordInput = ref(null);

onMounted(() => {
  document.getElementById('app-loading').style.display = 'none';
});

const submit = () => {
  form.post(route('password.confirm'), {
    onFinish: () => {
      form.reset();

      passwordInput.value.focus();
    },
  });
};
</script>

<template>
  <Head :title="t('Secure Area')" />

  <JetAuthenticationCard>
    <template #logo>
      <JetAuthenticationCardLogo />
    </template>

    <div class="mb-4 text-sm text-gray-600">
      {{ t('This is a secure area of the application. Please confirm your password before continuing.') }}
    </div>

    <JetValidationErrors class="mb-4" />

    <form @submit.prevent="submit">
      <div>
        <JetLabel for="password" value="Password" />
        <JetInput
          id="password"
          ref="passwordInput"
          v-model="form.password"
          type="password"
          class="mt-1 block w-full"
          required
          autocomplete="current-password"
          autofocus
        />
      </div>

      <div class="flex justify-end mt-4">
        <LoadingButton class="ml-4" :loading="form.processing"> {{ t('Confirm') }} </LoadingButton>
      </div>
    </form>
  </JetAuthenticationCard>
</template>
