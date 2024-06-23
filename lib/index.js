// enforce-foo-bar.js
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Ensure that a variable named `foo` can only be assigned a value of 'bar'.",
    },
    fixable: "code",
    schema: []
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (node.parent.kind === "const" && node.id.name === "foo") {
          if (node.init && node.init.type === "Literal" && node.init.value !== "bar") {
            context.report({
              node,
              message: 'Value other than "bar" assigned to `const foo`. Unexpected value: {{ notBar }}.',
              data: {
                notBar: node.init.value
              },
              fix(fixer) {
                return fixer.replaceText(node.init, '"bar"');
              }
            });
          }
        }
      }
    };
  }
};
