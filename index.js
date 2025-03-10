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
  


  //69. Sqrt(x)


  var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};


console.log(mySqrt(4)); 
console.log(mySqrt(8));


// 412 FizzBuzz

var fizzBuzz = function (n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push("FizzBuzz");
        } else if (i % 3 == 0) {
            result.push("Fizz");
        } else if (i % 5 == 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
};

console.log(fizzBuzz(3));


// 242  valid anagram

var isAnagram = function(s, t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));


//  1523. Count Odd Numbers in an Interval Range 


var countOdds = function(low, high) {
    return Math.floor((high + 1) / 2) - Math.floor(low / 2);
};

console.log(countOdds(3, 7));
console.log(countOdds(8, 10));