//question:
//4. how many vowel are exist in a sentence, write a function to find out.

function vowelCount(sentence) {
  var count = 0;
  for (var i = 0; i < sentence.length; i++) {
    if (
      sentence[i] === "a" ||
      sentence[i] === "e" ||
      sentence[i] === "i" ||
      sentence[i] === "o" ||
      sentence[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(vowelCount('this is a mango'));