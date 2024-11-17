function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");

  var clutter = "";
  var halfValue = Math.floor(splittedText.length / 2);
  console.log(halfValue);
  splittedText.forEach((elem, idx) => {
    if (idx < halfValue) {
      clutter += `<span id="left-span">${elem}</span>`;
    } else {
      clutter += `<span id="right-span">${elem}</span>`;
    }
  });

  h1.innerHTML = clutter;
}
breakTheText();

gsap.from("h1 #left-span", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.15,
});

gsap.from("h1 #right-span", {
  y: 50,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: -0.15,
});
