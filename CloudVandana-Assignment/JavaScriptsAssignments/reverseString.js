function reverseWords(sentence) {

    const words = sentence.split(' ');
    const reversedWords = words.map(word => reverseWord(word));
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
  }
  
  function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return reversedWord;
  }

  const inputSentence = 'This is a sunny day';
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); 
  // Output: 'sihT si a ynnus yad'