import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import myEslintConfig from "./rules/eslint";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  eslintConfigPrettier,
  { rules: myEslintConfig },
]

export default eslintConfig
export { myEslintConfig }
