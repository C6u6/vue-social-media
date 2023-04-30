<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <aside>
    <RouterLink to="messages">Messages</RouterLink>
    <RouterLink to="account">Account</RouterLink>
    <RouterLink to="settings">Settings</RouterLink>
    <RouterLink to="about">About</RouterLink>
  </aside>
</template>