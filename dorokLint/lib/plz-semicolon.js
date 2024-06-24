const plzSemicolon = {
  meta: {
    type: 'layout',
    docs: {
      description: "Require semicolons at the end of statements",
      category: "Stylistic Issues",
      recommended: true,
    },
    fixable: "code",
    schema: [], // 옵션이 없는 경우 빈 배열
    messages: {
      missingSemicolon: "세미콜론 입력 하도록"
    }
  },
  create(context) {
    return {
      ExpressionStatement(node) {
        const sourceCode = context.getSourceCode();
        const lastToken = sourceCode.getLastToken(node);

        if (lastToken.value !== ";") {
          context.report({
            node,
            messageId: "missingSemicolon",
            fix(fixer) {
              return fixer.insertTextAfter(lastToken, ";");
            }
          });
        }
      }
    }
  }
}

export default plzSemicolon;
