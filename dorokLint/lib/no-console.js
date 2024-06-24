const noConsole = {
  meta: {
    type: "problem",
    docs: {
      description: "디버깅을 했으면 좋겠어,,,",
      category: "Best Practices",
      recommended: true,
    },
    schema: [], // 옵션이 없는 경우 빈 배열
    messages: {
      unexpected: "콘솔로그 지우도록."
    }
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.object &&
          node.callee.object.name === "console" &&
          node.callee.property &&
          node.callee.property.name === "log"
        ) {
          context.report({
            node,
            messageId: "unexpected"
          });
        }
      }
    };
  }
};

export default noConsole;
