function countWords(paragraph) {
    paragraph = paragraph.trim();

    let words = paragraph.split(/\s+/);

    return words.length;
}

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let wordCount = countWords(paragraph);

console.log(`The paragraph has ${wordCount} words.`);
