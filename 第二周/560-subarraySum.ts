function subarraySum(nums: number[], k: number): number {
    const hashMap = new Map();
    hashMap.set(0,1);

    let preSum = 0;
    let res = 0;
    nums.forEach(num => {
        preSum += num;

        if(hashMap.has(preSum - k)) {
            res += hashMap.get(preSum - k);
        }
        const val = hashMap.get(preSum);
        hashMap.set(preSum, val ? val + 1 : 1 );
    })
    return res;
};