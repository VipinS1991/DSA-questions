// An integer is a palindrome when it reads the sum forward and backward.
// Input x=121 Output: true
// Input x=20 Output: false

const isPalindrome = (x) => {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}
const res = isPalindrome(10);
console.log(res)