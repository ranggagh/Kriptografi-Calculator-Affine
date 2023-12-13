
export function modulusInverse(a, m) {
    for (let i = 1; i < m; i++) {
        if ((a * i) % m === 1) {
            return i;
        }
    }
    throw new Error('Error.');
}

// function untuk enkripsi affine cipher
export function enkripsi(plainText, keyA, keyB) {
    const m = 26; // m=modulus 26 (Jumlah huruf dalam alfabet)
    return plainText
        .split('')
        .map(char => {
            if (char.match(/[a-z]/i)) {
                const isUpperCase = char === char.toUpperCase();
                const x = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
                const hasilenkripsiChar = String.fromCharCode(((keyA * x + keyB) % m + m) % m + 'a'.charCodeAt(0));
                return isUpperCase ? hasilenkripsiChar.toUpperCase() : hasilenkripsiChar;
            } else {
                return char;
            }
        })
        .join('');
}

// function untuk deskripsi affine cipher
export function deskripsi(cipherText, keyA, keyB) {
    const m = 26; // Jumlah huruf dalam alfabet Inggris
    const aInverse = modulusInverse(keyA, m);

    return cipherText
        .split('')
        .map(char => {
            if (char.match(/[a-z]/i)) {
                const isUpperCase = char === char.toUpperCase();
                const x = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
                const hasildeskripsiChar = String.fromCharCode(((aInverse * (x - keyB)) % m + m) % m + 'a'.charCodeAt(0));
                return isUpperCase ? hasildeskripsiChar.toUpperCase() : hasildeskripsiChar;
            } else {
                return char;
            }
        })
        .join('');
}