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

defineProps({
  status: String,
});

const form = useForm({
  email: '',
});

onMounted(() => {
  document.getElementById('app-loading').style.display = 'none';
});

const submit = () => {
  form.post(route('password.email'));
};
</script>

<template>
  <Head :title="t('Forgot Password')" />

  <JetAuthenticationCard>
    <template #logo>
      <JetAuthenticationCardLogo />
    </template>

    <div class="mb-4 text-sm">
      {{
        t(
          'Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.'
        )
      }}
    </div>

    <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
      {{ status }}
    </div>

    <JetValidationErrors class="mb-4" />

    <form @submit.prevent="submit">
      <div>
        <JetLabel for="email" value="Email" />
        <JetInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required autofocus />
      </div>

      <div class="flex items-center justify-end mt-4">
        <Link :href="route('login')" class="underline text-sm link mr-4">
          {{ t('Back to Login') }}
        </Link>

        <LoadingButton :loading="form.processing"> {{ t('Email Password Reset Link') }} </LoadingButton>
      </div>
    </form>
  </JetAuthenticationCard>
</template>
