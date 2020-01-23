<template>
  <v-app>
    <core-drawer />
    <core-toolbar />
    <v-content>
      <router-view />
    </v-content>
    <!-- <core-footer /> -->
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';
import CoreToolbar from '@/components/core/Toolbar.vue';
import CoreFooter from '@/components/core/Footer.vue';
import CoreDrawer from '@/components/core/Drawer.vue';

export default Vue.extend({
  name: 'App',

  components: {
    CoreDrawer,
    // eslint-disable-next-line vue/no-unused-components
    CoreFooter,
    CoreToolbar,
  },

  computed: mapState(['samples']),

  created() {
    this.bindSamples();
  },

  methods: mapActions(['bindSamples']),

  data: () => ({
    //
  }),
});
</script>
