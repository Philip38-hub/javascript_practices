const filterShortStateName = (arr) => arr.filter((str) => str.length < 7);
const filterStartVowel = (arr) => arr.filter((str) => /^[aeiou]/i.test(str));
const filter5Vowels = (arr) => {
    return arr.filter(str => {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let vowelCount = 0;
        for (let char of str) {
            if (vowels.includes(char)) {
                vowelCount++
            }
        }
        return vowelCount>=5;
    })
}

function filter1DistinctVowel(strs) {
    return strs.filter(str => {
      const vowels = ['a', 'e', 'i', 'o', 'u'];
      const vowelSet = new Set();
  
      for (let char of str) {
        if (vowels.includes(char)) {
          vowelSet.add(char);
        }
      }
  
      return vowelSet.size === 1;
    });
  }

  function multiFilter(objects) {
    return objects.filter(obj => {
      return (
        obj.capital.length >= 8 &&
        !['a', 'e', 'i', 'o', 'u'].includes(obj.name[0]) &&
        ['a', 'e', 'i', 'o', 'u'].some(vowel => obj.tag.includes(vowel)) &&
        obj.region !== "South"
      );
    });
  }