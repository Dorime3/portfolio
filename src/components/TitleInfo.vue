<template>
  <div class="title-wrapper">
    <div class="title-info">
      <div class="title-heading">
        <span class="title-heading-part wow title-animation" data-wow-delay="2s" ref="part1">digital designer</span>&nbsp;
        <span class="title-heading-part wow title-animation" data-wow-delay="2.1s" ref="part2">&</span>
        <span class="title-heading-part wow title-animation" data-wow-delay="2.2s" ref="part3">creative developer</span>
      </div>
      <p class="title-heading-part title-subheading wow title-animation" data-wow-delay="2.4s" ref="part4">+ Art, data
        viz, and pun
        enthusiast in Washington, D.C.</p>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'

const part1 = ref(null)
const part2 = ref(null)
const part3 = ref(null)
const part4 = ref(null)


onMounted(() => {
  const delayVisibleBlocks = [
    {
      component: part1,
      time: 3000
    },
    {
      component: part2,
      time: 3100
    },
    {
      component: part3,
      time: 3200
    },
    {
      component: part4,
      time: 3400
    },
  ]

  delayVisibleBlocks.forEach(({component, time}) => {
    setTimeout(() => {
      component.value.style.opacity = '1'
    }, time)
  })
})
</script>

<style scoped>
.title-wrapper {
  max-width: calc(100vw - 25vw);
  margin: 30px auto 8px;
}

.title-info {
  float: right;
  padding: 30px 60px 10px 20px;
}

.title-heading {
  font-size: 65px;
  max-width: 800px;
  margin-bottom: 10px;
  text-align: right;
  font-family: 'Aboreto', cursive;
}

.title-heading-part {
  display: inline-block;
  opacity: 0;
}

.title-animation {
  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 1s; /* don't forget to set a duration! */
}

.title-subheading {
  max-width: 400px;
  color: rgba(0, 0, 0, .7);
  font-size: 20px;
  float: right;
  text-align: right;
}
</style>
