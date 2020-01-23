import { Module } from 'vuex';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';


export interface AuthModuleState extends firebaseui.auth.Config {}

export const authModule: Module<AuthModuleState, any> = {
  state: {
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  },
};
