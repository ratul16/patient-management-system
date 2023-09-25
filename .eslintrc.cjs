/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,

  rules: {
    "max-len": "100",
    "no-inline-comments": "off",
    "linebreak-style": "off",
    camelcase: [
      "error",
      { properties: "never", ignoreDestructuring: true, ignoreImports: true },
    ],
    "arrow-parens": ["error", "as-needed"],
    "vue/multiline-html-element-content-newline": "off",
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
};

