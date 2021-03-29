const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machineType = true) {
    this.type = machineType;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

  }
  encrypt(str, key) {
    if (str && key) {
      str = str.toUpperCase();
      key = key.toUpperCase();
      const alphabetLength = this.alphabet.length;
      const strLength = str.length;
      const keyLength = key.length;
      let result = '';
      let counter = 0;
      for (let strLetter = 0; strLetter < strLength; strLetter++) {
        const currentStrLetter = str[strLetter];
        const strLetterPos = this.alphabet.indexOf(currentStrLetter);
        const currentKeyLetter = key[counter];
        const keyLetterPos = this.alphabet.indexOf(currentKeyLetter);
        if (strLetterPos === -1) {
          result += str[strLetter];
        } else {
          result += this.alphabet[
            (strLetterPos + keyLetterPos) % alphabetLength
          ];
          counter++;
          if (counter === keyLength) {
            counter = 0;
          }
        }
      }
      str = result;
      result = '';
      if (!this.type) {
        str = str.split('').reverse().join('');
      }
      return str;
    } else {
      throw new Error('Pass the string and the key!');
    }
  }
  decrypt(str, key) {
    if (str && key) {
      str = str.toUpperCase();
      key = key.toUpperCase();
      const alphabetLength = this.alphabet.length;
      const strLength = str.length;
      const keyLength = key.length;
      let result = '';
      let counter = 0;
      for (let strLetter = 0; strLetter < strLength; strLetter++) {
        const currentStrLetter = str[strLetter];
        const strLetterPos = this.alphabet.indexOf(currentStrLetter);
        const currentKeyLetter = key[counter];
        const keyLetterPos = this.alphabet.indexOf(currentKeyLetter);
        if (strLetterPos === -1) {
          result += str[strLetter];
        } else {
          result += this.alphabet[
            (strLetterPos - keyLetterPos + alphabetLength) %
            alphabetLength
          ];
          counter++;
          if (counter === keyLength) {
            counter = 0;
          }
        }
      }
      str = result;
      result = '';
      if (!this.type) {
        str = str.split('').reverse().join('');
      }
      return str;
    } else {
      throw new Error('Pass the string and the key!');
    }
  }
}

module.exports = VigenereCipheringMachine;