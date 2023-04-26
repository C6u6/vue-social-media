<script setup lang="ts">
const props = defineProps({
  hrefName: String,
  title: String
});
</script>

<template>
  <button >
    {{ props.title }}
  </button>
</template>