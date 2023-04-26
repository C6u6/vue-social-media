<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/signup">Sign Up</RouterLink>
        <RouterLink to="/home">Experiment</RouterLink> 
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>
</template>