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
export default {
  name: 'Home',
  metaInfo: {
    title: 'Home | Samples.io',
  },
};
</script>
