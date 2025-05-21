<script setup lang="ts">

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
  <v-card class="bg-gradient-default border-radius-xl">
    <div class="px-6 py-6">
      <v-row>
        <v-col lg="4" md="6">
          <v-form class="d-inline-block" id="navbar-search-main">
            <v-text-field
              rounded-sm
              hide-details
              outlined
              background-color="rgba(255,255,255,0)"
              color="rgb(255,255,255)"
              lighter
              placeholder="Search anything..."
              class="
                        font-size-input
                        placeholder-lighter
                        input-alternative input-icon
                        text-white
                      "
            >
              <template slot="prepend-inner">
                <v-icon
                  color="#fff"
                  class="mt-n1 text-lg material-icons-round"
                >search</v-icon
                >
              </template>
            </v-text-field>
          </v-form>
        </v-col>
        <v-col md="6" class="my-auto ms-auto">
          <div class="d-flex align-center">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  color="#fff"
                  class="ms-auto text-lg material-icons-round"
                >headphones</v-icon
                >
              </template>
              <span>Headphones connected</span>
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  color="#fff"
                  class="text-lg ms-4 material-icons-round"
                >play_arrow</v-icon
                >
              </template>
              <span>Music is playing</span>
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  color="#fff"
                  class="text-lg ms-4 material-icons-round"
                >power_settings_new</v-icon
                >
              </template>
              <span>Start radio</span>
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  v-bind="attrs"
                  v-on="on"
                  color="#fff"
                  class="text-lg ms-4 material-icons-round"
                >watch</v-icon
                >
              </template>
              <span>Time tracker</span>
            </v-tooltip>

            <h4 class="text-white text-h4 font-weight-bold ms-6">
              10:45
            </h4>
          </div>
        </v-col>
      </v-row>
      <hr class="horizontal light mt-4 mb-4" />
      <v-row>
        <v-col lg="4" md="6">
          <div class="d-flex align-center position-relative">
            <h3 class="text-h3 font-weight-bolder text-white mb-1">
              11:13
            </h3>
            <p class="text-white opacity-8 mb-1 ms-3">
              Estimated arrival time
            </p>
            <hr class="vertical d-md-block d-none light mt-0 mb-4" />
          </div>
        </v-col>
        <v-col lg="4" md="6">
          <div class="d-flex align-center position-relative">
            <h3
              class="text-h3 font-weight-bolder text-white mb-1 ms-auto"
            >
              2.4<small class="align-top text-sm">Km</small>
            </h3>
            <p class="text-white opacity-8 mb-1 ms-3 me-auto">
              Turn right in 2.4 miles
            </p>
            <hr class="vertical d-md-block d-none light mt-0" />
          </div>
        </v-col>
        <v-col lg="4" md="6">
          <div class="d-flex align-center position-relative">
            <h3
              class="text-h3 font-weight-bolder text-white mb-1 ms-auto"
            >
              6.3<small class="align-top text-sm">Km</small>
            </h3>
            <p class="text-white opacity-8 mb-1 ms-3 me-auto">
              Distance to Creative Tim
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
    <div>
      <div style="height: 270px; width: 100%">
        <app-form-preview :data="data" />
      </div>
    </div>
    <div class="px-6 py-6">
      <v-row>
        <v-col lg="4" md="6">
          <div class="d-flex align-center">
            <div class="position-relative">
              <v-avatar size="58">
                <img src="@/assets/img/drake.jpeg" alt="Curved" />
              </v-avatar>
              <img
                class="
                          position-absolute
                          w-60
                          end-0
                          bottom-0
                          me-n4
                          mb-n2
                        "
                src="@/assets/img/small-logos/logo-spotify.svg"
                alt="spotify logo"
              />
            </div>
            <div class="px-3">
              <p class="text-white text-sm font-weight-bold mb-0">
                Scorpion (feat Quavo)
              </p>
              <p class="text-white text-xs mb-2 opacity-8">
                Drake - Hip-Hop
              </p>
            </div>
          </div>
        </v-col>
        <v-col lg="4" md="6">
          <div class="d-flex align-center">
            <v-btn
              icon
              outlined
              rounded
              color="#fff"
              width="52px"
              height="52px"
              class="ms-auto"
            >
              <v-icon size="19" class="rotate-180 material-icons-round"
              >skip_previous</v-icon
              >
            </v-btn>
            <v-btn
              icon
              outlined
              rounded
              color="#fff"
              width="52px"
              height="52px"
              class="ms-6"
            >
              <v-icon size="19" class="material-icons-round"
              >pause</v-icon
              >
            </v-btn>
            <v-btn
              icon
              outlined
              rounded
              color="#fff"
              width="52px"
              height="52px"
              class="ms-6 me-auto"
            >
              <v-icon size="19" class="material-icons-round"
              >skip_next</v-icon
              >
            </v-btn>
          </div>
        </v-col>
        <v-col lg="2" md="6" cols="8">
          <p class="text-white mb-0">Volume</p>
        </v-col>
        <v-col lg="1" md="6" cols="4" class="ms-auto">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                v-bind="attrs"
                v-on="on"
                color="#fff"
                class="ms-auto mt-4 material-icons-round"
              >format_list_bulleted</v-icon
              >
            </template>
            <span>Hide menu</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                v-bind="attrs"
                v-on="on"
                color="#fff"
                class="mt-4 ms-4 material-icons-round"
              >mode_comment</v-icon
              >
            </template>
            <span>Track messages</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>
<style scoped>

</style>
