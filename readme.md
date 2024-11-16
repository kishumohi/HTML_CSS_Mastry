# GSAP

## [ 1 ] Property GSAP

```
- Duration  = 0.3         /  Animation Duration
- delay     = 0.5         /  Delay For Animation
- stagger   = 0.3 or true /  one by one animation
- repeat    = infinite animation (-1)
- yoyo      = true or false  /  Animation Revers

```

## [ 2 ] Property GSAP Scrolling

```
- scrollTrigger: {
    trigger: "#page2 h1",    target point
    scroller: "body",
    markers: true,          show scroll mark
    start: "top 50%",       starting point
    end: "top 30%",         Ending Point
    scrub: 2                smooth = (1 to 10 any) or true/false */,
  },

```

```javascript
scrollTrigger: {
  trigger: "#page2 #box",
  scroller: "body",
  markers: true,
  start: "top 60%",
  end: "top 30%",
  scrub: 2 /* smooth = (1 to 10 any) or true/false */,
  pin: true,
},
```
