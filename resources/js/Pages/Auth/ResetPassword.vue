<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import LoadingButton from '@/Shared/LoadingButton.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue';
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';
const { t } = useI18n({});

const props = defineProps({
  email: String,
  token: String,
});

const form = useForm({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: '',
});

onMounted(() => {
  document.getElementById('app-loading').style.display = 'none';
});

const submit = () => {
  form.post(route('password.update'), {
    onFinish: () => form.reset('password', 'password_confirmation'),
  });
};
</script>

<template>
  <Head :title="t('Reset Password')" />

  <JetAuthenticationCard>
    <template #logo>
      <JetAuthenticationCardLogo />
    </template>

    <JetValidationErrors class="mb-4" />

    <form @submit.prevent="submit">
      <div>
        <JetLabel for="email" value="Email" />
        <JetInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required autofocus />
      </div>

      <div class="mt-4">
        <JetLabel for="password" value="Password" />
        <JetInput id="password" v-model="form.password" type="password" class="mt-1 block w-full" required autocomplete="new-password" />
      </div>

      <div class="mt-4">
        <JetLabel for="password_confirmation" value="Confirm Password" />
        <JetInput
          id="password_confirmation"
          v-model="form.password_confirmation"
          type="password"
          class="mt-1 block w-full"
          required
          autocomplete="new-password"
        />
      </div>

      <div class="flex items-center justify-end mt-4">
        <LoadingButton :loading="form.processing">
          {{ t('Reset Password') }}
        </LoadingButton>
      </div>
    </form>
  </JetAuthenticationCard>
</template>
