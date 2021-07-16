// alert('working!')

// function checkPalindrome(word){
//    return word == word.split('').reverse().join('')
// //  return word.split(' ').reverse().join()
// } console.log(checkPalindrome('madam'))
// console.log(checkPalindrome('leonnoel'))
// console.log(checkPalindrome('sami'))

// var twoSum = function(nums, target) {
//     for(let i = 0; i <= nums.length; i++){
//         for(let j = 0; j <= nums.length; j++){
//             if(nums[i] + nums[j] == target){
//                 return [i, j]
//             }
//         }
//     }
// }; console.log(twoSum([3,2,4], (6)))
                         
                           // Day 01 
// reverse a string 
    function reverseString(str){
        // let strArr = str.split('')
        // let reverseStrArray = strArr.reverse()
        // let reversedString = reverseStrArray.join('')
        
        // return reversedString

        // return str.split("").reverse().join("")

        let final = ''
        for(let i=str.length - 1; i>= 0; i--){
            final += str[i]
        }
        return final
    }
    console.log(reverseString('Hello'))