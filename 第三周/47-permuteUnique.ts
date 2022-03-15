
function permuteUnique(nums: number[]): number[][] {
    nums.sort((a ,b) => a - b);
    const ans = [];
    const s = [];
    const used = [];
    const find = (index: number) => {
        if(index === nums.length){
            ans.push(s.slice())
            return;
        }
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === nums[i - 1] && !used[i - 1]){ // 保证相同元素的顺序不变就不会出现重复（nums[i]必须在nums[i - 1]使用过后才能选，也就是nums[i]始终排在nums[i-1]后面）
                continue;
            }
            if(!used[i]){
                s.push(nums[i]);
                used[i] = true;
                find(index + 1);
                s.pop();
                used[i] = false;
            }
        }
    }
    find(0);
    return ans;
};
