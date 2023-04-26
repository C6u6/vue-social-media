<script setup>
const props = defineProps(['title']);
document.querySelector('#title').innerText = props.title;
</script>
<template></template>