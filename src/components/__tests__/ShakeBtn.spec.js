import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import ShakeBtn from "@/components/ShakeBtn.vue";

describe("suggest button", () => {
  const message = "Shake Me";

  it("renders message when component is created", () => {
    const wrapper = shallowMount(ShakeBtn, {
      props: {
        message,
      },
    });

    expect(ShakeBtn).toBeTruthy();
    expect(wrapper.text()).toMatch(message);
  });
});
