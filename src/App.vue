<template>
  <router-view />
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from 'firebase';
import { mapState, mapMutations } from 'vuex';

export default Vue.extend({
  name: 'App',
});
</script>
