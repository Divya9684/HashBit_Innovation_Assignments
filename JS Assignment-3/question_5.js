function correctFn(sentence, wrong, correct) {
    let correctedSentence = sentence.replace(new RegExp('\\b' + wrong + '\\b', 'gi'), correct);
    return correctedSentence;
}

let sentence = "I love piza and collorful bawlons.";
let correctedSentence = correctFn(sentence, 'piza', 'pizza');
correctedSentence = correctFn(correctedSentence, 'collorful', 'colorful');

console.log(correctedSentence); 