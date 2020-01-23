<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title>{{ title }}</v-toolbar-title>
  </v-app-bar>
</template>

<style lang="sass" scoped>

</style>

<script lang="ts">
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
  name: 'CoreToolbar',
  data() {
    return {
      title: 'Samples',
    };
  },
  methods: mapMutations(['toggleDrawer']),
});
</script>
