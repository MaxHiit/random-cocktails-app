import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useCocktailsStore } from "@/stores/CocktailsStore";
import LoaderComponent from "@/components/LoaderComponent.vue";
import SliderComponent from "@/components/SliderComponent.vue";

describe("App view", () => {
  it("render loader when isLoading is true", () => {
    const wrapper = shallowMount(LoaderComponent, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              CocktailsStore: { isLoading: true },
            },
          }),
        ],
      },
    });
    const store = useCocktailsStore();
    expect(store.isLoading).toBe(true);
    expect(wrapper.exists()).toBe(true);
  });

  it("render slider when isLoading is false", () => {
    const wrapper = shallowMount(SliderComponent, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              CocktailsStore: { isLoading: false }, // start the counter at 20 instead of 0
            },
          }),
        ],
      },
    });
    const store = useCocktailsStore();
    expect(store.isLoading).toBe(false);
    expect(wrapper.exists()).toBe(true);
  });
});
