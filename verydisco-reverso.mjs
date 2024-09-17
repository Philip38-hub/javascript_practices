import { readFile } from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(readFile);

const input = process.argv[2]; // extract file name/path from terminal

const verydiscoReverso = async (input) => {
    try {
        if (/\.txt$/.test(input)) {
             // Read the file content
             const data = await readFilePromise(input, 'utf8');

             // Split the data into words
             const words = data.split(' ');
            const reverso = (word) => {
                let middle = Math.floor(word.length / 2);
                let first = word.slice(0, middle);
                let second = word.slice(middle);
                return second + first;
            }

            const result = words.map(reverso).join(' ');
            console.log(result)
        }
    } catch(error) {
        console.error("Error"+error.message);
    }
}

verydiscoReverso(input)