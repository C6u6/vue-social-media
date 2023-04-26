<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ShortForm from '../forms/ShortForm.vue';
</script>

<template>
  <section>
    <!--Perfil photo-->
    <img src="" alt="Ussr perfil photo">
    <!--Shortcut form to quickly post-->
    <ShortForm type="briefPost"/>
  </section>
  <section>
    <RouterLink to="">Photo - Video</RouterLink>
    <RouterLink to="">Something else</RouterLink>
    <RouterLink to="">Feeling - Activity</RouterLink>
  </section>
</template>