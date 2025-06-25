function updateDateTime() {
  const now = new Date(); // Gets the current date and time.
  const currentDateTime = now.toLocaleString(); // Formats it to a readable string.
  document.getElementById("datetime").textContent = currentDateTime; // Updates the HTML element.
}

setInterval(updateDateTime, 1000); // Calls the function every second.
