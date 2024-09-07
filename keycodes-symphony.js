export const compose = () => {
    // Add an event listener for keydown events
    document.addEventListener('keydown', (event) => {
      const notesContainer = document.querySelector('body');
      
     if (event.key === 'Backspace') {
        // Remove the last note when Backspace is pressed
        if (notesContainer.lastChild) {
          notesContainer.removeChild(notesContainer.lastChild);
        }
  
      } else if (event.key === 'Escape') {
        // Clear all notes when Escape is pressed
        notesContainer.innerHTML = '';
      }
      // Check if the pressed key is part of the lowercase alphabet
      else {
         // Create a new div element for the note
      const note = document.createElement('div');
      note.classList.add('note');  // Adding the 'note' class for styling
      note.textContent = event.key; // Display the pressed key inside the div
      
      // Generate a unique color for each note
      const color = generateUniqueColor();
      note.style.backgroundColor = color;
      
      // Append the new note to the notes container
      notesContainer.appendChild(note);

      } 
    });
  };
  
 export const generateUniqueColor = () => {
    let color;
    do {
      color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    } while (isColorDuplicate(color));
    return color;
  };
  
  // Set to keep track of used colors
  const usedColors = new Set();
  
  // Check if the color has been used before
  const isColorDuplicate = (color) => {
    if (usedColors.has(color)) {
      return true;
    } else {
      usedColors.add(color);
      return false;
    }
  };