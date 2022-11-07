var containsDuplicate = function(nums) {
    let existingNums = []
    for(const num of nums){
         
        if(existingNums.includes(num)) return true
        existingNums.push(num)
       
    }
    
    return false
};