<script setup lang="ts">
import { ref } from 'vue';

const clicked = ref('my-communities');
const emits = defineEmits(['myCommunityWasClicked', 'exploreWasClicked']);

function myCommunitiesButton() {
  emits('myCommunityWasClicked');
  clicked.value = 'my-communities';
};
function exploreButton() {
  emits('exploreWasClicked');
  clicked.value = 'explore';
};
</script>

<template>
  <div>
    <button @click="myCommunitiesButton" :id="clicked == 'my-communities' ? 'styled' : 'non-styled'" >My Communities</button>
    <button @click="exploreButton" :id="clicked == 'explore' ? 'styled' : 'non-styled'" >Explore</button>
  </div>
</template>