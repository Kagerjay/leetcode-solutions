/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let ans = [];
  let exitLoop = false;
  
  for(let i = 0; i<nums.length; i++){
    for(let j = i+1; j<nums.length; j++){
      if(nums[i]+nums[j] == target){
        ans.push(i);
        ans.push(j);
        exitLoop = true;
      }
      if(exitLoop){break;}
    }
    if(exitLoop){break;}
  }
  return ans;
};

twoSum([3,2,4],6);
