const sameAmount = (str, regex1, regex2) => {
     // Add 'g' flag to regex1 and regex2 if not already present
     const globalRegex1 = new RegExp(regex1.source, regex1.flags.includes('g') ? regex1.flags : regex1.flags + 'g');
     const globalRegex2 = new RegExp(regex2.source, regex2.flags.includes('g') ? regex2.flags : regex2.flags + 'g');
 
     // Perform matches
     const match1 = str.match(globalRegex1) || [];
     const match2 = str.match(globalRegex2) || [];
     
     // Compare the number of matches
     return match1.length === match2.length;
}

// console.log(sameAmount('hello how are you', /l/, /r/))