<script setup lang='ts'>
import { useRoute } from 'vue-router';
const id = useRoute().params.communityId;
</script>

<template>
  <div>
    The thing is: {{id}}
  </div>
</template>