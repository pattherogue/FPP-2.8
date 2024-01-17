/*
const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
*/

//Create a function named encryptLetter that takes a letter and a shift value as parameters. This function should return the encrypted version of the letter.
/*
- Inside the function, find the index of the letter in the alphabet.
- Add the shift value to this index.
- Use the modulus operator to ensure wrapping around the alphabet if necessary.
- Return the encrypted letter.
*/
function encryptLetter (letter, shift)
{
  const index = alphabet.indexOf(letter.toLowerCase());
  const newIndex = (index + shift) % alphabet.length;
  return alphabet[newIndex];
}

//Create a function named `encryptMessage` that takes a word and a shift value as parameters. This function should return the encrypted version of the entire word.
/*
- Use a loop to iterate over each letter in the word.
- For each letter, call the `encryptLetter` function.
- Construct the encrypted message.
- Return the encrypted message.
*/

function encryptMessage (word, shift)
{
    //empy string
  let encryptedMessage = "";
  //loop through word 
  for (let i = 0; i < word.length; i++)
  {
    //access current letter in loop, shift, create message
    encryptedMessage += encryptLetter(word[i], shift);
  }
  //return message
  return encryptedMessage;
}

//Create a function named decryptLetter that takes an encrypted letter and a shift value as parameters. This function should return the decrypted version of the letter.
/*
- Inside the function, find the index of the letter in the alphabet.
- Subtract the shift value from this index.
- Use the modulus operator to ensure wrapping around the alphabet if necessary. Remember to handle negative values correctly.
- Return the decrypted letter.
*/