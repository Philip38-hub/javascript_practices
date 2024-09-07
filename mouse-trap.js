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
    const radius = 25;
    circle.style.position = 'absolute';
    circle.style.left = `${event.clientX - radius}px`;
    circle.style.top = `${event.clientY - radius}px`;

    // Set size of the circle
    circle.style.width = `${2 * radius}px`;
    circle.style.height = `${2 * radius}px`;
    circle.style.borderRadius = '50%';
    
    // Add the circle to the body
    document.body.appendChild(circle);

    // Keep track of the last created circle
    lastCircle = circle;
  });
};

// Move the last circle with the mouse
export const moveCircle = () => {
  document.addEventListener('mousemove', (event) => {
    if (lastCircle) {
      // Get the mouse position
      const radius = 25;
      let x = event.clientX - radius;
      let y = event.clientY - radius;

      // Check if the circle is inside the box
      if (box) {
        const boxRect = box.getBoundingClientRect();
        const circleRect = lastCircle.getBoundingClientRect();

        const isInsideX = circleRect.left >= boxRect.left &&
                          circleRect.right <= boxRect.right;
        const isInsideY = circleRect.top >= boxRect.top &&
                          circleRect.bottom <= boxRect.bottom;

        if (isInsideX && isInsideY) {
          lastCircle.style.backgroundColor = 'var(--purple)';
        } else {
          lastCircle.style.backgroundColor = 'white';
        }

        // Ensure the circle stays within the box
        x = Math.max(boxRect.left + radius, Math.min(x, boxRect.right - radius));
        y = Math.max(boxRect.top + radius, Math.min(y, boxRect.bottom - radius));
      }

      // Update the circle's position
      lastCircle.style.left = `${x}px`;
      lastCircle.style.top = `${y}px`;
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
