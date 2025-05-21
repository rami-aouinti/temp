<template>
    <HeaderSection icon="mdi-contact-mail" label="Contact" size="20"/>
    <v-divider :thickness="5"></v-divider>
    <div class="pa-4">
      <div class="d-flex align-center">
        <v-icon size="16"> mdi-cellphone </v-icon>
        <a contenteditable="true" style="margin-left: 8px;" :href="`tel:${phone}`">{{ phone }}</a>
      </div>
      <div class="d-flex align-center">
        <v-icon size="16"> mdi-email </v-icon>
        <a contenteditable="true" style="margin-left: 8px;" :href="`mailto:${email}`">{{ email }}</a>
      </div>
      <div class="d-flex align-center">
        <v-icon size="16"> mdi-map-marker </v-icon>
        <span contenteditable="true" style="margin-left: 8px;">{{ address }}</span>
      </div>
    </div>
</template>

<script lang="ts" setup>
import HeaderSection from "~/components/Resume/HeaderSection.vue";
defineProps<{
  phone: string;
  email: string;
  address: string;
  printStyle: string
}>();
</script>
