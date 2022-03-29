function searchMatrix(matrix: number[][], target: number): boolean {
    let rowl: number = 0;
    let rowr: number = matrix.length - 1;
    while(rowl < rowr) { // 先找到 满足第一个元素最大的 且小于等于target的数组
        const mid: number = Math.floor((rowl + rowr + 1) / 2);
        if(matrix[mid][0] <= target) {
            rowl = mid;
        }else {
            rowr = mid - 1;
        }
    }
    let row: number[] = matrix[rowr];

    let left: number = 0;
    let right: number = matrix[0].length - 1;
    let ans = false
    while(left <= right) {
        const mid: number = Math.floor((left + right) / 2);
        if(row[mid] === target) {
            ans = true;
            break;
        }else if(row[mid] < target) {
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return ans;
};