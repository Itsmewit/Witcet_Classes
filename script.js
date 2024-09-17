function countAnimation(targetNumber, elementId) {
  var currentNumber = 0;
  var increment = Math.ceil(targetNumber / 250); // Adjust increment for faster counting
  var intervalTime = 20; // Time between each increment in milliseconds

  var interval = setInterval(function() {
    currentNumber += increment;
    if (currentNumber >= targetNumber) {
      clearInterval(interval);
      currentNumber = targetNumber; // Ensure the target number is reached exactly
    }
    document.getElementById(elementId).textContent = currentNumber.toLocaleString() + '+'; // Update the display with the current number
  }, intervalTime);

}

// Example usage
countAnimation(100000, 'count1'); // Start count animation for the first text
countAnimation(150, 'count2'); // Start count animation for the second text

const checkbox = document.querySelector("#hide_checkbox");
let gitLogo = document.getElementById("gitlogo");
let footerLogo = document.getElementById("footerLogo");
let topLogo = document.getElementById("topLogo");

hide_checkbox.addEventListener("click", () => {
  const body = document.body;

  if (checkbox.checked) {
    body.classList.add("light");
    body.classList.remove("dark");
    gitLogo.src = "images/logo.png";
    footerLogo.src = "images/logo.png";
    topLogo.src = "images/logo.png";
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    gitLogo.src = "images/logo2.png";
    footerLogo.src = "images/logo2.png";
    topLogo.src = "images/logo2.png";
  }
});
