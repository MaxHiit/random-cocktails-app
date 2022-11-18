<template lang="">
  <div ref="titleContentRef" class="title-wrapper">
    <SparklesIcon class="icon" />
    <h1 class="title">You don't know what to drink ?</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { SparklesIcon } from "@heroicons/vue/24/solid";

const titleContentRef = ref(null);

onMounted(() => {
  gsap.from(titleContentRef.value, {
    delay: 2.1,
    duration: 1.5,
    autoAlpha: 0,
    ease: "back.out(1.7)",
  });
});
</script>
<style lang=""></style>
