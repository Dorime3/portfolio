<template>
  <div class="gallery-block-container">
    <div class="gallery-count-block">
      <div class="gallery-count-buttons-wrapper">
        <div class="gallery-count-buttons">
          <div class="gallery-button-prev"
               @click="onSlidePrev"
               @mouseover="drawPrevCircle"
               @mouseleave="drawPrevCircle($event,true)">
            <svg class="embla__button__svg" id="button-prev"
                 fill="none" height="348" viewBox="0 0 587 348" width="587"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="173.832" cy="173.958" r="169.66" stroke-width="8" stroke="rgba(0,0,0,.7)"></circle>

              <path
                  d="M233.342 173.958L272.799 213.415L278.158 208.057L247.847 177.746L586.656 177.746L586.656 170.169L247.847 170.169L278.158 139.858L272.799 134.5L233.342 173.958Z"
                  fill="rgba(0,0,0,.7)"></path>
            </svg>
          </div>
          <div class="gallery-counter"><b style="color: #000">{{ currentGallerySlide }}</b>/{{ galleryItems.length }}
          </div>
          <div class="gallery-button-next"
               @click="onSlideNext"
               @mouseover="drawNextCircle"
               @mouseleave="drawNextCircle($event,true)">
            <svg class="embla__button__svg" id="button-next"
                 fill="none" height="348" viewBox="0 0 587 348" width="587"
                 xmlns="http://www.w3.org/2000/svg">
              <circle cx="412.824" cy="173.958" r="169.66" stroke-width="8" stroke="rgba(0,0,0,.7)"></circle>

              <path
                  d="M353.314 174.337L313.857 213.795L308.499 208.437L338.809 178.126L3.11826e-06 178.126L3.78071e-06 170.549L338.809 170.549L308.499 140.238L313.857 134.88L353.314 174.337Z"
                  fill="rgba(0,0,0,.7)"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="gallery-wrapper">
      <swiper
          slides-per-view="auto"
          :centeredSlides="true"
          :space-between="50"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
      >
        <swiper-slide
            v-for="slide in galleryItems"
            :key="slide.imagePath">
          <img :src="require(`@/assets/gallery/${slide.imagePath}`)" alt="image slide"/>
          <div class="slide-definition">
            <div class="slide-definition-title">{{ slide.title }}</div>
            <div class="slide-definition-subtitle">{{ slide.subtitle }}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import Vivus from "vivus";

const swiperInstance = ref(null);
const galleryItems = [
  {
    imagePath: 'slide1.jpg',
    title: 'Lady liberty ascends',
    subtitle: "Illustrations from Stepping Up Trade Leadership"
  },
  {
    imagePath: 'slide2.jpg',
    title: 'Cartograms of the global middle class',
    subtitle: "From in CSIS's Stepping Up Trade Leadership, these cartograms (triggered on scroll) illustrate how the global middle class is shifting towards East and South Asia."
  },
  {
    imagePath: 'slide3.jpg',
    title: 'Valentine Collection I',
    subtitle: "Every year I draw Valentines for my friends... they are mostly puns."
  },
  {
    imagePath: 'slide4.jpg',
    title: 'Valentine Collection II',
    subtitle: "More hand-drawn Valentines."
  },
  {
    imagePath: 'slide5.jpg',
    title: 'Beeswarms of survey results',
    subtitle: "I conceptualized and created these data visualizations for CSIS's report. Public Opinion in China: A Liberal Silent Majority?"
  },
]
let animButtonPrev = null;
let animButtonNext = null;

onMounted(() => {
  animButtonPrev = new Vivus('button-prev', {
    start: 'autostart',
    duration: 60,
  })
  animButtonNext = new Vivus('button-next', {
    start: 'autostart',
    duration: 60,
  })
  animButtonPrev.stop().reset()
  animButtonNext.stop().reset()
})

const currentGallerySlide = ref(1)

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const onSlideNext = () => {
  if (swiperInstance.value.allowSlideNext) {
    swiperInstance.value.slideNext()
  }
}

const onSlidePrev = () => {
  if (swiperInstance.value.allowSlidePrev) {
    swiperInstance.value.slidePrev()
  }
}

const onSlideChange = (swiper) => {
  currentGallerySlide.value = swiper.activeIndex + 1
};

const drawPrevCircle = (_, reverse = false) => {
  reverse ? animButtonPrev.play(-2) : animButtonPrev.play()
}
const drawNextCircle = (_, reverse = false) => {
  reverse ? animButtonNext.play(-2) : animButtonNext.play()
}
</script>

<style scoped>
.gallery-block-container {
  margin-top: 150px;
  padding-bottom: 15.6rem;
}

.gallery-count-block {
  margin: 0 auto;
  max-width: 1400px;
}

.gallery-count-buttons-wrapper {
  padding: 0 6vw;
  margin: 3rem;
  display: flex;
  justify-content: center;
}

.gallery-count-buttons {
  display: flex;
  align-items: center;
}

.gallery-button-prev {
  cursor: pointer;
  width: 100px;
  height: 50px;
  margin-right: 1rem;
}

.gallery-button-prev svg {
  max-width: 100%;
  max-height: 100%;
}

.gallery-button-next {
  cursor: pointer;
  width: 100px;
  height: 50px;
  margin-left: 1rem;
}

.gallery-button-next svg {
  max-width: 100%;
  max-height: 100%;
}

.gallery-counter {
  color: rgba(0, 0, 0, .6);
  letter-spacing: 3px;
}

.gallery-wrapper {
  width: 100%;
  margin: 70px auto 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  display: block;
  width: 100%;
  object-fit: cover;
}

.slide-definition {
  margin-top: 1.5rem;
  display: none;
  animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: .5s; /* don't forget to set a duration! */
}

.swiper-slide-active .slide-definition {
  opacity: 1;
  display: block;
}

.slide-definition-title {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 13px;
  text-transform: uppercase;
}

.slide-definition-subtitle {
  color: rgba(0, 0, 0, .6);
}

/*За этот треш стыдно, но апи этой либы не предоставляет возможности работать с динамической шириной*/
.swiper-slide {
  width: 34.7vw;
}

.swiper-slide:nth-child(2) {
  width: 50vw
}

.swiper-slide:nth-child(3) {
  width: 30vw
}

.swiper-slide:nth-child(4) {
  width: 30vw
}

.swiper-slide:nth-child(5) {
  width: 32.4vw
}
</style>
