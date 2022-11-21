import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import TitleHero from "@/components/TitleHero.vue";

describe("render title hero component", () => {
  it("render message when component is craeted", () => {
    const title = "Title Message";
    const wrapper = shallowMount(TitleHero, {
      props: {
        title,
      },
    });

    expect(TitleHero).toBeTruthy();
    expect(wrapper.text()).toMatch(title);
  });
});

describe("check if slot is render", () => {
  it("render message when component is craeted", () => {
    const wrapper = shallowMount(TitleHero, {
      slots: {
        iconSlot: "<svg>Icon</svg>",
      },
    });

    expect(wrapper.html()).toContain("<svg>Icon</svg>");
  });
});
