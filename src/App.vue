<template>
  <header>
    <LineComponent />
    <ShakeBtn message="Suggest me" @click="handleSuggetsClick" />
    <LineComponent />
  </header>

  <main>
    <TitleHero title="You don't know what to drink ?">
      <template #iconSlot>
        <SparklesIcon class="icon" />
      </template>
    </TitleHero>
    <div class="slider-container">
      <LoaderComponent v-if="isLoading" />
      <template v-else>
        <SliderComponent />
      </template>
    </div>
  </main>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { useCocktailsStore } from "@/stores/CocktailsStore";
import { SparklesIcon } from "@heroicons/vue/24/solid";
import LineComponent from "@/components/LineComponent.vue";
import ShakeBtn from "@/components/ShakeBtn.vue";
import TitleHero from "@/components/TitleHero.vue";
import LoaderComponent from "./components/LoaderComponent.vue";
import SliderComponent from "@/components/SliderComponent.vue";

const cocktailsStore = useCocktailsStore();
const { isLoading } = storeToRefs(cocktailsStore);

const handleSuggetsClick = async () => {
  await cocktailsStore.fetchCocktails();
};

onBeforeMount(async () => {
  await cocktailsStore.fetchCocktails();
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
