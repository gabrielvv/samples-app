import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import db from './db';
import { uiModule } from './modules/ui';
import { authModule } from './modules/auth';

Vue.use(Vuex);

export interface Sample {
  id: String
}

export interface StoreState {
  samples: Array<Sample>
}

export default new Vuex.Store<StoreState>({
  state: {
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
