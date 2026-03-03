import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin';


export default defineConfig([
    { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser },

        plugins: {
            '@stylistic': stylistic
        },
        rules: {
            "prefer-const": "warn",
            eqeqeq: "error",
            "@stylistic/semi": "error",
            "@stylistic/indent": "error",
            "@stylistic/lines-around-comment": "error",
            "@stylistic/block-spacing": "error",
            "@stylistic/brace-style": "error",
            "no-return-await" :"error",
            "no-setter-return" : "error",
            "no-self-assign" : "error"
        }
    },

]);
