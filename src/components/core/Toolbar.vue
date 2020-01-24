<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title>{{ appName }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-avatar>
       <img v-if="currentUser"
        :src="currentUser.photoURL"
        :alt="currentUser.displayName"
      >
    </v-avatar>
    <router-link to="/logout">
      <v-btn text>Logout</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapMutations, mapGetters, mapState } from 'vuex';

export default Vue.extend({
  name: 'CoreToolbar',
  computed: {
    ...mapGetters(['currentUser']),
    ...mapState(['appName']),
  },
  methods: mapMutations(['toggleDrawer']),
});
</script>
