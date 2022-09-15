<template>
  <PreviewPage/>
  <AdamBlock/>
  <WorkBlock/>
  <AboutBlock/>
  <FooterBlock/>
</template>

<script>
import PreviewPage from './components/PreviewPage.vue';
import AdamBlock from './components/AdamBlock.vue'
import WorkBlock from "@/components/WorkBlock.vue";
import AboutBlock from "@/components/AboutBlock.vue";
import FooterBlock from "@/components/FooterBlock.vue";

export default {
  name: 'App',
  components: {
    FooterBlock,
    AboutBlock,
    WorkBlock,
    PreviewPage,
    AdamBlock
  }
}
</script>

<style>

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  background: #e3e3e3;
  transition: background 400ms ease-in;
  font-family: 'Inter', sans-serif;
  margin: 0;
  overflow-x: hidden;
}

a {
  display: block;
}

svg:not(:root) {
  overflow: hidden;
}
</style>
