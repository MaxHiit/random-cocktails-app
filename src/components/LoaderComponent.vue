<template>
  <div class="loader">
    <WifiIcon class="loader-icon" />
  </div>
</template>

<script setup>
import { WifiIcon } from "@heroicons/vue/24/solid";
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  animation: fadeAnimation 1s linear infinite;
}

.loader-icon {
  width: 100px;
  height: 100px;
}

@keyframes fadeAnimation {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.2;
  }
  65% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
</style>
