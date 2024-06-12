// Remove duplicates from Sorted array.
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once. The relative order of the elements should be kept
// the same. Then return the number of unique elements in nums.

// input; [1,1,2] ----> output ; 2 [1, 2,....]

const removeDuplicates = (nums) => {
    if(nums.length === 0) return 0;
    let i = 0;
    for(let j=0; j<nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j]
        }
    }
    return i + 1;
}
console.log(removeDuplicates([1,1,2]));