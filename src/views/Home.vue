<template>
  <v-app>
    <core-drawer />
    <core-toolbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import CoreToolbar from '@/components/core/Toolbar.vue';
import CoreDrawer from '@/components/core/Drawer.vue';

export default Vue.extend({
  name: 'Home',

  components: {
    CoreDrawer,
    CoreToolbar,
  },

});
</script>
