module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react", "react-hooks", "jsx-a11y", "import", "prettier"],
    extends: [
        "next/core-web-vitals",
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        project: "./tsconfig.json",
    },
    rules: {
        "prettier/prettier": "error",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
        "import/prefer-default-export": "off",
        "no-console": "warn",
        "no-unused-vars": "off",
        "react/prop-types": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "jsx-a11y/anchor-is-valid": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        //Custom Rules after this line!!
        "@typescript-eslint/lines-between-class-members": "off",
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/no-throw-literal": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            { "argsIgnorePattern": "^_", "caughtErrorsIgnorePattern": "^_" }
        ],
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};
