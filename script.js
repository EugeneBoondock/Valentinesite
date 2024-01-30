document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.getElementById("no-button");
  const yesButton = document.getElementById("yesButton");
  const noMessage = document.getElementById("no-message");
  const yesMessage = document.getElementById("yes-message");

  noButton.addEventListener("mouseover", moveButton);
  yesButton.addEventListener("click", handleYesButtonClick);

  const audio = document.querySelector("audio");

  // Play the audio
  audio.play();

  function moveButton() {
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set the maximum values for the button movement
    const maxMoveWidth = 300; // Adjust the maximum horizontal movement
    const maxMoveHeight = 250; // Adjust the maximum vertical movement

    const randomX = Math.floor(Math.random() * Math.min(maxWidth, maxMoveWidth));
    const randomY = Math.floor(Math.random() * Math.min(maxHeight, maxMoveHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Additional animations
    noButton.classList.add("move");
    setTimeout(() => {
      noButton.classList.remove("move");
    }, 500);
  }

  function handleYesButtonClick() {
    // Remove unnecessary elements
    document.getElementById("name").style.display = "none";
    yesButton.remove();

    // Show Yes message with animation
    yesMessage.style.display = "block";
    yesMessage.classList.add("fadeIn");

    // Play audio
    const audio = new Audio("./media/song1.mp3");
    audio.play();

    // Additional animations
    setTimeout(() => {
      yesMessage.classList.remove("fadeIn");
    }, 1000);

  }
});
