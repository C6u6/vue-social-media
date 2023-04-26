<script setup lang="ts">
import Commenting from '../forms/Commenting.vue';

const commentsExamples = [
  {
    username: 'Cocaine',
    content: 'lorem'.repeat(100)
  },
  {
    username: 'NoCocaine',
    content: 'NO SMOKING!'.repeat(100)
  }
];
</script>

<template>
  <div>
    <!--Make a comment in the post-->
    <Commenting />
    <!--What other have commented-->
    <div v-for="comment in commentsExamples">
      <p>{{ comment.username }}</p>
      <p>{{ comment.content }}</p>
    </div>
  </div>
</template>