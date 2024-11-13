let tl = gsap.timeline();

tl.to(".preloader", {
  y: "-100%",
  borderRadius: "10% 10% 36% 39% / 10% 10% 55% 56%",
  duration: 1,
  ease: "power2.out",
})
  .add(() => {
    document.querySelector(".preloader").style.display = none;
  })
  .from(".navbar", {
    duration: 1,
    y: "-100%",
  });

// text animation

let paths = document.querySelectorAll("svg path");
// console.log(paths);

tl.to(paths, {
  y: 0,
  opacity: 1,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
  //   onStart: function () {
  //     paths.forEach((path) => {
  //       path.style.transform = "translateY(100%)";
  //     });
  //   },
});

tl.from(".left svg", {
  y: 30,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out",
})
  .from(
    ".left h4",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4"
  )
  .from(
    ".left p",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4"
  )
  .from(
    ".left .leftBtn",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4"
  )
  .from(
    ".middle",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4"
  )
  .from(
    ".right p",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4"
  )
  .from(
    ".right h2",
    {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4"
  );
