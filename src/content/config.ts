import { defineCollection, z } from "astro:content";

const organizations = defineCollection({
  type: "content",
  schema: z.object({
    organization: z.string(),
    recipient: z.string().optional(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zipcode: z.string(),
    subject: z.string(),
    greeting: z.string().default("Dear Hiring Committee,"),
    closing: z.string().default("Sincerely,"),
    date: z.coerce.date(),
  }),
});

export const collections = { organizations };
