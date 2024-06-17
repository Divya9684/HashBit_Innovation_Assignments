let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

function countConsonantsAndVowels(inputString) {
    let lowerCaseStr = inputString.toLowerCase();
    
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = 'bcdfghjklmnpqrstvwxyz'.split(''); 

    let vowelCount = 0;
    let consonantCount = 0;

    for (let char of lowerCaseStr) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (consonants.includes(char)) {
            consonantCount++;
        }
    }

    return { vowels: vowelCount, consonants: consonantCount };
}

let counts = countConsonantsAndVowels(str);

console.log("Number of vowels:", counts.vowels);
console.log("Number of consonants:", counts.consonants);
