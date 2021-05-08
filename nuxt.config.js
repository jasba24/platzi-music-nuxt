export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "platzi-music-nuxt",
		htmlAttrs: {
			lang: "en"
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" }
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["~/assets/css/main.css", "~/assets/css/main.scss"],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: ["~/plugins/filters.js", "~/plugins/blur.js"],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ["nuxt-i18n"],

	i18n: {
		locales: ["en", "es"],
		defaultLocale: "en",
		vueI18n: {
			fallbackLocale: "en",
			messages: {
				en: {
					search: "Search",
					about: "About",
					input: "Search songs",
					find: "Found"
				},
				es: {
					search: "Buscar",
					about: "Nosotros",
					input: "Buscar canciones",
					find: "Encontrados"
				}
			}
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
};
