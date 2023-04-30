<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <h1>Welcome to this social media</h1>
    <p>This is some interesting text whose purpose I do not know </p>

    <RouterLink to="/signup">Sign Up</RouterLink>
    <RouterLink to="/home">Experiment</RouterLink> 
    <RouterLink to="/login">Login</RouterLink>
  </main>
</template>
