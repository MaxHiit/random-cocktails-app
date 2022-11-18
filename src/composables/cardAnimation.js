import gsap from "gsap";

export function useCardAnimation(el1, el2, delay) {
  gsap.from(el1.value, {
    delay: delay,
    duration: 1,
    scale: 0,
    autoAlpha: 0,
    ease: "back.out(1.2)",
  });

  gsap.from(el2.value.children, {
    delay: delay,
    duration: 1.5,
    y: "+100",
    autoAlpha: 0,
    stagger: 0.25,
    ease: "back.out(1.7)",
  });
}
