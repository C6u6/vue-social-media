<script setup lang="ts">
import { ref } from 'vue';

const comment = ref('');
function handleSubmit() {
  console.log(comment);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input name="commentOnPost" placeholder="Write a comment..." v-model="comment" type="text" />
    Add Photo
    Add gift
    Add emoji
    Add something else
  </form>
</template>