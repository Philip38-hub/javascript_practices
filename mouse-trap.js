// Global variables to keep track of the circles and the box
let lastCircle = null;
const boxSize = 200; // Size of the box (200px x 200px)

// Function to create a box in the center of the page
export function setBox() {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.position = 'absolute';
    box.style.top = '50%';
    box.style.left = '50%';
    box.style.transform = 'translate(-50%, -50%)';
    box.style.border = '1px solid black';
    document.body.appendChild(box);
}

// Function to create a circle at the mouse click position
export function createCircle() {
    document.addEventListener('click', (event) => {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.backgroundColor = 'white';
        circle.style.position = 'absolute';
        circle.style.width = '30px';
        circle.style.height = '30px';
        circle.style.borderRadius = '50%';
        circle.style.top = `${event.clientY - 15}px`; // Center the circle
        circle.style.left = `${event.clientX - 15}px`; // Center the circle
        document.body.appendChild(circle);
        lastCircle = circle; // Keep track of the last created circle
    });
}

// Function to move the last created circle with the mouse
export function moveCircle() {
    document.addEventListener('mousemove', (event) => {
        if (lastCircle) {
            const circleRect = lastCircle.getBoundingClientRect();
            const boxRect = document.querySelector('.box').getBoundingClientRect();

            // Calculate new position
            let newX = event.clientX - 15; // Center the circle
            let newY = event.clientY - 15; // Center the circle

            // Check if the circle is within the box boundaries
            if (
                newX >= boxRect.left + 1 && 
                newX + circleRect.width <= boxRect.right - 1 &&
                newY >= boxRect.top + 1 && 
                newY + circleRect.height <= boxRect.bottom - 1
            ) {
                lastCircle.style.backgroundColor = 'var(--purple)'; // Change color to purple
            } else {
                lastCircle.style.backgroundColor = 'white'; // Reset color if outside
            }

            // Move the circle
            lastCircle.style.top = `${newY}px`;
            lastCircle.style.left = `${newX}px`;
        }
    });
}
