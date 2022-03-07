function findShortestSubArray(nums: number[]): number {
    let tot = 0;
    let res = 1;
    const hashMap = new Map()
    for(let i = 0; i < nums.length; i++){
        const {val, start} = hashMap.get(nums[i]) || {}
        if(val){
            hashMap.set(nums[i], {val: val + 1, start});
        }else {
            hashMap.set(nums[i], {val: 1, start: i});
        }
        if(val + 1 > tot) {
            tot = val + 1;
            res = i - start + 1;
        }else if(val + 1 === tot && res > (i - start + 1)){ // 要找最小长度的子数组
            res = i - start + 1;
        }
    }
    return res;
};