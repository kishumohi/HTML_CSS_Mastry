gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  duration: 3,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -200%",
    scrub: 2,
    pin: true,
  },
});
