/**
 Do not return anything, modify board in-place instead.
 */

 function solve(board: string[][]): void {
    if(board === null || board.length === 0){
        return;
    }
    const row: number = board.length;
    const col: number = board[0].length;

    const dfs: (board: string[][], i: number, j: number) => void = (board: string[][], i: number, j: number):void => {
        if(i < 0 || j < 0 || i >= row || j >= col || board[i][j] !== 'O'){
            return;
        }
        board[i][j] = '-';
        dfs(board, i - 1, j);
        dfs(board, i + 1, j);
        dfs(board, i, j - 1);
        dfs(board, i, j + 1);
        return;
    }

    for(let i = 0; i < row; i++){
        dfs(board, i, 0);
        dfs(board, i, col - 1);
    }

    for(let j = 0; j < col; j++){
        dfs(board, 0, j);
        dfs(board, row - 1, j);
    }

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(board[i][j] === 'O'){
                board[i][j] = 'X';
            }
            if(board[i][j] === '-'){
                board[i][j] = 'O';
            }
        }
    }
    return;
};