let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let image = document.querySelector("#image");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 0.6,
  });
});

image.addEventListener("mousemove", function (dets) {
  cursor.innerHTML = "View More";
  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "red",
    color: "#fff",
  });
});

image.addEventListener("mouseleave", function (dets) {
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
    color: "#000",
  });
});
