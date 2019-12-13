module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: [
        "@nuxtjs",
        "plugin:nuxt/recommended",
        "plugin:vue/essential"
    ],
    // add your custom rules here
    rules: {
        "indent": ["error", 4],
        "nuxt/no-cjs-in-config": "off",
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "semi-spacing": "error",
        "semi-style": ["error", "last"],
        "vue/html-indent": ["error", 4],
    }
}
