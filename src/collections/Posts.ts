import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
	slug: "posts",
	admin: {
		useAsTitle: "title",
		defaultColumns: ["title", "status", "publishDate", "locale"],
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			localized: true,
		},
		{
			name: "slug",
			type: "text",
			required: true,
			unique: true,
			admin: {
				description: 'URL-friendly identifier (e.g., "lofoten-islands-norway")',
			},
		},
		{
			name: "excerpt",
			type: "textarea",
			localized: true,
		},
		{
			name: "content",
			type: "richText",
			localized: true,
		},
		{
			name: "coverImage",
			type: "upload",
			relationTo: "media",
		},
		{
			name: "publishDate",
			type: "date",
			required: true,
		},
		{
			name: "status",
			type: "select",
			required: true,
			defaultValue: "draft",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Published", value: "published" },
			],
		},
	],
};
