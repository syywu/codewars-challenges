/*
The Robber Language (Rövarspråket) is a Swedish cant used by children to mislead people not familiar with the language. It's used by kids in several screenplays created by Astrid Lindgren.

The idea is that every consonant in a sentence is duplicated, with an o inserted in between (b becomes bob). Vowels are left untouched (a remains an a). It's quite hard for an untrained ear to understand a conversation encoded in this manner, especially if spoken rapidly.

Example
In this example, the consonants f, b and r are modified. The vowels o and a are left untouched.

'foo bar' => 'fofoo bobaror' (`fof-o-o bob-a-ror`)
Note: The dashes - in the example are added for readability and should not be included in the output.
*/

function robberEncode(sentence) {
  // yoyouror cocodode hoherore
  let str = "";
  for (let i = 0; i < sentence.length; i++) {
    if (isConsonant(sentence[i])) {
      if (sentence[i] === sentence[i].toUpperCase()) {
        str += sentence[i] + "O" + sentence[i];
      } else {
        str += sentence[i] + "o" + sentence[i];
      }
    } else {
      str += sentence[i];
    }
  }
  return str;
}

function isConsonant(char) {
  char = char.toUpperCase();
  let cons = "BCDFGHJKLMNPQRSTVWXYZ";
  for (let i = 0; i < cons.length; i++) {
    if (char === cons[i]) {
      return true;
    }
  }
  return false;
}
