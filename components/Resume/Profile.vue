<template>
  <div class="d-flex justify-center py-1">
    <v-badge
      bottom
      color="primary"
      offset-x="0"
      offset-y="95"
      icon="edit"
    >
      <img
        :src="image"
        :alt="name"
        class="profile-image border-radius-lg"
        width="100"
        height="100"
      />
    </v-badge>
  </div>
  <v-hover v-slot="{ isHovering, props: hoverProps }">
    <div class="d-flex align-center justify-center fixed-skill-line py-1" v-bind="hoverProps">
      <h5 class="text-body-1 font-weight-bold" contenteditable="true">John doe</h5>
      <v-icon v-if="isHovering" size="16" class="mx-3">mdi-edit</v-icon>
    </div>
  </v-hover>
  <v-hover v-slot="{ isHovering, props: hoverProps }">
    <div class="d-flex align-center justify-center" v-bind="hoverProps">
      <p contenteditable="true">{{ title }}</p>
      <v-icon v-if="isHovering" size="16" class="mx-3">mdi-edit</v-icon>
    </div>
  </v-hover>

</template>

<script lang="ts" setup>
const props = defineProps({
  image: String,
  name: String,
  title: String
});
</script>

<style scoped>
.profile-image {
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* équivalent à elevation="20" */
}
</style>
