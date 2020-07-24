//question:
//1. write a function which can able to count how many word are exit this word?

function wordCount(word) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      count++;
    }
  }
  count++;
  return count;
}

console.log(wordCount('this is working'));