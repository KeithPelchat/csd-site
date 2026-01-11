import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true, // Set to false for preview mode
})

// Helper for generating image URLs from Sanity image objects
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Fetch all posts for listing page
export async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      author->{
        _id,
        name,
        image
      }
    }
  `)
}

// Fetch single post by slug
export async function getPost(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      body,
      author->{
        _id,
        name,
        image,
        bio
      },
      categories[]->{
        _id,
        title
      }
    }
  `, { slug })
}

// Fetch recent posts for sidebar/widgets
export async function getRecentPosts(limit: number = 5) {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage
    }
  `, { limit })
}

// Fetch posts by category
export async function getPostsByCategory(categorySlug: string) {
  return client.fetch(`
    *[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      author->{
        _id,
        name,
        image
      }
    }
  `, { categorySlug })
}

// Fetch all categories
export async function getCategories() {
  return client.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }
  `)
}

// Fetch all post slugs for static generation
export async function getAllPostSlugs() {
  return client.fetch(`
    *[_type == "post"].slug.current
  `)
}
