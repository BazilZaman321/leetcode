//                                        LEETCODE QUESTION

//58. Length of Last Word

var lengthOfLastWord = function(s) {
    const word= s.split(' ').pop().length;
    return word;
};
console.log(lengthOfLastWord("Hello world"));



//344. Reverse String

//Input: s = ["h","e","l","l","o"]
//tput: ["o","l","l","e","h"]

var reverseString = function(s) {
    return s.reverse();
};

console.log(reverseString(["h","e","l","l","o"]));


// 415.  add string

var addStrings = function(num1, num2) {
    let one=BigInt(num1);
    let two=BigInt(num2);
    let three=one+two;
    return three.toString();
};



// 151 reverse word in string

var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(" ");
  };

  console.log(reverseWords( "the sky is blue"));
  console.log(reverseWords( "  hello world  "));
  console.log(reverseWords("a good   example"));
  
