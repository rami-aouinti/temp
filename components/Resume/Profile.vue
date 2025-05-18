<template>
  <div class="d-flex justify-center py-1">
    <v-avatar elevation="20" :image="image" size="80"></v-avatar>
  </div>
  <div class="d-flex justify-center py-1">
    <h5 class="text-body-1 font-weight-bold">{{ name }}</h5>
  </div>
  <div class="d-flex justify-center py-1">
    <p>{{ title }}</p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: String,
  name: String,
  title: String
});
</script>

<style scoped>

</style>
