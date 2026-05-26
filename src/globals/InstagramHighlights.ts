import type { GlobalConfig } from "payload";

export const InstagramHighlights: GlobalConfig = {
	slug: "instagram-highlights",
	label: "Instagram Highlights",
	fields: [
		{
			name: "title",
			type: "text",
			defaultValue: "Follow @micklas on Instagram",
			localized: true,
		},
		{
			name: "subtitle",
			type: "text",
			defaultValue: "Latest moments from my travels",
			localized: true,
		},
		{
			name: "posts",
			type: "array",
			maxRows: 9,
			labels: {
				singular: "Post",
				plural: "Posts",
			},
			fields: [
				{
					name: "image",
					type: "upload",
					relationTo: "media",
					required: true,
				},
				{
					name: "caption",
					type: "text",
					localized: true,
				},
				{
					name: "instagramUrl",
					type: "text",
					admin: {
						description: "Link to the original Instagram post (optional)",
					},
				},
			],
		},
	],
};
