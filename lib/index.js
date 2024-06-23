module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Ensure that console is not used',
      category: 'Best Practices',
      recommended: true
    },
    fixable: 'code',
    schema: []
  },
  create: function(context) {
    return {
      CallExpression(node) {
        if (node.callee && node.callee.type === 'MemberExpression' && node.callee.object.name === 'console') {
          context.report({
            node: node,
            message: 'Unexpected use of console'
          });
        }
      }
    };
  }
};
