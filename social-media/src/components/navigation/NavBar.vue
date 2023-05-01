<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <section>
    <nav>
      <RouterLink to="home">Home</RouterLink>
      <RouterLink to="feed">Feed</RouterLink>
      <RouterLink to="add">Add</RouterLink>
      <RouterLink to="community">Community</RouterLink>
      <RouterLink to="trends">Trends</RouterLink>
      <RouterLink to="news">News</RouterLink>
    </nav>
    <button>Notifications</button>
  </section>
</template>