<script setup lang="ts">
import { ref } from 'vue';
import OpenChatWithPersonWhoseIdIs from './MessegesSpecification.vue'

// Fetch all available data messages that the current user sent/received
const allMessages = [
  {
    personId: 'nssn sdmo',
    content: 'blah'.repeat(10),
    dateLastConversationHappened: '19/01/2000',
    timeLastConversationHappened: '19:09',
  },
  {
    personId: 'nssn sdmo',
    content: 'blah'.repeat(10),
    dateLastConversationHappened: '19/01/2000',
    timeLastConversationHappened: '19:09',
  },
  {
    personId: 'gato feio',
    content: 'blah'.repeat(10),
    dateLastConversationHappened: '19/01/2000',
    timeLastConversationHappened: '19:09',
  },
  {
    personId: 'espalda duele', 
    content: 'blah'.repeat(10),
    dateLastConversationHappened: '19/01/2000',
    timeLastConversationHappened: '19:09',
  }
];
const clickedPersonMessageId = ref('');
</script>

<template>
  <!--In one partition--> 
  <div @click="clickedPersonMessageId = message.personId" v-if="allMessages.length > 0" v-for="message in allMessages">
    <img />
    <section>
      <span>Name of the person</span>
      <span>Last message was about snsuisismimsmios</span>
      <section>
        <span>14/03(/2023)</span>
        <span>21:34</span>
      </section>
    </section>
  </div>
  <div v-else>
    <p>You haven't sent anyone a message yet</p>
  </div>
  <!--In another partition--> 
  <OpenChatWithPersonWhoseIdIs :id="clickedPersonMessageId" />
</template>