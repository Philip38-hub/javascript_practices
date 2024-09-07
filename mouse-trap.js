let lastCircle = null;
let box = null;

// Create a circle at the mouse position on click
export const createCircle = () => {
  document.addEventListener('click', (event) => {
    // Create a new div element
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.backgroundColor = 'white';

    // Set its position
    circle.style.position = 'absolute';
    circle.style.left = `${event.clientX - 25}px`; // Adjust to center the circle
    circle.style.top = `${event.clientY - 25}px`; // Adjust to center the circle

    // Set size of the circle
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.borderRadius = '50%';
    
    // Add the circle to the body
    document.body.appendChild(circle);

    // Keep track of the last created circle
    lastCircle = circle;

    // Initialize circle movement
    moveCircle();
  });
};

// Move the last circle with the mouse
export const moveCircle = () => {
  document.addEventListener('mousemove', (event) => {
    if (lastCircle) {
      // Get the mouse position
      const x = event.clientX - 25; // Adjust to center the circle
      const y = event.clientY - 25; // Adjust to center the circle

      // Update the circle's position
      lastCircle.style.left = `${x}px`;
      lastCircle.style.top = `${y}px`;

      // Check if the circle is inside the box
      if (box && isInsideBox(lastCircle, box)) {
        lastCircle.style.backgroundColor = 'var(--purple)';
        // Prevent the circle from escaping
        lastCircle.style.pointerEvents = 'none'; 
      } else {
        lastCircle.style.backgroundColor = 'white';
      }
    }
  });
};

// Create a box in the center of the page
export const setBox = () => {
  box = document.createElement('div');
  box.className = 'box';

  // Set box properties
  box.style.position = 'absolute';
  box.style.width = '200px';
  box.style.height = '200px';
  box.style.left = '50%';
  box.style.top = '50%';
  box.style.transform = 'translate(-50%, -50%)';
  box.style.border = '1px solid black';
  box.style.backgroundColor = 'transparent';

  document.body.appendChild(box);
};

// Check if the circle is inside the box
const isInsideBox = (circle, box) => {
  const circleRect = circle.getBoundingClientRect();
  const boxRect = box.getBoundingClientRect();

  return (
    circleRect.left >= boxRect.left + 1 &&
    circleRect.top >= boxRect.top + 1 &&
    circleRect.right <= boxRect.right - 1 &&
    circleRect.bottom <= boxRect.bottom - 1
  );
};
