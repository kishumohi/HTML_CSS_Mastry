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
