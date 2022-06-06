/* DNA to RNA Conversion

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


*/

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  //   iterate through- pushing non 'T' to an array
  let arr = dna.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "T") {
      arr.splice(i, 1, "U");
    }
  }
  return arr.join("");
}

function DNAtoRNA(dna) {
  var newStr = "";
  for (var i = 0; i < dna.length; i++) {
    if (dna[i] == "T") {
      newStr += "U";
    } else {
      newStr += dna[i];
    }
  }
  return newStr;
}
