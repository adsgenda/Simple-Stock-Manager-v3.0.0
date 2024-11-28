<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import LoadingButton from '@/Shared/LoadingButton.vue';
import JetInput from '@/Jetstream/Input.vue';
import JetCheckbox from '@/Jetstream/Checkbox.vue';
import JetLabel from '@/Jetstream/Label.vue';
import JetValidationErrors from '@/Jetstream/ValidationErrors.vue';
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';
const { t } = useI18n({});

const props = defineProps({
  canResetPassword: Boolean,
  status: String,
  demo: Boolean,
});

const form = useForm({
  email: props.demo ? 'admin@tecdiary.com' : '',
  password: props.demo ? 'password' : '',
  remember: false,
});

onMounted(() => {
  document.getElementById('app-loading').style.display = 'none';
});

const submit = () => {
  form
    .transform(data => ({
      ...data,
      remember: form.remember ? 'on' : '',
    }))
    .post(route('login'), {
      onFinish: () => form.reset('password'),
    });
};
</script>

<template>
  <Head :title="t('Log in')" />

  <JetAuthenticationCard>
    <template #logo>
      <JetAuthenticationCardLogo />
    </template>

    <JetValidationErrors class="mb-4" />

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>

    <form @submit.prevent="submit">
      <div>
        <JetLabel for="email" value="Email" />
        <JetInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required autofocus />
      </div>

      <div class="mt-4">
        <JetLabel for="password" value="Password" />
        <JetInput
          id="password"
          v-model="form.password"
          type="password"
          class="mt-1 block w-full"
          required
          autocomplete="current-password"
        />
      </div>

      <div class="block mt-4">
        <label class="inline-flex items-center">
          <JetCheckbox v-model:checked="form.remember" name="remember" />
          <span class="ml-2 text-sm text-gray-600">{{ t('Remember me') }}</span>
        </label>
      </div>

      <div class="flex items-center justify-end mt-4">
        <Link v-if="canResetPassword" :href="route('password.request')" class="underline text-sm link">
          {{ t('Forgot your password?') }}
        </Link>

        <LoadingButton class="ml-4" :loading="form.processing">
          {{ t('Log in') }}
        </LoadingButton>
      </div>
    </form>
  </JetAuthenticationCard>
</template>
