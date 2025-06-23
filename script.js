 AOS.init();

    const typingAnimationElement = document.getElementById('typing-animation');
    const typingTexts = ['Student', 'An Fullstack Developement Enthusiast', 'Aspiring Software Programmer'];
    let currentTextIndex = 0;
    let charIndex = 0;

    function typeCharacter() {
      if (charIndex < typingTexts[currentTextIndex].length) {
        typingAnimationElement.textContent += typingTexts[currentTextIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeCharacter, 150);
      } else {
        setTimeout(eraseText, 2000);
      }
    }

    function eraseText() {
      if (charIndex > 0) {
        typingAnimationElement.textContent = typingTexts[currentTextIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 100);
      } else {
        currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
        setTimeout(typeCharacter, 200);
      }
    }

    document.addEventListener('DOMContentLoaded', function () {
      typeCharacter();
    });