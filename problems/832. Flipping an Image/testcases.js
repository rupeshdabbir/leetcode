var ListNode = require('../../structures/ListNode');
var buildTree = require('../../structures/TreeNode');

module.exports = [
  {
    input: [[[1,1,0],[1,0,1],[0,0,0]]],
    output: [[1,0,0],[0,1,0],[1,1,1]]
  },
   {
    input:[[[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]],
    output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
  },
];