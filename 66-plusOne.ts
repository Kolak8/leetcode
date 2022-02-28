function plusOne(digits: number[]): number[] {
    let tagNum = 1;
    for(let i = digits.length - 1; i >= 0; i --) {
        if(digits[i] === 9 && tagNum) {
            digits[i] = 0;
            tagNum = 1;
        }else {
            digits[i] = digits[i] + tagNum;
            tagNum = 0;
        }
    }
    if(tagNum) {
        digits.unshift(tagNum);
    }
    return digits;
};