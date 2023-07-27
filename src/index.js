const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let i = 0;
    let result = '';
    let str = expr;
    while (i < str.length) {
        if (str[i] + str[i + 1] + str[i + 2] + str[i + 3] + str[i + 4] + str[i + 5] + str[i + 6] + str[i + 7] + str[i + 8] + str[i + 9] === '**********') {
            result = result + '   ';
        }
        if (i % 2 === 0 && str[i] + str[i + 1] === '10') {
            result = result + '.';
        } else if (i % 2 === 0 && str[i] + str[i + 1] === '11') {
            result = result + '-';
        } else if (i % 10 === 9 && str[i + 1] !== '*') {
            result = result + ' ';
        }
        i = i + 1;
    }
    return result.split('    ').map(word => word.split(' ').map(character => MORSE_TABLE[character]).join('')).join(' ').trim();
}

module.exports = {
    decode
}