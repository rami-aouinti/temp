<template>
  <v-hover v-slot="{ isHovering, props: hoverProps }">
    <div class="d-flex align-center justify-space-between fixed-skill-line py-2" v-bind="hoverProps">
      <span contenteditable="true" class="text-body-2">{{ label }}</span>
      <div class="d-flex">
        <v-icon v-for="i in max" :key="i" class="star-icon" size="16">{{ getStar(i) }}</v-icon>
      </div>
      <div v-if="isHovering" class="d-flex align-center">
        <v-icon size="16" class="me-2">mdi-edit</v-icon>
        <v-icon size="16">mdi-delete</v-icon>
      </div>
    </div>
  </v-hover>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: String,
  stars: Number,
  max: {
    type: Number,
    default: 4
  }
});

const getStar = (index: number) => {
  return index <= props.stars ? 'mdi-star' : 'mdi-star-outline';
};
</script>

<style scoped>
.star-icon {
  display: inline-block;
  margin-left: 4px;
}
</style>
