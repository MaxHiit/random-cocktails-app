import { setActivePinia, createPinia } from "pinia";
import { useCocktailsStore } from "@/stores/CocktailsStore";
import { describe, it, expect, beforeEach, beforeAll, afterEach } from "vitest";

beforeAll(() => {
  setActivePinia(createPinia());
});

describe("Cocktails Store", () => {
  let store = null;

  beforeEach(() => {
    //defined store before each test
    store = useCocktailsStore();
  });

  afterEach(() => {
    //clean store after each test
    store.$reset();
  });

  it("creates a store", () => {
    expect(store).toBeDefined();
  });

  it("initializes with empty store", () => {
    expect(store.cocktails).toStrictEqual([]);
    expect(store.isloading).toBeFalsy();
  });
});
