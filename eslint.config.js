// eslint.config.js

"use strict";

const eslintPluginExample = require("./eslint-plugin-example.js");

module.exports = [
    {
        files: ["**/*.js"],
        languageOptions: {
            sourceType: "module",
            ecmaVersion: 2021
        },
        plugins: {
            "example": eslintPluginExample
        },
        rules: {
            "example/enforce-foo-bar": "error"
        }
    }
];
