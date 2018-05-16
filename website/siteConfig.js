// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
	{
		caption: 'UCF',
		// You will need to prepend the image path with your baseUrl
		// if it is not '/', like: '/test-site/img/docusaurus.svg'.
		image: '/img/obojobo_blue.svg',
		infoLink: 'https://www.ucf.edu',
		pinned: true
	}
]

const siteConfig = {
	title: 'Obojobo' /* title for your website */,
	tagline: 'Learning Objects, Reinvented',
	url: 'https://obojobo.ucf.edu/' /* your website url */,
	baseUrl: '/' /* base url for your project */,
	// For github.io type URLs, you would set the url and baseUrl like:
	//   url: 'https://facebook.github.io',
	//   baseUrl: '/test-site/',

	// Used for publishing and more
	projectName: 'Obojobo-Docs',
	organizationName: 'ucfcdl',
	// For top-level user or org sites, the organization is still the same.
	// e.g., for the https://JoelMarcey.github.io site, it would be set like...
	//   organizationName: 'JoelMarcey'

	// For no header links in the top nav bar -> headerLinks: [],
	headerLinks: [{ doc: 'obo_summary', label: 'Docs' }, { page: 'help', label: 'Help' }],

	// If you have users set above, you add it here:
	users,

	/* path to images for header/footer */
	headerIcon: 'img/obojobo_white.svg',
	footerIcon: 'img/obojobo_white.svg',
	favicon: 'img/favicon/favicon.ico',

	/* colors for website */
	colors: {
		primaryColor: '#145BAD',
		secondaryColor: '#8773B8'
	},

	/* custom fonts for website */
	/*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

	// This copyright info is used in /core/Footer.js and blog rss/atom feeds.
	copyright: 'Copyright © ' + new Date().getFullYear() + ' Obojobo',

	highlight: {
		// Highlight.js theme to use for syntax highlighting in code blocks
		theme: 'default'
	},

	// Add custom scripts here that would be placed in <script> tags
	scripts: ['https://buttons.github.io/buttons.js'],

	/* On page navigation for the current documentation page */
	onPageNav: 'separate'

	/* Open Graph and Twitter card images */
	// ogImage: 'img/docusaurus.png',
	// twitterImage: 'img/docusaurus.png'

	// You may provide arbitrary config keys to be used as needed by your
	// template. For example, if you need your repo's URL...
	//   repoUrl: 'https://github.com/facebook/test-site',
}

module.exports = siteConfig
