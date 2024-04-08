// Target all .branding elements
var brandingElements = document.querySelectorAll('.branding');

// Iterate through each .branding element
brandingElements.forEach(function(branding) {
  // Target the text-wrapper inside each .branding element
  var textWrapper = branding.querySelector('.text-wrapper');

  // Replace the text inside text-wrapper with span elements for animation
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

  // Create an Anime.js timeline for each .branding element
  anime.timeline({ loop: false })
    .add({
      targets: textWrapper.querySelector('.line'),
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: "easeInOutExpo",
      duration: 900,
      loop: false
    }).add({
      targets: textWrapper.querySelectorAll('.letters'),
      opacity: [0, 1],
      translateX: [40, 0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 800,
      offset: '-=600',
      delay: (el, i) => 150 + 25 * i,
      loop: false
    }).add({
      targets: textWrapper,
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
      loop: false
    });
});
