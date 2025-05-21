<template>
  <HeaderSection
    icon="mdi-school"
    label="Education"
    size="20"
  />
  <v-divider :thickness="5"></v-divider>
  <div style="margin-left: -40px;" class="text-sm py-1">
    <v-timeline
      align="start"
      side="end"
      class="timeline-line-color pt-0"
    >
      <v-timeline-item
        v-for="(item, i) in timeline"
        :key="item.title + i"
        size="small"
        class="timeline"
      >
        <template #icon>
          <v-avatar size="30" color="primary">
            <v-icon
              size="14"
            >
              {{ item.icon }}
            </v-icon>
          </v-avatar>
        </template>
        <v-hover v-slot="{ isHovering, props: hoverProps }">
          <v-card style="margin-left: -15px;" class="pa-2" variant="text" v-bind="hoverProps">
           <v-card-text class="px-0 pt-0 pb-1 d-block">
              <div class="d-flex justify-space-between w-100">
                <h6 contenteditable="true" class="text-sm font-weight-bold mb-0">
                  {{ item.title }}
                </h6>
                <div v-if="isHovering" class="d-flex align-center">
                  <v-icon size="16" class="me-2">mdi-edit</v-icon>
                  <v-icon size="16">mdi-delete</v-icon>
                </div>
              </div>

            <p contenteditable="true" class="text-secondary font-weight-light text-xs mb-1">
              {{ item.date }}
            </p>
            <p contenteditable="true" class="text-sm mt-3 mb-2 opacity-8 font-weight-light">
              {{ item.description }}
            </p>
          </v-card-text>
        </v-card>
        </v-hover>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script lang="ts" setup>

import HeaderSection from "~/components/Resume/HeaderSection.vue";

const timeline = [
  {
    title: "Higher Secondary Certificate",
    date: "2019–2022",
    icon: "mdi-school",
    btn: "default",
    position: "Job Position Here",
    description: "Collectorate School & College"
  },
  {
    title: "Higher Secondary Certificate",
    date: "2019–2022",
    icon: "mdi-school",
    btn: "default",
    position: "Job Position Here",
    description: "Collectorate School & College"
  },
  {
    title: "Higher Secondary Certificate",
    date: "2019–2022",
    icon: "mdi-school",
    btn: "default",
    position: "Job Position Here",
    description: "Collectorate School & College"
  },
]

const props = defineProps({
  school: String,
  date: String,
  description: String,
});
</script>

<style scoped>

</style>
