class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function convertBST(root: TreeNode | null): TreeNode | null {
  let num: number = 0;
  const dfs = (root: TreeNode) => {
    if (root) {
      dfs(root.right);
      root.val = root.val + num;
      num = root.val;
      dfs(root.left);
      return root;
    }
    return null;
  };
  return dfs(root);
}
