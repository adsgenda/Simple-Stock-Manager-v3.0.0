<script setup>
import Mark from './ApplicationMark.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
  <Link :href="'/'" class="w-56 block">
    <Mark />
  </Link>
</template>
