<template>
  <HeaderSection
    icon="mdi-heart"
    label="Interests"
    size="20"
  />
  <v-divider :thickness="5"></v-divider>
  <div class="pa-3 text-sm">
    <v-list class="no-background px-0" :lines="false" density="compact">
      <v-list-item v-for="(item, i) in props.items" :key="i" :value="item" class="no-background text-sm text-white px-0">
        <div class="d-flex align-center">
          <v-icon class="text-white" size="12" icon="mdi-radiobox-blank" />
          <span contenteditable="true" class="ms-2">{{ item.text }}</span>
        </div>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts" setup>
import HeaderSection from "~/components/Resume/HeaderSection.vue";

const props = defineProps({
  items: Array
});
</script>

<style scoped>
.no-background {
  background-color: transparent !important;
}
</style>
