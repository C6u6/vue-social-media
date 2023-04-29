<script setup lang="ts">
import router from '@/router/index.ts';

const props = defineProps({
  id: String,
});
const exampleOfFetchedDataa = 
{
  createdAt: '2000-02-19',
  description: 'Nuesta ccommunidad tiene por objectivo ....'.repeat(10), 
  id: 'dkndnsdoi',
  name: 'Este es el nombre de la communidad',
  quantOfLikes: 100000000,
  quantOfMembers: 25000,
  monthlyActivity: 'high',
};
function seeThisCommunityInDepth(IdOfTheCommunity) {
  router.push({ name: 'communityId', params: { communityId: props.id } });
}; 
// Fetch the data through id

</script>
<template>
  <div @click='() => seeThisCommunityInDepth()'>
    <!--Header-->
    <section>
      <img src='' alt='Community Logo' />
      <section>
        <span>{{ exampleOfFetchedDataa.name }}</span>
        <span>{{ exampleOfFetchedDataa.createdAt }}</span>
      </section>
      <button>...</button>
    </section>
    <!--Body-->
    <section>
      {{ exampleOfFetchedDataa.description }}
    </section>
    <!--Quantity of members, likes, mounthly activity-->
    <section>
      <span>{{ exampleOfFetchedDataa.quantOfMembers }}</span>
      <span>{{ exampleOfFetchedDataa.quantOfLikes }}</span>
      <span>{{ exampleOfFetchedDataa.monthlyActivity }}</span>
      <button>Join</button>
    </section>
  </div>
</template>