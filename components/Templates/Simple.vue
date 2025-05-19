<template>
  <div id="pdf-content">
    <v-row>
      <v-col cols="4">
        <v-card rounded="0" class="mx-auto bg-primary full-height" elevation="20">
          <div class="pa-4">
            <Profile
              :name="acc.n"
              image="team-1.jpg"
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
                :printStyle="printStyle"
              ></Contact>
            </div>
            <div>
              <HeaderSection
                :printStyle="printStyle"
                label="Education"
                pathIcon="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
                size="20"
                color="white"
              />
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
              <HeaderSection
                :printStyle="printStyle"
                label="Skills"
                pathIcon="M9 1.09V6H7V1.09C4.16 1.57 2 4.03 2 7C2 9.22 3.21 11.15 5 12.19V21C5 21.55 5.45 22 6 22H10C10.55 22 11 21.55 11 21V12.19C12.79 11.15 14 9.22 14 7C14 4.03 11.84 1.57 9 1.09M10 10.46L9 11.04V20H7V11.04L6 10.46C4.77 9.74 4 8.42 4 7C4 6 4.37 5.06 5 4.35V8H11V4.35C11.63 5.06 12 6 12 7C12 8.42 11.23 9.74 10 10.46M20.94 17.94C20.96 17.79 20.97 17.65 20.97 17.5S20.96 17.2 20.94 17.05L21.91 16.32C22 16.25 22.03 16.13 21.97 16.03L21.05 14.47C21 14.37 20.87 14.33 20.76 14.37L19.61 14.82C19.37 14.65 19.12 14.5 18.83 14.38L18.66 13.19C18.64 13.08 18.54 13 18.43 13H16.58C16.46 13 16.36 13.08 16.34 13.19L16.17 14.38C15.88 14.5 15.63 14.65 15.39 14.82L14.24 14.37C14.14 14.33 14 14.37 13.96 14.47L13.03 16.03C12.97 16.13 13 16.25 13.09 16.32L14.06 17.05C14.05 17.2 14.03 17.35 14.03 17.5S14.05 17.79 14.06 17.94L13.09 18.68C13 18.75 12.97 18.87 13.03 18.97L13.96 20.53C14 20.63 14.14 20.66 14.24 20.63L15.39 20.17C15.63 20.35 15.88 20.5 16.17 20.62L16.34 21.81C16.36 21.92 16.46 22 16.58 22H18.43C18.54 22 18.64 21.92 18.66 21.81L18.83 20.62C19.12 20.5 19.37 20.35 19.61 20.17L20.76 20.63C20.87 20.66 21 20.63 21.05 20.53L21.97 18.97C22.03 18.87 22 18.75 21.91 18.68L20.94 17.94M17.5 19C16.67 19 16 18.33 16 17.5S16.67 16 17.5 16 19 16.67 19 17.5 18.33 19 17.5 19Z"
                title="wrench-cog-outline"
                size="20"
                color="white"
              />
              <v-divider :thickness="5"></v-divider>
              <div class="px-0 py-2 text-sm">
                <Stars label="HTML" :score="80"></Stars>
                <Stars label="PHP" :score="50"></Stars>
                <Stars label="CSS" :score="40"></Stars>
              </div>
            </div>
            <div>
              <HeaderSection
                :printStyle="printStyle"
                label="Languages"
                pathIcon="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                size="20"
                color="white"
              />
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
          <Experience :printStyle="printStyle"></Experience>
          <Experience :printStyle="printStyle"></Experience>
          <Experience :printStyle="printStyle"></Experience>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import Stars from "~/components/Resume/Stars.vue";
import Language from "~/components/Resume/Language.vue";
import Contact from "~/components/Resume/Contact.vue";
import Social from "~/components/Resume/Social.vue";
import Profile from "~/components/Resume/Profile.vue";
import Education from "~/components/Resume/Education.vue";
import Interests from "~/components/Resume/Interests.vue";
import About from "~/components/Resume/About.vue";
import Experience from "~/components/Resume/Experience.vue";
import HeaderSection from "~/components/Resume/HeaderSection.vue";

const printStyle = ref('');
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
  min-height: 100%;
}
#pdf-content::first-line {
  margin-top: -15mm;
}
@media print {
  body {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
}
</style>
