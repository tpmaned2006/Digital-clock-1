let is24Hour = false;

// Update Clock
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = hours >= 12 ? 'PM' : 'AM';
  let displayHours = is24Hour ? hours : (hours % 12 || 12);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = is24Hour 
    ? `${displayHours}:${minutes}:${seconds}`
    : `${displayHours}:${minutes}:${seconds} ${ampm}`;

  document.getElementById("clock").innerText = timeString;

  // Date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("date").innerText = now.toLocaleDateString(undefined, options);

  // Greeting
  let greeting = "Hello!";
  if (hours < 12) greeting = "☀️ Good Morning!";
  else if (hours < 18) greeting = "🌤️ Good Afternoon!";
  else greeting = "🌙 Good Evening!";
  document.getElementById("greeting").innerText = greeting;
}

// Toggle 12/24 Hour Format
function toggleFormat() {
  is24Hour = !is24Hour;
  updateClock();
}

// Toggle Theme
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Change Background Randomly
function changeBackground() {
  const colors = [
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #6a11cb, #2575fc)",
    "linear-gradient(to right, #11998e, #38ef7d)",
    "linear-gradient(to right, #fc5c7d, #6a82fb)"
  ];
  document.body.style.background = colors[Math.floor(Math.random() * colors.length)];
}

setInterval(updateClock, 1000);
updateClock();






