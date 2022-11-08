var intersect = function(nums1, nums2) {
    nums1.sort((a,b) => a-b);
      nums2.sort((a,b) => a-b);
      
      var p1 =0
      var p2 =0
      
      var res = [];
      
      while(p1 < nums1.length && p2 < nums2.length) {
          if(nums1[p1] == nums2[p2]) {
              res.push(nums1[p1]);
              p1++;
              p2++;
          } else if(nums1[p1] > nums2[p2]) {
              p2++;
          } else {
              p1++;
          }
      }
      return res;
  };