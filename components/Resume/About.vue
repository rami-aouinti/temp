<template>
  <HeaderSection
    icon="mdi-account-circle"
    label="About me"
    size="20"
  />
  <v-divider :thickness="5"></v-divider>
  <v-col cols="12" md="12">
    <p class="px-1 text-caption" contenteditable="true">
      Leidenschaftlicher Fullstack Web
      Entwickler mit 6 Jahren Erfahrung in der
      Konzeption, Entwicklung und Wartung
      ansprechender und Funktionaler
      Webanwendungen
    </p>
  </v-col>
</template>

<script lang="ts" setup>
import HeaderSection from "~/components/Resume/HeaderSection.vue";

const props = defineProps({
  description: String
});
</script>

<style scoped>

</style>
