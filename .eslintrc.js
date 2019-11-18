module.exports = {
  root: true,
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: [
    "react-hooks"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
