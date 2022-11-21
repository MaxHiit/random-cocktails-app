import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import LineComponent from "@/components/LineComponent.vue";

describe("line component", () => {
  it("line component render correctly", () => {
    const wrapper = shallowMount(LineComponent);

    expect(wrapper).toBeTruthy();
  });
});
