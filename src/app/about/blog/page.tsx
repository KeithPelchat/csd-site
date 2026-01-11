import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { getPosts, getRecentPosts, urlFor } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Blog | Clean Site Dumpsters - Tips & Guides',
  description: 'Expert tips, guides, and updates about dumpster rental, junk removal, and waste management in Nashville and Middle Tennessee.',
  openGraph: {
    title: 'Blog | Clean Site Dumpsters',
    description: 'Expert tips and guides for dumpster rental and waste management',
  },
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: any
  publishedAt: string
  excerpt?: string
  author?: {
    _id: string
    name: string
    image?: any
  }
}

export default async function BlogPage() {
  const [posts, recentPosts] = await Promise.all([
    getPosts(),
    getRecentPosts(5),
  ])

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black py-20 md:py-28">
        <Container>
          <div className="text-center">
            <h1 className="font-heading font-bold uppercase tracking-wide text-5xl md:text-6xl text-white mb-6">
              NEWS
            </h1>
            <p className="font-body text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Tips, Guides, and Updates from Clean Site Dumpsters
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Blog Posts - Main Column */}
            <main className="lg:col-span-2">
              {posts && posts.length > 0 ? (
                posts.map((post: Post) => (
                  <article key={post._id} className="mb-12">
                    {post.mainImage && (
                      <Link href={`/about/blog/${post.slug.current}`}>
                        <Image
                          src={urlFor(post.mainImage).width(800).height(500).url()}
                          alt={post.title}
                          width={800}
                          height={500}
                          className="w-full h-64 object-cover rounded-lg mb-4 hover:opacity-90 transition-opacity"
                        />
                      </Link>
                    )}
                    <h2 className="font-heading font-bold uppercase tracking-wide text-2xl md:text-3xl text-[#D32F2F] mb-2">
                      <Link href={`/about/blog/${post.slug.current}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="font-body text-sm text-gray-600 mb-4">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                      {post.author?.name && ` | ${post.author.name}`}
                    </p>
                    {post.excerpt && (
                      <p className="font-body text-base leading-relaxed mb-4 text-gray-700">
                        {post.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/about/blog/${post.slug.current}`}
                      className="inline-block bg-black text-white font-heading font-semibold uppercase tracking-wide text-sm px-6 py-3 rounded hover:bg-gray-900 transition-colors"
                    >
                      READ MORE
                    </Link>
                  </article>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="font-body text-lg text-gray-600 mb-4">
                    No blog posts yet. Check back soon for tips and guides!
                  </p>
                </div>
              )}
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="font-heading font-semibold uppercase tracking-wide text-xl mb-4">
                  Recent Posts
                </h3>
                {recentPosts && recentPosts.length > 0 ? (
                  <ul className="space-y-4">
                    {recentPosts.map((post: Post) => (
                      <li key={post._id}>
                        <Link
                          href={`/about/blog/${post.slug.current}`}
                          className="font-body text-sm text-gray-700 hover:text-[#D32F2F] transition-colors"
                        >
                          {post.title}
                        </Link>
                        <p className="font-body text-xs text-gray-500 mt-1">
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-body text-sm text-gray-500">
                    No posts yet.
                  </p>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
