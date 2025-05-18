<template>
  <div class="d-flex align-center">
    <v-icon class="text-white" size="20">mdi-account-card-details</v-icon>
    <h6 class="text-h7 ms-2 text-body-1 font-weight-bold">Contact</h6>
  </div>
  <v-divider :thickness="5"></v-divider>
  <div class="text-sm py-3">
    <div class="d-flex align-center py-1 text-sm">
      <v-icon class="text-white" size="16">mdi-phone-classic</v-icon>
      <a class="ms-2 text-sm" :href="`tel:${phone}`">{{ phone }}</a>
    </div>
    <div class="d-flex align-center py-1 text-sm">
      <v-icon class="text-white" size="16">mdi-email</v-icon>
      <a class="ms-2 text-sm" :href="`mailto:${email}`">{{ email }}</a>
    </div>
    <div class="d-flex align-center py-1 text-sm">
      <v-icon class="text-white" size="16">mdi-map-marker</v-icon>
      <span class="ms-2"> {{ address }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Social from "~/components/Resume/Social.vue";

const props = defineProps({
  phone: String,
  email: String,
  address: String,
});
</script>
