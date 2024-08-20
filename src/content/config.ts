import { defineCollection, z } from "astro:content";

const servicesCollection = defineCollection({
	type: "data",
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			time: z.string(),
			price: z.string(),
			includes: z.string(),
		}),
});

const bundlesCollection = defineCollection({
	type: "data",
	schema: () =>
		z.object({
			name: z.string(),
			time: z.string(),
			price: z.string(),
			includes: z.string(),
		}),
});

const subscriptionsCollection = defineCollection({
	type: "data",
	schema: () =>
		z.object({
			id: z.number(),
			name: z.string(),
			price: z.string(),
			includes: z.array(z.string()),
			description: z.array(z.string()),
		}),
});

const worksCollection = defineCollection({
	type: "data",
	schema: ({ image }) =>
		z.object({
			id: z.number(),
			name: z.string(),
			category: z.string(),
			image: image(),
		}),
});

export const collections = {
	services: servicesCollection,
	bundles: bundlesCollection,
	subscriptions: subscriptionsCollection,
	works: worksCollection,
};
