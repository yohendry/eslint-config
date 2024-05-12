import { Linter } from "eslint"

const rules: Linter.RulesRecord = {
  semi: ["error", "never"],
  "prefer-const": "error",
  "array-callback-return": "error",
  "no-console": ["error", { allow: ["warn", "error"] }],
};

export default rules;
