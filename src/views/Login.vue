<template>
  <v-app>
    <v-content class="img-background">
      <v-container fill-height class="gradient-background">
        <v-row align="center" justify="center">
          <v-col align="center">
            <v-card class="mw-480 h-500">
              <v-card-title>
                <v-row align="center" justify="center">
                  <img src="@/assets/logo.png" />
                  <h2>Samples.io</h2>
                </v-row>
              </v-card-title>
              <v-row>
                <v-col align="center">
                  <div id="firebaseui-auth-container"></div>
                  <div v-if="shouldDisplayLoader">Loading...</div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { AuthModuleState } from '../store/modules/auth';

export default Vue.extend({
  props: ['redirect'],
  data() {
    return {
      shouldDisplayLoader: true,
    };
  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    const authConfig = {
      ...this.authConfig,
      signInSuccessUrl: this.redirect || this.authConfig.signInSuccessUrl,
      callbacks: {
        uiShown: () => {
          this.shouldDisplayLoader = false;
        },
        signInSuccessWithAuthResult() { return true; },
      },
    };
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    ui.start('#firebaseui-auth-container', authConfig);
  },
  computed: mapState({
    authConfig: state => (state as { auth: AuthModuleState }).auth.config,
  }),
});
</script>

<style lang="scss">
.mw-480 {
  max-width: 480px;
}

.h-500 {
  height: 500px;
}

.img-background::before {
  content: "";
  opacity: 0.5;
  background-image: url('../assets/home-studio.jpg');
  background-size: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
}

.gradient-background::before {
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  background: rgba(93,84,240,0.5);
  @include linear-gradient(
    to right,
    (rgba(0,168,255,0.5), rgba(185,0,255,0.5))
  );
}

.firebaseui-id-page-callback {
  display: none;
}

#firebaseui-auth-container {
  ul {
    padding: 0;
  }
}
</style>
