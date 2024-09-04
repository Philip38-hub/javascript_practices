const filterShortStateName = (arr) => {
    return arr.filter(states => states.length < 7);
}

const filterStartVowel = (arr) => {
    return arr.filter(states => /^[aeiou]/i.test(states))
}

const filter5Vowels = (arr) => {
    return arr.filter(states => (states.match(/[aeiou]/gi) || []).length >=5);
}

const filter1DistinctVowel = (arr) => {
    return arr.filter(states => {
        const vowels = ['a','e','i','o','u'];
        const distinct = new Set();
        for (let char of states.toLowerCase()){
            if (vowels.includes(char)){
                distinct.add(char);
            }
        }
        return distinct.size === 1;
    })
}

const multiFilter = (arr) => {
    const vowels = ['a','e','i','o','u'];
    return arr.filter(obj => 
        obj.capital.length >= 8 &&
        !vowels.includes(obj.name[0].toLowerCase()) &&
        obj.tag.toLowerCase().split('').some(char => vowels.includes(char)) &&
        obj.region !== "South"
    );
}