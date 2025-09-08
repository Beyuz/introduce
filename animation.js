const texts = "HELLO";
let anime = document.querySelector(".animation");

[...texts].forEach((char, i) => {
  const span = document.createElement("span");
  span.innerText += char;
  span.style.animationDelay = `${i * 0.5}s`;
  anime.appendChild(span);
});

setTimeout(() => {
  anime.style.opacity = "0";
  anime.style.pointerEvents = "none";
}, 2500);
