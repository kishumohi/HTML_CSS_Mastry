# GSAP

## GSAP Properties

## [ 1 ] GSAP From and To

```javascript
  gsap.to("#box3", {
  x: 1200,
  duration: 2,        //  Animation Duration
  rotate: 360,
  delay: 1,           //  Delay For Animation
  stagger:0.3,        //  one by one animation
  repeat: -1,         // infinite animation (-1)
  yoyo: true,         // both size animation , true or false  /  Animation Revers
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
