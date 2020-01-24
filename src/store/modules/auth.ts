import { Module } from 'vuex';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';


export interface AuthModuleState {
  user: firebase.User | null,
  config: firebaseui.auth.Config
}

export const authModule: Module<AuthModuleState, any> = {
  state: {
    user: null,
    config: {
      // Terms of service url.
      tosUrl: '<your-tos-url>',
      // Privacy policy url.
      privacyPolicyUrl: '<your-privacy-policy-url>',
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
    currentUser(state) {
      return state.user;
    },
  },
  actions: {
    login({ state }) {
      return new Promise((resolve) => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            state.user = user;
            resolve({ isAuthenticated: true });
          }
          resolve({ isAuthenticated: false });
        });
      });
    },
    logout({ state }) {
      return firebase.auth().signOut()
        .then(() => {
          state.user = null;
        });
    },
  },


};
