var maxSubArray = function(nums) {
    let maxEndingHere = nums[0];
   let maxSoFar = nums[0]
   
   for(let i=1; i<nums.length; i++){
       const num = nums[i];
       maxEndingHere = Math.max(num, num + maxEndingHere);
       maxSoFar = Math.max(maxSoFar, maxEndingHere)
       
   }
   console.log(maxSoFar)
   return maxSoFar
};