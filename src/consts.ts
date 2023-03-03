export const SITE = {
	title: 'Viewpoint Docs',
	description: 'Documentation and User Guides for Viewpoint. The content matchmaker.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner-minimal.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'viewpointcomms',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/tom-hirst/viewpoint-docs/tree/main`;

export const WEBSITE_URL = `https://www.viewpointcomms.com`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'viewpointdocs',
	appId: 'DDZS8F74DY',
	apiKey: '5692f681f6b6fa53988ed42b041f9c7a'
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Introduction': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'What is Viewpoint', link: 'en/introduction-what' },
			{ text: 'How does it work', link: 'en/introduction-how' },
		],
		'Content': [
			{ text: 'Create', link: 'en/content-create' },
			{ text: 'Curate', link: 'en/content-curate' },
			{ text: 'Aggregate', link: 'en/content-aggregate' },
			{ text: 'Tagging', link: 'en/content-tagging' },
			{ text: 'Scheduling', link: 'en/content-scheduling' },
			{ text: 'Approving', link: 'en/content-approval' }
		],
		'Leads': [
			{ text: 'Create', link: 'en/leads-create' }
		],
	},
};
