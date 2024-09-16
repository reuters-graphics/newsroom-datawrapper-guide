// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


/**
 * Add items to this array to add pages to the docs sidebar.
 */
const SIDEBAR = [
	{
		label: 'Getting started',
		items: [
			{ label: 'Setting up your account', slug: 'getting-started/setup' },
			{ label: 'Making your first chart', slug: 'getting-started/making-your-first-chart' },
			{ label: 'Publishing your chart', slug: 'getting-started/publishing' },
			{ label: 'Adding your chart to a story', slug: 'getting-started/getting-charts-in-stories' },
		],
	},
	{
		label: 'Next steps',
		slug: 'next-steps',
	},
	{
		label: 'Advanced tutorials',
		slug: 'tutorials'
	},
	{
		label: 'FAQ',
		slug: 'faq'
	},
	{
		label: 'Contributing',
		slug: 'contributing',
	},
];


export default defineConfig({
	// outDir: './docs',
	site: 'https://reuters-graphics.github.io',
  base: 'newsroom-datawrapper-guide',
	integrations: [
		starlight({
			title: 'Reuters Graphics newsroom Datawrapper guide',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
				replacesTitle: true,
			},
			customCss: ['./src/styles/main.css'],
			editLink: {
				baseUrl: 'https://github.com/withastro/starlight/edit/main/',
			},
			favicon: '/newsroom-datawrapper-guide/favicon.ico',
			social: {
				github: 'https://github.com/reuters-graphics/newsroom-datawrapper-guide',
			},
			sidebar: SIDEBAR,
		}),
	],
});
