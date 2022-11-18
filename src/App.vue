<template>
  <header>
    <LineComponents />
    <ShakeBtn @click="handleSuggetsClick" />
    <LineComponents />
  </header>

  <main>
    <TitleHero />
    <div class="slider-container">
      <LoaderComponent v-if="isLoading" />
      <template v-else>
        <SliderComponent :cocktails="cocktails" />
      </template>
    </div>
  </main>
</template>

<script setup>
import { onBeforeMount } from "vue";
import useFetchCocktails from "@/composables/useFetchCocktails";
import LineComponents from "@/components/LineComponents.vue";
import ShakeBtn from "@/components/ShakeBtn.vue";
import TitleHero from "@/components/TitleHero.vue";
import LoaderComponent from "./components/LoaderComponent.vue";
import SliderComponent from "@/components/SliderComponent.vue";

const { isLoading, cocktails, fetchCocktails } = useFetchCocktails();

const handleSuggetsClick = async () => {
  await fetchCocktails();
};

onBeforeMount(async () => {
  await fetchCocktails();
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

.slider-container {
  margin-top: 3rem;
  height: 100%;
}
</style>
