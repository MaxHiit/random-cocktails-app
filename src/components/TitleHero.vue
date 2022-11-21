<template>
  <div ref="titleContentRef" class="title-wrapper">
    <slot name="iconSlot"></slot>

    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const titleContentRef = ref(null);
defineProps({
  title: { type: String },
});

onMounted(() => {
  gsap.from(titleContentRef.value, {
    delay: 2.1,
    duration: 1.5,
    autoAlpha: 0,
    ease: "back.out(1.7)",
  });
});
</script>

<style scoped>
.title-wrapper {
  align-self: center;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

.title {
  font-size: clamp(1.5rem, 10vw, 3rem);
  text-align: center;
  text-transform: capitalize;
}
</style>
