<template>
  <v-navigation-drawer
    v-model="drawer"
    v-on:input="toggleDrawer"
    app
    :mini-variant.sync="mini"
    v-on:update:mini-variant="toggleMini">
    <v-list dense>
      <router-link v-for="item in items" v-bind:to="item.to" :key="item.to">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import store from '@/store';
import { UiModuleState } from '@/store/modules/ui';

export default Vue.extend({
  name: 'CoreDrawer',
  computed: mapState({
    items: state => (state as { ui: UiModuleState }).ui.drawer.items,
    drawer: state => (state as { ui: UiModuleState }).ui.drawer.open,
    mini: state => (state as { ui: UiModuleState }).ui.drawer.mini,
  }),
  methods: {
    toggleDrawer(input: Boolean) {
      store.commit('toggleDrawer', input);
    },
    toggleMini(input: Boolean) {
      store.commit('toggleMini', input);
    },
  },
});
</script>

<style scoped>
a {
  color: inherit;
  outline: none;
  text-decoration: none;
}
</style>
