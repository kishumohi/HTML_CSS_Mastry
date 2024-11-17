# GSAP

## GSAP Properties

1. [GSAP From and TO](#1-gsap-from-and-to)
2. [GSAP Scrolling](#2-gsap-scrolling)
3. [GSAP Basic Timeline](#3-gsap-timeline)
4. [GSAP SVG Animation](#4-gsap-svg-animation)
5. [GSAP Cursor Animation](#5-gsap-cursor-animation)

   - [HTML](#51-html-code)
   - [CSS](#52-css-code)
   - [JS](#53-javascript-code)

6. [GSAP Side-Nav Timeline Animation](#6-gsap-timeline-animation-in-side-nav)

   - [HTML](#61-html-code)
   - [CSS](#62-css-code)
   - [JS](#63-javascript-code)

## 1. GSAP from and to

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

## 2. GSAP Scrolling

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

## 3. GSAP TimeLine

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

## 4. GSAP SVG Animation

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

## 5. GSAP Cursor Animation

### 5.1 html Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <div id="cursor"></div>
    <div id="main">
      <div id="image">
        <div id="overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1719937206300-fc0dac6f8cac?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
    </div>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
      integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script src="script.js"></script>
  </body>
</html>
```

### 5.2 CSS Code

```css
@font-face {
  font-family: "Gilroy-Regular";
  src: url("https://db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.eot");
  src: url("https://db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.eot?#iefix")
      format("embedded-opentype"), url("https://db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.woff2")
      format("woff2"),
    url("https://db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.woff")
      format("woff"), url("https://db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.ttf")
      format("truetype"),
    url("https://db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.svg#Gilroy-Regular")
      format("svg");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Gilroy-Regular";
}
html,
body {
  height: 100%;
  width: 100%;
}
#main {
  height: 100%;
  width: 100%;
  background-color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
}
#cursor {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  font-size: 5px;
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 9;
}
#image {
  height: 30vw;
  width: 60vw;
  position: relative;
}
#image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

#overlay {
  background-color: transparent;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 10;
}
```

### 5.3 JavaScript Code

```javascript
let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
    // ease: "back.out",
  });
});

imageDiv.addEventListener("mouseenter", function () {
  cursor.innerHTML = "view More";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff8a",
  });
});

imageDiv.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
```

**YOU-TUBE :-** [For More Prectise Youtube](https://www.youtube.com/watch?v=laCL0zsPzlY&list=PL8bX3D8aBEpkD5opCcetjXAJPCggJUfF5)

**GIT-HUB :-** [For More Prectise Git ](https://github.com/codegridweb/landing-page-animation-with-project-preview)

## 6. GSAP Timeline Animation In Side-Nav

### 6.1 html Code

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="main">
      <div id="nav">
        <h2>Sheriyans</h2>
        <i class="ri-menu-3-line"></i>
      </div>
      <div id="full">
        <h4>Work</h4>
        <h4>About</h4>
        <h4>Services</h4>
        <h4>Course</h4>
        <h4>Contact Us</h4>
        <i class="ri-close-line"></i>
      </div>
    </div>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
      integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script src="script.js"></script>
  </body>
</html>
```

### 6.2 CSS Code

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Gilroy-Regular";
}
html,
body {
  height: 100%;
  width: 100%;
}
body {
  overflow: hidden;
}
#main {
  height: 100%;
  width: 100%;
  background-image: url(https://images.unsplash.com/photo-1558546030-e2ef8699ffc7?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-position: center;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 50px;
  color: #fff;
}
#nav h2 {
  font-size: 30px;
}
#nav i {
  font-size: 30px;
  font-weight: 800;
  cursor: pointer;
}
#full {
  height: 100%;
  width: 40%;
  background-color: rgba(255, 255, 255, 0.544);
  position: absolute;
  top: 0;
  right: -40%;
  backdrop-filter: blur(10px);
  padding: 150px 60px;
}
#full h4 {
  font-weight: 50;
  font-size: 50px;
  margin-bottom: 10px;
}

#full i {
  position: absolute;
  top: 5%;
  right: 10%;
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  font-weight: 600;
  font-size: 25px;
  cursor: pointer;
}
```

### 6.3 JavaScript Code

```javascript
let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");
let tl = gsap.timeline();

tl.to("#full", {
  right: 0,
  duration: 0.5,
});
tl.from("#full h4", {
  x: 150,
  duration: 0.6,
  stagger: 0.28,
  opacity: 0,
});
tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", function () {
  tl.play();
});

cross.addEventListener("click", function () {
  tl.reverse();
});
```
