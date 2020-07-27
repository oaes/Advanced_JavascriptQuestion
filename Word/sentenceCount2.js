//question:
//3. Most of the time sentences are end with fullstops(.). But sometimes it's end with the interrogative(?) and exclamatory (!) sign, Write a program to find out how many sentences are in paragraph when it end with the above 3 sign.

function sentenceCount(sentence) {
  var count = 0;
  for (var i = 0; i < sentence.length; i++) {
    if (sentence[i] === ".") {
      count++;
    } else if (sentence[i] === "?") {
      count++;
    } else if (sentence[i] === "!") {
      count++;
    }
  }
  return count;
}

console.log(sentenceCount('this sentence end with fullstops. and this sentence end with! and this sentence end with?'))