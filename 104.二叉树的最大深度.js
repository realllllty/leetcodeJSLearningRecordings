/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // 求当前节点的最大深度
    function dfs(node) {
        if (!node) {
            return 0;
        }
        return Math.max(dfs(node.left), dfs(node.right)) + 1;
    }
    return dfs(root);
};
// @lc code=end

