<script setup lang="ts">
import { RouterLink } from 'vue-router';
import router from '@/router';
</script>

<template>
  <RouterLink to="/home">Go Home</RouterLink>
  <button @click="router.go(-1)">Go Back</button>
</template>