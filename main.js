console.log("Connected!");

// Function to count words accurately
const wordCounter = (value) => {
  console.log(value);

  // Remove leading/trailing whitespace and split by multiple spaces or line breaks
  const words = value.trim().split(/\s+/).filter(word => word);
  const wordCountNum = words.length;

  if (wordCountNum > 0) {
    wordCount.innerHTML = `Word Count: ${wordCountNum}`; 
  } else {
    error.innerHTML = "Please input text";
  }
}

// Toggle dark and light modes, updating button text
const toggleMode = () => {
  const body = document.body;
  const isDarkMode = body.classList.toggle("dark-mode");

  // Update button text based on the mode
  toggleButton.innerHTML = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// DO NOT MODIFY BELOW THIS LINE
const textarea = document.querySelector("textarea");
const form = document.querySelector("form");
const error = document.querySelector("#error");
const wordCount = document.querySelector("#word-count");
const toggleButton = document.querySelector("#bg-switch");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  error.innerHTML = ""; 
  wordCount.innerHTML = ""; 
  const value = textarea.value;
  wordCounter(value);
});

form.addEventListener("reset", () => {
  error.innerHTML = "";
  wordCount.innerHTML = "";
});

toggleButton.addEventListener("click", () => {
  toggleMode();
});
