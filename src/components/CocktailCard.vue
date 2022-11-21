<template>
  <div class="card">
    <div
      ref="imgRef"
      class="card-img-wrapper"
      :data-img-shape="formatIndexNum"
      loading="lazy"
    >
      <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" />
    </div>

    <div ref="cardInfoRef" class="card-info">
      <div class="card_title-wrapper">
        <SparklesIcon class="icon" />
        <h2 class="card_title">{{ cocktail.strDrink }}</h2>
        <span class="card_number">(0{{ formatIndexNum }})</span>
      </div>
      <p class="card_desc">{{ cocktail.strInstructions }}</p>
      <a href="#" class="card_link">
        <span>Discover</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from "vue";
import { useCardAnimation } from "@/composables/cardAnimation.js";
import { SparklesIcon } from "@heroicons/vue/24/solid";
import { useSwiperSlide } from "swiper/vue";

const props = defineProps({
  index: { type: Number },
  cocktail: { type: Object },
});

const imgRef = ref(null);
const cardInfoRef = ref(null);
const swiperSlide = useSwiperSlide();

const formatIndexNum = computed(() => props.index + 1);

// play the animation when the hidden slide appears in the viewport
watch(swiperSlide, () => {
  if (swiperSlide.value.isVisible && swiperSlide.value.isActive) {
    useCardAnimation(imgRef, cardInfoRef, 0.7);
  }
});

onMounted(() => {
  useCardAnimation(imgRef, cardInfoRef, 2.2);
});
</script>

<style scoped>
.card {
  max-width: 350px;
}
.card-img-wrapper {
  overflow: hidden;
  width: 250px;
  height: 250px;
  margin: auto;
  position: relative;
  background: var(--color-background-card-image);
  box-sizing: border-box;
}

.card-img-wrapper[data-img-shape="1"] {
  clip-path: circle(50% at 50% 50%);
}
.card-img-wrapper[data-img-shape="2"] {
  clip-path: circle(64.7% at 50% 65%);
}
.card-img-wrapper[data-img-shape="3"] {
  clip-path: polygon(
    0% 15%,
    15% 15%,
    15% 0%,
    85% 0%,
    85% 15%,
    100% 15%,
    100% 85%,
    85% 85%,
    85% 100%,
    15% 100%,
    15% 85%,
    0% 85%
  );
}

.card-img-wrapper img {
  position: absolute;
  top: 3px;
  left: 3px;
  right: 2px;
  bottom: 2px;
  width: 245px;
  height: 245px;
  clip-path: inherit;
}

.card-info {
  margin-top: 1.5rem;
}

.card_title-wrapper {
  display: flex;
  align-items: center;
  border-top: var(--border-height) solid var(--color-background-line);
  border-bottom: var(--border-height) solid var(--color-background-line);
  padding: 0.5rem 0.2rem;
}

.card_title {
  flex: 1;
  margin-left: 1.5rem;
  font-size: 1.1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.card_number {
  font-size: 1.1rem;
}

.card_desc {
  margin: 1rem 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 75px;
  font-size: 1rem;
}

.card_link {
  font-size: 1.1rem;
  text-transform: capitalize;
  text-decoration: underline;
  color: var(--color-link);
  position: relative;
}

.card_link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  top: 100%;
  left: 0;
  background: var(--color-link);
  transform-origin: 50% 100%;
  transition: clip-path 0.3s, transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
  clip-path: polygon(
    0% 0%,
    0% 100%,
    0 100%,
    0 0,
    100% 0,
    100% 100%,
    0 100%,
    0 100%,
    100% 100%,
    100% 0%
  );
}

.card_link:hover::before {
  transform: translate3d(0, 2px, 0) scale3d(1.08, 3, 1);
  clip-path: polygon(
    0% 0%,
    0% 100%,
    50% 100%,
    50% 0,
    50% 0,
    50% 100%,
    50% 100%,
    0 100%,
    100% 100%,
    100% 0%
  );
}

.card_link span {
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
}

.card_link:hover span {
  transform: translate3d(0, -2px, 0);
}
</style>
