<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
  id: String
});
// Fetch all all existing conversation between person whose id is props.id and the current user
const allMessagesBetweenTheTwo = [
  {
    content: 'Have you seen that thing?',
    registeredDay: '13/02/2020',
    registeredTime: '10:00:047',
    personId: 'isTheUser',
  },
  {
    content: 'What thing?',
    registeredDay: '13/02/2020',
    registeredTime: '10:02:400',
    personId: 'isnotTheUser',
  },
  {
    content: "Oh, you haven't.",
    registeredDay: '13/02/2020',
    registeredTime: '10:02:800',
    personId: 'isTheUser',
  },
];

const messageToBeSend = ref('');

function handleSubmit() {};
</script>

<template>
  <p>The id is : {{ props.id }}</p>
  <!--Background for the messages boxes-->
  <div>
    <div v-for="message in allMessagesBetweenTheTwo">
      <div v-if="message.personId == 'isTheUser'">You: {{ message.content }}</div>
      <div v-else>Your friend: {{ message.content }}</div>
    </div>
    <!--Send the messages, files, other things-->
    <form @submit.prevent="handleSubmit">
      <input placeholder="Write here something" type="text" v-model="messageToBeSend"/>
      <button type="submit">=>(sending arrow)</button>
    </form>
  </div>
</template>