<template>
  <v-col cols="12" md="12">
    <v-card rounded="0" elevation="20">
      <HeaderSection
        icon="mdi-briefcase"
        label="Experience"
        size="20"
      />
      <div class="d-flex justify-center">
        <v-progress-linear
          bg-color="primary"
          class="mx-auto mb-0"
          color="primary"
          height="5"
          model-value="100"
        ></v-progress-linear>
      </div>
      <v-card-text>
        <div style="margin-left: -20px;">
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
              <v-card style="margin-left: -15px;" class="pa-3" variant="tonal" v-bind="hoverProps">

                <v-card-title class="px-0 pt-0 pb-1 d-block">
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
                </v-card-title>

              <v-card-text class="px-0 pb-1">
                <h6 contenteditable="true" class="text-h7 text-sm font-weight-bold mt-3 mb-2 opacity-8 font-weight-light">
                  {{ item.position }}
                </h6>
                <p contenteditable="true" class="text-sm mt-3 mb-2 opacity-8 font-weight-light">
                  {{ item.description }}
                </p>
              </v-card-text>
            </v-card>
            </v-hover>
          </v-timeline-item>
        </v-timeline>
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
import HeaderSection from "~/components/Resume/HeaderSection.vue";

const props = defineProps({
  printStyle: String
});
const iconSize = 20;
const timeline = [
  {
    title: "Company name | 123 Anywhere, City Name",
    date: "2019–2022",
    icon: "mdi-briefcase",
    btn: "default",
    position: "Job Position Here",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
      "                Necessitatibus, sequi quam excepturi dolores facere illum\n" +
      "                aut reiciendis nemo explicabo praesentium facilis autem quae\n" +
      "                rem nulla aperiam repudiandae fugiat assumenda delectus aliquam asperiores?\n" +
      "                Ea rerum at odit ducimus quidem placeat, quasi expedita, voluptatibus quas quod,\n" +
      "                alias repellendus eius recusandae eos fuga quam dolorum numquam dolor omnis\n" +
      "                mollitia provident! Dicta repellendus neque voluptatibus eligendi obcaecati eum\n" +
      "                tempora, nobis nisi cum, eaque laborum?"
  },
  {
    title: "Company name | 123 Anywhere, City Name",
    date: "2019–2022",
    icon: "mdi-briefcase",
    btn: "default",
    position: "Job Position Here",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
      "                Necessitatibus, sequi quam excepturi dolores facere illum\n" +
      "                aut reiciendis nemo explicabo praesentium facilis autem quae\n" +
      "                rem nulla aperiam repudiandae fugiat assumenda delectus aliquam asperiores?\n" +
      "                Ea rerum at odit ducimus quidem placeat, quasi expedita, voluptatibus quas quod,\n" +
      "                alias repellendus eius recusandae eos fuga quam dolorum numquam dolor omnis\n" +
      "                mollitia provident! Dicta repellendus neque voluptatibus eligendi obcaecati eum\n" +
      "                tempora, nobis nisi cum, eaque laborum?"
  },
  {
    title: "Company name | 123 Anywhere, City Name",
    date: "2019–2022",
    icon: "mdi-briefcase",
    btn: "default",
    position: "Job Position Here",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
      "                Necessitatibus, sequi quam excepturi dolores facere illum\n" +
      "                aut reiciendis nemo explicabo praesentium facilis autem quae\n" +
      "                rem nulla aperiam repudiandae fugiat assumenda delectus aliquam asperiores?\n" +
      "                Ea rerum at odit ducimus quidem placeat, quasi expedita, voluptatibus quas quod,\n" +
      "                alias repellendus eius recusandae eos fuga quam dolorum numquam dolor omnis\n" +
      "                mollitia provident! Dicta repellendus neque voluptatibus eligendi obcaecati eum\n" +
      "                tempora, nobis nisi cum, eaque laborum?"
  },
  {
    title: "Company name | 123 Anywhere, City Name",
    date: "2019–2022",
    icon: "mdi-briefcase",
    btn: "default",
    position: "Job Position Here",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
      "                Necessitatibus, sequi quam excepturi dolores facere illum\n" +
      "                aut reiciendis nemo explicabo praesentium facilis autem quae\n" +
      "                rem nulla aperiam repudiandae fugiat assumenda delectus aliquam asperiores?\n" +
      "                Ea rerum at odit ducimus quidem placeat, quasi expedita, voluptatibus quas quod,\n" +
      "                alias repellendus eius recusandae eos fuga quam dolorum numquam dolor omnis\n" +
      "                mollitia provident! Dicta repellendus neque voluptatibus eligendi obcaecati eum\n" +
      "                tempora, nobis nisi cum, eaque laborum?"
  },
  {
    title: "Company name | 123 Anywhere, City Name",
    date: "2019–2022",
    icon: "mdi-briefcase",
    btn: "default",
    position: "Job Position Here",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.\n" +
      "                Necessitatibus, sequi quam excepturi dolores facere illum\n" +
      "                aut reiciendis nemo explicabo praesentium facilis autem quae\n" +
      "                rem nulla aperiam repudiandae fugiat assumenda delectus aliquam asperiores?\n" +
      "                Ea rerum at odit ducimus quidem placeat, quasi expedita, voluptatibus quas quod,\n" +
      "                alias repellendus eius recusandae eos fuga quam dolorum numquam dolor omnis\n" +
      "                mollitia provident! Dicta repellendus neque voluptatibus eligendi obcaecati eum\n" +
      "                tempora, nobis nisi cum, eaque laborum?"
  },
]
const icons = {
  experience: `
<svg xmlns="http://www.w3.org/2000/svg" width="${iconSize}" height="${iconSize}" viewBox="0 0 24 24"><title>briefcase</title><path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" /></svg>`
}
</script>

<style scoped>
.progress-bar {
  width: 90%;
}
.icon {
  display: inline-block;
}
</style>
