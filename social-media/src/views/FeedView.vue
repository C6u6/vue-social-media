<script setup lang="ts">
import NavAndSideBars from '@/components/navigation/NavAndSideBars.vue';
import EasyPosting from '@/components/post/EasyPosting.vue';
import Post from '@/components/post/Post.vue';
import DocumentTitle from '@/components/DocumentPageTitle.vue';
</script>

<template>
  <DocumentTitle title='Feed' />
  <NavAndSideBars />
  <EasyPosting /> 
  <Post />
</template>