<template>
  <v-container class="fill-height">
    <v-layout wrap>
      <v-flex v-for="n in 12" :key="n" xs4>
        <base-card class="ma-5"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/store';

export default {
  name: 'Samples',
  metaInfo: {
    title: `Home | ${store.state.appName}`,
  },
};
</script>
