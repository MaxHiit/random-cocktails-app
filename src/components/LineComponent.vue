<template>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <div class="line"></div>
  </transition>
</template>

<script setup>
import gsap from "gsap";

let mm = gsap.matchMedia();

const beforeEnter = (el) => {
  el.style.width = "0%";
};

const enter = (el, done) => {
  mm.add(
    {
      isMobile: "(max-width: 767px)",
      isDesktop: "(min-width: 768px)",
    },
    (context) => {
      let { isDesktop } = context.conditions;

      gsap.to(el, {
        duration: 2,
        width: isDesktop ? "30%" : "20%",
        onComplete: done,
      });
    }
  );
};
</script>

<style scoped>
.line {
  height: 2px;
  background: var(--color-background-line);
  max-width: 30%;
}
</style>
