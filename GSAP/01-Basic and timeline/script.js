gsap.to("#box1", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 720,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 0.5,
});

gsap.from("#box2", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 720,
  backgroundColor: "blue",
  borderRadius: "50%",
  scale: 0.5,
});
/*
gsap.from("h1", {
  y: 50,
  opacity: 0,
  color: "red",
  duration: 2,
  delay: 1,
  stagger: 0.3,
});
*/
gsap.to("#box3", {
  x: 1200,
  duration: 2,
  rotate: 360,
  delay: 1,
  repeat: -1, // infinite moving
  yoyo: true, // both size animation
});
/*
gsap.to("#box4A", {
  x: 1500,
  rotate: 360,
  duration: 1.5,
  delay: 1,
});
gsap.to("#box4B", {
  x: 1500,
  backgroundColor: "red",
  duration: 1.5,
  delay: 2.5,
});
gsap.to("#box4C", {
  x: 1500,
  scale: 0.5,
  borderRadius: "50%",
  duration: 1.5,
  delay: 4,
});
*/

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "trigger",
    start: "top center",
    end: "+=500",
    scrub: 1,
    pin: true,
    pinSpacing: true,
    markers: true,
    toggleActions: "play pause resume reset",
  },
});

tl.to("#box4A", {
  x: 1500,
  rotate: 360,
  duration: 1.5,
  delay: 1,
});

tl.to("#box4B", {
  x: 1500,
  backgroundColor: "red",
  duration: 1.5,
});

let tlnew = gsap.timeline();

tlnew.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tlnew.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

tlnew.from("#nav h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
  color: "red",
});
