<template>
  <v-card
    border="xl"
    class="mx-auto overflow-y-auto"
    max-height="500"
    max-width="850"
    rounded="xl"
    variant="text"
  >
    <templates-simple :acc="data" />
  </v-card>
</template>
<script lang="ts" setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<style scoped></style>
