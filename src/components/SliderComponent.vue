<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :watchSlidesProgress="true"
    :breakpoints="{
      640: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }"
    :scrollbar="{ draggable: true }"
  >
    <swiper-slide v-for="(cocktail, index) in cocktails" :key="index">
      <CockailCard :cocktail="cocktail" :index="index" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
import CockailCard from "@/components/CockailCard.vue";
import { Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/scrollbar";

defineProps({
  cocktails: { type: Array },
});

const modules = [Scrollbar, A11y];
</script>
<style scoped>
.swiper {
  max-width: 100vw;
  width: 100%;
  min-height: 100%;
}

.swiper-wrapper {
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
}

.swiper-scrollbar > .swiper-scrollbar-drag {
  background: var(--color-background-line);
}
</style>
