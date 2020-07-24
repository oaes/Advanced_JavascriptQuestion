//question:
//2. write down a function which find out how many sentence are exist in a paragraph?

function sentenceCount(paragraph) {
  var count = 0;
  for (var i = 0; i < paragraph.length; i++) {
    if (paragraph[i] === ".") {
      count++;
    }
  }

  return count;
}

console.log(sentenceCount("this is a toy. this is a boy. this is a banana."));
