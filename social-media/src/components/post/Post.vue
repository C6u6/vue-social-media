<script setup lang="ts">
import ContentOfAPost from './ContentOfAPost.vue';
import ImpressionsAboutThePost from './ImpressionsAboutThePost.vue';

</script>

<template>
  <!--Header-->
  <div>
    <section>
      <img />
      <section>
        <p>Perfil Name</p>
        <p>Time was posted</p>
      </section>
    </section>
    <section>
      <p role="button">...</p>
    </section>
    <section>
      Title/Description of the following content(Image/Video/Anything like this)
    </section>
  </div>
  <!--Content-->
  <ContentOfAPost />
  <!--Likes, comments, shares-->
  <ImpressionsAboutThePost />
  <!--Comments-->
  <AllComentsAboutThePost />
</template>