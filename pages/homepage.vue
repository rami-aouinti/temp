<script setup lang="ts">
import SettingsDrawer from "~/components/App/SettingsDrawer.vue";
import SettingsDrawerEducation
  from "~/components/App/SettingsDrawerEducation.vue";
import SettingsDrawerSkill from "~/components/App/SettingsDrawerSkill.vue";
import SettingsDrawerLanguage
  from "~/components/App/SettingsDrawerLanguage.vue";
import SettingsDrawerHobby from "~/components/App/SettingsDrawerHobby.vue";
const showSettingsDrawer = ref(false);
const showSettingsDrawerEducation = ref(false);
const showSettingsDrawerSkill = ref(false);
const showSettingsDrawerLanguage = ref(false);
const showSettingsDrawerHobby = ref(false);
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
const toggleSettingsDrawer = (value) => {
  showSettingsDrawer.value = value;
};

const toggleSettingsDrawerEducation = (value) => {
  showSettingsDrawerEducation.value = value;
};

const toggleSettingsDrawerSkill = (value) => {
  showSettingsDrawerSkill.value = value;
};

const toggleSettingsDrawerLanguage = (value) => {
  showSettingsDrawerLanguage.value = value;
};

const toggleSettingsDrawerHobby = (value) => {
  showSettingsDrawerHobby.value = value;
};

const downloadPdf = async () => {
  const res = await fetch('/api/export-pdf')
  const blob = await res.blob()
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = 'resume.pdf'
  link.click()

  URL.revokeObjectURL(url)
}
definePageMeta({
  icon: 'mdi-home',
  title: 'Homepage',
  drawerIndex: 0,
})
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12">
        <v-row>
          <v-col cols="12" md="3">
            <v-row>
              <v-btn @click="downloadPdf">Exporter en PDF</v-btn>
              <v-col cols="12" md="12">
                <app-form-social v-model:facebook="data.f"
                                 v-model:twitter="data.t"
                                 v-model:instagram="data.ig"
                                 v-model:github="data.gh"
                                 v-model:telegram="data.tg"
                                 v-model:linkedin="data.l"
                                 v-model:email="data.e"
                                 v-model:whatsapp="data.w"
                                 v-model:youtube="data.y" />
              </v-col>
              <v-col cols="12" md="12">
                <app-form-profile
                  v-model:name="data.n"
                  v-model:desc="data.d"
                  v-model:image="data.i"
                  v-model:email="data.e"
                  v-model:whatsapp="data.w"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="9">
            <v-card class="position-sticky top-1 transparent-card">
            <app-form-preview :data="data" />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-btn
      :ripple="false"
      icon
      color="#fff"
      class="
          fixed-plugin-button
          position-fixed
          btn-light
          bg-white
          text-dark
          z-index-9999
        "
      @click="showSettingsDrawer = true"
    >
      <v-icon size="20">mdi-update</v-icon>
    </v-btn>
    <v-btn
      :ripple="false"
      icon
      color="#fff"
      class="
          fixed-plugin-button-education
          position-fixed
          btn-light
          bg-white
          text-dark
          z-index-9999
        "
      @click="showSettingsDrawerEducation = true"
    >
      <v-icon size="20">mdi-update</v-icon>
    </v-btn>
    <v-btn
      :ripple="false"
      icon
      color="#fff"
      class="
          fixed-plugin-button-skill
          position-fixed
          btn-light
          bg-white
          text-dark
          z-index-9999
        "
      @click="showSettingsDrawerSkill = true"
    >
      <v-icon size="20">mdi-update</v-icon>
    </v-btn>
    <v-btn
      :ripple="false"
      icon
      color="#fff"
      class="
          fixed-plugin-button-language
          position-fixed
          btn-light
          bg-white
          text-dark
          z-index-9999
        "
      @click="showSettingsDrawerLanguage = true"
    >
      <v-icon size="20">mdi-update</v-icon>
    </v-btn>
    <v-btn
      :ripple="false"
      icon
      color="#fff"
      class="
          fixed-plugin-button-hobby
          position-fixed
          btn-light
          bg-white
          text-dark
          z-index-9999
        "
      @click="showSettingsDrawerHobby = true"
    >
      <v-icon size="20">mdi-update</v-icon>
    </v-btn>
    <settings-drawer
      v-model="data.ls"
      :showSettingsDrawer="showSettingsDrawer"
      @toggleSettingsDrawer="toggleSettingsDrawer"
    >
    </settings-drawer>
    <settings-drawer-education
      :showSettingsDrawerEducation="showSettingsDrawerEducation"
      @toggleSettingsDrawerEducation="toggleSettingsDrawerEducation"
    >
    </settings-drawer-education>
    <settings-drawer-skill
      :showSettingsDrawerSkill="showSettingsDrawerSkill"
      @toggleSettingsDrawerSkill="toggleSettingsDrawerSkill"
    >
    </settings-drawer-skill>
    <settings-drawer-language
      :showSettingsDrawerLanguage="showSettingsDrawerLanguage"
      @toggleSettingsDrawerLanguage="toggleSettingsDrawerLanguage"
    >
    </settings-drawer-language>
    <settings-drawer-hobby
      :showSettingsDrawerHobby="showSettingsDrawerHobby"
      @toggleSettingsDrawerHobby="toggleSettingsDrawerHobby"
    >
    </settings-drawer-hobby>
  </v-container>
</template>
<style scoped>
.transparent-card {
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
}
</style>
