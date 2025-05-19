<template>
  <div class="d-inline-flex" style="padding-top: 15px">
    <div :style="printStyle">
      <span v-html="icons.item"></span>
    </div>
    <h6 class="text-h6 ms-2 text-body-1 font-weight-bold">{{ label }}</h6>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  label: String,
  printStyle: String,
  size: String,
  pathIcon: String,
  color: String,
  title: String
});


const icons = {
  item: `
<svg xmlns="http://www.w3.org/2000/svg" width="${props.size}" height="${props.size}" fill="${props.color}" viewBox="0 0 24 24">
<title>${props.title}</title>
<path d="${props.pathIcon}" />
</svg>`
};
</script>
