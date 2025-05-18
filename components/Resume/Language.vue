<template>
  <div class="d-flex align-center justify-space-between fixed-skill-line py-2">
    <span class="text-body-2">{{ label }}</span>
    <div class="d-flex">
      <v-icon
        v-for="i in max"
        :key="i"
        size="16"
        :color="i <= stars ? 'yellow' : 'grey'"
      >
        {{ i <= stars ? 'mdi-star' : 'mdi-star-outline' }}
      </v-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: String,
  stars: Number,
  max: {
    type: Number,
    default: 5
  }
});
</script>

<style scoped>

</style>
