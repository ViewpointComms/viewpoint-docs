export const SITE = {
	title: 'Viewpoint Docs',
	description: 'Documentation and User Guides for Viewpoint. The content matchmaker.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/content/OGImg.png?raw=true',
		alt:
			'Viewpoint - Documenation, ' +
			'Viewpoint. The content matchmaker',
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
	indexName: 'viewpointcomms',
	appId: 'R3QYTVAONG',
	apiKey: 'a3cc3d255aa6f67baa8175f9bd27be3f'
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Introduction': [
			{ text: 'Introduction', link: 'en/introduction/welcome' },
			{ text: 'What is Viewpoint', link: 'en/introduction/what-is-it' },
			{ text: 'How does it work', link: 'en/introduction/how-it-works' },
		],
		'Adding Content': [
			{ text: 'Create', link: 'en/content/create' },
			{ text: 'Curate', link: 'en/content/curate' },
			{ text: 'Aggregate', link: 'en/content/aggregate' },
			{ text: 'Tagging', link: 'en/content/tagging' },
			{ text: 'Scheduling', link: 'en/content/scheduling' },
			{ text: 'Approving', link: 'en/content/approval' }
		],
		'Subscribers': [
			{ text: 'Homepage', link: 'en/subscribers/homepage' },
			{ text: 'Preference Center', link: 'en/subscribers/preferences' },
			{ text: 'Your Profile', link: 'en/subscribers/profile' }
		],
	//	'Leads': [
	//		{ text: 'Create', link: 'en/leads-create' },
	//		{ text: 'Claiming', link: 'en/leads-claim' }
	//	],
		'System Settings': [
			{ text: 'Adding Users', link: 'en/system-settings/add-user' },
			{ text: 'User Permissions', link: 'en/system-settings/permissions' },
			{ text: 'Domain Restrictions', link: 'en/system-settings/domains' },
		],
	},
};
