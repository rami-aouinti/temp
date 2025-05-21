<template>
  <v-hover v-slot="{ isHovering, props: hoverProps }">
    <div class="d-flex align-center justify-space-between w-100 pa-2" v-bind="hoverProps">
      <div class="d-flex align-center">
        <v-icon :size="props.size">{{ icon }}</v-icon>
        <h6 contenteditable="true" class="text-h6 ms-2 text-body-1 font-weight-bold">{{ label }}</h6>
      </div>
      <div v-if="isHovering" class="d-flex align-center">
        <v-icon size="16" class="me-2">mdi-edit</v-icon>
        <v-icon size="16">mdi-plus</v-icon>
      </div>
    </div>
  </v-hover>
</template>

<script lang="ts" setup>
const props = defineProps({
  label: String,
  icon: String,
  rightIcon: String, // icône de droite
  size: String,
  color: String
});
</script>
