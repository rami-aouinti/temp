<template>
  <div class="fixed-plugin-skill" :class="{ show: showSettingsDrawerSkill }">
    <v-card class="shadow-lg">
      <div class="card-padding mb-16 d-flex justify-space-between align-start">
        <div>
          <h5 class="text-h5 text-dark font-weight-bold mt-3 mb-0">
            Material UI Configurator
          </h5>
          <p class="text-body font-weight-light">See our dashboard options.</p>
        </div>
        <v-icon-btn
          icon="mdi-close"
          class="mt-3 px-8 mb-0"
          variant="plain"
          @click="emit('toggleSettingsDrawerSkill', false)"
        >
        </v-icon-btn>
      </div>

      <hr class="horizontal dark my-1" />

      <div class="card-padding">
        <!-- Ajoute ici ton contenu de configuration -->
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  showSettingsDrawerSkill: boolean;
}>();

const emit = defineEmits<{
  (e: 'toggleSettingsDrawerSkill', value: boolean): void;
}>();
</script>
