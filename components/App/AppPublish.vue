<script setup lang="ts">
import {encodeData} from "~/utils/transformer";

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

const publish = () => {
  const url = `${window.location.origin}/1?data=${encodeData(data.value)}`;
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
};
</script>

<template>
  <v-btn
    @click="publish"
    :rounded="0"
    icon="mdi-publish"
  >
  </v-btn>
</template>
