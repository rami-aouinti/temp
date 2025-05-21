<script setup lang="ts">

import Preview from "~/components/Cv/Preview.vue";
import Configuration from "~/components/Cv/Configuration.vue";

definePageMeta({
  icon: 'mdi-home',
  title: 'Create Resume',
  drawerIndex: 0,
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="9">
        <Preview></Preview>
      </v-col>
      <v-col cols="12" md="3">
        <Configuration></Configuration>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>

</style>
