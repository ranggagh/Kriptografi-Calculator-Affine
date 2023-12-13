// CaesarCipher.js
const caesarcipher = (text, key, direction) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shiftedAlphabet = direction === 'right' ? alphabet.slice(key) + alphabet.slice(0, key) : alphabet.slice(-key) + alphabet.slice(0, -key);
    
    const encryptedText = text.toUpperCase().split('').map(char => {
      const isUpperCase = char === char.toUpperCase();
      const index = alphabet.indexOf(char.toUpperCase());
  
      if (index === -1) {
        return char;
      }
  
      return isUpperCase ? shiftedAlphabet[index] : shiftedAlphabet[index].toLowerCase();
    }).join('');
  
    return encryptedText;
  };
  
  export default caesarcipher;
  