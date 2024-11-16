# GSAP

## GSAP Properties

## [ 1 ] GSAP From and To

```javascript
gsap.to("#box3", {
  x: 1200,
  duration: 2, //  Animation Duration
  rotate: 360,
  delay: 1, //  Delay For Animation
  stagger: 0.3, //  one by one animation
  repeat: -1, // infinite animation (-1)
  yoyo: true, // both size animation , true or false  /  Animation Revers
});
```

## [ 2 ] GSAP Scrolling

```javascript
scrollTrigger: {
  trigger: "#page2 #box", //  Target point
  scroller: "body",       //  Scroll Options
  markers: true,          //  Scroll Markers
  start: "top 60%",       //  Start Point
  end: "top 30%",         //  End points
  scrub: 2,               //  smooth = (1 to 10 any) or true false
  toggleActions: play,    //  "play pause resume reset",
  pin: true,              //  pinned div or element
},

```

## [ 3 ] GSAP TimeLine

```javascript
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
```

## [ 4 ] GSAP SVG Animation

**intial Path :-** start (10,100) center (500,100) end (990 100)

```javascript
var intialPath = "M 10 100 Q 500 100 990 100";

var finalPath = "M 10 100 Q 500 100 990 100";

var string = document.querySelector("#string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
```
