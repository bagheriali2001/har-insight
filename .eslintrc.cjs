module.exports = {
	root: true,
	extends: ["@nuxt/eslint-config"],
	rules: {
		"indent": ["error", "tab"],
		"vue/html-indent": ["error", "tab"],
		"vue/script-indent": ["error", "tab"],
		"vue/require-default-prop": "off",
		"vue/require-explicit-emits": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"no-undef": "off",
	}
};