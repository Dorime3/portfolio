<template>
  <div class="relative">
    <NavBar/>
    <TitleInfo/>
    <div class="heading-bg">
      tucker<br>
      <div style="float: right; margin-top: 100px">harris</div>
    </div>
  </div>
</template>

<script>
import TitleInfo from '../components/TitleInfo.vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'App',
  components: {
    TitleInfo,
    NavBar,
  }
}
</script>

<style scoped>
.relative {
  position: relative;
}

.heading-bg {
  position: absolute;
  display: block;
  width: 100%;
  top: -65px;
  left: -30px;
  font-size: 450px;
  color: #ececec;
  font-weight: 600;
  line-height: 0.6em;
  z-index: -1
}

.adam-img {
  width: calc(120% + 6vw - 40px);
  max-width: 1100px;
  margin-top: 56px;
  margin-left: -2vw;
}
</style>
