// Given an array of integers nums and integer target;
// return indices of the two numbers and that they add up to target.
// Input: nums = [2,7,11,15] target = 9 Output=[0, 1];

const twoSum = (nums, target) => {
    var obj = {};
    for(let i = 0; i<nums.length; i++){
        var n = nums[i];

        if(obj[target - n] >= 0){
            return [obj[target - n], i]
        } else {
            obj[n] = i
        }
    }
}
console.time("two sum");
console.log(twoSum([2,7,11,15], 18));
console.timeEnd("two sum");