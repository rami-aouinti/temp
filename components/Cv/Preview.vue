<script setup lang="ts">

import {encodeData} from "~/utils/transformer";
const downloadPdf = async () => {
  const urlToExport = `https://www.bro-world-space.com/resume?data=${encodeData(data.value)}`

  const response = await fetch(`/api/export-pdf?url=${encodeURIComponent(urlToExport)}`)

  if (!response.ok) {
    console.error('Failed to generate PDF')
    return
  }

  const blob = await response.blob()
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'mon-document.pdf'
  link.click()
  URL.revokeObjectURL(link.href)
}

const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  ls: [],
});

</script>

<template>
  <v-card class="border-radius-xl">
    <v-row class="pa-3 mx-3 align-center">
      <v-col cols="2">
        <div class="d-flex align-center">
          <p class="mb-0 me-3">Template 1</p>
          <div class="d-none d-md-block" style="border-left: 1px solid; height: 30px;"></div>
        </div>
      </v-col>

      <v-col cols="10" class="d-flex justify-end">
        <div class="d-flex align-center flex-wrap gap-2">
          <v-btn class="text-none" prepend-icon="mdi-plus" variant="text">
            Left Section
          </v-btn>

          <v-btn class="text-none" prepend-icon="mdi-plus" variant="text">
            Right Section
          </v-btn>

          <v-tooltip text="Preview" location="top">
            <template #activator="{ props }">
              <v-icon v-bind="props" size="24">mdi-file-pdf</v-icon>
            </template>
          </v-tooltip>
          <v-tooltip text="Download" location="top">
            <template #activator="{ props }">
              <v-icon @click="downloadPdf" v-bind="props" size="24">mdi-download</v-icon>
            </template>
          </v-tooltip>
          <v-tooltip text="Save" location="top">
            <template #activator="{ props }">
              <v-icon v-bind="props" size="24">mdi-content-save</v-icon>
            </template>
          </v-tooltip>
        </div>
      </v-col>
    </v-row>
    <div>
      <div style="height: 440px; width: 100%">
        <app-form-preview :data="data" />
      </div>
    </div>
  </v-card>
</template>
<style scoped>

</style>
