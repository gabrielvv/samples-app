import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations, firestoreAction } from 'vuexfire';
import db from './db';

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
});
