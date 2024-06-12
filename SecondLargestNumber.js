// Given an array of size N, print second largest
// distinct element from an array

// Input: [12,35,1,10,34,1] ------> Output: 34
// Input: [10,5,10] ------> Output: 5

const secondLargest = (arr) => {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i]
        } else if(arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
console.log(secondLargest([12,35,1,10,33,34,1, 36]));