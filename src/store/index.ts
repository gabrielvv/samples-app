import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import db from './db';
import { uiModule, UiModuleState } from './modules/ui';
import { authModule, AuthModuleState } from './modules/auth';

Vue.use(Vuex);

export interface Sample {
  id: String
}

export interface StoreState {
  appName: string,
  samples: Array<Sample>
  auth?: AuthModuleState,
  ui?: UiModuleState
}

export default new Vuex.Store<StoreState>({
  state: {
    appName: 'Samples.io',
    samples: [],
  },
  mutations: vuexfireMutations,
  actions: {
    bindSamples: firestoreAction(({ bindFirestoreRef }) => bindFirestoreRef('samples', db.collection('samples'))),
  },
  modules: {
    ui: uiModule,
    auth: authModule,
  },
});
