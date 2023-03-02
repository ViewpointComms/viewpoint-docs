export const SITE = {
	title: 'Documentation',
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

export const GITHUB_EDIT_URL = `https://github.com/ViewpointComms/viewpoint-docs/tree/main/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'Viewpoint Documentation',
	appId: 'DDZS8F74DY',
	apiKey: '5692f681f6b6fa53988ed42b041f9c7a',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Introduction': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'What is Viewpoint', link: 'en/what-is-viewpoint' },
			{ text: 'How does it work', link: 'en/how-does-it-work' },
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
	},
};
