<script setup lang="ts">
import DocumentTitle from '@/components/DocumentPageTitle.vue';
import NavAndSideBars from '@/components/navigation/NavAndSideBars.vue';
import Community from '@/components/community/CommunityPresenting.vue';
import Navigation from '@/components/community/CommunityNav.vue';
import { ref } from 'vue';
const communitiesId = ['usnsmiom', 'imsmiokmsio', 'imsoismiu'];
const selectedNavigationButton = ref('my-communities');
</script>

<template>
  <DocumentTitle title='Communities' />
  <NavAndSideBars />
  <!--User will  -->
  <Navigation @myCommunityWasClicked="selectedNavigationButton = 'my-communities'" @exploreWasClicked="selectedNavigationButton = 'explore'" />
  <div v-if='selectedNavigationButton == "my-communities"'>
    <div v-if="communitiesId.length > 0" v-for="id in communitiesId">
      <Community :id="id"/>
    </div>
    <div v-else>
      <p>You have no communities</p>
    </div>
  </div>
  <div v-else>
    <p>See here new communities</p>
  </div>
  
  <div>The thing is : {{ selectedNavigationButton }} </div>
</template>