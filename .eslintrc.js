module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:prettier/recommended', // 여기에 아주 많은 내용이 담겨있는데 밑의 스샷참조
		'plugin:nuxt/recommended',
	],
	plugins: [],
	// add your custom rules here
	rules: {},
};