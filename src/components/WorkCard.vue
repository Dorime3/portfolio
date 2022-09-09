<template>
  <a href="#" style="text-decoration: none">
    <div class="card">
      <div>
        <div class="type-work">{{ job.type }}</div>

        <div class="work-title">
          <h3 class="work-title-project">{{ job.title }}</h3>
        </div>
      </div>
      <div class="work-details">{{ job.subtitle }}</div>
    </div>
  </a>
</template>

<script setup>
import {onMounted} from "vue";
import {defineProps} from "vue";

const props = defineProps(['job'])
onMounted(() => {
  console.log(props.job)
})
</script>

<style scoped>
.card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 300px;
  padding-top: 1rem;
  padding-bottom: 4rem;
  border-top: 2px solid rgba(0, 0, 0, .15);
  transition: all 400ms ease-in-out;
  width: 400px;
}

.card:hover {
  border-top: 2px solid rgba(0, 0, 0, .8);
}

.card:hover .type-work {
  color: rgba(0, 0, 0, .9);
}

.card:hover .work-title-project {
  color: rgba(0, 0, 0, .9);
}

.card:hover .work-details {
  display: block;
}

.type-work {
  margin-bottom: 8px;
  color: rgba(0, 0, 0, .4);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: .07em;
  text-transform: uppercase;
}

.work-title-project {
  margin: 0 !important;
  font-size: 28px;
  color: rgba(0, 0, 0, .7);
  font-family: 'Aboreto', serif;
  line-height: 1.4;
  letter-spacing: .01em;
  text-decoration: none;
}

.work-details {
  display: none;
  color: rgba(0, 0, 0, .6);
  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: .5s; /* don't forget to set a duration! */
}
</style>
