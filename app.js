// Select the body element
const bodyEl = document.querySelector("body");

// Add an event listener for mouse movement on the body element
bodyEl.addEventListener("mousemove", (e) => {
  // Get the x and y coordinates of the mouse pointer
  const xPos = e.offsetX;
  const yPos = e.offsetY;

  // Generate a random size for the heart
  const size = Math.random() * 100;

  // Create a new span element
  const spanEl = document.createElement("span");

  // Set the position and size of the span element
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  // Append the span element to the body
  bodyEl.appendChild(spanEl);

  // Remove the span element after 5 seconds
  setTimeout(() => {
    spanEl.remove();
  }, 5000);
});
