<template>
  <transition appear @before-enter="beforeEnter" @enter="enter">
    <button class="shake-btn">
      <span>Suggest me</span>
    </button>
  </transition>
</template>

<script setup>
import gsap from "gsap";

const beforeEnter = (el) => {
  el.style.transform = "scale(0)";
};

const enter = (el, done) => {
  gsap.to(el, {
    duration: 2,
    scale: 1,
    ease: "elastic.out(1, 0.3)",
    delay: 2,
    onComplete: done,
  });
};
</script>
<style scoped>
.shake-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  outline: none;
  border: var(--border-height) solid var(--color-background-line);
  background: transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.shake-btn::before {
  content: "";
  width: 130%;
  height: 130%;
  position: absolute;
  top: 50%;
  left: 50%;
  background: #000;
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 1);
}

.shake-btn:hover:before {
  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
  transform: translate3d(-50%, -50%, 0) scale3d(1, 1, 1);
}

.shake-btn span {
  padding: 5px 15px;
  font-size: clamp(1rem, -0.875rem + 8.333vw, 2rem);
  font-weight: semi-bold;
  text-transform: uppercase;
  position: relative;
}

.shake-btn:hover span {
  color: #fff;
  transition: color 0.4s cubic-bezier(0.1, 0, 0.3, 1);
}

@media screen and (min-width: 768px) {
  .shake-btn span {
    padding: 10px 30px;
  }
}
</style>
