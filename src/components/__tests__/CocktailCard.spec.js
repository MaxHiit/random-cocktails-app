import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import CocktailCard from "@/components/CocktailCard.vue";

describe("App view", () => {
  const index = 1;
  const cocktail = {
    id: 1,
    strDrink: "test title",
    strInstructions: "test desc",
  };

  const formatIndexNum = (index) => {
    return index + 1;
  };

  const wrapper = shallowMount(CocktailCard, {
    props: {
      index: index,
      cocktail: cocktail,
    },
  });

  it("test if components exist", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("check if title, desc render", () => {
    expect(wrapper.html()).toContain("test title");
    expect(wrapper.html()).toContain("test desc");
  });

  it("format index from index to index + 1", () => {
    expect(formatIndexNum(0)).toBe(1);
    expect(formatIndexNum(index)).toBe(2);
    expect(formatIndexNum(2)).toBe(3);
  });
});
