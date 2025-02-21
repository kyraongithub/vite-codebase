import eslintRecommended from "eslint/conf/eslint-recommended";
import airbnb from "eslint-config-airbnb";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextRecommended from "eslint-plugin-next/configs/recommended";
import importErrors from "eslint-plugin-import/config/errors";
import importWarnings from "eslint-plugin-import/config/warnings";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import sonarjsPlugin from "eslint-plugin-sonarjs";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
        jest: true,
        node: true,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      "import/resolver": {
        node: {
          paths: ["src"],
        },
        alias: {
          map: [
            ["@/components", "./src/components"],
            ["@/constants", "./src/constants"],
            ["@/context", "./src/context"],
            ["@/hooks", "./src/hooks"],
            ["@/app", "./src/app"],
            ["@/services", "./src/services"],
            ["@/utils", "./src/utils"],
          ],
          extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        },
      },
    },
    plugins: {
      react: reactPlugin,
      sonarjs: sonarjsPlugin,
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      ...eslintRecommended.rules,
      ...airbnb.rules,
      ...nextCoreWebVitals.rules,
      ...nextRecommended.rules,
      ...importErrors.rules,
      ...importWarnings.rules,
      ...prettier.rules,
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "linebreak-style": 0,
      "max-lines": [
        "error",
        { max: 300, skipBlankLines: true, skipComments: true },
      ],
      "react/jsx-filename-extension": [
        2,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
      "react/jsx-props-no-spreading": 0,
      "react/prop-types": 0,
      "react/function-component-definition": [
        "error",
        { namedComponents: ["function-declaration", "arrow-function"] },
      ],
      "react/no-unstable-nested-components": ["off"],
      "react/require-default-props": [0],
      "sonarjs/cognitive-complexity": 2,
      "sonarjs/no-duplicate-string": 2,
      "sonarjs/no-extra-arguments": 2,
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^@?\\w", "^\\u0000"],
            ["^@/components"],
            ["^@/hooks", "^@/context"],
            ["^@/services"],
            ["^@/utils", "^@/constants"],
            [
              "^\\./?$",
              "^\\.(?!/?$)",
              "^\\.\\./?$",
              "^\\.\\.(?!/?$)",
              "^\\.\\./\\.\\./?$",
              "^\\.\\./\\.\\.(?!/?$)",
              "^\\.\\./\\.\\./\\.\\./?$",
              "^\\.\\./\\.\\./\\.\\.(?!/?$)",
            ],
            ["\\.s?css$"],
          ],
        },
      ],
    },
  },
];
