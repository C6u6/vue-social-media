<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  formTypeIsLogin: Boolean,
});
const name = ref('');
const email = ref('');
const checkbox = ref(false);
const password = ref('');
const passwordConfirmation = ref('');

const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.table([name, email, checkbox, password, passwordConfirmation])
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <section v-if="!props.formTypeIsLogin">
      <input name="name" placeholder="Enter your whole name" type="text" v-model="name">
      <section>
        <label for="no-declaration">No name declaration</label>
        <input id="no-declaration" name="no-declaration" type="checkbox" v-model="checkbox">
      </section>
    </section>
    <input name="email" placeholder="Enter your email" type="email" v-model="email">
    <input name="password" placeholder="Enter a password" type="password" v-model="password">
    <section v-if="!props.formTypeIsLogin">
      <input name="password-confirmation" placeholder="Confirm your password" type="password" v-model="passwordConfirmation">
    </section>
    <button type="submit">Submit</button>
  </form>
</template>