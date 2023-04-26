<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  type: String
});
const shortText = ref('');
const name = props.type === 'briefPost' ? 'briefPost': 'commentOnPost';
const placeholder = props.type === 'briefPost' ? 'What is on your mind, User?': 'Write a comment...';
function handleSubmit() {
  console.log(shortText);
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input :name="name" :placeholder="placeholder" v-model="shortText" type="text" />
  </form>
</template>