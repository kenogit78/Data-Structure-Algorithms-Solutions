//brute force approach

function mergeSortedArray(nums1, m, nums2, n) {

// merging two arrays
  for (let l = m; l < m + n; l++) {
    nums1[l] = nums2[l - m];
  }
  
  //sorting it
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[i] < nums1[j]) {
        let temp = nums1[i];
        nums1[i] = nums1[j];
        nums1[j] = temp;
      }
    }
  }
  return nums1;
}


//best approach
function mergeSortedArray(nums1, m, nums2, n) {
    var x = 0,
          y = 0;
      
      nums1.splice(m, nums1.length);
      nums2.splice(n, nums2.length);
      console.log(nums1)
      console.log(nums2)
      while(y < n){
          if(nums2[y] < nums1[x] || nums1[x] === undefined){
              nums1.splice(x, 0, nums2[y]);
              x++;
              y++;    
          } else {
              x++;
          }
      }
  };