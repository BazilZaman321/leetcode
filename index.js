var lengthOfLastWord = function(s) {
    const word= s.split(' ').pop().length;
    return word;
};
console.log(lengthOfLastWord("Hello world"));
