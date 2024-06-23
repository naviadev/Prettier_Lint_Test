module.exports = {
  rules: {
    'no-console': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow the use of console',
          category: 'Best Practices',
          recommended: true,
          url: 'https://eslint.org/docs/rules/no-console'
        },
        schema: [],
        messages: {
          unexpected: 'Unexpected console statement.'
        }
      },
      create: function (context) {
        return {
          CallExpression(node) {
            if (node.callee.type === 'MemberExpression' &&
                node.callee.object.name === 'console') {
              context.report({
                node,
                messageId: 'unexpected'
              });
            }
          }
        };
      }
    }
  }
};
