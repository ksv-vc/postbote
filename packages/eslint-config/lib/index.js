module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["turbo"],
  plugins: ["import", "jsx-a11y"],
  rules: {
    "no-console": "error",
    "import/no-anonymous-default-export": "off",
  },
};
