let brickCount = 0;

// Function to build the tower with a specified number of bricks
export const build = (numBricks) => {
    const leftColumn = document.querySelector('.left');
    const middleColumn = document.querySelector('.middle');
    const rightColumn = document.querySelector('.right');
    
    const interval = setInterval(() => {
        if (brickCount >= numBricks) {
            clearInterval(interval);
            return;
        }
        
        // Create a new brick element
        const brick = document.createElement('div');
        brickCount++;
        brick.id = `brick-${brickCount}`;
        
        // Distribute bricks into the three columns
        if (brickCount % 3 === 1) {
            leftColumn.appendChild(brick);
        } else if (brickCount % 3 === 2) {
            brick.setAttribute('data-foundation', 'true');  // Add the foundation attribute
            middleColumn.appendChild(brick);
        } else {
            rightColumn.appendChild(brick);
        }
    }, 100); // Adds a brick every 100ms
};

// Function to repair specific bricks by id
export const repair = (...brickIds) => {
    brickIds.forEach((id) => {
        const brick = document.getElementById(id);
        if (brick) {
            // Check if it's in the middle column
            if (brick.parentElement.classList.contains('middle')) {
                brick.setAttribute('repaired', 'in progress');
            } else {
                brick.setAttribute('repaired', 'true');
            }
        }
    });
};

// Function to destroy the last brick
export const destroy = () => {
    const columns = [document.querySelector('.left'), document.querySelector('.middle'), document.querySelector('.right')];
    // Check all columns from right to left
    for (let i = columns.length - 1; i >= 0; i--) {
        const column = columns[i];
        const lastBrick = column.lastElementChild;
        if (lastBrick) {
            column.removeChild(lastBrick);
            brickCount--;
            break;
        }
    }
};
