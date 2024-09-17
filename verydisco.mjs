const input = process.argv[2]; // Correct case for process.argv

const verydisco = (input) => {
    if (input) {
        let arr = input.split(' '); // Split input into words

        // Function to make each word "very disco"
        const makeDisco = (word) => {
            let middle = Math.ceil(word.length / 2);
            let first = word.slice(0, middle);
            let second = word.slice(middle);
            return second + first; // Concatenate the second part first
        };

        // Apply makeDisco to each word
        const discoWords = arr.map(makeDisco).join(' ');

        // Output the result with emoji
        console.log(`${discoWords} (🕺🏼)`);
    } else {
        console.log('Please provide input');
    }
};

verydisco(input);
