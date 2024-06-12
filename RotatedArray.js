// Rotate array by K
// Given an integer array nums, rotate the array to the right by k steps, 
// Where k is non-negative.

// Input: nums = [1,2,3,4,5,6,7], k=3 --->>>> Output: [5,6,7,1,2,3,4]

const rotatedArr = (nums, k) => {
    let size = nums.length;
    if(size > k){
        k = k % size;
    }
    reverse(nums, 0, nums.length - 1);  
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length - 1);

    return nums;
}
const reverse = (nums, left, right) => {
    while(left < right){
        const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp
    }
}
console.log(rotatedArr([1,2,3,4,5,6,7], 3));