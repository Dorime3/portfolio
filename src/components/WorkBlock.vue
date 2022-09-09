<template>
  <div ref="work" class="work-block-container">
    <div class="work-block-background">Work.</div>
    <div class="work-block-header">
      Dive into the making of these individual products.
    </div>
    <div class="work-block-projects">
      <WorkCard v-for="(job, idx) in myJobs" :key="idx" :job="job"/>
    </div>
    <div class="work-block-other">
      <OtherProjects/>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import WorkCard from "@/components/WorkCard";
import OtherProjects from "@/components/OtherProjects";

const work = ref(null)
const myJobs = [
  {
    type: 'LONG-FORM STORYTELLING',
    title: 'How Beijing\'s Narrative of U.S. Decline Is Leading to Strategic Overconfidence',
    subtitle: '2021 / Seth Jones & Jude Blanchette from CSIS',
  },
  {
    type: 'WEBSITE',
    title: 'The CSIS Journalism Bootcamp',
    subtitle: '2021 / The Abshire-Inamori Leadership Academy (AILA) and the iDeas Lab, CSIS',
  },
  {
    type: 'LONG-FORM STORYTELLING',
    title: 'Moscow’s Mercenary Wars',
    subtitle: '2021 / The Transnational Threats (TNT) Project, CSIS',
  },
  {
    type: 'LONG-FORM STORYTELLING',
    title: 'Illuminating the South China Sea’s Dark Fishing Fleet',
    subtitle: '2021 / Stephenson Ocean Security (SOS) Project, CSIS',
  },
  {
    type: 'WEBSITE',
    title: 'Data Governance Database',
    subtitle: '2021 / Strategic Technologies Program, CSIS',
  },
  {
    type: 'WEBSITE',
    title: 'Health Security Commission',
    subtitle: '2021 / Global Health Policy Center, Commission on Strengthening America’s Health Security, CSIS',
  }
]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      document.body.style.backgroundColor = '#f4f4f4';
    } else {
      document.body.style.backgroundColor = '#e3e3e3';
    }
  }, {});
  observer.observe(work.value)
})
</script>

<style scoped>
.work-block-container {
  position: relative;
  padding: 0 8vw;
}

.work-block-background {
  text-transform: lowercase;
  position: absolute;
  top: -100px;
  left: -50px;
  font-size: 450px;
  color: #ececec;
  font-weight: 600;
  z-index: -1;
}

.work-block-header {
  padding-top: 250px;
  font-family: 'Aboreto', serif;
  font-weight: 500;
  font-size: 40px;
  max-width: 62.5rem;
}

.work-block-projects {
  display: flex;
  max-width: 90%;
  margin: 50px auto;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
