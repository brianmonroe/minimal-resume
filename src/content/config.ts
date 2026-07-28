import { defineCollection, z } from "astro:content";

const organizations = defineCollection({
  type: "content",
  schema: z.object({
    organization: z.string(),
    question: z.string().optional(),
  }),
});

export const collections = { organizations };
