<template>
  <v-row>
    <v-col cols="4">
      <v-card rounded="0" class="mx-auto bg-primary full-height" elevation="20">
        <div class="pa-4">
          <Profile
            :name="acc.n"
            image="https://i.postimg.cc/wBGkjTbC/Profile-Photo.jpg"
            title="Marketing Manager"
          ></Profile>
          <div class="d-flex justify-center py-1">
            <Social></Social>
          </div>

          <div>
            <About :description="acc.d"></About>
          </div>
          <div>
            <Contact
              phone="+880 1765923094"
              email="alaminhimu0@gmail.com"
              address="Santibug, Rangpur"
            ></Contact>
          </div>
          <div>
            <div class="d-flex align-center">
              <v-icon class="text-white" size="20">mdi-school</v-icon>
              <h6 class="text-h7 ms-2 text-body-1 font-weight-bold">Education</h6>
            </div>
            <v-divider :thickness="5"></v-divider>
            <Education
              school="Higher Secondary Certificate"
              date="2019-2022"
              description="Collectorate School & College"
            ></Education>
            <v-divider :thickness="2"></v-divider>
            <Education
              school="Higher Secondary Certificate"
              date="2019-2022"
              description="Collectorate School & College"
            ></Education>
            <v-divider :thickness="2"></v-divider>
            <Education
              school="Higher Secondary Certificate"
              date="2019-2022"
              description="Collectorate School & College"
            ></Education>
          </div>
          <div>
            <div class="d-flex align-center">
              <v-icon class="text-white" size="20">mdi-paper-cut-vertical</v-icon>
              <h6 class="text-h7 ms-2 text-body-1 font-weight-bold">Skills</h6>
            </div>
            <v-divider :thickness="5"></v-divider>
            <div class="px-0 py-2 text-sm">
              <Stars label="HTML" :score="80"></Stars>
              <Stars label="PHP" :score="50"></Stars>
              <Stars label="CSS" :score="40"></Stars>
            </div>
          </div>
          <div>
            <div class="d-flex align-center">
              <v-icon class="text-white" size="20">mdi-earth</v-icon>
              <h6 class="text-h7 ms-2 text-body-1 font-weight-bold">Languages</h6>
            </div>
            <v-divider :thickness="5"></v-divider>
            <div class="px-0 py-2 text-sm">
              <Language label="Deutsch" :stars="4"/>
              <Language label="French" :stars="3" />
              <Language label="English" :stars="5" />
            </div>
          </div>
          <div>
            <Interests :items="items"></Interests>
          </div>
        </div>
      </v-card>

    </v-col>
    <v-col cols="8">
      <v-row>
        <Experience></Experience>
        <Experience></Experience>
        <Experience></Experience>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>

import { defineProps } from 'vue'
import Stars from "~/components/Resume/Stars.vue";
import Language from "~/components/Resume/Language.vue";
import Contact from "~/components/Resume/Contact.vue";
import Social from "~/components/Resume/Social.vue";
import Profile from "~/components/Resume/Profile.vue";
import Education from "~/components/Resume/Education.vue";
import Interests from "~/components/Resume/Interests.vue";
import About from "~/components/Resume/About.vue";
import Experience from "~/components/Resume/Experience.vue";

const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});
const items = [
  { text: 'My Files', icon: 'mdi-folder' },
  { text: 'Shared with me', icon: 'mdi-account-multiple' },
]
</script>
<style scoped>
.full-height {
  height: 100%;
}
</style>
