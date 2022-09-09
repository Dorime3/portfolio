<template>
  <PreviewPage/>
  <AdamBlock/>
  <WorkBlock/>
  <GalleryBlock/>
</template>

<script>
import PreviewPage from './components/PreviewPage.vue';
import AdamBlock from './components/AdamBlock.vue'
import WorkBlock from "@/components/WorkBlock.vue";
import GalleryBlock from "@/components/GalleryBlock.vue";

export default {
  name: 'App',
  components: {
    GalleryBlock,
    WorkBlock,
    PreviewPage,
    AdamBlock
  }
}
</script>

<style>

*, *::before, *::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  background: #e3e3e3;
  transition: background 400ms ease-in;
  font-family: 'Inter', sans-serif;
}

a {
  display: block;
}

svg:not(:root) {
  overflow: hidden;
}
</style>
