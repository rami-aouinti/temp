<template>
  <div class="d-inline-flex">
    <v-icon class="text-white" size="18">mdi-facebook</v-icon>
    <v-icon class="text-white" size="18">mdi-linkedin</v-icon>
    <v-icon class="text-white" size="18">mdi-twitter</v-icon>
    <v-icon class="text-white" size="18">mdi-instagram</v-icon>
    <v-icon class="text-white" size="18">mdi-github</v-icon>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  phone: String,
  email: String,
  address: String,
});
</script>
