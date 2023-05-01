<script setup lang="ts">
import DocumentTitle from '@/components/DocumentPageTitle.vue';
import Navigation from '@/components/navigation/NavHomeOrBack.vue';
import { ref } from 'vue';
const articleContent = ref('');
function handleSubmit() {
  // Fetch
};
</script>

<template>
  <DocumentTitle title='Write' />
  <div>
    <Navigation />
    <form @submit.prevent="handleSubmit">
      <!--Markup language if you want it to be a little more rigorous, like an journalistic article?-->
      <textarea placeholder="Write here your article" v-model="articleContent"></textarea>
      <button type="submit">Publish article</button>
    </form>
  </div>
</template>