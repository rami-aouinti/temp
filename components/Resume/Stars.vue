<template>
    <div class="d-flex align-center justify-space-between fixed-skill-line">
      <v-slider
        :model-value="props.score"
        height="2"
        rounded
        color="white"
        :label="props.label"
        class="progress-bar"
      />
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: String,
  score: Number
});
</script>

<style scoped>
.progress-bar {
  width: 57px;
}
</style>
