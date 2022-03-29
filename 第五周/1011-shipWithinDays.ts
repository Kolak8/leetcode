function shipWithinDays(weights: number[], days: number): number {

    const canFinish = (weight: number): boolean => {
        let tot: number = 0;
        let day: number = 0;
        for(let i = 0; i < weights.length; i++) {
            if(tot + weights[i] <= weight) {
                tot += weights[i];
            }else {
                day++;
                tot = weights[i];
            }
            if(weights[i] > weight) {
                return false;
            }
        }
        if(tot <= weight) day++;
        return day <= days;
    }

    let left: number = 1;
    let right: number = 0;
    for(let i = 0; i < weights.length; i++) {
        right += weights[i];
    }
    
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        if(canFinish(mid)) {
            right = mid;
        }else {
            left = mid + 1;
        }
    }
    return right;
};