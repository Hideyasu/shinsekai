const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		iconsPlugin({
			collections: getIconCollections(['heroIcons', 'lucide'])
		})
	]
};
