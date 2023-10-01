// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str : string) {
  let longestWord = 0;
  let arrOfWords = str.split(' ');
  for (let i = 0; i < arrOfWords.length; i++) {
    if (arrOfWords[i].length > longestWord) {
      longestWord = arrOfWords[i].length;
    }
  }
  return longestWord;
}

findLongestWordLength(
  'What if we try a super-long word such as otorhinolaryngology'
);