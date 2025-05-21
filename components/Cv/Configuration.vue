<script setup lang="ts">
import { ref } from 'vue'

const images = [
  '/img/products/product-details-2.jpg',
  '/img/products/product-details-3.jpg',
  '/img/products/product-details-4.jpg',
  '/img/products/product-details-3.jpg',
  '/img/products/product-details-1.jpg',
  '/img/products/product-details-2.jpg',
  '/img/products/product-details-4.jpg',
  '/img/products/product-details-4.jpg',
  '/img/products/product-details-3.jpg',
  '/img/products/product-details-1.jpg',
  '/img/products/product-details-2.jpg',
  '/img/products/product-details-4.jpg',
]

const dialog = ref(false)
const selectedImage = ref(null)
const sidebarColorModel = ref(null)

const open = (img) => {
  selectedImage.value = img
  dialog.value = true
}

const close = () => {
  dialog.value = false
}
</script>

<template>
  <v-card class="border-radius-xl">
    <div>
      <v-row>
        <v-col cols="12">
          <div class="px-2 py-3">
            <div class="d-flex align-center position-relative">
              <p class="mb-1 ms-3 me-auto">
                Setting
              </p>
            </div>
          </div>
          <div class="mx-3">
            <v-select
              class="mx-1"
              density="compact"
              :items="['Deutsch', 'French', 'English', 'Arabic']"
              variant="outlined"
              min-width="100"
            />
          </div>
          <div class="d-flex justify-center align-center mx-3">
            <v-btn-toggle
              tile
              color="accent-3 deep-purple"
              group
              class="inline-flex items-center justify-center mx-1"
              v-model="sidebarColorModel"
              defaultValue="primary"
              rounded
            >
              <v-btn
                :elevation="0"
                height="23"
                width="23"
                min-width="23"
                small
                rounded
                :ripple="false"
                @click="$emit('updateSidebarColor', 'primary')"
                class="px-0 mx-0 bg-gradient-primary rounded-circle border-0 me-2"
              ></v-btn>
              <v-btn
                :elevation="0"
                height="23"
                width="23"
                min-width="23"
                small
                rounded
                :ripple="false"
                @click="$emit('updateSidebarColor', 'default')"
                class="px-0 mx-0 bg-gradient-default rounded-circle border-0 me-2"
              ></v-btn>
              <v-btn
                :elevation="0"
                height="23"
                width="23"
                min-width="23"
                small
                rounded
                :ripple="false"
                @click="$emit('updateSidebarColor', 'info')"
                class="px-0 mx-0 bg-gradient-info rounded-circle border-0 me-2"
              ></v-btn>
              <v-btn
                :elevation="0"
                height="23"
                width="23"
                min-width="23"
                small
                rounded
                :ripple="false"
                @click="$emit('updateSidebarColor', 'success')"
                class="px-0 mx-0 bg-gradient-success rounded-circle border-0 me-2"
              ></v-btn>
              <v-btn
                :elevation="0"
                height="23"
                width="23"
                min-width="23"
                small
                rounded
                :ripple="false"
                @click="$emit('updateSidebarColor', 'warning')"
                class="px-0 mx-0 bg-gradient-warning rounded-circle border-0 me-2"
              ></v-btn>
              <v-btn
                :elevation="0"
                height="23"
                width="23"
                min-width="23"
                small
                rounded
                :ripple="false"
                @click="$emit('updateSidebarColor', 'danger')"
                class="px-0 mx-0 bg-gradient-danger rounded-circle border-0 me-2"
              ></v-btn>
            </v-btn-toggle>
          </div>
          <div class="d-flex justify-center align-center mx-3">
            <v-card
              border="xl"
              class="mx-1 my-1 overflow-y-auto"
              max-height="330"
              rounded="xl"
              variant="text"
            >
              <v-row class="d-flex align-center px-3 py-3">
                <v-col v-for="(img, index) in images" cols="6">
                  <div class="d-flex">
                    <img

                      :key="index"
                      :src="img"
                      class="rounded"
                      style="width: 120px; height: 80px; object-fit: cover; cursor: pointer;"
                      @click="open(img)"
                    />

                  </div>
                  <div class="d-flex justify-center align-center position-relative">
                    <h6 class="text-h7 text-white opacity-8">
                      Image
                    </h6>
                  </div>
                  <v-dialog v-model="dialog" persistent max-width="450px" max-height="550px" @click:outside="close">
                    <v-card elevation="2">
                      <v-img :src="selectedImage" aspect-ratio="4/3" contain />
                    </v-card>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>
<style scoped>

</style>
