module.exports =  {
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    plugins: [
        "react",
        "jest"
    ],
    parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    rules:  {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        "max-len": ["error", { "code": 120 }],
        "quotes": ["error", "double"],
        "no-unused-vars": "warn",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/typedef": ["error", { "arrowParameter": true, "variableDeclarationIgnoreFunction": true }],
        "import/order": ["warn", {
            "alphabetize": {
                "order": "asc"
            },
            "newlines-between": "always"
        }],
        "prettier/prettier": "warn",
        "react/display-name": "off",
        "react/prop-types": "off", // Already using TypeScript to check Prop Types.
    },
    env: {
        browser: true,
        es6: true,
        "jest/globals": true
    },
    settings: {
        react: {
            version: "latest"
        }
    },
    "ignorePatterns": [
        "**/*.css",
        "**/*.png",
        "**/*.jpg",
        "**/*.svg",
        "**/*.gif",
        "**/*.ttf",
        "src/serviceWorker.ts",
        "node_modules/"
    ],
};
