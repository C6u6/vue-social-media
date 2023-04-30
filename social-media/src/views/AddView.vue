<script setup lang="ts">
import DocumentTitle from '@/components/DocumentPageTitle.vue';
import NavAndSideBars from '@/components/navigation/NavAndSideBars.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <DocumentTitle title='Add' />
  <NavAndSideBars />
  <h1>Share something important with people</h1>
  <div>
    <RouterLink to="add/article">Write</RouterLink>
    <RouterLink to="add/video">Upload a video</RouterLink>
    <RouterLink to="add/image">Upload a photo</RouterLink>
  </div>
  <p>Maybe something can be useful here</p>
</template>