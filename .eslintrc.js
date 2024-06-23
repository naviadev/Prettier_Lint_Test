module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    node: true,
  },
  extends: [],
  plugins: [
    'whisperlint'
  ],
  rules: {
    'whisperlint/my-custom-rule': 'error'
  }
};
