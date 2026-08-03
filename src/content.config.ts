import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const libros = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/libros' }),
  schema: z.object({
    title: z.string(),
    year: z.number().optional(),
    publisher: z.string().optional(),
    synopsis: z.string(),
    cover: z.string(),
    featured: z.boolean().optional(),
    pressQuotes: z
      .array(z.object({ quote: z.string(), author: z.string(), source: z.string() }))
      .optional(),
    translatedTo: z.array(z.string()).optional(),
    awards: z.array(z.string()).optional(),
  }),
});

const conferencias = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/conferencias' }),
  schema: z.object({
    title: z.string(),
    university: z.string(),
    city: z.string(),
    country: z.string(),
    month: z.string().optional(),
    year: z.number(),
  }),
});

const premios = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/premios' }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    year: z.number(),
    description: z.string().optional(),
    relatedBook: z.string().optional(),
  }),
});

const multimedia = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/multimedia' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['podcast', 'video', 'article']),
    source: z.string(),
    url: z.string().url(),
    date: z.string().optional(),
    description: z.string().optional(),
  }),
});

const bio = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/bio' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { libros, conferencias, premios, multimedia, bio };
