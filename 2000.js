var reversePrefix = function (word, ch) {
    let i = word.indexOf(ch);
    if (i === -1) return word;
    let last = word.slice(0, i + 1).split('').reverse().join('');
    let rest = word.slice(i + 1);
    return last + rest;
};