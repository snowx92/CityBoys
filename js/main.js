    // Define the text for each branding element
    var textList = [
      "Welcome To The  City !!",
      
    ];

    // Initialize index for textList
    var currentIndex = 0;

    // Function to switch text every 5 seconds with animation
    function switchText() {
      // Get the current text from textList
      var currentText = textList[currentIndex];

      // Iterate through each branding element
      var brandingElements = document.querySelectorAll('.branding');
      brandingElements.forEach(function(branding) {
        // Reset textWrapper's innerHTML to an empty string
        var textWrapper = branding.querySelector('.text-wrapper');
        textWrapper.innerHTML = '';

        // Iterate through each character in the currentText
        for (var i = 0; i < currentText.length; i++) {
          // Create a span element for each character
          var charSpan = document.createElement('span');
          charSpan.textContent = currentText[i];
          charSpan.className = 'letters'; // Add class for animation

          // Append the span element to textWrapper
          textWrapper.appendChild(charSpan);
        }

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
          });
      });

      // Increment currentIndex or reset to 0 if at the end of textList
      currentIndex = (currentIndex + 1) % textList.length;
    }

    // Initial switch after page load
    switchText();

    // Set interval to switch text every 5 seconds
    setInterval(switchText, 5000);