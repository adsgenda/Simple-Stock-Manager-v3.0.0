<script setup>
import { computed, onMounted } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue';
import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue';
import LoadingButton from '@/Shared/LoadingButton.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n({});

const props = defineProps({
  status: String,
});

const form = useForm();

onMounted(() => {
  document.getElementById('app-loading').style.display = 'none';
});

const submit = () => {
  form.post(route('verification.send'));
};

const verificationLinkSent = computed(() => props.status === 'verification-link-sent');
</script>

<template>
  <Head :title="t('Email Verification')" />

  <JetAuthenticationCard>
    <template #logo>
      <JetAuthenticationCardLogo />
    </template>

    <div class="mb-4 text-sm text-gray-600">
      {{
        t(
          "Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
        )
      }}
    </div>

    <div v-if="verificationLinkSent" class="mb-4 font-medium text-sm text-green-600">
      {{ 'A new verification link has been sent to the email address you provided in your profile settings.' }}
    </div>

    <form @submit.prevent="submit">
      <div class="mt-4 flex items-center justify-between">
        <LoadingButton :loading="form.processing">
          {{ t('Resend Verification Email') }}
        </LoadingButton>

        <div>
          <Link :href="route('profile.show')" class="underline text-sm text-gray-600 hover:text-gray-900">
            {{ t('Edit Profile') }}
          </Link>

          <Link :href="route('logout')" method="post" as="button" class="underline text-sm text-gray-600 hover:text-gray-900 ml-2">
            {{ t('Log Out') }}
          </Link>
        </div>
      </div>
    </form>
  </JetAuthenticationCard>
</template>
