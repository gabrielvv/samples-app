<template>
  <v-container>
    <v-card>
      <section id="firebaseui-auth-container"></section>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { AuthModuleState } from '../store/modules/auth';

export default Vue.extend({
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', this.authConfig);
  },
  computed: mapState({
    authConfig: state => (state as { auth: AuthModuleState }).auth,
  }),
});
</script>

<style>

</style>
